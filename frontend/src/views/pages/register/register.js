import React,{Component} from 'react';
import  'bulma/css/bulma.css';
class register extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            name : null,
            email : null,
            age : null,
            phoneNo : null,
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
              name: this.state.name,
              email : this.state.email,
              age : this.state.age,
              phoneNo : this.state.phoneNo,
              password : this.state.password
            };
       
  
          const { user } = this.state;
          console.log(data);
          
          await fetch(`http://localhost:4000/user/signup`, {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                  "Content-Type": "application/json"
                }
          }).then(res => res.json())
          .then(json => {
            alert(JSON.stringify(json.message, null));
            window.location.replace("/login");
           });
      }

    render() { 

        return ( 
            <div className="container">
                  <div className="field">
                      <label className="label">Name</label>
                      <div class="control">
                            <input class="input" type="text" name="name" placeholder="e.g Alex Smith" onChange={this.handleChange}/>
                         </div>
                      
                  </div>
                  <div className="field">
                      <label className="label">Email</label>
                      <div class="control">
                            <input class="input" type="text" name="email" placeholder="e.g abc@mail.com" onChange={this.handleChange}/>
                         </div>
                      
                  </div>
                  <div className="field">
                      <label className="label">Phone No.</label>
                      <div class="control">
                            <input class="input" type="text" name="phoneNo" placeholder="e.g 123456" onChange={this.handleChange}/>
                         </div>
                      
                  </div>
                  <div className="field">
                      <label className="label">Age</label>
                      <div class="control">
                            <input class="input" name="age" type="text" placeholder="e.g 45" onChange={this.handleChange}/>
                         </div>
                      
                  </div>
                  <div className="field">
                      <label className="label">Password</label>
                      <div class="control">
                            <input class="input" type="text" name="password" placeholder="e.g 123456" onChange={this.handleChange}/>
                         </div>
                      
                  </div>

                  <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link" onClick={this.postData}>Submit</button>
                    </div>
                </div>
                  
            </div>
         );
    }
}
 
export default register;