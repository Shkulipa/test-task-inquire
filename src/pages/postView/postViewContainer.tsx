import React, { ChangeEvent, FC, useEffect, useState } from 'react';

//react-router-dom
import { useParams, useHistory } from 'react-router-dom';

//http
import { postIdAPI, sendCommentAPI } from '../../http/postsAPI';

//types
import { PostType } from '../../types/posts';

//components
import PostView from './postView';
import LoaderSpinner from '../../components/loaderSpinner/loaderSpinner';

const PostViewContainer: FC = () => {
	const history = useHistory();
	const { id } = useParams<{ id: string }>();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [dataPost, setDataPost] = useState<PostType>({
		id: 0,
		title: '',
		body: '',
		comments: [],
	});
	const [comment, setComment] = useState<string>('');
	const [showSuccessAddComment, setSuccessAddComment] =
		useState<boolean>(false);
	const [showErrorAddComment, setErrorAddComment] = useState<boolean>(false);

	const handleCommentField = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setComment(event.target.value);
	};

	const handleAddCommentBtn = () => {
		if (comment.length > 0) {
			sendCommentAPI(Number(id), comment)
				.then(() => {
					setSuccessAddComment(true);

					postIdAPI(id)
						.then(data => {
							setDataPost({
								...dataPost,
								comments: data.comments,
							});
						})
						.catch(err => {
							setErrorAddComment(true);
							console.error(err);
							setTimeout(() => setErrorAddComment(false), 5e3);
						});

					setTimeout(() => setSuccessAddComment(false), 5e3);
				})
				.catch(err => {
					setSuccessAddComment(true);
					console.error(err);
					setTimeout(() => setErrorAddComment(false), 5e3);
				});

			setComment('');
		}
	};

	useEffect(() => {
		setIsLoading(true);
		postIdAPI(id)
			.then(data => {
				setIsLoading(false);
				console.log(data);
				setDataPost(data);
			})
			.catch(err => {
				setIsLoading(false);
				console.error(err);
				history.push('/home');
			});
	}, [id]);

	if (isLoading) {
		return <LoaderSpinner />;
	}

	return (
		<PostView
			dataPost={dataPost}
			handleCommentField={handleCommentField}
			comment={comment}
			handleAddCommentBtn={handleAddCommentBtn}
			showSuccessAddComment={showSuccessAddComment}
			showErrorAddComment={showErrorAddComment}
		/>
	);
};

export default PostViewContainer;
