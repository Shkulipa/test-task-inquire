import React, { FC, useState } from 'react';

//components
import FormComponent from '../../components/formComponent/formComponent';

//types
import { HandlerFormData } from '../../types/formAddPutPost';
import { FormikHelpers } from 'formik';

//http
import { sendNewPostAPI } from '../../http/postsAPI';
import { Alert, AlertTitle } from '@material-ui/lab';

//styles
import { useStylesBase } from '../../assets/styles';

// redux
import { useDispatch } from 'react-redux';
import { resetFirstFetch } from '../../store/reducers/postsReducer';

const PostAddContainer: FC = () => {
	const dispatch = useDispatch();
	const classesBase = useStylesBase();
	const [showSuccessAddPost, setSuccessAddPost] = useState<boolean>(false);
	const [showErrorAddCPost, setErrorAddPost] = useState<boolean>(false);

	const handlerAddPost = (
		data: HandlerFormData,
		actions: FormikHelpers<HandlerFormData>
	) => {
		sendNewPostAPI(data)
			.then(() => {
				actions.setSubmitting(false);
				actions.resetForm({
					values: {
						title: '',
						body: '',
					},
				});
				actions.validateForm().then();
				setSuccessAddPost(true);
				setTimeout(() => setSuccessAddPost(false), 5e3);
				dispatch(resetFirstFetch());
			})
			.catch(err => {
				setErrorAddPost(true);
				console.error(err);
				setTimeout(() => setErrorAddPost(false), 5e3);
			});
	};

	return (
		<div>
			{showSuccessAddPost && (
				<Alert severity="success" className={classesBase.mb10}>
					<AlertTitle>Success</AlertTitle>
					Post success added — <strong>Please check it out :)</strong>
				</Alert>
			)}

			{showErrorAddCPost && (
				<Alert severity="error" className={classesBase.mb10}>
					<AlertTitle>Error</AlertTitle>
					Something going wrong — <strong>Please try later :(</strong>
				</Alert>
			)}
			<FormComponent
				handlerForm={handlerAddPost}
				textBtnSubmit="Add post"
			/>
		</div>
	);
};

export default PostAddContainer;
