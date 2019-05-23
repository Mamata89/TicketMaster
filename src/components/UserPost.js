import React from 'react'
import axios from 'axios'
import {Link }  from 'react-router-dom'
class UserPost extends React.Component{

    constructor(){
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => this.setState(() => ({
                users:response.data
            })))
    }
    render(){
        return(
            <div>
                <h2>Listing Users - {this.state.users.length}</h2>
                <ul>
                    <ul>
                        {this.state.users.map(user => {
                            return(
                                //<li key={user.id}>{user.name}</li>
                                <li key={user.id}>
                                    <Link to={`/userPost/${user.id}`}>{user.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </ul>
            </div>
        )
    }
}

export default UserPost