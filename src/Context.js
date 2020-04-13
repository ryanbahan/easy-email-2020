import React from 'react';

export const MyContext = React.createContext();

export class MyProvider extends React.Component {
  state = {
    companyImage: 'https://via.placeholder.com/150',
    companyName: 'Company Name',
    mainImage: 'https://via.placeholder.com/1200x600',
    mainImageTagline: 'CTA Tagline',
    mainImageButtonCopy: 'CTA Here',
    content: `Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
    the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites
    of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
    from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
    by Cicero, written in 45 BC.`,
    cta: 'Bottom CTA',
    footer: 'Footer',
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
