import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableCell = styled.td`
  border: 2px solid navy;
  text-align: left;
  font-size: 20px;
  padding: 5px;
`;

const IndivStudentInfo = (props) => {
  const { student } = props;
  return (
    <tr>
      <TableCell>
        {student[0]}
      </TableCell>
      <TableCell>
        {student[1] || 'Absent'}
      </TableCell>
    </tr>
  );
};

IndivStudentInfo.propTypes = {
  student: PropTypes.arrayOf(String).isRequired,
};

export default IndivStudentInfo;
