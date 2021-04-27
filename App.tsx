import React from "react";
import AppLoading from "expo-app-loading";

import Routes from "./src/routes/index ";

import {
  useFonts,
  Jost_500Medium,
  Jost_700Bold,
} from "@expo-google-fonts/jost";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_500Medium,
    Jost_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return <Routes />;
}
