import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import './App.css';


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<ul className="">
						{/* <li>
							<Link to="/">Home</Link>
						</li> */}
					</ul>
					<Routes>
						<Route exact path='/' element={< Home />}></Route>
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;
