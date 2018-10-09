import React from 'react';
import styled from 'styled-components';
import CheckboxList from './CheckboxList';
import CohortAttendanceList from './CohortAttendanceList';

const CheckboxListContainer = styled.div`
  border-bottom: 4px solid navy;
  padding: 25px;
  text-align: center;
  font-size: 25px;
`;

const TempMessage = styled.div`
  padding: 25px;
  text-align: center;
  font-size: 25px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      renderSummaries: 0,
      cohorts: [
        {
          name: 'RPT07',
          isChecked: false,
        },
        {
          name: 'RPT08',
          isChecked: false,
        },
        {
          name: 'RPT09',
          isChecked: false,
        },
        {
          name: 'RPT10',
          isChecked: false,
        },
        {
          name: 'RPT11',
          isChecked: false,
        },
      ],
      attendanceArgs: [],
      renderedCohorts: {
        RPT07: [['Emily', '7:34pm'], ['Sarah', null]],
        RPT08: [['Robert', null]],
        RPT09: [['Jesse', '9:00pm']],
        RPT10: [['Anoop', '8:59am']],
        RPT11: [['Nick', null]],
      },
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.storeCheckedCohorts = this.storeCheckedCohorts.bind(this);
    this.runAttendanceData = this.runAttendanceData.bind(this);
  }

  handleCheckboxChange(cohort) {
    const { cohorts } = this.state;
    const newCohortList = [].concat(cohorts);
    for (let i = 0; i < newCohortList.length; i++) {
      const curCohort = newCohortList[i];
      if (curCohort.name === cohort) {
        if (curCohort.isChecked === false) {
          curCohort.isChecked = true;
        } else {
          curCohort.isChecked = false;
        }
      }
    }

    this.setState({ cohorts: newCohortList });
  }

  storeCheckedCohorts() {
    const { cohorts } = this.state;
    const newArgs = [];
    for (let i = 0; i < cohorts.length; i++) {
      const curCohort = cohorts[i];
      if (curCohort.isChecked === true) {
        newArgs.push(curCohort.name);
        curCohort.isChecked = false; // reset boxes to empty
      }
    }

    this.setState({ attendanceArgs: newArgs }, () => {
      // const { renderSummaries, attendanceArgs } = this.state;
      // when button is clicked, those cohorts are sent as arguments to runAttendance (NO LOG)
      this.runAttendanceData();
    });
  }

  runAttendanceData() {
    const { attendanceArgs, renderedCohorts } = this.state;
    const count = 1;
    const cohortStudentInfo = Object.assign({}, renderedCohorts);

    // run runAttendanceDatas.js on the attendanceArgs

    // this vvvvvv is temporary until there are real datas
    for (let i = 0; i < attendanceArgs.length; i++) {
      if (renderedCohorts[attendanceArgs[i]] === undefined) {
        cohortStudentInfo[attendanceArgs[i]] = [];
      }
    }

    this.setState({ renderedCohorts: cohortStudentInfo, renderSummaries: count });
  }

  render() {
    const {
      cohorts,
      renderSummaries,
      attendanceArgs,
      renderedCohorts,
    } = this.state;

    return (
      <div>
        <CheckboxListContainer>
          <CheckboxList
            cohorts={cohorts}
            handleCheckboxChange={this.handleCheckboxChange}
            storeCheckedCohorts={this.storeCheckedCohorts}
          />
        </CheckboxListContainer>
        {
          renderSummaries === 1 ? (
            <CohortAttendanceList
              renderedCohorts={renderedCohorts}
              attendanceArgs={attendanceArgs}
            />) : <TempMessage>(Datas take about 12 seconds to load...)</TempMessage>
        }
      </div>
    );
  }
}

export default App;
