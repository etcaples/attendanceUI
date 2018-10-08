import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableRow = styled.tr`
  border: solid black;
  border-width: 2px;
`;

const TableCell = styled.td`
  border: solid pink;
  border-width: 2px;
`;

const IndivStudentInfo = (props) => {
  const { student } = props;
  return (
    <TableRow>
      <TableCell>
        {student.name}
      </TableCell>
      <TableCell>
        {student.timeIn || student.status}
      </TableCell>
    </TableRow>
  );
};

IndivStudentInfo.propTypes = {
  student: PropTypes.instanceOf(Object).isRequired,
};

export default IndivStudentInfo;
