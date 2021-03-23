import { createAction } from '@reduxjs/toolkit';

const signUp = createAction('@auth/signup');
const signIn = createAction('@auth/signin');
const signOut = createAction('@auth/signout');

const setError = createAction('@auth/seterror');
const resetError = createAction('@auth/reseterror');
const setIsAuth = createAction('@auth/setIsAuth');

export { signUp, signIn, setError, resetError, signOut, setIsAuth };
