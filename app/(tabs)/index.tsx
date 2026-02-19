import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CategoryCard from "../../components/categorylist";
import DealCard from "../../components/dealcard";
import SearchBar from "../../components/searchbar";

const topPills = ["T2M", "Haul", "Prime", "Video", "Music", "Deals"];

const categories = [
  { id: "1", image: require("../../assets/images/img/baking.jpg") },
  { id: "2", image: require("../../assets/images/img/blender.jpg") },
  { id: "3", image: require("../../assets/images/img/coffeemaker.jpg") },
  { id: "4", image: require("../../assets/images/img/conditioner.jpg") },
  { id: "5", image: require("../../assets/images/img/soapholder.jpg") },
  { id: "6", image: require("../../assets/images/img/markers.jpg") },
];

const deals = [
  { id: "1", image: require("../../assets/images/img/nintendo.jpg") },
  { id: "2", image: require("../../assets/images/img/paintset.jpg") },
  { id: "3", image: require("../../assets/images/img/pods.jpg") },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <View style={styles.ribbonBackground}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.pillContainer}
        >
          {topPills.map((item, index) => (
            <Pressable key={index} style={styles.pill}>
              <Text style={styles.pillText}>{item}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <View style={styles.categoryBox}>
        <Text style={styles.title}>Categories to explore</Text>
        <View style={styles.grid}>
          {categories.map((item) => (
            <CategoryCard key={item.id} image={item.image} />
          ))}
        </View>
      </View>
      <Text style={[styles.title, { color: "black", marginLeft: 10 }]}>
        Deals for you
      </Text>
      <FlatList
        data={deals}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 10 }}
        renderItem={({ item }) => <DealCard image={item.image} />}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAEDED",
    flex: 1,
  },
  ribbonBackground: {
    backgroundColor: "#1C7C54",
    paddingBottom: 5,
  },
  pillContainer: {
    paddingVertical: 10,
  },
  pill: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  pillText: {
    color: "white",
    fontWeight: "600",
    fontSize: 13,
  },
  categoryBox: {
    backgroundColor: "#1C7C54",
    margin: 10,
    padding: 15,
    borderRadius: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    color: "white",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
