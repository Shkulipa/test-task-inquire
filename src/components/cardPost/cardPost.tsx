import React, { FC } from 'react';

//react-router-dom
import { useHistory } from 'react-router-dom';

//material-ui
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';

//utils
import shortString from '../../utils/shortString';

//types
interface CardPostProps {
	index: number;
	id: number;
	title: string;
	body: string;
}

//styles
const useStyles = makeStyles({
	post: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: 15,
		border: '2px solid rgba(0,0,0, .4)',
		borderRadius: 12,
		marginBottom: 15,
	},
	btn: {
		marginRight: 15,
	},
});

const CardPost: FC<CardPostProps> = ({
	id,
	index,
	title,
	body,
}: CardPostProps) => {
	const classes = useStyles();
	const history = useHistory();

	function editPost(id: number) {
		history.push(`/post/edit/${id}`);
	}

	function viewPost(id: number) {
		history.push(`/post/${id}`);
	}

	return (
		<>
			<div className={classes.post}>
				<Grid container>
					<Grid container item xs={6} alignItems="center">
						<p>#: {index}</p>
					</Grid>
					<Grid
						container
						item
						xs={6}
						alignItems="center"
						justifyContent="flex-end"
					>
						<Button
							onClick={() => editPost(id)}
							variant="contained"
							color="primary"
							className={classes.btn}
						>
							edit
						</Button>
						<Button
							onClick={() => viewPost(id)}
							variant="contained"
						>
							view
						</Button>
					</Grid>
				</Grid>
				<p>ID in the Database: {id}</p>
				<p>Title: {shortString(title, 50)}</p>
				<p>Description: {shortString(body, 125)}</p>
			</div>
		</>
	);
};

export default CardPost;
