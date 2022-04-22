import React, { useState, Fragment } from "react";
 import "./index.css";
import  data from "./Mock-data.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from "src/components/ReadOnlyRow";
import EditableRow from "src/components/EdittableRow";
const AddNewQuestion=() => {
    const[Contacts,setContacts]=useState(data);
    const [addFormData,setAddFormData]=useState({
    Question:'',
    Type:'',
    Answer:'',
});
const [editFormData,setEditFormData]=useState({
    Question:'',
    Type:'',
    Answer:'',
});
const [editContactId,setEditContactId]=useState(null);


const handleAddFormchange = (event) =>{
    event.preventDefault();
    const fieldName= event.target.getAttribute('name');
    const fieldValue=event.target.value;
     const newFormData ={...addFormData};
     newFormData[fieldName]=fieldValue;
     setAddFormData(newFormData);
};
const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData ={ ...editFormData};
    newFormData[fieldName]=fieldValue;
    setEditFormData(newFormData) ;

   };

     const handleAddFormSubmit =(event)=>{
         event.preventDefault();
         const newContact ={
           id:nanoid(),
           Question:addFormData.Question,
           Type:addFormData.Type,
            Answer:addFormData.Answer,

         };
    const newContacts =[...Contacts, newContact];
     setContacts(newContacts)
     };

     const handleEditFormSubmit = (event) => {
        event.preventDefault() ;
        const editedContact = {
            id:editContactId,
            Question:editFormData.Question,
            Type:editFormData.Type,
            Answer:editFormData.Answer,
        };
        const newContacts={...Contacts};
        const index=Contacts.findIndex((Contact)=> Contact.id ===editContactId)
    
        newContacts[index]= editedContact;
         setContacts(newContacts)
         setEditContactId(null);
        
    };
     const handleEditClick = (event,Contact)=>{
         event.preventDefault();
         setEditContactId(Contact.id);


         const formValues =  {
           Question:Contact.Question,
           Type:Contact.Type,
           Answer:Contact.Answer,

         }
        
         setEditFormData(formValues);
     };

    return(
     <div className="app-container"> 
    <form onSubmit={handleEditFormSubmit}  > 
    <table>
        <thead>
            <tr> 
             
            <th>Question</th>
            <th>Type</th>
            
            <th>Answer</th> 
            <th>Actions</th> 
            </tr>
        </thead>
        <tbody>
            { Contacts.map((Contact) => (

            <Fragment>
               {editContactId === Contact.id ? ( 
               <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange}/>
                ):(
                    <ReadOnlyRow Contact={Contact} handleEditClick={handleEditClick}/>
                )}
 
            </Fragment>    
                
       
         ))}
        </tbody>
    </table>
    </form>
    <h2>Add a Contact</h2>
    <form onSubmit={handleAddFormSubmit}>
    
       <input 
      type="text" 
      name="Question"
      required="required"
      placeholder="Enter a question"
      onChange={handleAddFormchange}

      /> 
        <input 
      type="text" 
      name="Type"
      required="required"
      placeholder="Enter a type"
      onChange={handleAddFormchange}

      /> 
        <input 
      type="text" 
      name="Answer"
      required="required"
      placeholder="Enter an answer"
      onChange={handleAddFormchange}

      /> 
      <button type="submit">Add</button>
    </form>
    </div>
    )
                
                };
            

export default AddNewQuestion;