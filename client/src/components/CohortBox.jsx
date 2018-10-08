import React from 'react';
import PropTypes from 'prop-types';
import StudentDataList from './StudentDataList';

const CohortBox = (props) => {
  const { cohort } = props;
  return (
    <div>
      <h2>{cohort.name}</h2>
      <div>
        <StudentDataList students={cohort.studentDatas} />
      </div>
    </div>
  );
};

CohortBox.propTypes = {
  cohort: PropTypes.instanceOf(Object).isRequired,
};

export default CohortBox;
