import { connect } from 'preact-redux';
import { h, Component } from 'preact';
import { FormGroup, InputGroup, FormControl, Button, HelpBlock } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class FormInputGroup extends Component {
  constructor(props){
    super(props);
    this.state = {
      //You can set an initial value for the input field
      value: props.initialValue || '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value}, ()=>{
      if(this.props.onChange) this.props.onChange(this.state.value);
    });
  }

  validate(e){
    if(this.props.validationState) {
      let data = { value: this.state.value }
      return this.props.validationState(data);
    }
    else { return null }
  }

  render() {
    return (
      <FormGroup validationState={this.validate()}>
        <InputGroup>
          {
            this.props.title &&
              <InputGroup.Addon>
                {this.props.title}{this.props.required === true && '*'}
              </InputGroup.Addon>}
          {
            this.props.pre &&
              <InputGroup.Addon>
                {this.props.pre}
              </InputGroup.Addon>
          }
          <FormControl
            bsSize={'sm'}
            type={this.props.type || 'text'}
            value={this.state.value}
            onInput={e=>this.handleChange(e)}
            placeholder={this.props.placeholder}
            disabled={this.props.disabled || false} //Disabled state can be set through object properties
            />
          {
            this.props.onClick && 
              <InputGroup.Button>
                <Button
                  onClick={()=>this.props.onClick(this.state.value)} //This function will always pass the value of this component back for use
                  bsStyle={this.props.bsStyle || 'primary'} //Style can be set through object properties
                  disabled={this.props.disabled} //Disabled state can be set through object properties
                  >
                  <FontAwesome
                    name={this.props.icon || 'question'} //A font-awesome icon string (without 'fa') is required if a function is passed to onclick
                    />
                </Button>
              </InputGroup.Button>
          }
          {
            this.props.post &&
              <InputGroup.Addon>
                {this.props.post}
              </InputGroup.Addon>
          }
          {
            this.props.postButton &&
              <InputGroup.Button>
                {this.props.postButton}
              </InputGroup.Button>
          }
        </InputGroup>
        {
          this.props.helpBlock && 
            <HelpBlock>
              {this.props.helpBlock}
            </HelpBlock>
        }
      </FormGroup>
    );
  }
}

//Function to map the redux state to object properties
const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const returnComp = connect(mapStateToProps)(FormInputGroup);

export default returnComp;