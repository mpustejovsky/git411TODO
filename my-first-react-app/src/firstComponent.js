const deleteToDo =(index) =>{

  console.log ("crappy time figuriong out"+index)
  
}


function FirstComponent(props) {

    console.log ("??????", props.items)
    console.log ("status",props.isClicked)
    
    return (
      <div>
      <h1>List Area</h1>
      <ul>
      {props.items.map((item,index)=>{
        return <div key={'d'+index}>
          {console.log ("index= "+index)}
          <li key={index}>{item}</li>
          <button id={'b'+index} key={'b'+index} onClick={()=>deleteToDo(index)}>delete{index}</button>
          {console.log ("here")}
          </div>
      })}
    </ul>
    </div>
    )
}

export default FirstComponent;
