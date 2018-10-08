import React from 'react';
import PropTypes from 'prop-types';

const IndivStudentInfo = (props) => {
  const { student } = props;
  return (
    <li>
      {student.name}
      {' '}
-
      {' '}
      {student.timeIn || student.status}
    </li>
  );
};

IndivStudentInfo.propTypes = {
  student: PropTypes.instanceOf(Object).isRequired,
};

export default IndivStudentInfo;
