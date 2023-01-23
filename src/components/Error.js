import React from "react";
import PropTypes from 'prop-types'

const Error = ({ type }) => {
  return <span className="text-xs text-red-500">{type} harus diisi</span>;
};

Error.propTypes = {
  type: PropTypes.string.isRequired
}

export default Error