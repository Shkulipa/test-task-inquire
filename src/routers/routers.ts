//components
import HomeContainer from '../pages/home/homeContainer';
import Page404 from '../pages/page404/page404';
import PostAddContainer from '../pages/postAdd/postAddContainer';
import PostEditContainer from '../pages/postEdit/postEditContainer';
import PostViewContainer from '../pages/postView/postViewContainer';

//const
import {
	INITIAL_ROUTE,
	HOME_ROUTE,
	NOT_FOUND_ROUTE,
	POST_EDIT_CONTAINER_ROUTE,
	POST_ADD_CONTAINER_ROUTE,
	POST_VIEW_CONTAINER_ROUTE,
} from '../utils/consts';

export const routers = [
	{
		path: INITIAL_ROUTE,
		Component: HomeContainer,
		isExact: true,
	},
	{
		path: HOME_ROUTE,
		Component: HomeContainer,
		isExact: true,
	},
	{
		path: POST_EDIT_CONTAINER_ROUTE,
		Component: PostEditContainer,
		isExact: true,
	},
	{
		path: POST_ADD_CONTAINER_ROUTE,
		Component: PostAddContainer,
		isExact: true,
	},
	{
		path: POST_VIEW_CONTAINER_ROUTE,
		Component: PostViewContainer,
		isExact: true,
	},
	{
		path: NOT_FOUND_ROUTE,
		Component: Page404,
		isExact: true,
	},
];
