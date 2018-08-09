import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteItem extends Component {

    twoActionButton = () => {

      this.props.changeEditStatus(); // action 1 
      // ham lay noi dung truyen trong store , de store update du lieu -- action 2 
     // console.log(this.props.note);
      this.props.getEditData(this.props.note) ;

    }
    deleteData = () => {
      this.props.getDeleteData(this.props.note.id);
      this.props.alertOn("Xoa ghi chu: "+ this.props.note.noteTitle,'danger');
    }
    render() {
        return (
            <div className="card">
            <div className="card-header" role="tab" id="note1">
            <h5 className="mb-0">
              <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.i} aria-expanded="true" aria-controls="noteContent1">
                {this.props.noteTitle}
              </a>
              <div className="btn-group float-right">
                    <button className="btn btn-outline-info" onClick={()=>this.twoActionButton()}> Sửa </button>
                    <button className="btn btn-outline-secondary" onClick={() => this.deleteData()}> Xoá </button>
              </div>
            
            </h5>
          </div>
          <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1">
                  <div className="card-body">
                    {this.props.noteText}
                  </div>
                </div>
          </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type:"CHANGE_EDIT_STATUS"
      })
    },
    getDeleteData: (deleteId) => {
      dispatch({
        type:"DELETE",
        deleteId
      })
    },
    alertOn: (alertContent,alertType) => {
      dispatch({type:"ALERT_ON",alertContent,alertType})
    },
    alertOff: () => {
      dispatch({type:"ALERT_OFF"})
    },
    getEditData: (editObject) => {
      dispatch({
        type:"GET_EDIT_DATA",
        editObject
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)
 