// components
import MainContainer from "../components/containers/MainContainer";
import { colors } from "../config/theme";
import StyledText from "../components/Texts/StyledText";
import { StyleSheet, Image, View } from "react-native";

import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";


export default function Details({ route }) {
  const {theme} = useContext(ThemeContext)

  let activeColors = colors[theme.mode];
  const { image, title, avatar, author, date, content } = route?.params;

  return (
    <MainContainer style={{ backgroundColor: activeColors.secondary }}>
      <Image source={image} style={styles.image} />
      <View
        style={[
          { backgroundColor: activeColors.secondary },
          styles.bottomSection,
        ]}
      >
        <StyledText
          numberOfLines={3}
          style={[{ color: activeColors.accent }, styles.title]}
          big
        >
          {title}
        </StyledText>

        <View style={styles.authorRow}>
          <View style={styles.author}>
            <Image source={avatar} style={styles.avatar} />
            <StyledText numberOfLines={2} bold>
              {author}
            </StyledText>
          </View>

          <StyledText
            style={[{ color: activeColors.tertiary }, styles.date]}
            small
          >
            {date}
          </StyledText>
        </View>
        <StyledText style={styles.content}>{content}</StyledText>
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  bottomSection: {
    padding: 25,
    top: -30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  title: {
    marginBottom: 20,
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  author: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 25,
    flex: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 25,
  },
  date: {
    textAlign: "right",
    flex: 2,
  },
  content: {
    marginTop: 15,
  },
});
