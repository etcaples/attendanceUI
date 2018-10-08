import React from 'react';
import CheckboxList from './CheckboxList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cohorts: ['RPT07', 'RPT08', 'RPT09', 'RPT10', 'RPT11'],
    };
    this.logHello = this.logHello.bind(this);
  }

  logHello() {
    console.log('hello is logged', this);
  }

  render() {
    const { cohorts } = this.state;
    return (
      <div>
        <CheckboxList cohorts={cohorts} />
      </div>
    );
  }
}

export default App;
