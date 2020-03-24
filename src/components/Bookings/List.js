import React, { Component } from 'react'
import axios from 'axios'
import {Column,Columns,Box,Image,Content,Button,Message,MessageBody,MessageHeader,Container} from 'bloomer'
export default class List extends Component {
    state ={
        user: {},
        booking: [],
        dives:[],
        divers:[]
    }
    componentDidMount(){
        
        axios.get("http://127.0.0.1:8000/user/",{headers: {
            'Authorization': "JWT " + sessionStorage.getItem('access_token'),
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }}).then(
            e => {
                //console.log(e)
                for (let index = 0; index < e.data.length; index++) {
                    if(e.data[index].id == sessionStorage.getItem("u_i")){
                        //console.log("check found it" , e.data[index])
                        this.setState({user: e.data[index]})
                        //console.log(this.state)
                        //console.log("check")
                    }
              }
            }
            
        ).catch(
            
            (e) => { 
                console.log(e,e.status)
                sessionStorage.clear()
                window.location.replace("/login/" + "bookings")
            }
        )

        axios.get("http://127.0.0.1:8000/bookings/",{headers: {
            'Authorization': "JWT " + sessionStorage.getItem('access_token'),
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }}).then(
            e => {
               
                let arr = []
             
                  
                    for (let index = 0; index < e.data.length; index++) {
                    
                        if(e.data[index].User == sessionStorage.getItem("u_i")){
                            //console.log("check found it" , e.data[index])
                            //console.log(e.data[index].User , sessionStorage.getItem("u_i"))
                            arr.push(e.data[index])
                        }
                        
                    }
                  
                
                this.setState({booking: arr})
            }

        ).catch(
            (e) => { 
                console.log(e,e.status)
                window.location.replace("/login/" + "bookings")
            }
        )
        axios.get("http://127.0.0.1:8000/dives/",{headers: {
            'Authorization': "JWT " + sessionStorage.getItem('access_token'),
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }}).then(
            e => {
                console.log(e,e.status)
                let arr = []
               
                    for (let index = 0; index < e.data.length; index++) {
                        for (let indexx = 0; indexx < this.state.booking.length; indexx++) {
                            if(this.state.booking[indexx].Dive == e.data[index].id)
                                arr.push(e.data[index])
                        }
                    }
                this.setState({dives: arr})
            }

        ).catch(                    
            (e) => { 
                console.log(e,e.status)
                window.location.replace("/login/" + "bookings")
            }
        )
        axios.get("http://127.0.0.1:8000/divers/",{headers: {
            'Authorization': "JWT " + sessionStorage.getItem('access_token'),
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }}).then(
            e => {
                let arr = []
                    for (let index = 0; index < e.data.length; index++) {
                            arr.push(e.data[index])
                    }
                    this.setState({divers: arr})
            }

        ).catch(                    
            (e) => { 
            //console.log(e,e.status)
               window.location.replace("/login/" + "bookings")
            }
        )
        //return 
    }
    onclick(e){
        
        let fdata = new FormData()
        fdata.append("id",this.id)
        fdata.append("Location",this.Location)
        fdata.append("Date",this.Date)
        fdata.append("Price",this.Price)
        fdata.append("m_depth",this["m_depth"])
        fdata.append("Diver",this.Diver)
        console.log(e.target,fdata,this)
        axios.delete("http://127.0.0.1:8000/dive/"+this.id,{data: fdata})
    }
    render() {
       return(
           <div style={{width: "90%",margin: "auto"}}>
           <Columns >
               <Column isSize="1/4">
               <Box>
                    <Image style={{ borderRadius: "25px" }} src='https://via.placeholder.com/580x260'></Image>
                        <Content><p></p></Content>
                </Box>
               </Column>

               <Column>
               {this.state.dives.map(
                   (e) => {
                    //console.log(e)
                    let diver = {}
                    for (let index = 0; index < this.state.divers.length; index++) {
                        if(e.Diver == this.state.divers[index].id){
                            
                            diver = this.state.divers[index]
                            //console.log(diver)
                        }
                        
                    }
                       return (   
                       <Box>Location: {e.Location} <br/>
                       Date: {"1996-02-01T22:10:00Z"}
                       <br/>Price: {e.Price} <br/>
                       Max depth: {e["m_depth"]} <br/>
                       Diver: { diver.name }
                       <Button onClick={this.onclick.bind(e)} style={{marginLeft: "80%",marginTop:"-5%"}} isColor="dangerous">Cancel the booking</Button>
                       </Box>   
                       
                       )
                   }
               )}
               </Column>
           </Columns>
           </div>
       )
    }
}
