import React, { Component } from 'react';
import NoteItem from './NoteItem';
import {noteData} from '../firebaseConnect' ;



class NoteList extends Component {
constructor(props) {
  super(props);
  this.state = {
    dataFirebase:[]
  }
}


componentWillMount() {
  noteData.on('value', (notes) => {
    var arrayData=  []; 
    notes.forEach(element => {
      const key = element.key ; 
      const noteTitle= element.val().noteTitle ; 
      const noteText= element.val().noteText ; 
      arrayData.push({
        id:key,
        noteTitle:noteTitle,
        noteText:noteText
      })
    });
    this.setState({
      dataFirebase:arrayData
    });      

  })
}

    getData = () => {
      if(this.state.dataFirebase)
      {
         return this.state.dataFirebase.map((value,key) => {
           return (
             <NoteItem 
              key={key}
              i={key}
              note = {value}
              noteTitle={value.noteTitle}
              noteText={value.noteText}
             />
           )
         })
      }
    
      
    }

    render() {
        return (
            <div className="col">
            <div id="noteList" role="tablist" aria-multiselectable="true">

               {
                 this.getData()
               }

            </div>
          </div>
          
        );
    }
}

export default NoteList;