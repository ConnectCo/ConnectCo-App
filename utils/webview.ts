import WebView from "react-native-webview";

export const postMessageInstance = (webviewRef: React.RefObject<WebView>) => {
  return (type: string, data: any) => {
    webviewRef.current?.postMessage(JSON.stringify({ type, data }));
  };
};
