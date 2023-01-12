import { QueryClient, QueryClientProvider } from "react-query";
import { StatusBar } from "expo-status-bar";
import { AppState, StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation/Navigator";
import { store } from "./src/store";
import { Provider } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import { onlineManager, focusManager } from "react-query";
import { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";

const queryClient = new QueryClient();

export default function App() {
  onlineManager.setEventListener((setOnline) => {
    return NetInfo.addEventListener((state) => {
      setOnline(state.isConnected);
    });
  });

  function onAppStateChange(status) {
    if (Platform.OS !== "web") {
      focusManager.setFocused(status === "active");
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener("change", onAppStateChange);

    return () => subscription.remove();
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Navigator />
      </QueryClientProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
