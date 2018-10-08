import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IndivStudentInfo from './IndivStudentInfo';

const StyledTable = styled.table`
  border-collapse: collapse;
`;

const StudentDataList = (props) => {
  const { students } = props;
  return (
    <div>
      <StyledTable>
        {
          students.map(student => <IndivStudentInfo student={student} />)
        }
      </StyledTable>
    </div>
  );
};

StudentDataList.propTypes = {
  students: PropTypes.arrayOf(Object).isRequired,
};

export default StudentDataList;
