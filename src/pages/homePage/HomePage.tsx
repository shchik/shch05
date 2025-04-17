import { useNavigate } from 'react-router'
import s from './home-page.module.scss'

const HomePage = () => {
	const navigate = useNavigate()

	const handleButtonClick = () => navigate('/form')

	return (
		<div className={s.home}>
			<button onClick={handleButtonClick}>FORM</button>
		</div>
	)
}

export default HomePage
