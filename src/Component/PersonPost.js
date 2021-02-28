import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "../Pages/Home/style.scss";

class PersonPost extends Component {
  state = {
    UserId: "",
    Password: "",
  };

  header = {
    headers: {
      "Content-Type": "application/json",
      Module: "JW9tc0ByZWRsdGQl",
    },
  };

  changehandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submithandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://oms.redltd.tech:9004/api/auth/userlogin/`,
        this.state,
        this.header
      );
      if (response.status === 200) {
          console.log(response.data.data);
      }
    } catch (error) {
      if (error) {
        console.log(error.response);
      }
    }

    // axios({
    //   method: "post",
    //   url: "http://oms.redltd.tech:9004/api/auth/userlogin/",
    //   data: { UserId, Password },
    //   headers: {
    //     "Content-Type": "application/json",
    //     Module: "JW9tc0ByZWRsdGQl",
    //   },
    // })
    //   .then((responseJson) => {
    //     console.log(responseJson.data);
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
  };

  render() {
    return (
      <div>
        <div className="container">
          <Form onSubmit={this.submithandler}>
            <label className="Row col-md-3">
              Person ID:
              <input
                className="form-control"
                type="text"
                name="UserId"
                onChange={this.changehandler}
              />
            </label>

            <label className="Row col-md-3">
              Password:
              <input
                className="form-control"
                type="password"
                name="Password"
                onChange={this.changehandler}
              />
            </label>
            <div className="pl-3">
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
