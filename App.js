import React,{useState} from 'react'

function App() {
  const [inputName, setInputName] =useState('')
  const [nameList, setNameList] = useState([])

 const handleSubmit=() =>{
 
 setNameList(nameList => [...nameList, inputName]);

 setInputName('')
  }



  return (

    <div> 
    <h1>Hello World, I am finally alive</h1>

    <input type='text' value={inputName} onChange={(e)=>setInputName(e.target.value)}/>
    <button onClick={handleSubmit} >Submit</button>
<ul style={{listStyle: "none"}}> 
   {nameList.map((name)=>{
     return(
      <li>{name}</li>
     )
   })}
   </ul>

</div>
  )
}

export default App

