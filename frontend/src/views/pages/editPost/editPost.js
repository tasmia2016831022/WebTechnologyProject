import React,{Component} from 'react';
import { Button, FormGroup, Label, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { ButtonDropdown,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class editPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            content: null,
            title : null,
            data : []
        }

        this.postData = this.postData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deletePost = this.deletePost.bind(this);
    } 
    
     handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
   }


   async componentDidMount(){
    this.setState({isLoading:false});
    const {data} = this.props.location.state;
    this.setState({data});
    const title = data.title;
    this.setState({title});
    const content = data.content;
    this.setState({content});
}

    async postData(event) {
   
        let data = [{
            'propName' : "title",
            'value' : this.state.title
          },
          {
            'propName' : "content",
            'value' : this.state.content
          }
        ];
     

        const { user } = this.state;
        await fetch(`http://localhost:4000/post/`+this.state.data._id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
              }
        }).then(res => res.json())
        .then(json => {
          alert("Updated Successfully");
          window.location.replace("/");
         });
    }

    async deletePost(event) {
        const { user } = this.state;
        await fetch(`http://localhost:4000/post/`+this.state.data._id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
              }
        }).then(res => res.json())
        .then(json => {
          alert("Post Deleted");
          window.location.replace("/");
         });
    }

    render() {
        if(this.state.isLoading){
            return(<div>Loading ....</div>);
        }
        else{
        return (
            <div className="animated fadeIn">
                {/* <h3>Give a title:</h3> */}
                <Row>
                    <Col xs="12">
                        <h5>Edit title: </h5>
                        <FormGroup>
                            <Input type="text" name="title" id="Title"  placeholder={this.state.data.title} onChange={this.handleChange} required/>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col xs="12">
                        <h5>Edit Content: </h5>
                        <FormGroup>
                            <Input type="text" name="content" id="contnet"  placeholder={this.state.data.content} onChange={this.handleChange} required/>
                        </FormGroup>
                    </Col>
                </Row>
            
                <div style={{margin:'10px'}}>

                    <Row>
                        <Col sm="16" md={{ size: 6, offset: 4 }}>
                            <Button color="primary" className="px-4" onClick={this.postData}>Submit</Button>
                        </Col>
                    </Row>
                </div>

                <div style={{margin:'10px'}}>

               <Row>
                 <Col sm="16" md={{ size: 6, offset: 4 }}>
                     <Button color="danger" className="px-4" onClick={this.deletePost}>Delete</Button>
                </Col>
              </Row>
</div>

                {/* <div dangerouslySetInnerHTML={ { __html: this.state.body } }></div> */}

            </div>
        );
            }
    }
}
 
export default editPost;