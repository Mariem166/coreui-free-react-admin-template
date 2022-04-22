import React, { useState, Fragment } from "react";
 import './Allquestions.css';
import  data from "../AddNewQuestion/Mock-data.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from "src/components/ReadOnlyRow";
import EditableRow from "src/components/EdittableRow";
const Allquestions=() => {
    const[Contacts,setContacts]=useState(data);
    const [addFormData,setAddFormData]=useState({
    Question:'',
    Type:'',
    Answer:'',
});
return(
    <div className="app-container"> 
   <form  > 
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
         {Contacts.map((Contact) =>(
             <td>{Contact.Question}</td>
         )
         
        }
       </tbody>
   </table>
   </form>
   <h2>Add a Contact</h2>
   <form  >
   
      <input 
     type="text" 
     name="Question"
     required="required"
     placeholder="Enter a question"
     

     /> 
       <input 
     type="text" 
     name="Type"
     required="required"
     placeholder="Enter a type"
      

     /> 
       <input 
     type="text" 
     name="Answer"
     required="required"
     placeholder="Enter an answer"
      
     /> 
     <button type="submit">Add</button>
   </form>
   </div>
   )
               
               };
           


export default Allquestions ;