import { ThemeProvider } from '@/components/theme-provider'
import { Routes, Route, Link } from 'react-router-dom'
import './index.css'
import HomeView from './views/HomeView'
import AboutView from './views/AboutView'
import ApiTesterView from './views/ApiTesterView'
import { Navbar } from './components/navbar'

export function App() {
	return (
		<ThemeProvider>
			<div className="text-center relative z-10">
				<Navbar />

				<Routes>
					<Route path="/" element={<HomeView />} />
					<Route path="/about" element={<AboutView />} />
					<Route path="/api-tester" element={<ApiTesterView />} />
				</Routes>
			</div>
		</ThemeProvider>
	)
}

export default App
