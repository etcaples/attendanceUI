import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CohortBox from './CohortBox';

const CohortBoxContainer = styled.div`
  padding: 25px;
  display: flex;
  align-items: flex-start;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const CohortAttendanceList = (props) => {
  const { renderedCohorts, attendanceArgs } = props;
  console.log(renderedCohorts);
  return (
    <CohortBoxContainer>
      {
        attendanceArgs.map(cohort => (<CohortBox cohort={cohort} students={renderedCohorts[cohort]} key={`${cohort} + "-box"`} />))
      }
    </CohortBoxContainer>
  );
};

CohortAttendanceList.propTypes = {
  renderedCohorts: PropTypes.instanceOf(Object).isRequired,
  attendanceArgs: PropTypes.arrayOf(String).isRequired,
};

export default CohortAttendanceList;
