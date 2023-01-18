const [fontsLoaded] = useFonts({
  "poppins-regular": require("../../../assets/fonts/Poppins/Poppins-Regular.ttf"),
  "poppins-medium": require("../../../assets/fonts/Poppins/Poppins-Medium.ttf"),
  "poppins-light": require("../../../assets/fonts/Poppins/Poppins-Light.ttf"),
  "poppins-semibold": require("../../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
  "inter-regular": require("../../../assets/fonts/inter/Inter-Regular.ttf"),
  "inter-medium": require("../../../assets/fonts/inter/Inter-Medium.ttf"),
  "inter-semibold": require("../../../assets/fonts/inter/Inter-SemiBold.ttf"),
  "inter-bold": require("../../../assets/fonts/inter/Inter-Bold.ttf"),
});

const onLayoutRootView = useCallback(async () => {
  if (fontsLoaded) {
    await SplashScreen.hideAsync();
  }
}, [fontsLoaded]);

if (!fontsLoaded) {
  return null;
}
async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}
