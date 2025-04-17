import { useRef, useState } from 'react'
import Field from '../../components/field/Field'
import Result from '../../components/result/Result'
import { TFieldArray } from '../../types/types'
import s from './form-page.module.scss'

const FormPage = () => {
	const [isFormPressed, setIsFormPressed] = useState(false)

	const inputAmountRef = useRef<HTMLInputElement>(null)
	const textareaAmountRef = useRef<HTMLInputElement>(null)
	const checkboxAmountRef = useRef<HTMLInputElement>(null)

	const fieldsArray: TFieldArray[] = [
		{ id: 1, label: 'Input', ref: inputAmountRef, Elem: 'input' },
		{ id: 2, label: 'Textarea', ref: textareaAmountRef, Elem: 'textarea' },
		{
			id: 3,
			label: 'Checkbox',
			ref: checkboxAmountRef,
			Elem: 'input',
			elemProps: { type: 'checkbox' },
		},
	]

	const handleBuildButton = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsFormPressed(!isFormPressed)
	}

	return (
		<form className={s.form} onSubmit={e => handleBuildButton(e)}>
			{!isFormPressed && (
				<div className={s.form__container}>
					<h1>Form</h1>
					{fieldsArray.map(field => (
						<Field
							label={field.label}
							ref={field.ref}
							key={field.id}
						/>
					))}
					<div className={s.button}>
						<button type="submit">Build</button>
					</div>
				</div>
			)}
			{isFormPressed && (
				<div className={s.form__pressed}>
					<h1>Form</h1>
					{fieldsArray.map(field => (
						<Result
							count={parseInt(field.ref.current!.value)}
							Elem={field.Elem}
							elemProps={field.elemProps}
						/>
					))}

					<div className={s.button}>
						<button type="submit">Reset</button>
					</div>
				</div>
			)}
		</form>
	)
}

export default FormPage
