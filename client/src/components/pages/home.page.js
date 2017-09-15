import { Button, ButtonGroup } from 'react-bootstrap';
import { connect } from 'preact-redux';
import { h, Component } from 'preact';

class Home extends Component {
	render() {
		return (
      <div>
				<h1>Welcome To Penny For Your Thoughts!</h1>
				<ButtonGroup>
					<Button
						bsStyle='primary'
						bsSize='large'
						onClick={()=>this.props.dispatch({type:'CHANGE_PAGE', page:'JOIN_GAME'})}
					>
						Join Game
					</Button>
					<Button
						bsStyle='warning'
						bsSize='large'
						onClick={()=>this.props.dispatch({type:'CHANGE_PAGE', page:'HOST_GAME'})}
					>
						Host Game
					</Button>
				</ButtonGroup>
			</div>
		);
	}
}

const mapStateToProps = (state, ownprops) => {
  return {
  }
};

const returnComp = connect(mapStateToProps)(Home);

export default returnComp;
