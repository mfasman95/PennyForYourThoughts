import { connect } from 'preact-redux';
import { h, Component } from 'preact';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class MainNav extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect >
        <Navbar.Header>
          <Navbar.Brand>
            <img
              src='http://www.fundraising-ideas.org/DIY/images/pennydrive.gif'
              onClick={()=>this.props.dispatch({type:'CHANGE_PAGE', page:'HOME'})}
            />
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const returnComp = connect(mapStateToProps)(MainNav);

export default returnComp;