import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../Home/style.scss";

class Graph extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    department: "",
	city: "",
	division: "",
	zip: "",
    gender: "",
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, email, password, department,city,division,zip, gender } = this.state;
    return (
      <div className="container">
        <Form onSubmit={this.submitHandler}>
          <div className="row">
            <div className="form-group col-lg-6 col-md-6">
              <label htmlFor="name">Enter Your Full Name</label>
              <input
                className="form-control"
                type="text"
                onChange={this.changeHandler}
                placeholder="Enter Your Name"
                name="name"
                value={this.state.name}
              />
            </div>
            <div className="form-group col-lg-6 col-md-6">
              <label htmlFor="email">Enter Your Email</label>
              <input
                className="form-control"
                type="email"
                onChange={this.changeHandler}
                placeholder="Enter Your Email"
                name="email"
                value={this.state.email}
              />
            </div>
            <div className="form-group col-lg-6 col-md-6">
              <label htmlFor="password">Enter Your Password</label>
              <input
                className="form-control"
                type="password"
                onChange={this.changeHandler}
                placeholder="Enter Your Password"
                name="password"
                value={this.state.password}
              />
            </div>

            <Form.Group
              className="Row col-lg-6 col-md-6"
              controlId="exampleForm.ControlSelect1"
            >
              <Form.Label>Department select</Form.Label>
              <Form.Control
                as="select"
                onChange={this.changeHandler}
                name="department"
				defaultValue="Select"
              >
				<option value="Select">Select</option>
                <option value="SWE">SWE</option>
                <option value="CSE">CSE</option>
                <option value="ICT">ICT</option>
                <option value="IT">IT</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </Form.Control>
            </Form.Group>


			<Form.Row className="Row col-lg-12 col-md-12">
    <Form.Group as={Col}>
      <Form.Label>City</Form.Label>
      <Form.Control onChange={this.changeHandler} name="city" />
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Division</Form.Label>
      <Form.Control as="select" defaultValue="Select" onChange={this.changeHandler} name="division">
		<option name="division" value="Select">Select</option>
		<option name="division" value="Dhaka">Dhaka</option>
        <option name="division" value="Barisal">Barisal</option>
		<option name="division" value="Chittagong">Chittagong</option>
		<option name="division" value="Mymensingh">Mymensingh</option>
		<option name="division" value="Sylhet">Sylhet</option>
		<option name="division" value="Khulna">Khulna</option>
		<option name="division" value="Rajshahi">Rajshahi</option>
		<option name="division" value="Rangpur">Rangpur</option>
		
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label name="zip">Zip</Form.Label>
      <Form.Control type="number" onChange={this.changeHandler} name="zip" />
    </Form.Group>
  </Form.Row>




            <fieldset className="Row col-lg-6 col-md-6">
              <Form.Group as={Row} onChange={this.changeHandler} name="gender">
                <Form.Label as="legend" column sm={2}>
                  Gender
                </Form.Label>
                <Col sm={12}>
                  <Form.Check
                    value="Male"
                    type="radio"
                    label="Male"
                    name="gender"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    value="Female"
                    type="radio"
                    label="Female"
                    name="gender"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    value="Others"
                    type="radio"
                    label="Others"
                    name="gender"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Form.Group>
            </fieldset>
          </div>

          <Button className="btn btn-primary" type="submit">
            Submit
          </Button>
        </Form>

        <div className="Row pt-4">
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
          <p>Department: {department}</p>
          <p>Gender: {gender}</p>
		  <p>City: {city}</p>
          <p>Division: {division}</p>
          <p>Zip: {zip}</p>
        </div>
      </div>
    );
  }
}

export default Graph;
