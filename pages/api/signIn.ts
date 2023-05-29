import { Auth } from "aws-amplify";
interface loginData {
  username: string;
  password: string;
}
export default async function signIn(payload: loginData) {
  try {
    const { username, password } = payload;

    const userInfo = await Auth.signIn(username, password);
    return userInfo;
  } catch (error) {
    console.log("error signing out: ", error);
  }
}
