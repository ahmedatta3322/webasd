import React, { Component } from 'react'
//import Header from "../layout/Header.js"
//import { Button } from 'react-bulma-components';
import { Box,Card,Select, Columns, Column, Button, Content } from "bloomer"
import './index.css'
export default class Index extends Component {
  location = ""
  url = ""
  handlesubmit(e) {
    this.location = document.getElementById("selecttow").value
    window.location.href = "diversview" + "/" + this.location
    //console.log(this.location)

  }
  render() {
    document.body.style = 'background-image: url("https://images.unsplash.com/photo-1495004984586-0dc339ad4b2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80");';
    return (
      <Columns>
        <Column isSize='1/2'>
        </Column>
        <Column isSize='1/  2' >
          <Card isSize="1/2" style={{ marginRight: "5%", height: "100%", borderRadius: "15px" }}>
        
              <Content style={{padding: "3vw 5vw"}}>
                <h1>Book your unique dive now in Egypt .</h1>
              </Content>
           
           <Box style={{border: "none"}}>
            <Select isSize="medium" id="selecttow" style={{marginLeft: "10vw"}}>
              <option>Dahab</option>
              <option>marsa</option>
            </Select>
            <Button id="btn" onClick={this.handlesubmit.bind(this)} isSize="medium" isColor="success"> Check Options </Button>

            </Box>

          </Card>
        </Column>
      </Columns>

    )
  }
}