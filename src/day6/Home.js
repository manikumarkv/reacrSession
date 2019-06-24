import React from "react";
import UserDetails from './userDetails'
import User from "./User";


class Home extends React.Component {
  render() {
    return (
      <div>
        Home Page
        {/* <User
          myform={UserDetails}
          name={'react'}
          clickme={this.hitme}></User> */}

        <User name={'react'}
          clickme={this.hitme}>
          <UserDetails></UserDetails>
        </User>

      </div>
    );
  }
}

export default Home;
