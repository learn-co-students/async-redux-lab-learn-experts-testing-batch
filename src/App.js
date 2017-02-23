import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {Navbar} from 'react-bootstrap';
import {fetchCats} from './actions/catActions';
import {connect} from 'react-redux';
import CatList from './CatList';

class App extends Component {
  componentDidMount(){
    this.props.fetchCats();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={this.props.cats} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    cats: state.cats
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchCats: bindActionCreators(fetchCats, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
