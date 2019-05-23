import React from 'react'
import axios from 'axios'
import loadingGif from '../images/lg.double-ring-spinner.gif'


class UserShow extends React.Component{
    constructor(){
        super()
        this.state ={
            user: {},
            isLoaded:false
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => this.setState(() => ({
            user: response.data, isLoaded:true
        })))
    }
    render(){
        return(
            <div>

                <h2>User Info - {this.props.match.params.id}</h2>
                {
                    this.state.isLoaded ? (
                        <div>
                            <label>Name - </label> {this.state.user.name }<br/>
                            <label>Email - </label> {this.state.user.email}<br/>
                            <label>City - </label> {this.state.user.address.city }<br/>
                        </div>
                    // ) :<p>Loading...</p>}
                    ) : <img src={loadingGif} alt="loading gif"/>}
               
            </div>
        )
    }
}

export default UserShow