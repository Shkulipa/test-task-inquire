import React, { FC } from 'react';

//components
import FormComponent from '../../components/formComponent/formComponent';

//material-ui
import { Alert, AlertTitle } from '@material-ui/lab';
import { Button, Grid, makeStyles, Modal } from '@material-ui/core';

//styles
import { useStylesBase } from '../../assets/styles';

//types
import { HandlerFormData } from '../../types/formAddPutPost';
import { FormikHelpers } from 'formik';
import { PostType } from '../../types/posts';

//styles
const useStyles = makeStyles(() => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: '#ffffff',
		border: '2px solid red',
		borderRadius: 12,
		boxShadow: '0 0 15px rgba(0,0,0, .4)',
		padding: 15,
		top: '50%',
		transform: 'translate(-50%, -50%)',
		left: '50%',
	},
}));

interface PostEditProps {
	showSuccessEditPost: boolean;
	showErrorEditPost: boolean;
	openModalDelPost: boolean;
	handlerAddPost: (
		data: HandlerFormData,
		actions: FormikHelpers<HandlerFormData>
	) => void;
	dataPost: PostType;
	setOpenModalDelPost: (val: boolean) => void;
	deletePost: () => void;
}

const PostEdit: FC<PostEditProps> = ({
	showSuccessEditPost,
	showErrorEditPost,
	handlerAddPost,
	dataPost,
	setOpenModalDelPost,
	openModalDelPost,
	deletePost,
}: PostEditProps) => {
	const classesBase = useStylesBase();
	const classes = useStyles();

	return (
		<div>
			{showSuccessEditPost && (
				<Alert severity="success" className={classesBase.mb10}>
					<AlertTitle>Success</AlertTitle>
					Post success edited —{' '}
					<strong>Please check it out :)</strong>
				</Alert>
			)}

			{showErrorEditPost && (
				<Alert severity="error" className={classesBase.mb10}>
					<AlertTitle>Error</AlertTitle>
					Something going wrong — <strong>Please try later :(</strong>
				</Alert>
			)}

			<FormComponent
				handlerForm={handlerAddPost}
				textBtnSubmit="Edit post"
				initialValueTitle={dataPost.title}
				initialValueBody={dataPost.body}
				checkDiffVal
			/>

			<Grid
				container
				item
				xs={12}
				justifyContent="center"
				className={classesBase.mt20}
			>
				<Button
					onClick={() => setOpenModalDelPost(true)}
					variant="contained"
					color="secondary"
				>
					Delete
				</Button>
			</Grid>

			<Modal
				open={openModalDelPost}
				onClose={() => setOpenModalDelPost(false)}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<div className={classes.paper}>
					<Grid
						container
						item
						justifyContent="center"
						className={classesBase.mb25}
					>
						Are you Sure ?
					</Grid>

					<Grid container justifyContent="space-evenly">
						<Grid container item justifyContent="center" xs={6}>
							<Button
								variant="contained"
								onClick={() => setOpenModalDelPost(false)}
							>
								Cancel
							</Button>
						</Grid>

						<Grid container item justifyContent="center" xs={6}>
							<Button
								onClick={deletePost}
								variant="contained"
								color="secondary"
							>
								Delete
							</Button>
						</Grid>
					</Grid>
				</div>
			</Modal>
		</div>
	);
};

export default PostEdit;
