import React , {Component} from 'react';
import { Alert , Button} from 'reactstrap';
import  Example from './NavBar';
//import { Alert  , Row , Col , Container} from 'react-bootstrap';
//import { Row , Col , Container , Jumbotron,  ButtonToolbar , Alert , Nav , Navbar ,  Button ,  Form , FormControl } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Container, Row, Col , Spinner} from 'reactstrap';
import MainArea from './MainArea';
import PeopleCard from './PeopleCard';


import logo from './logo.svg';
import './App.css';


export default class App extends Component {
  render() {
    return (
     
      <div>


        <Example/>
        <MainArea/>
        
    </div>
    )
  }
};



