import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedDate, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    const formData ={firstName:firstName, lastName:lastName};
    const formDataArray =[...submittedDate,formData]
    setSubmittedData(formDataArray);
    setFirstName("");
    setLastName("");

  }

  const listOfData = submittedDate.map((data,index)=>{
    return (
      <div ket={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
      {listOfData}
    </form>
  );
}

export default Form;
