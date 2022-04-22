import React from "react";

const EditableRow = ({editFormData,handleEditFormChange})=>{
  
 
 
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a question"
          name="Question"
          value={editFormData.Question}
          onChange={handleEditFormChange}
           
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a type"
          name="Type"
          value={editFormData.Type}

          onChange={handleEditFormChange}
          
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an answer"
          name="Answer"
          value={editFormData.Answer}
          onChange={handleEditFormChange}
          
        ></input>
      </td>
      <td>
        <button type="submit"  >Save</button>
      </td>
       
    </tr>
  );
};

export default EditableRow;