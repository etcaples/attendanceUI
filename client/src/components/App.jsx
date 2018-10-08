import React from 'react';
// import CheckboxList from './CheckboxList';
import CohortAttendanceList from './CohortAttendanceList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cohorts: [
        {
          name: 'RPT07',
          isChecked: false,
          studentDatas: [
            {
              name: 'Emily',
              timeIn: '7:34pm',
              status: 'present',
              // return student data in order by date
            },
            {
              name: 'Sarah',
              timeIn: null,
              status: 'absent',
            },
          ],
        },
        {
          name: 'RPT08',
          isChecked: false,
          studentDatas: [],
        },
        {
          name: 'RPT09',
          isChecked: false,
          studentDatas: [],
        },
        {
          name: 'RPT10',
          isChecked: false,
          studentDatas: [],
        },
        {
          name: 'RPT11',
          isChecked: false,
          studentDatas: [],
        },
      ],
    };
  }

  // when button is clicked, those cohorts are sent as arguments to runAttendance (NO LOG)

  // then, the cohort box datas are populated

  render() {
    const { cohorts } = this.state;
    return (
      <div>
        {/* <CheckboxList cohorts={cohorts} /> */}
        <CohortAttendanceList cohorts={cohorts} />
      </div>
    );
  }
}

export default App;
