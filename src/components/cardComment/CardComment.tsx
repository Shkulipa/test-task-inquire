import React, { FC } from 'react';

//material-ui
import { makeStyles } from '@material-ui/core/styles';

//types
interface CardCommentProps {
	index: number;
	body: string;
}

//styles
const useStyles = makeStyles({
	comment: {
		padding: 15,
		border: '2px solid rgba(0,0,0, .4)',
		borderRadius: 12,
		marginBottom: 15,
	},
});

const CardComment: FC<CardCommentProps> = ({
	body,
	index,
}: CardCommentProps) => {
	const classes = useStyles();

	return (
		<div className={classes.comment}>
			<p>#: {index}</p>
			<p>{body}</p>
		</div>
	);
};

export default CardComment;
