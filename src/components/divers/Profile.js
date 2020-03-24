import React, { Component } from 'react'
import { MessageHeader, MessageBody, Message, Button, Image, Columns, Column, Box, Content } from 'bloomer'
import axios from 'axios';
export default class Profile extends Component {
    state = {
        diver: []

    }
    componentDidMount(){
        console.log(this.props)
        axios.get("http://127.0.0.1:8000/divers/",{headers: {
            'Authorization': "JWT " + sessionStorage.getItem('access_token'),
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }}).then(
            (e)=> { 
                this.setState({diver: e.data[0]})
                for(let x of e.data)
                {
                    //console.log(x)
                    if (x.id == this.props.diver) {
                        console.log(x)
                        this.setState({diver: x})
                    }
                }
                //console.log(this.state)
            }
        )

    }
    onclick(){
        //console.log(this)
        window.location.replace("/newbooking/"+ this)
    }
    render() {
        //console.log("check")
        return (
            <Columns style={{ padding: "2vw" , backgroundColor: "white"}} >
                <Column isSize="1/3">
                    <Box>
                        <Image style={{ borderRadius: "25px" }} src='https://via.placeholder.com/580x260'></Image>
        <Content><p>{this.state.diver.name}</p></Content>
                    </Box>
                </Column>
                <Column>
                    <Box>
                        <Columns>
                            <Column>
                                <p>Price per guided dive</p>
                                {this.state.diver.gprice} EGP
                            </Column>
                            <Column>
                                <Button onClick={this.onclick.bind(this.state.diver.id + "/" +"gprice" )}>Book</Button>
                            </Column>
                            <Column>
                                <p>Price per Intro dive</p>
                                {this.state.diver.iprice} EGP
                            </Column>
                            <Column>
                                <Button onClick={this.onclick.bind(this.state.diver.id + "/" +"iprice" )}>Book</Button>
                            </Column>
                        </Columns>
                    </Box>
                    <Box>
                        <h3>Availbe courses: </h3>
                        <Columns>
                            <Column>
                                <p>Open water</p>
                            </Column>
                            <Column><Button onClick={this.onclick.bind(this)}>Book</Button></Column>
                            <Column>
                                <p>Advanced Diving</p>
                            </Column>
                            <Column><Button onClick={this.onclick.bind(this)}>Book</Button></Column>
                        </Columns>
                    </Box>
                    <Box>
                        <Message>
                            <MessageHeader>Bio</MessageHeader>
                            <MessageBody>
                                
                            {this.state.diver.bio}
                    </MessageBody>
                        </Message>
                    </Box>
                </Column>
            </Columns>
        )
    }
}
