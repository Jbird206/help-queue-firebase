import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
    <React.Fragment><div class="containerThree">
      <div onClick = {() => props.whenTicketClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <p><em>{props.formattedWaitTime}</em></p>
      </div>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Ticket;