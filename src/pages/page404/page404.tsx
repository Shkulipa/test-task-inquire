import React, { FC } from 'react';

//images:
import img404 from './../../assets/images/error-404-design.png';

//react-router-dom:
import { useHistory } from 'react-router-dom';

//material-ui:
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link from '@material-ui/core/Link';

//styles:
const useStyles = makeStyles({
	errorBlock: {
		height: '100vh',
	},
	block: {
		marginTop: 15,
	},
});

const Error404: FC = () => {
	const classes = useStyles();
	const history = useHistory();

	const goHome = () => history.push('/');

	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			direction="column"
			className={classes.errorBlock}
		>
			<Grid item>
				<img src={img404} alt="404" />
			</Grid>
			<Grid item>
				<Alert severity="error">Sorry, this page not found :(</Alert>
			</Grid>
			<Grid item className={classes.block}>
				Go{' '}
				<Link
					color="primary"
					href="#"
					underline="always"
					onClick={goHome}
				>
					Home
				</Link>
				?
			</Grid>
		</Grid>
	);
};

export default Error404;
