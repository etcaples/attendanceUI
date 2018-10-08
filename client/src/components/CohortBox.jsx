import React from 'react';
import PropTypes from 'prop-types';

const CohortBox = (props) => {
  const { cohort } = props;
  return (
    <div>
      <h2>{cohort}</h2>
    </div>
  );
};

CohortBox.propTypes = {
  cohort: PropTypes.string.isRequired,
};

export default CohortBox;
