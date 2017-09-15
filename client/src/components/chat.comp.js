import { connect } from 'preact-redux';
import { h, Component } from 'preact';
import { Well } from 'react-bootstrap';

class Chat extends Component {
  render() {
    return (
      <Well>
        <h1 className='text-center'>Group Chat In Progress...</h1>
        {
          this.props.room && 
            <h3 className='text-center'>Chat for Room {'['}{this.props.room}{']'}</h3>
        }
      </Well>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    room: state.session.room,
  }
}

const returnComp = connect(mapStateToProps)(Chat);

export default returnComp;