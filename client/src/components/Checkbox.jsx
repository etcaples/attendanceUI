import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  const { cohort, handleCheckboxChange } = props;
  return (
    <div>
      <label htmlFor={cohort}>
        <input type="checkbox" checked={cohort.isChecked} onChange={() => handleCheckboxChange(cohort.name)} />
        {cohort.name}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  cohort: PropTypes.instanceOf(Object).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;
