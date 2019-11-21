import React,{Component} from 'react';
import  'bulma/css/bulma.css';

class blogpost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            title : null,
            content : null,
            user : []
        }

        this.postData = this.postData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    } 

    handleChange(event){
       this.setState({
           [event.target.name] : event.target.value
       });
      }

      async componentDidMount(){
        const user =  JSON.parse(localStorage.getItem('user'));
        this.setState({user}); 
      }

      async postData(event) {
        
          let data = {
             
              title : this.state.title,
              content : this.state.content,
              userId : this.state.user.userId,
              userName : this.state.user.userName,
              token : this.state.user.token
            };
       
  
          const { user } = this.state;
          console.log(data);
          
          await fetch(`http://localhost:4000/post/`, {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                  "Content-Type": "application/json"
                }
          }).then(res => res.json())
          .then(response => {
            alert(JSON.stringify(response.message, null));
           });
      }
    render() { 
        return ( 
            <div className="container">
               <div class="field">
                 <label class="label">Title</label>
                <div class="control">
                    <input class="input" name ="title" type="text" placeholder="Title" onChange={this.handleChange}/>
                </div>
                </div>

                <div class="field">
                 <label class="label">Content</label>
                <div class="control">
                    <input class="input"  name ="content" type="text" placeholder="loremipsum.." onChange={this.handleChange}/>
                </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link" onClick={this.postData}>Post</button>
                    </div>
                </div>
           </div>
         );
    }
}
 
export default blogpost;