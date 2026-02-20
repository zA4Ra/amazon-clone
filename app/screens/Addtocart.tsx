import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import SearchBar from "../../components/searchbar";

export default function AddToCartPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SearchBar />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cartHeader}>
          <Text style={styles.cartTitle}>Cart</Text>
          <View style={styles.cartUnderline} />
        </View>

        <View style={styles.subtotalSection}>
          <Text style={styles.subtotalText}>
            Subtotal{" "}
            <Text style={styles.subtotalDollar}>
              <Text style={styles.smallDollar}>$</Text>
              <Text style={styles.subtotalPrice}>129</Text>
              <Text style={styles.subtotalCents}>00</Text>
            </Text>
          </Text>

          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutText}>Proceed to checkout (1 item)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <View style={styles.cartItem}>
          <Image
            source={require("../../assets/images/img/coffeemaker.jpg")}
            style={styles.cartItemImage}
          />
          <View style={styles.cartItemDetails}>
            <Text style={styles.cartItemTitle} numberOfLines={2}>
              Nespresso Vertuo Next Coffee and Espresso Machine by De'Lo...
            </Text>

            <View style={styles.dealRow}>
              <View style={styles.dealBadge}>
                <Text style={styles.dealBadgeText}>10% off</Text>
              </View>
              <Text style={styles.limitedDeal}>Limited-time deal</Text>
            </View>

            <View style={styles.cartPriceRow}>
              <Text style={styles.cartPrice}>
                <Text style={styles.cartDollar}>$</Text>
                <Text style={styles.cartMainPrice}>129</Text>
                <Text style={styles.cartCents}>00</Text>
              </Text>
              <Text style={styles.cartWasPrice}>
                Was: <Text style={styles.strikethrough}>$143.98</Text>
              </Text>
            </View>

            <Text style={styles.inStock}>In Stock</Text>
            <Text style={styles.shipsFrom}>
              Ships from and sold by{"\n"}
              <Text style={styles.amazonLink}>Amazon.ca</Text>
            </Text>

            <View style={styles.quantityRow}>
              <View style={styles.quantityControl}>
                <TouchableOpacity style={styles.qtyBtn}>
                  <Ionicons name="trash-outline" size={18} color="#555" />
                </TouchableOpacity>
                <Text style={styles.qtyNumber}>1</Text>
                <TouchableOpacity style={styles.qtyBtn}>
                  <Text style={styles.qtyPlus}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionBtnText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionBtnText}>Save for later</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.secondActionRow}>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionBtnText}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionBtnText}>View in your room</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.returnsSection}>
          <View style={{ flex: 1 }}>
            <Text style={styles.returnsTitle}>Returns are easy</Text>
            <Text style={styles.returnsSubtitle}>
              30-day returns on millions of items
            </Text>
          </View>
          <View style={styles.returnsIcon}>
            <Ionicons name="arrow-back" size={20} color="#333" />
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.giftCardSection}>
          <View style={{ flex: 1 }}>
            <Text style={styles.giftCardText}>
              <Text style={styles.giftCardLink}>Get a Gift Card instantly</Text>
              {" "}if approved for the Amazon.ca Rewards Mastercard. Terms apply.
            </Text>
          </View>
          <View style={styles.giftCardImg}>
            <View style={styles.amazonCardPlaceholder}>
              <Text style={styles.amazonCardText}>amazon.ca</Text>
            </View>
          </View>
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
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cart-outline" size={26} color="#007185" />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>1</Text>
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
    paddingTop: Platform.OS === "android" ? 30 : 44,
  },
  cartHeader: {
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 8,
  },
  cartTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0F1111",
  },
  cartUnderline: {
    width: 40,
    height: 3,
    backgroundColor: "#007185",
    marginTop: 4,
  },
  subtotalSection: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  subtotalText: {
    fontSize: 18,
    color: "#0F1111",
    marginBottom: 12,
  },
  subtotalDollar: {
    fontWeight: "bold",
  },
  smallDollar: {
    fontSize: 14,
  },
  subtotalPrice: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtotalCents: {
    fontSize: 14,
  },
  checkoutBtn: {
    backgroundColor: "#FFD814",
    paddingVertical: 14,
    borderRadius: 22,
    alignItems: "center",
  },
  checkoutText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0F1111",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 4,
  },
  cartItem: {
    flexDirection: "row",
    padding: 14,
  },
  cartItemImage: {
    width: 110,
    height: 130,
    resizeMode: "contain",
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 12,
  },
  cartItemTitle: {
    fontSize: 14,
    color: "#0F1111",
    lineHeight: 20,
    marginBottom: 6,
  },
  dealRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  dealBadge: {
    backgroundColor: "#CC0C39",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 3,
    marginRight: 8,
  },
  dealBadgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
  },
  limitedDeal: {
    color: "#CC0C39",
    fontSize: 12,
    fontWeight: "600",
  },
  cartPriceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 4,
    gap: 8,
  },
  cartPrice: {
    color: "#0F1111",
  },
  cartDollar: {
    fontSize: 12,
    fontWeight: "bold",
  },
  cartMainPrice: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cartCents: {
    fontSize: 12,
    fontWeight: "bold",
  },
  cartWasPrice: {
    fontSize: 12,
    color: "#565959",
  },
  strikethrough: {
    textDecorationLine: "line-through",
  },
  inStock: {
    color: "#007600",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 2,
  },
  shipsFrom: {
    fontSize: 12,
    color: "#565959",
    marginBottom: 10,
    lineHeight: 18,
  },
  amazonLink: {
    color: "#007185",
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    flexWrap: "wrap",
    gap: 8,
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d5d9d9",
    borderRadius: 8,
    overflow: "hidden",
  },
  qtyBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#f0f2f2",
  },
  qtyNumber: {
    paddingHorizontal: 16,
    fontSize: 15,
    fontWeight: "600",
    color: "#0F1111",
  },
  qtyPlus: {
    fontSize: 18,
    color: "#555",
  },
  actionBtn: {
    borderWidth: 1,
    borderColor: "#d5d9d9",
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  actionBtnText: {
    fontSize: 12,
    color: "#0F1111",
  },
  secondActionRow: {
    flexDirection: "row",
    gap: 8,
  },
  returnsSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },
  returnsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0F1111",
  },
  returnsSubtitle: {
    fontSize: 13,
    color: "#565959",
    marginTop: 2,
  },
  returnsIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#f5deb3",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  giftCardSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    backgroundColor: "#FFA41C",
    margin: 14,
    borderRadius: 8,
  },
  giftCardText: {
    fontSize: 14,
    color: "#0F1111",
    lineHeight: 20,
  },
  giftCardLink: {
    color: "#007185",
    textDecorationLine: "underline",
  },
  giftCardImg: {
    marginLeft: 10,
  },
  amazonCardPlaceholder: {
    width: 80,
    height: 50,
    backgroundColor: "#232F3E",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  amazonCardText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
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
