import React, { Component } from "react";
import {
  Button,
  Box,
  Container,
  Notification,
  Card,
  CardHeader,
  CardHeaderTitle,
  CardHeaderIcon,
  Icon,
  CardImage,
  CardContent,
  Media,
  MediaLeft,
  MediaContent,
  Title,
  Subtitle,
  Content,
  Image,
  Columns,
  Column
} from "bloomer";
import { BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";
import New from "../Bookings/New";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import New from '../Bookings/New.'


export default class Divers extends Component {
  link = "/newbooking";
  state = {
    data: []
  };
  current = [];
  handleclick(e) {
      return window.location.replace("/diverprofile/" + this.id)
  }
  componentDidMount() {
    let arr = [];
    fetch("http://127.0.0.1:8000/divers/",{headers: {
      'Authorization': "JWT " + sessionStorage.getItem('access_token'),
      'Content-Type': 'application/json',
      'accept': 'application/json'
  }})
      .then(response => {
        if (response.status !== 200) {
          if(response.status == 401){
            sessionStorage.clear()
            window.location.replace("/login/" + "diversview"+"/"+this.props.location.toLowerCase())
          }
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
        }
        
        return response.json();
      })
      .then(data => {
        //console.log(data)
        for (let x of data) {
          if (x.location == this.props.location.toLowerCase()) {
            arr.push(x);
          }
        }
        this.setState({
          data: arr
        });
      });
  }
  render() {
    //console.log(localStorage.getItem('access_token'))
    return (
      <Container style={{ border: "", width: "100%", paddingBottom: "6vw" }}>
        <Columns isCentered isMultiline style={{}}>
          {Object.values(this.state.data).map(el => {
            return (
              <Column isSize={3}>
                <Card>
                  <CardImage>
                    <Image isRatio="4:3" src={el.photo} />
                  </CardImage>
                  <CardContent>
                    <Media>
                      <MediaContent>
                        <Title isSize={3}>{el.name}</Title>
                        <Subtitle isSize={3}>{el.cert}</Subtitle>
                      </MediaContent>
                    </Media>
                  </CardContent>
                  <Button isColor="primary" onClick={this.handleclick.bind(el)}>
                    Book
                  </Button>
                </Card>
              </Column>
            );
          })}
        </Columns>
      </Container>
    );
  }
}
