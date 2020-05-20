import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div class="containerTwo">
      <form onSubmit={props.formSubmissionHandler}>
      <h1>Fill out the form below</h1>
      <hr></hr><br></br>
        <center><input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
          <br></br>
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
          <br></br>
        <button type='submit'>{props.buttonText}</button></center>
      </form></div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;