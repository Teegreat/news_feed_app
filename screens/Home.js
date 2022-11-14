import { StyleSheet, Text, View } from "react-native";

// components
import MainContainer from "../components/containers/MainContainer";
import StyledText from "../components/Texts/StyledText";
import NewsSection from "../components/News/NewsSection";
import ExploreSection from "../components/Explore/ExploreSection";

// data
import { newsData, exploreData } from "../config/data";

export default function Home() {
  return (
    <MainContainer>
      <StyledText style={styles.sectionTitle} big>
        Trending News
      </StyledText>
      <NewsSection data={newsData} />
      <StyledText style={styles.sectionTitle} big>
        Explore
      </StyledText>
      <ExploreSection data={exploreData} />
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 30,
    marginLeft: 25,
  },
});
