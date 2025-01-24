import { PermissionsAndroid, Platform } from "react-native";

import messaging from "@react-native-firebase/messaging";

import axios from "axios";

const target = process.env.EXPO_PUBLIC_FCM_TARGET;
const fcmProjectId = process.env.EXPO_PUBLIC_FCM_PROJECT_ID;

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

export const sendFCMv1Notification = async () => {
  const firebaseAccessToken = (await axios.get("http://localhost:8000/firebase")).data.token;
  const deviceToken = await getToken();

  const messageBody = {
    message: {
      token: deviceToken,
      data: {
        channelId: "default",
        message: "Testing",
        title: `This is an FCM notification message`,
        body: JSON.stringify({ title: "bodyTitle", body: "bodyBody" }),
        scopeKey: target,
        experienceId: target,
      },
    },
  };

  const response = await fetch(
    `https://fcm.googleapis.com/v1/projects/${fcmProjectId}/messages:send`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${firebaseAccessToken}`,
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageBody),
    }
  );

  const readResponse = (response: Response) => response.json();
  const json = await readResponse(response);

  console.log(`Response JSON: ${JSON.stringify(json, null, 2)}`);
};
