import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableCell = styled.td`
  border: 2px solid pink;
  text-align: left;
  font-size: 20px;
  padding: 5px;
`;

const IndivStudentInfo = (props) => {
  const { student } = props;
  return (
    <tr>
      <TableCell>
        {student.name}
      </TableCell>
      <TableCell>
        {student.timeIn || student.status}
      </TableCell>
    </tr>
  );
};

IndivStudentInfo.propTypes = {
  student: PropTypes.instanceOf(Object).isRequired,
};

export default IndivStudentInfo;
