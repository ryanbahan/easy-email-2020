import React from 'react';

export const MyContext = React.createContext();

export class MyProvider extends React.Component {
  state = {
    companyName: 'Company Name'
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
