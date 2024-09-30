import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Match from './pages/Match/Match';
import Login from './pages/Login/Login';
import style from "./App.module.scss";

const App = () => {
	return (
		<BrowserRouter>
			<div className={style.app}>
				<nav></nav>
				<Routes>
					<Route path='*' element={<div>ERROR</div>} />
					<Route index element={<Home />} />
					<Route path='home' element={<Home />} />
					<Route path='football'>
						<Route path='match' element={<Match homeTeam='Test' awayTeam='Test 2' />} />
					</Route>
					<Route path='auth'>
						<Route path='login' element={<Login />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App;
