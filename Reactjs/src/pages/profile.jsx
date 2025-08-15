import { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Student Profile</h1>
        <p><b>Username: </b>{this.props.username}</p>
        <p><b>Email: </b>{this.props.email}</p>
        <p><b>Website: </b>{this.props.website}</p>
      </div>
    )
  }
}

export default Profile;