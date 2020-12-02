import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="content"
          defaultValue={props.content || "Content Body"}
        />
        <br />
        <input
          type="text"
          name="userName"
          defaultValue={props.userName || "UserName Body"}
        />
        <button className="btn btn-primary" type="submit">
          {props.buttonText}
        </button>
      </form>
    </React.Fragment>
  );
}
ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
