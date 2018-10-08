import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IndivStudentInfo from './IndivStudentInfo';

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
`;

const TableHeading = styled.th`
  border: 2px solid pink;
  text-align: right;
  font-size: 20px;
  padding: 5px;
`;

const StudentDataList = (props) => {
  const { students } = props;
  return (
    <div>
      <StyledTable>
        <tbody>
          <tr>
            <TableHeading>
              Name
            </TableHeading>
            <TableHeading>
              Time In
            </TableHeading>
          </tr>
          {
            students.map(student => <IndivStudentInfo student={student} />)
          }
        </tbody>
      </StyledTable>
    </div>
  );
};

StudentDataList.propTypes = {
  students: PropTypes.arrayOf(Object).isRequired,
};

export default StudentDataList;
