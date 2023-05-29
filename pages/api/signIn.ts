import { Auth } from "aws-amplify";
interface loginData {
  username: string;
  password: string;
}
export default async function signIn(payload: loginData) {
  try {
    const { username, password } = payload;

    const userInfo = await Auth.signIn(username, password);
    const session = await Auth.currentSession();
    // const jwt = session.getIdToken().getJwtToken();
    // sessionStorage.setItem("sessionID", jwt);
    return userInfo;
  } catch (error) {
    console.log("error signing out: ", error);
  }
}
