import React from 'react'
import axios from 'axios';

class TicketForm extends React.Component{
    constructor(){
        super()
        this.state = {
            name : '',
            department : '',
            priority : '',
            message : ''
        }
    }

    handleNameChange =(e) =>{
        const name = e.target.value
        this.setState(() => ({ name}))
    }

    handleDepartmentChange =(e) =>{
        const department = e.target.value
        this.setState(() => ({ department }))
    }

    handlePriorityChange =(e) =>{
        const priority = e.target.value
        this.setState(() => ({ priority }))
    }

    handleMessageChange =(e) =>{
        const message = e.target.value
        this.setState(() => ({ message }))
    }

    handleSubmit =(e)=>{
        e.preventDefault()
        const formData = {
            name : this.state.name ,
            department : this.state.department ,
            priority : this.state.priority,
            message : this.state.message
        }
        axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=49c3d2d06e86a6aa' ,formData)
            .then(response => {
                console.log(response.data)
                this.props.handleFormData(response.data)
                this.setState(() => ({
                    name : '',
                    priority : '',
                    message : '',
                    department : ''
                }))
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    

    render(){
        return(
            <div className="form-class">
                
                <form onSubmit = {this.handleSubmit}>
                   
                    <label>
                   <span className="name-span"> Name</span>
                        <input type = "text" value={this.state.name} onChange = {this.handleNameChange}/>
                    </label><br/>
                    
                    <label>
                    <span className="dept-span">department</span>
                        <select value = {this.state.department}
                         onChange = {this.handleDepartmentChange}>
                            <option value = "">Select</option>
                            <option value = "Technical">Technical</option>
                            <option value = "Sales">Sales</option>
                            <option value = "HR">HR</option>
                        </select>
                    </label><br/>
                    
                    <label>
                    <span className="priority-span">Priority</span>
                    <select value = {this.state.priority} 
                     onChange = {this.handlePriorityChange}>
                        <option value = "">Select</option>
                        <option value = "High">High</option>
                        <option value = "Medium">Medium</option>
                        <option value = "Low">Low</option>
                    </select>
                    </label><br/>
                   
                    <label className="msg-label">
                    <span className="msg-span">Meessage</span>
                        <textarea cols="70" value = {this.state.message}
                        onChange = {this.handleMessageChange}></textarea>
                    </label><br/>
                    <div className="butn-div">
                    <input type = "submit"className="submt" />
                    <input type = "reset"/>
                    </div>
                    
                    
                </form>
            </div>
        )
    }
}
export default TicketForm;