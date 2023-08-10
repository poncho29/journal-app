import { registerWithUserAndPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = (email, password) => {
  return async(dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async(dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    delete result.ok;
    console.log(result);
    dispatch(login(result));
  }
}

export const startCreatingUserWithEmialAndPassword = (values) => {  
  return async(dispatch) => {
    dispatch(checkingCredentials());
    const resp = await registerWithUserAndPassword(values);
    
    if(!resp.ok) return dispatch(logout({ errorMessage: resp.errorMessage }));

    dispatch(login(resp));
  }
}