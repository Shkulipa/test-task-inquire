//axios
import $host from './../http/axios';

//types
import { HandlerFormData } from '../types/formAddPutPost';

export const postIdAPI = async (id: string) => {
	return await $host.get(`posts/${id}?_embed=comments`).then(res => res.data);
};

export const postsAllAPI = async () => {
	return await $host.get(`posts`).then(res => res.data);
};

export const sendCommentAPI = async (postId: number, comment: string) => {
	const dataRaw = {
		postId,
		body: comment,
	};
	return await $host.post(`/comments`, dataRaw).then(res => res.data);
};

export const sendNewPostAPI = async (data: HandlerFormData) => {
	return await $host.post(`/posts`, data).then(res => res.data);
};

export const putPostAPI = async (id: number, data: HandlerFormData) => {
	return await $host.put(`/posts/${id}`, data).then(res => res.data);
};

export const deletePostAPI = async (id: number) => {
	return await $host.delete(`/posts/${id}`).then(res => res.data);
};
