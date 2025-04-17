import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import FormPage from './pages/FormPage'
import HomePage from './pages/homePage/HomePage'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/form" element={<FormPage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
