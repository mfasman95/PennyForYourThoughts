import { connect } from 'preact-redux';
import { h, Component } from 'preact';

import Home from './pages/home.page';
import JoinGame from './pages/joinGame.page';
import HostGame from './pages/hostGame.page';

class App extends Component {
	render() {
    switch(this.props.page){
      case 'HOME': { return <Home /> }
      case 'JOIN_GAME': { return <JoinGame /> }
      case 'HOST_GAME': { return <HostGame /> }
      default: { return <h1>{this.props.page}</h1> }
    }
	}
}

const mapStateToProps = (state, ownprops) => {
  return {
    page: state.page.page,
  }
};

export default connect(mapStateToProps)(App);
