import React, { Component } from 'react'
import {Hero,Content,Footer,Columns, Column ,Navbar, NavbarBrand, NavbarDropdown, NavbarEnd, NavbarItem, NavbarLink, NavbarMenu, NavbarStart, Container } from "bloomer"

export default class Layoutheader extends Component {
  onclick(e){
    //sessionStorage.setItem('access_token' ,null)
    sessionStorage.clear()
  }
  run(){
    if(this.props.isauth === false){
      //sessionStorage.clear()
      return(
      <div style={{}}>
        <Container style={{maxWidth: "111111px" , fontFamily:"Roboto"}}>
         <Navbar style={{ backgroundColor: "transparent",borderLeft: 'solid 0.1px #81b6cb', margin: '0',fontSize: "1.5em"}}>
           <NavbarMenu >
             <NavbarStart>
             <NavbarItem href='/uregister' style={{ color: "black" , fontSize: "1em", fontWeight: "bold",fontFamily:"Potra" }}>Sign Up</NavbarItem>
             <NavbarItem href='/login' style={{ color: "black" , fontSize: "1em", fontWeight: "bold",fontFamily:"Potra" }}>Sign In</NavbarItem>  
             <NavbarItem href='/diverlogin' style={{ color: "black" , fontSize: "1em", fontWeight: "bold",fontFamily:"Potra" }}>Diver sign in</NavbarItem>         
             <NavbarItem hasDropdown isHoverable >
                 <NavbarLink style={{ color: "black" , fontSize: "1em", fontWeight: "bold",fontFamily:"Potra" }}>Divers</NavbarLink>
                 <NavbarDropdown>
                   <NavbarItem href='/diversview/dahab'>Dahab</NavbarItem>
                   <NavbarItem href='/diversview/marsa'>Marsa</NavbarItem>
                 </NavbarDropdown>
               </NavbarItem>
               
             </NavbarStart>
           </NavbarMenu>
           <NavbarEnd>
             <NavbarBrand style={{ color: "white" , fontSize: "1em", fontWeight: "bold",fontFamily:"Potra" }}>
               <a href="/">
               <img style={{height:"4vw",marginRight: "2vw"}} src="https://i.ibb.co/c1LNNg3/Logo-Makr-0-LRAIB.png"></img>
               </a>
     </NavbarBrand>
           </NavbarEnd>
         </Navbar>
         <Hero style={{marginTop: "5%"}}>
         {this.props.content}
         </Hero>
         <Footer id='footer' style={{backgroundColor:"gainsboro"}}>
         <Content>
             <Columns>
                 <Column>
                     <p style={{margin: "auto",marginLeft: "37%"}}>
                         Made by CairoScript , with love and <a>Ahmed atta</a>
                     </p>
                 </Column>
             </Columns>
             
         </Content>
         </Footer>
         </Container>
 
 </div>)
    }
    else {
      return(
        <div style={{}}>
       <Container style={{maxWidth: "111111px" , fontFamily:"Roboto"}}>
        <Navbar style={{ backgroundColor: "transparent",borderLeft: 'solid 0.1px #81b6cb', margin: '0',fontSize: "1.5em"}}>
          
          <NavbarMenu >
            <NavbarStart>
            <NavbarItem href='/' onClick={this.onclick} style={{ color: "black" , fontSize: "1em", fontWeight: "bold",fontFamily:"Potra" }}>Logout</NavbarItem>         
            <NavbarItem href='/bookings' style={{ color: "black" , fontSize: "1em", fontWeight: "bold",fontFamily:"Potra" }}>Your bookings</NavbarItem>
            
            </NavbarStart>
          </NavbarMenu>
          <NavbarEnd>
            <NavbarBrand style={{ color: "white" , fontSize: "1em", fontWeight: "bold",fontFamily:"Potra" }}>
              <a href="/">
              <img style={{height:"4vw",marginRight: "2vw"}} src="https://i.ibb.co/c1LNNg3/Logo-Makr-0-LRAIB.png"></img>
              </a>
    </NavbarBrand>
          </NavbarEnd>
        </Navbar>
        <Hero style={{marginTop: "5%"}}>
        {this.props.content}
        </Hero>
        <Footer id='footer' style={{backgroundColor:"gainsboro"}}>
        <Content>
            <Columns>
                <Column>
                    <p style={{margin: "auto",marginLeft: "37%"}}>
                        Made by CairoScript , with love and <a>Ahmed atta</a>
                    </p>
                </Column>
            </Columns>
            
        </Content>
        </Footer>
        </Container>

</div>
      )
    }
  }
  render() {
    //console.log(this.props)
    return (
     this.run()
    )
  }
}
