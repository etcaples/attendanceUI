import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  const { cohort } = props;
  return (
    <div>
      <label htmlFor={cohort}>
        <input type="checkbox" />
        {cohort}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  cohort: PropTypes.string.isRequired,
};

export default Checkbox;
