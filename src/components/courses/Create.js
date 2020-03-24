import React, { Component } from 'react'
import { Field,Label,Input,Select,Button,Container } from "bloomer"
import axios from 'axios';

export default class Create extends Component {
    data = []
    state = {
        divers: "",
        Diver:"",
        requirment: "",
        thetype: "",
        duration: "",
        price: ""


    }
    componentDidMount(){
        axios.get("https://divingapi.herokuapp.com/divers/").then(
            res => {
                this.setState({divers: res.data})
                return res.data
            }
        )
        
       
    }

    handdlech(e){
        
        this.setState({[e.target.name]: e.target.value })
    }
    handleobject(e){
        //console.log("check")
        for(let x of this.state.divers){
            //console.log(x.name)
             if(e.target.value == (x.name+x.id)){
                    this.setState({"Diver": x.id })
                
                }
           }
           console.log(this.state)

        }
        
        
    
    submit(e){
        let form = new FormData();
        for (let z in this.state) {
            form.append(z,this.state[z])
          }
         
          axios.post('/courses/' , form).then(res => {console.log(res.data)}
          )
    }

    render() {
        for (let x in Object.keys(this.state.divers)) {
            this.data.push(this.state.divers[x])
        }
        return (    
            <Container>
                <Field>
                    <Label>The diver</Label>
                    <Select name="divers" onChange={this.handleobject.bind(this)}>
                       {
    this.data.map(
        (e) => 
    <option>{e.name}{e.id}</option>
    )
                       }
                    </Select>
                </Field>
                <Field>
                    <Label>Required course</Label>
                    <Select name="requirment" onChange={this.handdlech.bind(this)} value={this.state.name}>
                        <option>--Choose course</option>
                        <option>Open Water</option>
                        <option>Advanced</option>
                    </Select>
                </Field>
                <Field>
                    <Label>Course Type</Label>
                    <Select name="thetype" onChange={this.handdlech.bind(this)} value={this.state.name}>
                        <option>--Choose course</option>
                        <option>op</option>
                        <option>ad</option>
                    </Select>
                </Field>
                <Field>
                    <Label>Duration</Label>
                    <Input type="number" name="duration" onChange={this.handdlech.bind(this)} value={this.state.name}></Input>
                </Field>
                <Field>
                    <Label>Price</Label>
                    <Input type="number" name="price" onChange={this.handdlech.bind(this)} value={this.state.name}></Input>
                </Field>
                <Button onClick={this.submit.bind(this)}>Submit</Button>
            </Container>
            
        )
    }
}
//ReactDOM.render(<Create />,document.getElementById("create"))