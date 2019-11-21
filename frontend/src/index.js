import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route,Link,BrowserRouter as Router } from 'react-router-dom'

import './index.css';
//import App from './App';
import home from './views/pages/home/home';
import blogPost from './views/pages/blogPost/blogPost';
import detailPost from './views/pages/detailPost/detailPost';
import editPost from './views/pages/editPost/editPost';
import login from './views/pages/login/login';
import myPost from './views/pages/myPost/mypost';
import profile from './views/pages/profile/profile';
import register from './views/pages/register/register'



import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
         <ul>
              <li><Link to="/">home</Link></li>
              <li><Link to="/blogPost">blogPost</Link></li>
              <li><Link to="/detailPost">detailPost</Link></li>
              <li><Link to="/editPost">editpost</Link></li>
              <li><Link to="/login">login</Link></li>
              <li><Link to="/myPost">mypost</Link></li>
              <li><Link to="/profile">profile</Link></li>
              <li><Link to="/register">register</Link></li>
          </ul>
          
      <div>
        <Route exact path="/" component={home} />
        <Route path="/home" component={home} />
        <Route path="/blogPost" component={blogPost} />
        <Route path="/detailPost" component={detailPost} />
        <Route path="/editPost" component={editPost} />
        <Route path="/login" component={login} />
        <Route path="/myPost" component={myPost} />
        <Route path="/profile" component={profile} />
        <Route path="/register" component={register} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
