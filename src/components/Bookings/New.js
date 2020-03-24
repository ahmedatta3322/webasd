import React, { Component } from "react";
import {
  Columns,
  Column,
  Button,
  Input,
  Control,
  Field,
  Container,
  Card,
  CardHeader,
  CardHeaderTitle,
  Label
} from "bloomer";
import axios from "axios";
import Booking from "./Booking.js";
export default class New extends Component {
  state = {
    bookings: [],
    dive: [],
    user: [],
    diver: [],
    check: false,
    tprice: 0,
    dive:[]
  };
  componentDidMount(x) {
    axios.get("http://127.0.0.1:8000/divers/").then(diver => {
      for (let index = 0; index < diver.data.length; index++) {
        if (diver.data[index].id == this.props.id) {
    
          this.setState({ diver: diver.data[index] });
        }
      }
    });
    console.log(sessionStorage.getItem("u_i"))
  }
  onclick(e) {
    const formdata = new FormData()
    const fdata = new FormData()
    formdata.append("Diver",this.state.diver.id)
    formdata.append("Location",this.state.diver.location)
    formdata.append("Price",this.state.tprice)
    formdata.append("Date","1996-02-01T22:10:00Z")
    formdata.append("m_depth","40")
    console.log(formdata.get("Diver"),"check")
   /* for (var value of formdata.entries()) {
      console.log("check",value); 
   }*/
    axios.post("http://127.0.0.1:8000/dive/" + formdata.get("Diver"),formdata).then(x => {
      if(x.status == 201){
        this.setState({"dive": x.data})
        fdata.append("Dive",this.state.dive.id)
        fdata.append("User",sessionStorage.getItem("u_i"))
        console.log(sessionStorage.getItem("u_i"))
        axios.post("http://127.0.0.1:8000/bookings/",fdata).then(y=>
        {
         //console.log(y)
        }
      )
      }
    })
  }
  handlechang(e){
    //console.log(e.target.value)
    this.setState({tprice: e.target.value*this.state.diver[this.props.price]})
  }
  
  render() {
    //console.log(this.props)
    return (
      <Container style={{ width: "70%" }}>
        <Columns style={{ width: "96.1%", marginLeft: "2%", padding: "0px" }}>
          <Column >
            {" "}
            <Booking
              price={this.props.price}
              dive={this.state.dive}
              user={this.state.user}
              booking={this.state.bookings}
              diver={this.state.diver}
              style={{ padding: "0px" }}
            ></Booking>
          </Column>
          <Column isSize={4} style={{ backgroundColor: "gainsboro" ,height:"19.1vw",marginTop:"1vw"}}>
            <Label>How many dives you want ?</Label>
            <Input type="number" name="number" onChange={this.handlechang.bind(this)} />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
    <Label>Total cost: {this.state.tprice}</Label>
          </Column>
        </Columns>
        <Columns>
        <Column isSize="2/3"></Column>
        <Column >
        <Button
              isColor="primary"
              style={{ marginTop: "1%" ,marginLeft:"30%"}}
              onClick={this.onclick.bind(this)}
            >
              Confirm the booking
            </Button></Column>
        
        </Columns>
        
      </Container>
    );
  }
}
