import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

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
