import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import {connect} from 'react-redux';
import AlertInfo from './components/AlertInfo';


class App extends Component {

  // pushData = () => {
  //   var connecData = firebase.database().ref('dataForNote');
  //   connecData.push({
  //     title: 'Ghi chu so 5',
  //     text: "Noi dung ghi chu so 5"
  //   })
  //   console.log("Them thanh cong")
  // }

  // deleteData = (id) => {
  //   var connecData = firebase.database().ref('dataForNote');
  //   connecData.child(id).remove();
  //   console.log("xoa phan tu co ID: "+id);
  // }
  showForm = () => {
    if(this.props.isEdit){
      return <NoteForm />
    }
  }

  render() {   
    return (
      <div >
        <Nav/>
        <AlertInfo/>
        <div className="container">
        <div className="row">
            <NoteList/>
            {
              this.showForm()
            }
        </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
export default connect(mapStateToProps)(App)
