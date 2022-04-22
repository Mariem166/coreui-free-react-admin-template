import React from "react";

const ReadOnlyRow = ({ Contact, handleEditClick }) => {
  return (
    <tr>
         
        <td>{Contact.Question}</td>
        <td>{Contact.Type}</td>
       <td> {Contact.Answer}</td>
        
       <td>
           <button type="button" onClick={(event)=> handleEditClick(event,Contact)}>Edit</button>
           </td> 
        
    </tr>
  );
};

export default ReadOnlyRow;