import React, {ChangeEvent, useState} from 'react';
import s from "./styles/EditableSpan.module.css"

type EditableSpanPropsType = {
    title: string
    setTitle: (newValue: string) => void
}
export const EditableSpan = ({title, setTitle}: EditableSpanPropsType) => {
    const [showInput, setShowInput] = useState(false)
    const [inputValue, setInputValue] = useState(title);
    const [errorMessage, setErrorMessage] = useState<string | "">("")

    const valueIsToLong = inputValue.trim().length >= 5;
    const emptyValue = inputValue.length < 1;


    const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        if (newValue.trim().length > 25) {
            setErrorMessage("title is too long");
            return;
        } else {
            setErrorMessage("");
        }
        setInputValue(newValue);
    }

    const inputOnBlurHandler = () => {
        if (emptyValue) {
            setErrorMessage("title is empty")

        } else if (valueIsToLong) {
            setErrorMessage("title is to long")
        } else {
            setTitle(inputValue.trim())
            setShowInput(false)
        }

    }
    return (
        <div>
            {showInput
                ? <input className={errorMessage ? s.inputError : ""} value={inputValue}
                         onChange={inputOnChangeHandler} onBlur={inputOnBlurHandler} autoFocus/>
                : <span onDoubleClick={() => setShowInput(!showInput)}>{title}</span>}
            {errorMessage && <div className={s.errorMessage}>{errorMessage}</div>}
        </div>
    );
};

