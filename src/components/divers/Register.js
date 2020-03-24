import React, { Component } from 'react'

import { Field,Label,Control,Input,Select,Button,Container } from "bloomer"

import axios from 'axios';
export default class Register extends Component {
    state = {
        name: "",
        email: "",
        age: "", 
        user_name: "",
        photo: null,
        certification: "",
        n_dives: "",
        p_code: ""
    }
    handleimage(e){
      this.setState({[e.target.name]: e.target.files[0]})
    }
    handdlech(e){
        this.setState({[e.target.name]: e.target.value })
    }
    handlesub(e){
      
    
      e.preventDefault();
      const formdata = new FormData()
      
      for (let z in this.state) {
        //console.log(z + this.state[z])
        formdata.append(z,this.state[z])
        //console.log(formdata.getAll())
      }
      axios.post('https://divingapi.herokuapp.com/divers/' , formdata , {headers: { 'content-type': 'multipart/form-data' }}
      
      ).then(res => console.log(res.data)
      ).then(data => console.log(data))
      

          this.setState({
            name: "",
            email: "",
            age: "", 
            user_name: "",
            photo: null,
            certification: "",
            n_dives: "",
            p_code: ""})
  
      }
    
    render() {
        return (
          <Container isFluid style={{ margin: "auto"}}>
          <form encType="multipart/form-data">
        <Field >
          <Label>Name</Label>
          <Control>
            <Input type="text" placeholder="Text Input" name="name" onChange={ this.handdlech.bind(this) } value={this.state.name}/>
          </Control>
        </Field>
        <Field>
          <Label>Email</Label>
          <Control>
            <Input type="text" placeholder="Email" name="email" onChange={ this.handdlech.bind(this) } value={this.state.email}/>
          </Control>
        </Field>
        <Field>
          <Label>Age</Label>
          <Control>
            <Input type="number" placeholder="age" name="age" onChange={ this.handdlech.bind(this) } value={this.state.age}/>
          </Control>
        </Field>
        <Field>
          <Label>Username</Label>
          <Control>
            <Input type="Text" placeholder="Username" name="user_name" onChange={ this.handdlech.bind(this) } value={this.state.user_name}/>
          </Control>
        </Field>
        <Field encType="multipart/form-data">
          <Label>Image</Label>
          <Control>
            <Input accept="image/png, image/jpeg" type="file" placeholder="Image" name="photo" onChange={ this.handleimage.bind(this) }/>
          </Control>
        </Field>
        <Field>
          <Label>Certification</Label>
          <Select onChange={ this.handdlech.bind(this) } name="certification" value={this.state.certification}>
            <option>Dive master</option>
            <option>Dive instructor</option>
          </Select>
        </Field>
        <Field>
          <Label>Number of dives , "if more than 500 write 500"</Label>
          <Input type="number" name="n_dives" onChange={ this.handdlech.bind(this) } value={this.state.n_dives}/>
        </Field>
        <Field>
          <Label>Padi Code</Label>
          <Input type="number" name="p_code" onChange={ this.handdlech.bind(this) } value={this.state.p_code}/>
        </Field>
        <Field isGrouped>
          <Control>
            <Button isColor="primary" onClick={ this.handlesub.bind(this) } >Submit</Button>
          </Control>
          <Control>
            <Button isLink>Cancel</Button>
          </Control>
        </Field>
        </form>
        </Container>
      
          
        )
    }
}


        
