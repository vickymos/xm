import { FocusEventHandler } from "react";
import React from "react";

export interface InputProps {
    /**
     * When this input is required
     */
    required?: boolean;

    /**
     * Input component name
     */
    name: string;

    /**
     * Input component name
     */
    disabled?: boolean;

    /**
     * Input field width (number, px, or %)
     */
    width?: number | string;

    /**
     * The placeholder text when there is no value present
     */
     placeholder?: string;

     /**
     * Div accompanying classes to be appended
     */
    className?: string;

    /**
     * Div accompanying styles to be appended
     */
    style?: object;

    /**
     * Event fired when the Input loses focus
     */
     onBlur?: FocusEventHandler<HTMLInputElement>;

     /**
     * Function called when value changes
     */
     onChange?: (e: string | React.ChangeEvent<any>) => void;

    /**
     * Input Type attribute - "text", "email", "tel", etc
     */
     type?: string;

     /**
     * For direct, controlled usage
     */
      value?: string;

     /**
     * Input Type default value
     */
     defaultValue?: string;

     /**
     * Input component id
     */
     id: string;
}

/**
 * Input component, accept user input. Generic input element.
 */
export const Input = ({ className, style, type = "text", ...rest }: InputProps) => {   
    return (
        <>

            <input {...rest} type={type} className={`${className}`} />
     
        </>
    );
};

export default Input;
