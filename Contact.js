/* BUILDING FRONT-END APPLICATIONS WITH REACT
Authorization Form
A client just called you to say that they love their new website! There’s only one problem: they don’t like how their contact page displays their personal information for all to see.

They’ve asked you to hide their website’s contact page behind a password form. In this project, you’ll accomplish this by using a React component to set up a simple authorization layer.

Let’s get started! */


import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    return (
      <div id="authorization">
        <h1>Contact</h1>
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);