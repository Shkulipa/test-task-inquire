import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
export function UiField(props: any): JSX.Element {
	const [field, { error, touched }] = useField(props);
	return (
		<TextField
			error={!!error}
			touched={touched.toString()}
			{...field}
			{...props}
		/>
	);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
export function UiTextarea(props: any): JSX.Element {
	const [field, { error, touched }] = useField(props);

	return (
		<TextField
			{...field}
			error={!!error}
			touched={touched.toString()}
			{...props}
		/>
	);
}
