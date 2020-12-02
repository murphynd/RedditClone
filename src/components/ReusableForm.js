import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="content" placeholder="Content Body" />
        <br />
        <input type="text" name="userName" placeholder="UserName" />
        {/* <input type="hidden" name="upvotes" value="0" />
        <input type="hidden" name="downvotes" value="0" /> */}
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
