import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Platform,
} from "react-native";
import SearchBar from "../../components/searchbar";

export default function ProductPage() {
  const router = useRouter();

  const handleAddToCart = () => {
    if (Platform.OS === "web") {
      window.alert("Item added to cart!");
      router.push("/screens/Addtocart");
    } else {
      Alert.alert("Added to Cart", "Nespresso Vertuo Next has been added to your cart.", [
        {
          text: "View Cart",
          onPress: () => router.push("/screens/Addtocart"),
        },
        { text: "Continue Shopping", style: "cancel" },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={{ flex: 1, marginLeft: 8 }}>
          <SearchBar />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sponsoredRow}>
          <Image
            source={require("../../assets/images/img/conditioner.jpg")}
            style={styles.sponsoredImg}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.sponsoredTitle} numberOfLines={1}>
              Nespresso Vertuo Next Single Serve Coffe...
            </Text>
            <Text style={styles.sponsoredPrice}>
              <Text style={styles.dollarSign}>$</Text>
              <Text style={styles.bigPrice}>223</Text>
              <Text style={styles.cents}>65</Text>
              {"  "}
              <Text style={styles.primeText}>✓prime</Text>
            </Text>
            <Text style={styles.sponsoredLabel}>Sponsored</Text>
          </View>
        </View>

        <View style={styles.storeRow}>
          <Text style={styles.storeLink}>Visit the Nespresso Store</Text>
          <View style={styles.ratingRow}>
            <Text style={styles.ratingNum}>4.2</Text>
            <Text style={styles.stars}>★★★★☆</Text>
            <Text style={styles.ratingCount}>(1,790)</Text>
          </View>
        </View>

        <Text style={styles.productTitle}>
          Nespresso Vertuo Next Coffee and Espresso Machine by De'Longhi, Matte
          Black
        </Text>

        <Image
          source={require("../../assets/images/img/coffeemaker.jpg")}
          style={styles.productImage}
        />

        <View style={styles.dotsRow}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={{ flex: 1 }} />
          <Ionicons name="heart-outline" size={24} color="#111" />
          <Ionicons
            name="share-outline"
            size={24}
            color="#111"
            style={{ marginLeft: 16 }}
          />
        </View>

        <TouchableOpacity style={styles.view3dBtn}>
          <Text style={styles.view3dText}>VIEW IN 3D</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <Text style={styles.colorLabel}>
          Colour Name: <Text style={styles.colorValue}>Matte Black</Text>
        </Text>

        <View style={styles.divider} />

        <View style={styles.buyBox}>
          <View style={styles.buyBoxHeader}>
            <Text style={styles.buyNewText}>Buy New</Text>
            <View style={styles.radioSelected} />
          </View>

          <View style={styles.dealBadge}>
            <Text style={styles.dealBadgeText}>Limited-time deal</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.discountPercent}>-10%</Text>
            <Text style={styles.priceDollar}>
              <Text style={styles.smallDollar}>$</Text>
              <Text style={styles.mainPrice}>129</Text>
              <Text style={styles.priceCents}>00</Text>
            </Text>
          </View>

          <Text style={styles.wasPrice}>
            Was: <Text style={styles.strikethrough}>$143.98</Text>
          </Text>

          <Text style={styles.deliveryText}>
            FREE delivery{" "}
            <Text style={styles.deliveryBold}>Thursday, February 26</Text>
          </Text>

          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={16} color="#007185" />
            <Text style={styles.locationText}>
              Delivering to Balzac T4B 2T - Update location
            </Text>
          </View>

          <Text style={styles.inStock}>In Stock</Text>

          <TouchableOpacity style={styles.addToCartBtn} onPress={handleAddToCart}>
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buyNowBtn}>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </TouchableOpacity>

          <View style={styles.sellerInfo}>
            <Text style={styles.sellerLabel}>Shipper / Seller</Text>
            <Text style={styles.sellerValue}>Amazon.ca</Text>
          </View>
          <View style={styles.sellerInfo}>
            <Text style={styles.sellerLabel}>Returns</Text>
            <Text style={styles.sellerValue}>
              Eligible for Return, Refund or Replacement within 30 days of
              receipt
            </Text>
          </View>
          <View style={styles.sellerInfo}>
            <Text style={styles.sellerLabel}>Payment</Text>
            <Text style={styles.sellerValue}>Secure transaction</Text>
          </View>

          <TouchableOpacity style={styles.seeMoreRow}>
            <AntDesign name="down" size={12} color="#007185" />
            <Text style={styles.seeMoreText}>See more</Text>
          </TouchableOpacity>

          <Text style={styles.giftWrap}>Gift-wrap available.</Text>
        </View>

        <View style={styles.usedBox}>
          <Text style={styles.usedText}>Save with Used - Very Good</Text>
          <View style={styles.radioEmpty} />
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/(tabs)")}
        >
          <Ionicons name="home-outline" size={26} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <AntDesign name="user" size={26} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/screens/Addtocart")}
        >
          <Ionicons name="cart-outline" size={26} color="#000" />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>0</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="menu" size={26} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00A8E1",
    paddingLeft: 10,
    paddingTop: Platform.OS === "android" ? 30 : 44,
  },
  sponsoredRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#f7f7f7",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  sponsoredImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  sponsoredTitle: {
    fontSize: 13,
    color: "#0F1111",
  },
  sponsoredPrice: {
    fontSize: 13,
    marginTop: 2,
  },
  dollarSign: {
    fontSize: 11,
    fontWeight: "bold",
  },
  bigPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cents: {
    fontSize: 11,
    fontWeight: "bold",
  },
  primeText: {
    color: "#007185",
    fontWeight: "bold",
    fontSize: 12,
  },
  sponsoredLabel: {
    fontSize: 11,
    color: "#565959",
    marginTop: 2,
  },
  storeRow: {
    paddingHorizontal: 14,
    paddingTop: 12,
  },
  storeLink: {
    color: "#007185",
    fontSize: 14,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingNum: {
    fontSize: 14,
    color: "#007185",
    marginRight: 4,
  },
  stars: {
    color: "#FFA41C",
    fontSize: 16,
    marginRight: 4,
  },
  ratingCount: {
    fontSize: 14,
    color: "#007185",
  },
  productTitle: {
    fontSize: 15,
    color: "#0F1111",
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingBottom: 12,
    lineHeight: 22,
  },
  productImage: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
    backgroundColor: "#fff",
  },
  dotsRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginRight: 6,
  },
  dotActive: {
    backgroundColor: "#333",
  },
  view3dBtn: {
    borderWidth: 1,
    borderColor: "#007185",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginBottom: 12,
  },
  view3dText: {
    color: "#007185",
    fontSize: 13,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 14,
    marginVertical: 8,
  },
  colorLabel: {
    fontSize: 14,
    color: "#0F1111",
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  colorValue: {
    fontWeight: "bold",
  },
  buyBox: {
    borderWidth: 1,
    borderColor: "#d5d9d9",
    borderRadius: 8,
    margin: 14,
    padding: 14,
  },
  buyBoxHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  buyNewText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0F1111",
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 6,
    borderColor: "#007185",
    backgroundColor: "#fff",
  },
  dealBadge: {
    backgroundColor: "#CC0C39",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  dealBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  discountPercent: {
    color: "#CC0C39",
    fontSize: 26,
    marginRight: 8,
  },
  priceDollar: {
    flexDirection: "row",
  },
  smallDollar: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0F1111",
  },
  mainPrice: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F1111",
  },
  priceCents: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0F1111",
  },
  wasPrice: {
    fontSize: 13,
    color: "#565959",
    marginBottom: 10,
  },
  strikethrough: {
    textDecorationLine: "line-through",
  },
  deliveryText: {
    fontSize: 14,
    color: "#0F1111",
    marginBottom: 6,
  },
  deliveryBold: {
    fontWeight: "bold",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  locationText: {
    color: "#007185",
    fontSize: 13,
    marginLeft: 4,
    flex: 1,
  },
  inStock: {
    color: "#007600",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  addToCartBtn: {
    backgroundColor: "#FFD814",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  addToCartText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0F1111",
  },
  buyNowBtn: {
    backgroundColor: "#FFA41C",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 14,
  },
  buyNowText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0F1111",
  },
  sellerInfo: {
    flexDirection: "row",
    marginBottom: 6,
  },
  sellerLabel: {
    fontSize: 13,
    color: "#565959",
    width: 100,
  },
  sellerValue: {
    fontSize: 13,
    color: "#007185",
    flex: 1,
  },
  seeMoreRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginBottom: 10,
  },
  seeMoreText: {
    color: "#007185",
    fontSize: 13,
    marginLeft: 4,
  },
  giftWrap: {
    fontSize: 14,
    color: "#0F1111",
  },
  usedBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 14,
    padding: 14,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  usedText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0F1111",
  },
  radioEmpty: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#d5d9d9",
    backgroundColor: "#fff",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#d5d9d9",
    backgroundColor: "#fff",
  },
  navItem: {
    padding: 6,
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    top: 0,
    right: -2,
    backgroundColor: "#007185",
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});
