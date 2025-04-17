import { BrowserRouter, Route, Routes } from 'react-router'
import FormPage from './pages/formPage/FormPage'
import HomePage from './pages/homePage/HomePage'

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/form" element={<FormPage />} />
		</Routes>
	</BrowserRouter>
)

export default App
