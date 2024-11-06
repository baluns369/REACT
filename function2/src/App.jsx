import React, {Component} from "react";
class App extends Component{
  handleSubmit=(e)=>{
    e.preventDefalut()
    console.log(this.state.name,this.state.age,this.state.ph,this.state.dob,this.state.bgroop,this.state.place,this.state.team,this.state.job,this.state.salary,this.state.vehical,);
    
  }
  onHandleChange=(e)=>{
    this.setState({[e.target.name]})
  }
}