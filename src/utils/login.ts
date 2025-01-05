import { login } from "@react-native-kakao/user";

export const kakaoLogin = async () => {
  try {
    return await login();
  } catch (err) {
    const error = (err as Error).message;
    return error;
  }
};
