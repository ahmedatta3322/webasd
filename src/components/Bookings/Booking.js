import React, { Component } from 'react'

import { CardContent,Content ,Card ,Container ,CardHeader,CardHeaderTitle} from 'bloomer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Booking extends Component {
    state = {
        bookings: [] ,
        dive: [],
        user: [],
        diver: [],
        date: new Date

    }
    componentDidMount(){     
         
    }
    handleChange (date1){
        this.setState({date: date1})
        //console.log(this.state.date)        

    }
    render() {
        //let price =
        //console.log(this.props.price)
        //{"Max depth: "}{this.props.dive.m_depth }
        return (
            <Container style={{paddingBottom: "0px"}}>
                <Card>
                    <CardHeader>
                        <CardHeaderTitle>Dive Details</CardHeaderTitle>
                    </CardHeader>
                    <CardContent>
                    <Content>
                        {"Location: "}{this.props.diver.location }<br></br>
                        {"Date: "}
                        <DatePicker showTimeSelect
                        selected={this.state.date}
                        onChange={this.handleChange.bind(this)}
                        ></DatePicker>
                        <br></br>
                        {"Price per Dive: "}{this.props.diver[this.props.price] } EGP
                        <br></br>
                        {"Diver: "}{this.props.diver.name}
                        <br></br>
                        <br></br>
                    </Content>
                    </CardContent>
                </Card>
                </Container>
        )
    }
}
