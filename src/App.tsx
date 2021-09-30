import React, { FC } from 'react';

//react-router-dom
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

//routers
import { routers } from './routers/routers';

//components
import Header from './components/header/header';

//material-ui
import Container from '@material-ui/core/Container';

//context
import ErrMsg from './contexts/errMsg';

const App: FC = () => {
	return (
		<Container maxWidth="md">
			<Router>
				<Header />
				<div>
					<ErrMsg>
						<Switch>
							{routers.map(({ path, Component, isExact }) => (
								<Route
									key={path}
									path={path}
									exact={isExact}
									component={Component}
								/>
							))}
						</Switch>
					</ErrMsg>
				</div>
			</Router>
		</Container>
	);
};

export default App;
