import React from 'react';
import axios from 'axios'     
import TicketsTable from './TicketsTable'
import TicketForm from './TicketForm';
import './App.css';

class App extends React.Component {
  constructor(){
    console.log(constructor)
    super()
    this.state = {
      tickets : []
    }
  }
//life cycle methods
// componentWillMount(){
//   console.log('componnet will mount')
// }   //pre render

//this is alife cycle method
componentDidMount(){
  //api call
  axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=49c3d2d06e86a6aa')
    .then(response => {
      console.log(response.data)
      //update state needs to be done via the setState method
      //must always return a new object
      //when the state value updates , the render method is called
      this.setState(() =>({tickets : response.data})
      )
    })
    .catch(err => {
      console.log(err)
    })
}

handleFormData = (ticketData) =>{
  //console.log(ticketData)
  this.setState((prevState) => ({
    tickets : [...prevState.tickets , ticketData]
  }))
}

  render() {
    console.log('render method')
    return (
      <div>
       <center><h1>Ticket Master</h1></center> 
      
        <div className="main-div">
              
                 
                    <TicketsTable 
                    tickets={this.state.tickets}
                    />
               
                  <div className="main-form">
                  <h2> Add Form</h2>
                  <TicketForm handleFormData =  {this.handleFormData}/>
                  </div>
                  
              
        </div>

        </div>
      
    );
  }
}


export default App;



//New App.js File
//npm install --save react-router-dom
// import React from 'react';
// import { BrowserRouter, Route, Link }  from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Courses from './components/Courses'
// import Contacts from './components/Contacts'
// import UserList from './components/UserList'
// import Usershow from './components/Usershow'
// import UserPost from './components/UserPost'
// import UserPostShow from './components/UserPostShow'
// class App extends React.Component{
//   render(){
//     return(
//       <BrowserRouter>

//           <div>
//             <ul>
//               <li><Link to="/">Home Page</Link></li>
//               <li><Link to="/about">About Page</Link></li>
//               <li><Link to="/courses">Courses Page</Link></li>
//               <li><Link to="/contact">Contacts Page</Link></li>
//               <li><Link to="/userlist">Users ListPage</Link></li>
//               <li><Link to="/userpost">Users Post Page</Link></li>
             
//             </ul>

//             <Route path="/" component={Home} exact={true}/>
//             <Route path="/about" component={About}/>
//             <Route path="/courses" component={Courses}/>
//             <Route path="/contact" component={Contacts}/>
//             <Route path="/userlist" component={UserList} exact={true}/>
//             <Route path="/users/:id" component={Usershow}/>
//             <Route path="/userpost" component={UserPost} exact={true}/>
//             <Route path="/userPost/:id" component={UserPostShow}/>
//           </div>

//       </BrowserRouter>
//     )
//   }
// }
// export default App;