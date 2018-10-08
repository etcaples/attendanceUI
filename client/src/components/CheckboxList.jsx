import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

const CheckboxList = (props) => {
  const { cohorts } = props;
  return (
    <div className="checkboxes">
      {
        cohorts.map(cohort => <Checkbox cohort={cohort} />)
      }
      <button type="button">
        check attendance (no LOG)
      </button>
    </div>
  );
};

CheckboxList.propTypes = {
  cohorts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CheckboxList;
