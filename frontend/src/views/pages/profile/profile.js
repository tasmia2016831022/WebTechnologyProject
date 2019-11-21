import React,{Component} from 'react';
class profile extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0,
          user : [] ,
        
        };
      }
    
      async componentDidMount(){
        this.setState({isLoading:true});
        const user =  JSON.parse(localStorage.getItem('user'));
        await fetch(`http://localhost:4000/user/`+user.userId)
        .then(res => res.json())
        .then(json => { 
            let user = json; 
            this.setState({user});
             console.log(user);
      
        })
      }
    render(){
        return(
            <div className="container">
           <div>Name : {this.state.user.name}</div>
           <div>Age : {this.state.user.age}</div>
           <div>Email : {this.state.user.email}</div>
           </div>
        );
    }
}
 
export default profile;