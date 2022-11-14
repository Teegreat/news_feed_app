import { useState, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Appearance } from "react-native";
import { storeData, getData } from "./config/asyncStorage";

import RootStack from "./navigators/RootStack";
import * as SplashScreen from "expo-splash-screen";

// keep splash screen visible
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [theme, setTheme] = useState({ mode: "light" });

  const updateTheme = (newTheme) => {
    let mode;
    if (!newTheme) {
      mode = theme.mode === "dark" ? "light" : "dark";
      newTheme = { mode, system: false };
    } else {
      if (newTheme.system) {
        const systemColorSCheme = Appearance.getColorScheme();
        mode = systemColorSCheme === "dark" ? "dark" : "light";

        newTheme = { ...newTheme, mode };
      } else {
        newTheme = { ...newTheme, system: false };
      }
    }
    setTheme(newTheme);
    storeData("newsFeedTheme", newTheme);
  };

  // monitor sysytem for theme changes
  if (theme.system) {
    Appearance.addChangeListener((colorScheme) => {
      updateTheme({ system: true, mode: colorScheme });
    });
  }

  const fetchStoredTheme = async () => {
    try {
      const themeData = await getData("newsFeedTheme");

      if (themeData) {
        updateTheme(themeData);
      }
    } catch ({ message }) {
      alert(message);
    } finally {
      await setTimeout(() => SplashScreen.hideAsync(), 1000);
    }
  };

  useEffect(() => {
    fetchStoredTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <RootStack />
    </ThemeContext.Provider>
  );
}
