import React, { Component } from 'react'
import {Container,Field,Label,Input,Button} from 'bloomer'
import axios from "axios"
export default class Diverlogin extends Component {
    state = {
        username: "",
        password: ""
    }
    onclick(){
        let fdata = new FormData()
        fdata.append("username",this.state.username)
        fdata.append("password",this.state.password)
        axios.post("http://127.0.0.1:8000/api/token/",fdata).then(
            (e) => {
                console.log(e)
                if(e.status == 200){
                    sessionStorage.setItem('diver_access_token' ,e.data.access)
                    
                    //return window.location.replace("/profile")
                }
                
            }

            

        )

    }
    onchange(e){
        //console.log("check here" , this)
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state)
        

    }
    render() {
        //console.log(this)
        return (
            <Container style={{width: "30%"}}>
        <Field>
            <Label>Enter the user name</Label>
            <Input onChange = {this.onchange.bind(this)} type="text" name="username"></Input>
            <Label >Enter the password</Label>
            <Input onChange = {this.onchange.bind(this)} name="password" type="password"></Input>
        </Field>
        <Button onClick = {this.onclick.bind(this)} IsColor="success">Login</Button>
        <Field ><Label  style={{marginTop:"-8%" , float: "right"}}>You don't have account ? <a href="/uregister">register now</a></Label></Field>
    </Container>
        )
    }
}
