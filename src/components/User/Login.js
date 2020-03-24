import React, { Component , useState,useEffect}from 'react'
import {Field,Label,Input,Button,Container,Link} from 'bloomer'

import axios from "axios"
import { useHistory } from "react-router-dom";
 function Login(props) {
    const [username,setUser] = useState()
    const [password,setPassword] = useState();
    let history = useHistory();
    function onchange(e){
        //history.push("/")
        if (e.target.name == "username") {
            setUser(e.target.value)
        }
        else {
            setPassword(e.target.value)
        }
        //console.log(username,password)
    }
    function onclick(e){
        let fdata = new FormData()
        fdata.append("username",username)
        fdata.append("password",password)
        axios.post("http://127.0.0.1:8000/api/token/",fdata).then(
            (e) =>{
            //console.log(e)
            
            if(e.status === 200){
               // console.log(fdata.get("username"))
               sessionStorage.setItem('access_token' ,e.data.access)
                axios.get("http://127.0.0.1:8000/user/").then(
                    user => {
                        for (let index = 0; index < user.data.length; index++) {
                          if (user.data[index].username == fdata.get("username")) {
                            sessionStorage.setItem('u_i' ,user.data[index].id)
                            return window.location.replace("/")
                            //this.setState({ user: user.data[index] });
                            //console.log(user.data[index],"check")
                          }
                        }
                    }
                )
                
                //props.toggle()
                
                //return history.push("/")
            }
            }
        )
    }
    return (
        
        <Container style={{width: "30%"}}>
        <Field>
            <Label>Enter the user name</Label>
            <Input  onChange={onchange.bind(this)} type="text" name="username"></Input>
            <Label >Enter the password</Label>
            <Input onChange={onchange.bind(this)} name="password" type="password"></Input>
        </Field>
        <Button onClick={onclick.bind(this)} IsColor="success">Login</Button>
        <Field ><Label  style={{marginTop:"-8%" , float: "right"}}>You don't have account ? <a href="/uregister">register now</a></Label></Field>
    </Container>
    
    
    )
    //this.onchange.bind(this)onClick={this.onclick.bind(this)}
    //return <h1>Hello</h1>;
  } 
  export default Login
  
/*export default class Login extends Component {
     
    onclick(e){
        //let text = this.props.page
        let fdata = new FormData()
        let history = useHistory();
        //fdata.append("email",this.state.email)
        fdata.append("username",this.state.username)
        fdata.append("password",this.state.password)
        axios.post("http://127.0.0.1:8000/api/token/",fdata).then(
            (e) =>{console.log(e)
            localStorage.setItem('access_token' ,e.data.access)
            if(e.status === 200){
                //console.log(text)
                //window.location.replace("/diver")
                //console.log(this.props.toggle.handleauth)
                
                history.push("/");
                
                window.location.replace("/"+this.props.page+"/"+this.props.third)
                return this.props.toggle()
            }
            }
        )
    }
    render() {
        console.log(this.props.toggle)
        reactLocalStorage.set=('access_token' ,"e.data.access")
        //console.log(reactLocalStorage)
        return (
            <Container style={{width: "30%"}}>
                <Field>
                    <Label>Enter the user name</Label>
                    <Input onChange={this.onchange.bind(this)} type="text" name="username"></Input>
                    <Label >Enter the password</Label>
                    <Input onChange={this.onchange.bind(this)} name="password" type="password"></Input>
                </Field>
                <Button onClick={this.onclick.bind(this)} IsColor="success">Login</Button>
            </Container>
        )
    }
}
*/