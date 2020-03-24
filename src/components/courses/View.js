import React, { Component } from 'react'

import axios from 'axios';
import {Column,Columns,CardContent,MediaContent,Title,Subtitle,Content ,CardHeader,Card,CardHeaderTitle,CardHeaderIcon,Icon,Image,CardImage,MediaLeft,Media} from 'bloomer'
import { Container } from 'bloomer/lib/layout/Container';
export default class View extends Component {
    state = {
        data: []
    }
    
    
    
    
    componentDidMount(){
        //console.log(this.url1)
        axios.get('https://divingapi.herokuapp.com/courses/').then(
            (e) => {
                this.setState({data: e.data})
                
            }
        )
        }
        
    render() {
        //console.log(Object.values(this.state.data))
        //console.log(this.state)
        return (
        <Container>
            <Columns isCentered isMultiline	>
            {Object.values(this.state.data).map((e) => 
            {
                return(
                    <Column isSize='1/4'>
                <Card>
                    <CardHeader>
            <CardHeaderTitle>
                { e.thetype }
            </CardHeaderTitle>
            <CardHeaderIcon>
                <Icon className="fa fa-angle-down" />
            </CardHeaderIcon>
        </CardHeader>
        <CardImage>
            <Image isRatio='4:3' src='https://via.placeholder.com/1280x960' />
        </CardImage>
        <CardContent>
        <Media>
            <MediaLeft>
                <Image isSize='48x48' src='https://via.placeholder.com/96x96' />
            </MediaLeft>
            <MediaContent>
                <Title isSize={4}>{e.Diver}</Title>
                <Subtitle isSize={6}>@John Wick</Subtitle>
            </MediaContent>
        </Media>
        <Content>
            {e.requirment}
        </Content>
    </CardContent>
                </Card>
                </Column>
                )
            
            }
           
        )}
        </Columns>
        </Container>
        
        )
    }
}
//ReactDOM.render(<View />,document.getElementById("view"))