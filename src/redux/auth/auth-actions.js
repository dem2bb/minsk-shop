import { createAction } from '@reduxjs/toolkit';

const signIn = createAction('@auth/signIn');

const signUp = createAction('@auth/signUp');

const signOut = createAction('@auth/signOut');

const setError = createAction('@auth/setError');

const resetError = createAction('@auth/resetError');

const setIsAuth = createAction('@auth/setIsAuth');

export { signIn, signUp, signOut, setError, resetError, setIsAuth };
