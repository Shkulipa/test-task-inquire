import React, { FC, useEffect } from 'react';

//components
import Home from './home';

//http
import { postsAllAPI } from '../../http/postsAPI';

//redux
import { useDispatch } from 'react-redux';

//action-creators
import {
	fetchPosts,
	fetchPostsSuccess,
	fetchPostsError,
} from '../../store/reducers/postsReducer';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const HomeContainer: FC = () => {
	const { isFirstFetch } = useTypedSelector(state => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isFirstFetch) {
			dispatch(fetchPosts());
			postsAllAPI()
				.then(posts => dispatch(fetchPostsSuccess(posts)))
				.catch(err => {
					console.error(err);
					dispatch(fetchPostsError());
				});
		}
	}, []);

	return <Home />;
};

export default HomeContainer;
