import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'preact-redux';
import { store } from './../redux/combineReducers';

import Header from './header';
import MyRouter from './../components/router.js';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<MyRouter path="/" />
					</Router>
				</div>
			</Provider>
		);
	}
}
