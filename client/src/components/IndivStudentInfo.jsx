import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableCell = styled.td`
  border: 2px solid navy;
  text-align: left;
  font-size: 20px;
  padding: 5px;
`;

// RPT07/RPT08/RPT10

const IndivStudentInfo = (props) => {
  const { student } = props;
  let timeIn = student.timeJoined;
  if (student.timeJoined !== undefined) {
    timeIn = new Date(student.timeJoined);
    timeIn = timeIn.toLocaleTimeString('en-US');
  }

  return (
    <tr>
      <TableCell>
        {student.name}
      </TableCell>
      <TableCell>
        {timeIn || 'Absent'}
      </TableCell>
    </tr>
  );
};

IndivStudentInfo.propTypes = {
  student: PropTypes.arrayOf(String).isRequired,
};

export default IndivStudentInfo;
