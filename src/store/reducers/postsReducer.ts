//types
import {
	PostAction,
	PostsActionTypes,
	PostState,
	PostType,
} from '../../types/posts';

const initialState: PostState = {
	posts: [],
	loading: true,
	error: false,
	isFirstFetch: true,
};

export const postsReducer = (
	state = initialState,
	action: PostAction
): PostState => {
	switch (action.type) {
		case PostsActionTypes.FETCH_POSTS:
			return { ...state, loading: true, error: false, posts: [] };
		case PostsActionTypes.FETCH_POSTS_SUCCESS:
			return {
				loading: false,
				error: false,
				posts: action.payload,
				isFirstFetch: false,
			};
		case PostsActionTypes.FETCH_POSTS_ERROR:
			return { ...state, loading: false, error: true, posts: [] };
		case PostsActionTypes.RESET_FIRST_FETCH:
			return { ...state, isFirstFetch: true };
		default:
			return state;
	}
};

//Actions
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchPosts = () => ({
		type: PostsActionTypes.FETCH_POSTS,
	}),
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	fetchPostsSuccess = (payload: PostType[]) => ({
		type: PostsActionTypes.FETCH_POSTS_SUCCESS,
		payload,
	}),
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	fetchPostsError = () => ({
		type: PostsActionTypes.FETCH_POSTS_ERROR,
	}),
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	resetFirstFetch = () => ({
		type: PostsActionTypes.RESET_FIRST_FETCH,
	});
