import { QueryClient, QueryClientProvider } from "react-query";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation/Navigator";
import { store } from "./src/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={QueryClient}>
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
