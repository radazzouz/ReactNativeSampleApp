import React from 'react';

import AuthHelper  from '../Mixins/AuthHelper';
import AuthActions from '../Actions/AuthActions';

var SignUp = React.createClass({
  mixins: [AuthHelper],
  getDefaultProps: function() {
    return {
      authType: 'signup'
    };
  },

  onAuthButton: function() {
    var username = this.state.username;
    var password = this.state.password;
    AuthActions.submitSignup(username, password, function(error) {
      if (error) {
        // TODO: better errors
        alert(error.message);
			  console.log("Testing React Native logging with the buddybuild SDK");
      }
    });
    // TODO: setState to denote busy
  },
});

export default SignUp;
