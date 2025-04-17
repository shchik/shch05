type ResultProps = {
	count: number
	Elem: React.ElementType
	elemProps?: Record<string, any>
}

const Result: React.FC<ResultProps> = ({ count, Elem, elemProps = {} }) => {
	return (
		<div>
			{Array.from({
				length: count,
			}).map((_, i) => (
				<Elem key={i} {...elemProps} />
			))}
		</div>
	)
}

export default Result
