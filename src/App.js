import React, { Component } from 'react'
import View from "./components/courses/View.js"
import Index from "./components/Index.js"
import Divers from './components/divers/Divers.js'
import Register from './components/divers/Register.js'
import Create from './components/courses/Create.js'
import Headers from './components/layout/Header'
import Booking from './components/Bookings/Booking.js'
import List from './components/Bookings/List.js'
import New from './components/Bookings/New.js'
import Layoutheader from './components/layout/Layoutheader.js'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Profile from './components/divers/Profile.js'
import Registration from './components/User/Registration.js'
import Login from './components/User/Login.js'
import Diverlogin from './components/divers/Diverlogin.js'
//import Panal from './components/layout/Panal.js'
//import { useHistory } from "react-router-dom";
export default class App extends Component {
    url = document.URL;
    urls = document.URL.split("/");
    maintype = this.urls[3] 
    location = this.urls[4] 
    thirdtype = this.urls[this.urls.length - 1];
    //history = useHistory();
    run(){
        return(
        <Router>
         <Switch>
             <Route path="/login">
             <Headers isauth={this.props.isauth} content={<Login page={this.location} third={this.thirdtype} toggle={this.props.toggle}></Login>}></Headers>
             </Route>
             <Route path="/diverlogin">
             <Headers isauth={this.props.isauth} content={<Diverlogin page={this.location} third={this.thirdtype} toggle={this.props.toggle}></Diverlogin>}></Headers>
             </Route>
             <Route path="/uregister">
             <Headers isauth={this.props.isauth} content={<Registration ></Registration>}></Headers>
             </Route>
             <Route path="/diversview">
             <Headers isauth={this.props.isauth} content={<Divers location={this.location}></Divers>}></Headers>
             </Route>
             <Route path="/bookings">
             <Headers isauth={this.props.isauth} content={<List location={this.location}></List>}></Headers>
             </Route>
             <Route path="/courses"> 
             <Headers isauth={this.props.isauth}content={<View ></View>}></Headers>
             </Route>
             <Route path="/booking">
             <Headers isauth={this.props.isauth} content={<Booking location={this.location}></Booking>}></Headers>
             </Route>
            <Route path="/register">
                <Headers isauth={this.props.isauth} content={<Register></Register>}></Headers>
            </Route>
            <Route path="/create">
                <Headers isauth={this.props.isauth} content={<Create></Create>}></Headers>
            </Route>
            <Route path="/newbooking">
                <Headers isauth={this.props.isauth} content={<New id={this.location} price={this.thirdtype}></New>}></Headers>
            </Route>
            <Route path="/diverprofile">
                <Headers isauth={this.props.isauth} content={<Profile diver={this.location}></Profile>}>
                </Headers>
            </Route>
            <Route path="/">
            <Headers isauth={this.props.isauth} content={<Index></Index>}></Headers>
            </Route>
         </Switch>
        </Router>)
    }
    render() {
        
        //console.log(this.url , this.maintype , "http://127.0.0.1:8000/"+this.maintype)
        
        if(this.location === "undefined"){
            //this.location = ""
            window.location.replace(this.maintype + "/")
            return this.run()
        } 
        else if (this.maintype === "undefined" ){
            window.location.replace("/")
            
            return this.run()
        }
        else if (this.thirdtype === "undefined"){
            //this.thirdtype = ""
            return this.run()
        }
        else {
            return this.run()
        }
        
        
        
    
}
}
//ReactDOM.render(<App /> , document.getElementById("root"))
/*
if (this.url == "http://localhost:3000/"){
            console.log(this.url)
            return (
                <div style={{width: "100vw"}}>
                <Header></Header>
                <Container >
                
                    <Index></Index>
                </Container>
                </div>
                
            )
        }
        else if(this.url == ('http://localhost:3000/' + this.maintype + "/" + this.location)){
            //this.maintype = this.maintype.replace(this.maintype[0],this.maintype[0].toUpperCase())
            console.log(this.urls ,this.x[this.maintype],"asdas")
            return(
                <body id="second">
                    <div>
                <Header></Header>
                <Container id="here"> 
                    <Columns>
                    <Column isSize="3/4">{this.x[this.maintype]}</Column>
                    </Columns>
                </Container>
                </div>
                </body>
                
                
            )
        }*/