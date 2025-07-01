import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import "../global.css";

const RootLayout = () => {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  );
};

export default RootLayout;
