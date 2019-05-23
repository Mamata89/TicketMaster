import React from 'react'
import axios from 'axios'
import loadingGif from '../images/lg.double-ring-spinner.gif'


class UserPostShow extends React.Component{
    constructor(){
        super()
        this.state ={
            comments:[],
            isLoaded:false
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => this.setState(() => ({
            comments: response.data, isLoaded:true
        })))
    }
    render(){
        return(
            <div>

                <h2>User Comments - {this.props.match.params.id}</h2>
                {
                    this.state.isLoaded ? (
                        <div>
                       <ul> {
                            this.state.comments.map(function(ele) {
                                return (
                                    <li key = {ele.id }> {ele.body} </li>
                                )
                            })
                        } </ul>
                          
                        </div>
                    // ) :<p>Loading...</p>}
                    ) : <img src={loadingGif} alt="loading gif"/>}
               
            </div>
        )
    }
}

export default UserPostShow