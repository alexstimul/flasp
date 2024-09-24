import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Match from './pages/Match/Match';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<nav></nav>
				<Routes>
					<Route path='*' element={<div>ERROR</div>} />
					<Route index element={<Home />} />
					<Route path='home' element={<Home />} />
					<Route path='football'>
						<Route path='match' element={<Match homeTeam='Test' awayTeam='Test 2' />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App;
