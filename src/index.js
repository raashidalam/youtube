import React from "react";
import ReactDOM from "react-dom";
// import {BrowserRouter,Route} from "react-router-dom";
import "./style/app.css"; 

// import Home from "./components/Home";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Form from './components/form';
import Func from './components/func'
import Stateful from "./components/stateful";
import Main from "./components/Pure";
import GetData from "./components/GetData";
import Youtube from "./components/Youtube";
import {Switch,BrowserRouter as Router,Route, Redirect} from 'react-router-dom';
// import User from "./components/User";
// class App extends Component {
//   render() { 
//     return (  
//       <BrowserRouter>
//       <Route path="new"  Compoynent={Header}/>
//       </BrowserRouter>
//     );
//   }
// }
 
// export default App;

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// const Index = () => {
//   const name ="Raashid Alam";

//   return <h1>Hello {name}</h1>;
// };
ReactDOM.render(
   < Youtube/>
,document.getElementById('index'));
// ReactDOM.render(
//   <Layout/>,
//   document.getElementById('index'));