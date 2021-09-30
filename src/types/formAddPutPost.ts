import { FormikHelpers } from 'formik';

export interface HandlerFormData {
	title: string;
	body: string;
}

export interface FormComponentProps {
	textBtnSubmit: string;
	initialValueTitle?: string;
	initialValueBody?: string;
	checkDiffVal?: boolean;
	handlerForm: (
		data: HandlerFormData,
		actions: FormikHelpers<HandlerFormData>
	) => void;
}
