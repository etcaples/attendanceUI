import React from 'react';
import CheckboxList from './CheckboxList';
import CohortAttendanceList from './CohortAttendanceList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cohorts: ['RPT07', 'RPT08', 'RPT09', 'RPT10', 'RPT11'],
    };
  }

  // when button is clicked, those cohorts are sent as arguments to runAttendance (NO LOG)

  // then, the cohort box datas are populated

  render() {
    const { cohorts } = this.state;
    return (
      <div>
        <CheckboxList cohorts={cohorts} />
        <CohortAttendanceList cohorts={cohorts} />
      </div>
    );
  }
}

export default App;
