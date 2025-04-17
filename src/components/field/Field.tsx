import s from './field.module.scss'

type FieldProps = {
	label: string
	ref: React.RefObject<HTMLInputElement | null>
}

const Field: React.FC<FieldProps> = ({ label, ref }) => {
	return (
		<div className={s.field}>
			<label>{label}: </label>
			<input
				type="number"
				ref={ref}
				defaultValue={0}
				min={0}
				max={10000}
			/>
		</div>
	)
}

export default Field
