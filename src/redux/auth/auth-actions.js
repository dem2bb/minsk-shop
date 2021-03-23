import { createAction } from '@reduxjs/toolkit';

const signUp = createAction('@auth/signUp');

const signIn = createAction('@auth/signIn');

const resetError = createAction('@auth/resetError');

const setError = createAction('@auth/setError');

const signOut = createAction('@auth/signOut');

const setIsAuth = createAction('@auth/setIsAuth ');
export { signUp, signIn, setError, resetError, signOut, setIsAuth };
