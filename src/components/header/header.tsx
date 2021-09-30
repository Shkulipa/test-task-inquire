import React, { FC } from 'react';

//material-ui
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Grid } from '@material-ui/core';

//react-router-dom
import { NavLink, useLocation } from 'react-router-dom';

//styles
const useStyles = makeStyles({
	header: {
		marginBottom: 20,
	},
	link: {
		display: 'flex',
		alignItems: 'center',
	},
	addPost: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
});

const Header: FC = () => {
	const location = useLocation();
	const classes = useStyles();
	const isHome = location.pathname === '/home' || location.pathname === '/';
	const isAddPost = location.pathname === '/post/add';

	return (
		<Grid container className={classes.header}>
			{isHome ? null : (
				<Grid container item xs={6}>
					<NavLink to="/home" className={classes.link}>
						<ArrowBackIcon />
						Go Home
					</NavLink>
				</Grid>
			)}

			{isAddPost ? null : (
				<Grid
					container
					item
					xs={6}
					className={isHome ? '' : classes.addPost}
				>
					<NavLink to="/post/add" className={classes.link}>
						Add Post
					</NavLink>
				</Grid>
			)}
		</Grid>
	);
};

export default Header;
