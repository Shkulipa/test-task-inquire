import React, { FC } from 'react';

//hooks
import { useTypedSelector } from '../../hooks/useTypedSelector';

//components
import CardPost from '../../components/cardPost/cardPost';
import LoaderSpinner from '../../components/loaderSpinner/loaderSpinner';

const Home: FC = () => {
	const { posts, loading, error } = useTypedSelector(state => state.posts);

	if (error) {
		return <div>Something going wrong, please try later :(</div>;
	}

	if (loading) {
		return <LoaderSpinner />;
	}

	return (
		<>
			{posts.map(({ id, title, body }, index) => (
				<CardPost
					key={id}
					index={index + 1}
					id={id}
					title={title}
					body={body}
				/>
			))}
		</>
	);
};

export default Home;
