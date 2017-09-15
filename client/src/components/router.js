import { h, Component } from 'preact';
import { connect } from 'preact-redux';

class App extends Component {
	render() {
    switch(this.props.page){
      case 'HOME': {
        return <div>Woah</div>
      }
      default: {
        return <h1>{this.props.page}</h1>
      }
    }
	}
}

const mapStateToProps = (state, ownprops) => {
  return {
    page: state.page.page,
  }
};

export default connect(mapStateToProps)(App);
