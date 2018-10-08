import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  height: 30px;
  font-size: 15px;
`;

const CheckboxList = (props) => {
  const { cohorts } = props;
  return (
    <div className="checkboxes">
      {
        cohorts.map(cohort => <Checkbox cohort={cohort} />)
      }
      <br />
      <Button type="button">
        run attendance
      </Button>
    </div>
  );
};

CheckboxList.propTypes = {
  cohorts: PropTypes.arrayOf(Object).isRequired,
};

export default CheckboxList;
