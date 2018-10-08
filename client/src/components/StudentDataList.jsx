import React from 'react';
import PropTypes from 'prop-types';
import IndivStudentInfo from './IndivStudentInfo';

const StudentDataList = (props) => {
  const { students } = props;
  return (
    <ul>
      {
        students.map(student => <IndivStudentInfo student={student} />)
      }
    </ul>
  );
};

StudentDataList.propTypes = {
  students: PropTypes.arrayOf(Object).isRequired,
};

export default StudentDataList;
