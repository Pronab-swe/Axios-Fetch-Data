import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "../Pages/Home/style.scss";

class PersonPost extends Component {
  state = {
    UserId: "",
    Password: "",
  };

  changehandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submithandler = (event) => {
    event.preventDefault();

    let { UserId, Password } = this.state;

    axios({
      method: "post",
      url: "http://oms.redltd.tech:9004/api/auth/userlogin/",
      data: { UserId, Password },
      headers: {
        "Content-Type": "application/json",
        Module: "JW9tc0ByZWRsdGQl",
      },
    })
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        <div className="container">
          <Form onSubmit={this.submithandler}>
            <label>
              Person ID:
              <input
                className="form-control"
                type="text"
                name="UserId"
                onChange={this.changehandler}
              />
            </label>

            <label>
              Password:
              <input
                className="form-control"
                type="password"
                name="Password"
                onChange={this.changehandler}
              />
            </label>
            <div>
              <Button className="btn btn-primary" type="submit">
                LOGIN
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default PersonPost;
