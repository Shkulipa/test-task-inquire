import React, { FC, ChangeEvent } from 'react';

//material-ui
import { Button, Grid, TextField } from '@material-ui/core';
import { useStylesBase } from '../../assets/styles';
import { makeStyles } from '@material-ui/core/styles';

//components
import CardComment from '../../components/cardComment/CardComment';
import { Alert, AlertTitle } from '@material-ui/lab';

//types
import { PostType } from '../../types/posts';

interface PostViewProps {
	dataPost: PostType;
	comment: string;
	handleCommentField: (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	handleAddCommentBtn: () => void;
	showSuccessAddComment: boolean;
	showErrorAddComment: boolean;
}

//styles
const useStyles = makeStyles({
	field: {
		width: '100%',
		marginBottom: 15,
	},
	btn: {
		margin: '0 auto',
	},
});

const PostView: FC<PostViewProps> = ({
	dataPost,
	handleCommentField,
	comment,
	handleAddCommentBtn,
	showSuccessAddComment,
	showErrorAddComment,
}: PostViewProps) => {
	const classes = useStyles();
	const classesBase = useStylesBase();
	const { id, title, body, comments } = dataPost;

	return (
		<>
			{showSuccessAddComment && (
				<Alert severity="success">
					<AlertTitle>Success</AlertTitle>
					Comment success added —{' '}
					<strong>Please check it out :)</strong>
				</Alert>
			)}

			{showErrorAddComment && (
				<Alert severity="error">
					<AlertTitle>Error</AlertTitle>
					Something going wrong — <strong>Please try later :(</strong>
				</Alert>
			)}

			<p>ID in the Database: {id}</p>
			<p>Title: {title}</p>
			<p className={classesBase.mb50}>Description: {body}</p>

			<TextField
				className={classes.field}
				id="add-comment"
				label="Your Comment..."
				multiline
				rows={4}
				variant="outlined"
				value={comment}
				onChange={e => handleCommentField(e)}
			/>

			<Grid container item xs={12} justifyContent="center">
				<Button
					className={classesBase.mb50}
					variant="contained"
					color="primary"
					onClick={() => handleAddCommentBtn()}
				>
					Add Comment
				</Button>
			</Grid>

			{comments.map(({ id, body }, index) => (
				<CardComment key={id} body={body} index={index + 1} />
			))}
		</>
	);
};

export default PostView;
