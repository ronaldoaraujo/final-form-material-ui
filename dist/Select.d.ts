import * as React from 'react';
import { FormControlProps } from '@material-ui/core/FormControl';
import { InputLabelProps } from '@material-ui/core/InputLabel';
import { FieldRenderProps } from 'react-final-form';
interface FormHelperTextWrapperProps extends FieldRenderProps {
    label: string;
    formControlProps: FormControlProps;
    inputLabelProps: InputLabelProps;
}
declare const FormHelperTextWrapper: React.SFC<FormHelperTextWrapperProps>;
export default FormHelperTextWrapper;
