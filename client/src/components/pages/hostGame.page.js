import { connect } from 'preact-redux';
import { h, Component } from 'preact';
import { Button } from 'react-bootstrap';

import { emitter } from './../../js/socketConnect';

import Input from './../misc/input.comp';

class HostGame extends Component {
  constructor(props){
    super(props);

    this.state = {
      roomName: '',
      nameInput: '',
    };

    this.HINameInput = this.HINameInput.bind(this);
    this.HIRoomInput = this.HIRoomInput.bind(this);
    this.makeRoom = this.makeRoom.bind(this);
  }

  HINameInput(e) { this.setState({nameInput: e}) }
  HIRoomInput(e) { this.setState({roomName: e}) }

  makeRoom() {
    const data = {
      roomName: this.state.roomName,
      userName: this.state.nameInput,
    }
    console.log(data);
    emitter({ eventName: 'makeRoom', data });
  }

  render() {
    const buttonDisabled = (this.state.roomName.length === 0 || this.state.nameInput.length === 0);

    return (
      <div>
        <h1>Make A Game Room!</h1>
        <Input
          initialValue={this.state.nameInput}
          value={this.state.nameInput}
          pre='Name'
          onChange={this.HINameInput}
        />
        <Input
          initialValue={this.state.roomName}
          value={this.state.roomName}
          pre='Room Name'
          onChange={this.HIRoomInput}
        />
        <Button
          bsStyle='primary'
          bsSize='large'
          onClick={this.makeRoom}
          disabled={buttonDisabled}
        >
          Make Room { this.state.roomName && ` '${this.state.roomName}'` }
        </Button>
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