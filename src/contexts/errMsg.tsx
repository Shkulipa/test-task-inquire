import React, {
	createContext,
	FC,
	ReactChild,
	ReactNode,
	useState,
} from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useStylesBase } from '../assets/styles';

interface IContextProps {
	setShowSuccessDelPost: (val: boolean) => void;
}

interface ErrMsgProps {
	children: ReactChild | ReactNode;
}

export const ErrMsgContext = createContext({} as IContextProps);

const ErrMsg: FC<ErrMsgProps> = ({ children }: ErrMsgProps) => {
	const classesBase = useStylesBase();
	const [showSuccessDelPost, setShowSuccessDelPost] =
		useState<boolean>(false);

	return (
		<>
			{showSuccessDelPost && (
				<Alert severity="success" className={classesBase.mb10}>
					<AlertTitle>Success</AlertTitle>
					Post success deleted —{' '}
					<strong>Please check it out :)</strong>
				</Alert>
			)}
			<ErrMsgContext.Provider value={{ setShowSuccessDelPost }}>
				{children}
			</ErrMsgContext.Provider>
		</>
	);
};

export default ErrMsg;
