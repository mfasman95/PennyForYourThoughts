import { connect } from 'preact-redux';
import { h, Component } from 'preact';
import {  } from 'react-bootstrap';

class HostGame extends Component {
  render() {
    return (
      <div>
        <h1>Make A Game!</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const returnComp = connect(mapStateToProps)(HostGame);

export default returnComp;