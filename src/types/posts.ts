interface commentType {
	id: number;
	postId: number;
	body: string;
}

export interface PostType {
	id: number;
	title: string;
	body: string;
	comments: commentType[];
}

export interface PostState {
	posts: PostType[];
	loading: boolean;
	error: boolean;
	isFirstFetch: boolean;
}

export enum PostsActionTypes {
	FETCH_POSTS = 'FETCH_POSTS',
	FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
	FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
	RESET_FIRST_FETCH = 'RESET_FIRST_FETCH',
}

interface FetchPosts {
	type: PostsActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccess {
	type: PostsActionTypes.FETCH_POSTS_SUCCESS;
	payload: PostType[];
}

interface resetFirstFetch {
	type: PostsActionTypes.RESET_FIRST_FETCH;
}

interface FetchPostsError {
	type: PostsActionTypes.FETCH_POSTS_ERROR;
	payload: any;
}

export type PostAction =
	| FetchPosts
	| FetchPostsSuccess
	| FetchPostsError
	| resetFirstFetch;
