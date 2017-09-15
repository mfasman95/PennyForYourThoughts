import { connect } from 'preact-redux';
import { h, Component } from 'preact';
import { Well, Button } from 'react-bootstrap';

import { emitter } from './../../js/socketConnect';

import Input from './../misc/input.comp';

const roomButtonStyle = {
  width: '150px',
  textOverflow: 'ellipsis',
}

class JoinGame extends Component {
  constructor(props){
    super(props);

    this.state = {
      nameInput: '',
    };
    
    this.HINameInput = this.HINameInput.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
  }

  HINameInput(e) { this.setState({nameInput: e}) }

  joinRoom(room) {
    emitter({
      eventName: 'joinRoom',
      data: {
        room,
        player: this.state.nameInput,
      },
    });
  }

  render() {
    return (
      <div>
        <Input
          initialValue={this.state.nameInput}
          value={this.state.nameInput}
          pre='Name'
          onChange={this.HINameInput}
        />
        <Well>
          {
            Object.keys(this.props.rooms).length !== 0 ? 
            (
              Object.keys(this.props.rooms).map((room, i) => {
                const atCapacity = (this.props.rooms[room].occupancy >= this.props.rooms[room].capacity);
                let bsStyle = 'success';
                if (atCapacity) bsStyle = 'danger';
                return (
                  <Button
                    disabled={atCapacity}
                    bsStyle={bsStyle}
                    style={roomButtonStyle}
                    onClick={()=>this.joinRoom(this.props.rooms[room].name)}
                  >
                    <h3>{ this.props.rooms[room].name }</h3>
                    <h4>{`${this.props.rooms[room].occupancy}/${this.props.rooms[room].capacity}`}</h4>
                  </Button>
                );
              })
            ) : (
              <div>
                <h3>No Games Available!</h3>
                <Button
                  bsStyle='primary'
                  bsSize='large'
                  onClick={()=>this.props.dispatch({type:'CHANGE_PAGE', page:'HOST_GAME'})}
                >
                  Host A Game?
                </Button>
              </div>
            )
          }
        </Well>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    rooms: state.core.rooms,
  }
}

const returnComp = connect(mapStateToProps)(JoinGame);

export default returnComp;