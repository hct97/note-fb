import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            noteTitle:"",
            noteText: "",
            id:''
        }
    }

    componentWillMount() {
        if(this.props.editItem){  // edit case 
          this.setState({
            noteTitle:this.props.editItem.noteTitle,
            noteText: this.props.editItem.noteText,
            id:this.props.editItem.id
          });
        }
      }
      
  
  
  
    isChange = (event) => {
        const name = event.target.name ; 
        const value = event.target.value;       
        this.setState({
          [name]:value
        })
      }
  
      addData = (title,text) => {
        if(this.state.id)    { //edit case 
          var editObject = {};
          editObject.id = this.state.id ; 
          editObject.noteText = this.state.noteText; 
          editObject.noteTitle = this.state.noteTitle ; 
  
          this.props.editDataStore(editObject);
          this.props.changeEditStatus()  ; // tat form 
          this.props.alertOn("Sửa thành công","success");
        }
        else{
            var item = {}; 
           item.noteTitle = title; 
           item.noteText= text;        
           this.props.addDataStore(item);  // su dung reducer trong store , // displatch ADD_DATA
           this.props.alertOn("Thêm mới thành công","success");
        }
      
       
      }
      printTitle = () => {
        if(this.props.addStatus)
          return <h3> Thêm mới </h3>
        else
          return <h3> Sửa </h3>
      }

    render() {
        return (
            <div className="col4">
                {this.printTitle()}
            <form>
            <div className="form-group">
                <label htmlFor="noteTitle">TIÊU ĐỀ:</label>
                <input  defaultValue={this.props.editItem.noteTitle} onChange={(event) => this.isChange(event)} type="text" name="noteTitle" id="noteTitle" className="form-control"  aria-describedby="helpIdnoteTitle" />
                <small id="noteTitle" className="text-muted">Nhập tiêu đề</small>
            </div>
            <div className="form-group">
                <label htmlFor="noteText">NỘI DUNG:</label>
                <textarea  defaultValue={this.props.editItem.noteText} onChange={(event) => this.isChange(event)} type="text" name="noteText" id="noteText" className="form-control"  aria-describedby="helpIdnoteText" />
                <small id="noteText" className="text-muted">Nhập nội dung</small>
            </div>
                <button type="reset" onClick={() => this.addData(this.state.noteTitle,this.state.noteText)} className="btn btn-primary btn-block">Submit</button>
            </form>
            </div>

        );
    }
}


 const mapStateToProps = (state, ownProps) => {
    return {
      editItem : state.editItem,
      addStatus : state.isAdd
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      addDataStore: (getItem) => {
        dispatch({type:"ADD_DATA",getItem})
      },
      editDataStore: (getItem) => {
        dispatch({type:"EDIT",getItem})
      },
      alertOn: (alertContent,alertType) => {
        dispatch({type:"ALERT_ON",alertContent,alertType})
      },
      alertOff: () => {
        dispatch({type:"ALERT_OFF"})
      },
      changeEditStatus: () => {
        dispatch({
          type:"CHANGE_EDIT_STATUS"
        })
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NoteForm) ;
