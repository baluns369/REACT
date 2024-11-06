import React, { Component} from "react";
class App extends Component{
constructor(props){
  super(props)
  this.inputname=React.createRef()
  this.inputage=React.createRef()
}



  // state={name:"",age:""}
  // handleSubmit=(e)=>{
  //   e.preventDefault()
  //   console.log(this.state.name,this.state.age);
  // }
  // onHandleChange1=(e)=>{
  //   // console.log(e.target.value);
  //   console.log(`change ${e.target.value}`);
  //   this.setState({name:e.target.value})
  // }
  // onHandleChange2=(e)=>{
  //   // console.log(e.target.value);
  //   console.log(`change2 ${e.target.value}`);
  //   this.setState({age:e.target.value})
  // }


  // onHandleChange=(e)=>{
  //   this.setState({[e.target.name]:e.target.value})
  // }

handleSubmit=(e)=>{
  e.preventDefault()
  console.log(this.inputname.value);
  console.log(this.inputage.value);
  
  
}



  render(){
    return <div>
      <form action="">
        <input type="text"  placeholder="enter name" ref={input=>this.inputname=input} />
        <input type="text"  placeholder="enter age" ref={input=>this.inputage=input} />
        <button onClick={this.handleSubmit}>submit</button>
      </form>
    </div>
  }
}export default App