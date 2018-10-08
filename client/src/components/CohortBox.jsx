import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StudentDataList from './StudentDataList';

const StyledBox = styled.div`
  border: solid orange;
  border-width: 2px;
  padding: 25px;
  width: 250px;
  text-align: center;
  margin: auto;
`;

const CohortBox = (props) => {
  const { cohort } = props;
  return (
    <StyledBox>
      <h2>{cohort.name}</h2>
      <div>
        <StudentDataList students={cohort.studentDatas} />
      </div>
    </StyledBox>
  );
};

CohortBox.propTypes = {
  cohort: PropTypes.instanceOf(Object).isRequired,
};

export default CohortBox;
