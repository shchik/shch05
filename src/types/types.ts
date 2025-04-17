export type TFieldArray = {
	id: number
	label: string
	ref: React.RefObject<HTMLInputElement | null>
	Elem: React.ElementType
	elemProps?: Record<string, any>
}
