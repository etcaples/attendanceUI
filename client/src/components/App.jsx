import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CheckboxList from './CheckboxList';
import CohortAttendanceList from './CohortAttendanceList';
import LoadingSquare from './LoadingSquare';

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
      loading: false,
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
      renderedCohorts: {},
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

    this.setState({ renderSummaries: 0, attendanceArgs: newArgs, loading: true }, () => {
      // when button is clicked, those cohorts are sent as arguments to runAttendance (NO LOG)
      this.runAttendanceData();
    });
  }

  runAttendanceData() {
    const { attendanceArgs } = this.state;
    const count = 1;
    const params = attendanceArgs.join('+');
    // run runAttendanceDatas.js on the attendanceArgs
    axios.get(`http://localhost:4242/takeAttendance/${params}`)
      .then((results) => {
        this.setState({ loading: false, renderedCohorts: results.data.results, renderSummaries: count });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  }

  render() {
    const {
      cohorts,
      renderSummaries,
      attendanceArgs,
      renderedCohorts,
      loading,
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
        {
          loading ? (
            <LoadingSquare />
          ) : <div />
        }
      </div>
    );
  }
}

export default App;
