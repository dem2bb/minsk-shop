import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  signUpOperation,
  signInOperation,
} from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const initialState = {
  email: '',
  password: '',
};

const AuthForm = () => {
  const [user, setUser] = useState(initialState);
  const location = useLocation();
  const dispatch = useDispatch();

  const onHandleChange = event => {
    const { value, name } = event.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    location.pathname === '/signup'
      ? dispatch(signUpOperation(user))
      : dispatch(signInOperation(user));
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        Email
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={onHandleChange}
        />
      </label>
      <label>
        {' '}
        Password
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={onHandleChange}
        />
      </label>
      <button type="submit">
        {location.pathname === '/signup' ? 'Sign up' : 'Sign in'}
      </button>
    </form>
  );
};

export default AuthForm;

// class AuthForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   onHandleChange = event => {
//     const { value, name } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   onHandleSubmit = event => {
//     event.preventDefault();
//     this.props.location.pathname === '/signup'
//       ? this.props.signUpOperation(this.state)
//       : this.props.signInOperation(this.state);
//   };

//   render() {
//     const { email, password } = this.state;
//     return (
//       <form onSubmit={this.onHandleSubmit}>
//         <label>
//           {' '}
//           Email
//           <input
//             type="text"
//             name="email"
//             value={email}
//             onChange={this.onHandleChange}
//           />
//         </label>
//         <label>
//           {' '}
//           Password
//           <input
//             type="text"
//             name="password"
//             value={password}
//             onChange={this.onHandleChange}
//           />
//         </label>
//         <button type="submit">
//           {this.props.location.pathname === '/signup' ? 'Sign up' : 'Sign in'}
//         </button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = {
//   signUpOperation,
//   signInOperation,
// };

// export default connect(null, mapDispatchToProps)(AuthForm);
