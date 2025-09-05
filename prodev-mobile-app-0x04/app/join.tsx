import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles1 } from "@/styles/_mainstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles1.container}>
        <View style={styles1.navGroup}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={require("@/assets/images/logo.png")} />
        </View>
        <Text style={styles1.largeText}>Create your</Text>
        <Text style={styles1.largeText}>Account</Text>
        <Text style={styles1.smallText}>
          Enter your details to create a new account.{" "}
        </Text>

        <View style={styles1.formGroup}>
          <View>
            <Text style={styles1.placeholderText}>Email</Text>
            <TextInput
              keyboardType="email-address"
              style={styles1.inputField}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles1.placeholderText}>Password</Text>
            <View style={styles1.passwordGroup}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles1.placeholderText}>Password</Text>
            <View style={styles1.passwordGroup}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles1.button}>
          <Text style={styles1.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles1.dividerGroup}>
          <View style={styles1.divider}></View>
          <Text style={styles1.dividerText}>OR</Text>
          <View style={styles1.divider}></View>
        </View>

        <View style={styles1.socialMediaButtonGroup}>
          <TouchableOpacity style={styles1.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}>
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles1.socialMediaButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles1.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}>
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles1.socialMediaButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles1.subTextGroup}>
          <Text style={styles1.subText}>Don't have an account?</Text>
          <Text style={styles1.subTextJoin}>Join now</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
