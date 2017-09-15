import { Col, Row } from 'react-bootstrap'
import { h, Component } from 'preact';
import { Provider } from 'preact-redux';
import { Router } from 'preact-router';

import { store } from './redux/combineReducers';
import Header from './components/header.comp';
import MyRouter from './components/router.comp';
import Chat from './components/chat.comp';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<Header />
					<Row>
						<Col xs={5} xsOffset={1} className='text-center'>
							<Router>
								<MyRouter />
							</Router>
						</Col>
						<Col xs={4} xsOffset={1}>
							<Chat/>
						</Col>
					</Row>
				</div>
			</Provider>
		);
	}
}
