// import { PermissionsAndroid, Platform } from "react-native";

// import messaging from "@react-native-firebase/messaging";

// export const getToken = async () => {
//   return await messaging().getToken();
// };

// export const requestUserPermission = async () => {
//   if (Platform.OS === "android") {
//     const hasPermission = await PermissionsAndroid.check(
//       PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
//     );
//     if (!hasPermission) {
//       await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
//     }
//   }

//   if (Platform.OS === "ios") {
//     const authStatus = await messaging().hasPermission();
//     if (authStatus === messaging.AuthorizationStatus.NOT_DETERMINED) {
//       await messaging().requestPermission();
//     }
//   }
// };
