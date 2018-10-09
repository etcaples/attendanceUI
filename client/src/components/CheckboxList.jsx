import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const Button = styled.button`
  background: navy;
  border-radius: 3px;
  border: none;
  color: white;
  height: 30px;
  font-size: 15px;
`;

const CheckboxList = (props) => {
  const { cohorts, handleCheckboxChange, storeCheckedCohorts } = props;
  return (
    <div className="checkboxes">
      {
        cohorts.map(cohort => (
          <Checkbox
            cohort={cohort}
            handleCheckboxChange={handleCheckboxChange}
            key={`${cohort.name}-checkbox`}
          />))
      }
      <br />
      <Button type="button" onClick={() => storeCheckedCohorts()}>
        show attendance
      </Button>
    </div>
  );
};

CheckboxList.propTypes = {
  cohorts: PropTypes.arrayOf(Object).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  storeCheckedCohorts: PropTypes.func.isRequired,
};

export default CheckboxList;
