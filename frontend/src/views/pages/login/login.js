import React,{Component} from 'react';
import  'bulma/css/bulma.css';
class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            email : null,
            password : null
        }

        this.postData = this.postData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    } 

    handleChange(event){
       this.setState({
           [event.target.name] : event.target.value
       });
      }

      async postData(event) {
        
          let data = {
             
              email : this.state.email,
              password : this.state.password
            };
       
  
          const { user } = this.state;
          console.log(data);
          
          await fetch(`http://localhost:4000/user/login`, {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                  "Content-Type": "application/json"
                }
          }).then(res => res.json())
          .then(response => {
            alert(JSON.stringify(response.message, null));
            localStorage.setItem('user',JSON.stringify(response));
            console.log(localStorage.getItem('user'));
            window.location.replace("/");
           });
      }
    render() { 
        return ( 
            <div className="container">
               <div class="field">
                 <label class="label">Email</label>
                <div class="control">
                    <input class="input" name ="email" type="text" placeholder="e.g. abc@mail.com" onChange={this.handleChange}/>
                </div>
                </div>

                <div class="field">
                 <label class="label">Password</label>
                <div class="control">
                    <input class="input"  name ="password" type="text" placeholder="e.g. 123456" onChange={this.handleChange}/>
                </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link" onClick={this.postData}>Login</button>
                    </div>
                </div>
           </div>
         );
    }
}
 
export default login;