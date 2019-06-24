import React from "react";
import User from "./User";
import UserForm from './userForm'


class Users extends React.Component {
  hitme(){
    alert('give me alert')
  }
  render() {
    const mydata = this.props.match
    console.log(mydata)
    debugger;

    return (
      <div>
       <User 
       myform={UserForm} 
       name={'react'} 
       clickme={this.hitme}></User>
      </div>
    );
  }
}

export default Users;
