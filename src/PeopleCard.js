import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button , Container  , Row , Col} from 'reactstrap';
import PropTypes from 'prop-types';
import './PeopleCard.css'
import { R_OK } from 'constants';


export default class PeopleCard extends Component {
    constructor(props){
        super(props);
    }
  render() {
    let { id , name , company } = this.props.person;
    //console.log("id" + id)

    return (
        
        
        <div  className = "main-cards">
       
                 <Card className="card-size" >  
                    <CardImg top width="100%" src={require('./logo-light.png')} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardSubtitle>{company}</CardSubtitle>
                        {/* <CardText>{this.props.person.description}</CardText> */}
                        <Button color ="danger" onClick={() => this.props.removePerson(id)}>Delete</Button> 
                    </CardBody>
                </Card>
              
        
      </div>
      
    )
  }
}

Card.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    inverse: PropTypes.bool,
    color: PropTypes.string,
    body: PropTypes.bool,
    className: PropTypes.string
  };
  