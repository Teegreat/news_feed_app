import { View, StyleSheet } from "react-native";

import { colors } from "../../config/theme";
import StyledText from "../Texts/StyledText";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const SettingsItem = ({ children, label }) => {
  const {theme} = useContext(ThemeContext)
  let activeColors = colors[theme.mode];
  return (
    <View
      style={[
        {
         backgroundColor: activeColors.secondary,
        },
        styles.SettingsItem
      ]}
    >
    <StyledText style={[{color: activeColors.tertiary}, styles.label]}>
        {label}
    </StyledText>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  SettingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 30,
    marginBottom: 2,


  },
  label: {
    fontStyle: "italic"
  }
});


export default SettingsItem;
