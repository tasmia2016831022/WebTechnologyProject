import React from 'react';
import {Navbar} from 'rbx';
import 'bulma/css/bulma.min.css';
import './navigation.css';

class navigation extends React.Component{
    render(){
        return(
            <Navbar
            className="navbar is-dark"
            role="navigation"
            aria-label="main navigation"
            style={{
              backgroundColor:"#30393A"
            }}>
            <Navbar.Menu>
              <div
                className="navbar-start"
                style={{
                  flexGrow: "1",
                  justifyContent: "center"
                }}
              >
                <Navbar.Item href="/">home</Navbar.Item>
                <Navbar.Item href="/home">home</Navbar.Item>
                <Navbar.Item href="/blogPost">blogPost</Navbar.Item>
                <Navbar.Item href="/detailPost">detailPost</Navbar.Item>
                <Navbar.Item href="/editPost">editPost</Navbar.Item>
                <Navbar.Item href="/mypost">Mypost</Navbar.Item>
                <Navbar.Item href="/login">login</Navbar.Item>
                <Navbar.Item href="/register">register</Navbar.Item>
                <Navbar.Item href="/profile">profile</Navbar.Item>
                
              </div>
            </Navbar.Menu>
          </Navbar>
        );
    }
}
export default navigation;