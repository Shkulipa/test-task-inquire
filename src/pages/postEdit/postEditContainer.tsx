import React, { FC, useContext, useEffect, useState } from 'react';

//react-router-dom
import { useHistory, useParams } from 'react-router-dom';

//components
import PostEdit from './postEdit';
import LoaderSpinner from '../../components/loaderSpinner/loaderSpinner';

//http
import { postIdAPI, putPostAPI, deletePostAPI } from '../../http/postsAPI';

//types
import { HandlerFormData } from '../../types/formAddPutPost';
import { PostType } from '../../types/posts';
import { FormikHelpers } from 'formik';

//redux
import { useDispatch } from 'react-redux';
import { resetFirstFetch } from '../../store/reducers/postsReducer';

//context
import { ErrMsgContext } from '../../contexts/errMsg';

const PostEditContainer: FC = () => {
	const { setShowSuccessDelPost } = useContext(ErrMsgContext);
	const { id } = useParams<{ id: string }>();
	const history = useHistory();
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [dataPost, setDataPost] = useState<PostType>({
		id: 0,
		title: '',
		body: '',
		comments: [],
	});
	const [showSuccessEditPost, setSuccessEditPost] = useState<boolean>(false);
	const [showErrorEditPost, setErrorEditPost] = useState<boolean>(false);
	const [openModalDelPost, setOpenModalDelPost] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true);
		postIdAPI(id)
			.then(data => {
				setIsLoading(false);
				setDataPost(data);
			})
			.catch(err => {
				setIsLoading(false);
				console.error(err);
				history.push('/home');
			});
	}, [id]);

	const deletePost = () => {
		deletePostAPI(Number(id))
			.then(() => {
				dispatch(resetFirstFetch());
				setShowSuccessDelPost(true);
				setTimeout(() => setShowSuccessDelPost(false), 5e3);
				history.push('/home');
			})
			.catch(err => {
				console.error(err);
				setOpenModalDelPost(false);
				setErrorEditPost(true);
				setTimeout(() => setErrorEditPost(false), 5e3);
			});
	};

	const handlerAddPost = (
		data: HandlerFormData,
		actions: FormikHelpers<HandlerFormData>
	) => {
		putPostAPI(Number(id), data)
			.then(() => {
				actions.setSubmitting(false);
				actions.resetForm();
				setDataPost(state => ({
					...state,
					title: data.title,
					body: data.body,
				}));
				setSuccessEditPost(true);
				setTimeout(() => setSuccessEditPost(false), 5e3);
				dispatch(resetFirstFetch());
			})
			.catch(err => {
				setErrorEditPost(true);
				console.error(err);
				setTimeout(() => setErrorEditPost(false), 5e3);
			});
	};

	if (isLoading) {
		return <LoaderSpinner />;
	}

	return (
		<PostEdit
			showErrorEditPost={showErrorEditPost}
			showSuccessEditPost={showSuccessEditPost}
			dataPost={dataPost}
			handlerAddPost={handlerAddPost}
			deletePost={deletePost}
			openModalDelPost={openModalDelPost}
			setOpenModalDelPost={setOpenModalDelPost}
		/>
	);
};

export default PostEditContainer;
