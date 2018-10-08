import React from 'react';
import PropTypes from 'prop-types';
import CohortBox from './CohortBox';

const CohortAttendanceList = (props) => {
  const { cohorts } = props;
  return (
    <div>
      {
        cohorts.map(cohort => <CohortBox cohort={cohort} key={`${cohort.name} + "-box"`} />)
      }
    </div>
  );
};

CohortAttendanceList.propTypes = {
  cohorts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CohortAttendanceList;
