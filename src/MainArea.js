import React , {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import PeopleCard from './PeopleCard';
import CarouselDesign from '../src/CarouselDesign';
import './MainArea.css'
export default class MainArea extends Component {
  constructor(){ 
  super();
  this.state = {
      people : [
          { id : 1,
            name : "David",
            company : "Bently",
            description : "Works here from last 10 years"
          },
          { id:2,
            name : "Abdul Azeem Sidhu",
            company : "Hash logix",
            description : "Works here from last 1 years"
          },
          { id:3,
            name : "Zeeshan",
            company : "Radec",
            description : "Works here from last 1 years"
          },
          { id:4,
            name : "Farhan",
            company : "Techlogix",
            description : "Works here from last 1 years"
          },
          { id:5,
            name : "David",
            company : "Bently",
            description : "Works here from last 10 years"
          },
          { id:6,
            name : "Abdul Azeem Sidhu",
            company : "Hash logix",
            description : "Works here from last 1 years"
          },
          { id:7,
            name : "Zeeshansss",
            company : "Radec",
            description : "Works here from last 1 years"
          },
          { id:8,
            name : "Farhan",
            company : "Techlogix",
            description : "Works here from last 1 years"
          }

      ]
  }
  }

  removePerson(id){
    this.setState({ people : this.state.people.filter(person => person.id != id)})
    console.log(this.state.people)
  }

  
  
    render() {
    
        let peopleCards = this.state.people.map(person => {
            return (

                
                    <Col sm="3">
                <PeopleCard  removePerson=  {this.removePerson.bind(this)}    person = {person}/>
                    </Col>
                
            )
        })

        return (

      <div>
            <Container fluid className= "main-area">
             <Row>
                 {peopleCards}
            </Row>
      
            </Container>

            <Container>
              <CarouselDesign/>

            </Container>

        
      </div>
    )
  }
}




Container.propTypes = {
    fluid:  PropTypes.bool
    // applies .container-fluid class
  }


  Row.propTypes = {
    noGutters: PropTypes.bool,
    // see https://reactstrap.github.io/components/form Form Grid with Form Row
    form: PropTypes.bool
  }


  const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    // example size values:
    // 12 || "12" => col-12 or col-`width`-12
    // auto => col-auto or col-`width`-auto
    // true => col or col-`width`
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array,
}


