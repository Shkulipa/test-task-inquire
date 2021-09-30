import React, { FC } from 'react';

//formik
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

//material-ui
import { Alert } from '@material-ui/lab';
import { Button, Grid } from '@material-ui/core';

//components
import {
	UiField,
	UiTextarea,
} from '../ui-and-formik-components/uiAndFormikComponents';

//types
import { FormComponentProps } from '../../types/formAddPutPost';

//styles
import { useStylesBase } from '../../assets/styles';

const FormComponent: FC<FormComponentProps> = ({
	handlerForm,
	textBtnSubmit,
	initialValueTitle,
	initialValueBody,
	checkDiffVal,
}: FormComponentProps) => {
	const classesBase = useStylesBase();

	const validateSchema = Yup.object().shape({
		title: Yup.string()
			.required('required filed')
			.test(
				'len',
				'Must be max 99 characters',
				val => !(!val || val.toString().length >= 99)
			),
		body: Yup.string()
			.required('required filed')
			.test(
				'len',
				'Must be max 255 characters',
				val => !(!val || val.toString().length >= 555)
			),
	});

	return (
		<Formik
			validationSchema={validateSchema}
			initialValues={{
				title: initialValueTitle ? initialValueTitle : '',
				body: initialValueBody ? initialValueBody : '',
			}}
			onSubmit={handlerForm}
			validateOnMount
			enableReinitialize
		>
			{({ errors, touched, values }) => {
				const countFillFields = Object.keys(errors).length;
				const includeErr = function (filed: string) {
					return Object.keys(errors).includes(filed);
				};
				const errTitles =
					(errors.title && touched.title) || includeErr('title');
				const errBody =
					(errors.body && touched.body) || includeErr('body');

				return (
					<Form>
						<Grid container direction="column" alignItems="center">
							<Grid
								className={`${classesBase.mb25} ${classesBase.w90}`}
								container
								item
								xs={6}
								direction="column"
								alignItems="center"
							>
								{errTitles ? (
									<Alert
										className={`${classesBase.mb10} ${classesBase.w90}`}
										severity="error"
									>
										{errors.title}
									</Alert>
								) : null}
								<UiField
									className={classesBase.w90}
									id="title"
									name="title"
									variant="outlined"
									label="Title*"
									placeholder="Your title..."
								/>
							</Grid>

							<Grid
								className={classesBase.mb25}
								container
								item
								xs={6}
								direction="column"
								alignItems="center"
							>
								{errBody ? (
									<Alert
										className={`${classesBase.mb10} ${classesBase.w90}`}
										severity="error"
									>
										{errors.body}
									</Alert>
								) : null}
								<UiTextarea
									className={classesBase.w90}
									id="body"
									name="body"
									label="Description*"
									multiline
									variant="outlined"
									placeholder="Your Description..."
									minRows={15}
								/>
							</Grid>

							<Grid container item xs={6} justifyContent="center">
								{!checkDiffVal ? (
									<Button
										variant="contained"
										color="primary"
										type="submit"
										disabled={countFillFields !== 0}
									>
										{textBtnSubmit}
									</Button>
								) : (
									<Button
										variant="contained"
										color="primary"
										type="submit"
										disabled={
											(values.title ===
												initialValueTitle &&
												values.body ===
													initialValueBody) ||
											countFillFields !== 0
										}
									>
										{textBtnSubmit}
									</Button>
								)}
							</Grid>
						</Grid>
					</Form>
				);
			}}
		</Formik>
	);
};

export default FormComponent;
