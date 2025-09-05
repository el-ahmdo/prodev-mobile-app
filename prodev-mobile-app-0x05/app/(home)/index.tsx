import PropertyListing from "@/components/PropertyListing";
import { styles1 } from "@/styles1/_homestyle";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";

const Home = () => {
  return (
    <View style={styles1.container}>
      <View style={styles1.searchGroup}>
        <View style={styles1.searchFormGroup}>
          <View style={styles1.searchControlGroup}>
            <Text style={styles1.searchFormText}>Where to?</Text>
            <TextInput
              style={{ ...styles1.searchControl, ...styles1.searchFormText }}
              placeholder="Location . Date . Add guest"
            />
          </View>
          <View style={styles1.searchButton}>
            <Feather name="search" size={24} color="white" />
          </View>
        </View>
      </View>

      <View
        style={{
          height: 72,
          backgroundColor: "white",
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles1.filterGroup}>
            {FILTERS.map((filter, index) => (
              <View style={styles1.filterContainer} key={index}>
                <Image
                  style={{
                    flex: 1,
                  }}
                  source={require("@/assets/images/mansion.png")}
                  resizeMode="contain"
                />
                <Text>{filter}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView style={styles1.listingContainer}>
        <PropertyListing listings={SAMPLE_DATA} />
        <View style={styles1.paginationContainer}>
          <TouchableHighlight style={styles1.showMoreButton}>
            <Text style={styles1.showMoreButtonText}>Show more</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
