import React, { Component } from 'react';
import axios   from "axios";
import { Form,Button } from "react-bootstrap";
import { event } from 'jquery';
import API from "./api";

class PersonDelete extends Component{

    state={
        id:"",
    }

    changehandler=(event)=>{
        this.setState({
            id:event.target.value
        })
    }

    // submithandler=(event)=>{
    //     event.preventDefault()

    //     API.delete(`users/${this.state.id}`)
    //     .then(res=>{
    //         console.log(res);
    //         console.log(res.data);
    //     })
    // }

    submithandler= async (event)=>{
        event.preventDefault();

        const res= await API.delete(`users/${this.state.id}`);

        console.log(res);
        console.log(res.data);
    }

    render(){
        return(
            <div>
        <div className="container">
          <Form onSubmit={this.submithandler}>
            <label>
                Person ID:
                <input
                  className="form-control"
                  type="text"
                  name="id"
                  onChange={this.changehandler}
                />
              </label>
              <div>
                <Button className="btn btn-primary" type="submit">
                  Delete
                </Button>
              </div>
          </Form>
        </div>
      </div>

        )
    }
}

export default PersonDelete;