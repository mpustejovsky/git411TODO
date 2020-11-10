import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import FirstComponent from './firstComponent';
import deleteMe from './deleteMe'


class App extends Component {

  constructor (props) {
    super (props);
    this.toggle=this.toggle.bind(this);
    this.state = {
      input: "",
      input2:"",
      statusCheck: "",
      items:[],
      isClicked:[],
      modifyIndex:0
         
    };
  }

  toggle = (index) => {
    
   this.state.isClicked[index]=!this.state.isClicked[index]
    document.getElementById('b'+ index).innerHTML="complete"
    document.getElementById('b'+ index).style.display = "none"
    document.getElementById('li'+ index).style.display = "none"
    document.getElementById('e'+ index).style.display = "none"
    
  }

  inputUpdate =(event) =>{
    this.setState({input: event.target.value})
  }
 
  inputUpdate2 =(event) =>{
    this.setState({input2: event.target.value})
  }
  // statusUpdate =(event) =>{
  //   this.setState({statusCheck: event.target.value})
  // }

  formSubmit = (event) =>{
    event.preventDefault()
    console.log ("FORMSUBMIT ", this.state.items,this.state.isClicked)
    this.setState({
      items : [...this.state.items, this.state.input],
      isClicked :[...this.state.isClicked,true],
      input:'',
      
    } )
  } 
   
  formSubmit2 = (event) =>{
    event.preventDefault()
    console.log ("FORMSUBMIT ", this.state.items,this.state.isClicked)
    this.state.items[this.state.modifyIndex] = this.state.input2;
    document.getElementById('completed').style.display = "none"
    document.getElementById('li'+ this.state.modifyIndex).style.color = "black"
    this.setState({
      input2:""
    })
  } 



   editTodo = (index) =>{
    document.getElementById('completed').style.display = "flex"
    document.getElementById('li'+ index).style.color = "red"
    this.state.modifyIndex=index;
    console.log ("deleteMe was pressed")
    
  }

  render(){
    console.log("****THIS STATE***" + this.state.statusCheck)
  return (
    <div className="App">
      <header className="App-header">       
       
        <h1>MARK'S TO DO LIST</h1>   
                 
      </header>

      <div id="container">
         <div id="top"><h1>HELLO MARK</h1>   </div>
      <div id="left">
           <h1>Input New ToDo Here</h1>
           <form onSubmit={this.formSubmit}>
             <input name="inputName" value={this.state.input} onChange={this.inputUpdate}/>
            
          <button>Submit</button>
          </form>
          </div>
       <div id="right">
       
      <h1>Outstanding TODOs</h1>
      
      {this.state.items.map((item,index)=>{
        return (
        <div key={"d"+index}>
     
        
        <li key={index} id={"li"+ index}>{item}</li> 
         <button key={"b"+index} id={"b"+index} onClick={()=>this.toggle(index)}>Delete</button>
         <button key={"e"+index} id={"e"+index} onClick={()=>this.editTodo(index)}>Edit</button>
        
         </div>
        )
      })}
     
    
    </div>  
    
    <div id="completed">
    <h1>Input Edited ToDo Here</h1>
           <form onSubmit={this.formSubmit2}>
             <input name="inputName" value={this.state.input2} onChange={this.inputUpdate2}/>
            
          <button>Submit</button>
          </form>
    </div>
    
    
    </div> </div> 
  );
}}

export default App;



