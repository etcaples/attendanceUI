import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IndivStudentInfo from './IndivStudentInfo';

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
`;

const TableHeading = styled.th`
  border: 2px solid navy;
  text-align: left;
  font-size: 20px;
  padding: 5px;
`;

const StudentDataList = (props) => {
  const { students } = props;
  const presentStudents = students.present;
  const absentStudents = students.absent;
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
            absentStudents.map(student => <IndivStudentInfo student={student} key={`${student.name}-absent`} />)
          }
          {
            presentStudents.map(student => <IndivStudentInfo student={student} key={`${student.name}-present`} />)
          }
        </tbody>
      </StyledTable>
    </div>
  );
};

StudentDataList.propTypes = {
  students: PropTypes.instanceOf(Object).isRequired,
};

export default StudentDataList;
