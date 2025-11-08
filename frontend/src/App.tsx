import { Routes, Route, Link } from 'react-router-dom'
import './index.css'
import HomeView from './views/HomeView'
import AboutView from './views/AboutView'
import ApiTesterView from './views/ApiTesterView'

export function App() {
	return (
		<div className="text-center relative z-10">
			<nav className="flex justify-center gap-5 text-slate-500 text-md bg-white py-0.5 mb-6 w-full">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/api-tester">API Tester</Link>
			</nav>

			<Routes>
				<Route path="/" element={<HomeView />} />
				<Route path="/about" element={<AboutView />} />
				<Route path="/api-tester" element={<ApiTesterView />} />
			</Routes>
		</div>
	)
}

export default App
