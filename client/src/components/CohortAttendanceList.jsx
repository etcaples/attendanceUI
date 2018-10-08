import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CohortBox from './CohortBox';

const CohortBoxContainer = styled.div`
  border: 2px solid green;
  /* temporary border details ^^^^^ */
  /* want table of names to be centered */
  /* want heading to be centered */
  padding: 25px;
  display: flex;
  align-items: flex-start;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const CohortAttendanceList = (props) => {
  const { cohorts } = props;
  return (
    <CohortBoxContainer>
      {
        cohorts.map(cohort => (<CohortBox cohort={cohort} key={`${cohort.name} + "-box"`} />))
          }
    </CohortBoxContainer>
  );
};

CohortAttendanceList.propTypes = {
  cohorts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CohortAttendanceList;
