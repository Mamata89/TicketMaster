import React from 'react'
import TicketRow from './TicketRow'
// function component

function TicketsTable(props) {
    return (
        <div  className="table_css">
        <h2>Listing Tickets - {props.tickets.length}</h2>        
        <table>
       <thead>
         <tr>
           <th> Code </th>
           <th> Name </th>
           <th> Department </th>
           <th> Priority</th>
           <th> Message </th>
           <th> Status </th>
         </tr>
         
       </thead>
       <tbody>
         { props.tickets.map(ticket => {
           return (
             <TicketRow
                key = { ticket.ticket_code}
                // ticket_code = {ticket.ticket_code}
                // name = {ticket.ticket.name}
                // department = {ticket.department}
                // priprity = {ticket.priority}
                //status = {ticket.status}
                // message = {ticket.message}
                {...ticket} // es6 spread operator
                />
           )
         })}
       </tbody>
      </table>
      </div>
    )
}

export default TicketsTable
