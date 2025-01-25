import { PermissionsAndroid, Platform } from "react-native";

import messaging from "@react-native-firebase/messaging";

export const getToken = async () => {
  return await messaging().getToken();
};

export const requestUserPermission = async () => {
  if (Platform.OS === "android") {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  }

  if (Platform.OS === "ios") {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  }
};
