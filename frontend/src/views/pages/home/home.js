import React, {Component} from 'react';
import {
    Carousel,
    CarouselItem,
    Col, 
    Row,
    Card,
    CardBody,
    CarouselCaption,
    CardHeader,
    CarouselIndicators,
    CarouselControl,
    Button,
    CardFooter
  } from "reactstrap";
class home extends Component{
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0,
          cardData : [] ,
          temp : null,
          isLoading : false
        };
      }
    
      async componentDidMount(){
        this.setState({isLoading:true});
        await fetch(`http://localhost:4000/post/`)
        .then(res => res.json())
        .then(json => { 
            let cardData = json; 
            this.setState({cardData});
             console.log(cardData);
      
        })
      }
    render(){
        return(
            <div className="container">
             <Card>
             <CardHeader className="text-center text-md-center" >  <h3>News Feed</h3> </CardHeader>
             <div style={{margin:'10px'}}> </div>
           <CardBody> 
           <Row>
     
           {
             this.state.cardData.map(forEach => 
               
               <Col xs="12" sm="6" md="3" key={forEach._id}>
                 <Card key={Math.random()}>
                 <CardHeader>
                   {forEach.userName + " says: "}
                   <div style={{margin:'10px'}}> </div>
                 </CardHeader>
                 <CardBody>
                   <div> <h5> {forEach.title} </h5></div>
                   <div>{forEach.content}</div>
                 </CardBody>
                 <CardFooter>
                 <div style={{margin:'20px'}}> </div>
                 </CardFooter>
                 </Card>
                 
               </Col>
               
     
               )
           }
           </Row>
           </CardBody>
           </Card>
           </div>
        );
    }

}
export default home;
