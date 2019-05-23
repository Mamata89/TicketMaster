import React from 'react'

function TicketRow(props) {
    const { name, department, ticket_code, priority, message, status} = props
    return (
        <tr>
             <td> {ticket_code} </td>
             <td> {name} </td>
             <td> {department} </td>
             <td> {priority } </td>
             <td> {message } </td>
             <td> {status } </td>
             </tr>
    )
}

export default TicketRow