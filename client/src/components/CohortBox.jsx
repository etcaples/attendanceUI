import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StudentDataList from './StudentDataList';

const StyledBox = styled.div`
  border: 4px solid navy;
  border-radius: 10px;
  padding: 10px;
  width: 300px;
  text-align: center;
  margin: 10px 5px;
`;

const StyledHeading = styled.h2`
  margin-top: 0;
`;

const CohortBox = (props) => {
  const { cohort } = props;
  return (
    <StyledBox>
      <StyledHeading>{cohort.name}</StyledHeading>
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
