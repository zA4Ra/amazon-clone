import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="screens/Productpage" />
      <Stack.Screen name="screens/Addtocart" />
    </Stack>
  );
}
