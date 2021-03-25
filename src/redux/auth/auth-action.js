import { createAction } from '@reduxjs/toolkit';

const signUp = createAction('@auth/signUp');
const signIn = createAction('@auth/signIp');
const signOut = createAction('@auth/signOut');
const setError = createAction('@auth/seterror');
const resetError = createAction('@auth/reseterror');
const setIsAuth = createAction('@auth/setisauth');

export { signIn, signUp, setError, resetError, signOut, setIsAuth };
