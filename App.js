import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

function SuccessScreen() {
  return (
    <View>
      <Text>Success!</Text>
      <Text>Your message has been sent</Text>
    </View>
  );
}

function FormScreen() {
  return (
    <View>
      <Text>Form Screen</Text>
    </View>
  );
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState < PAGES > "form";
  function navigate(screenName) {
    setCurrentScreen(screenName);
  }

  // Render one screen based on the current state.
  function renderScreen() {
    if (currentScreen === "form") {
      return <FormScreen onNavigate={navigate} />;
    }

    if (currentScreen === "success") {
      return <SuccessScreen onNavigate={navigate} />;
    }

    // Fallback in case currentScreen contains an unexpected value.
    return <NotFoundScreen onNavigate={() => navigate("home")} />;
  }

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#f5f7fa",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#00274c",
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  content: {
    flex: 1,
  },
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    color: "#00274c",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 16,
  },
  body: {
    color: "#333333",
    fontSize: 17,
    lineHeight: 25,
    marginBottom: 24,
  },
  label: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#ffffff",
    borderColor: "#8a8a8a",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 17,
    padding: 12,
    marginBottom: 18,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#00274c",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 14,
    marginBottom: 12,
  },
  secondaryButton: {
    backgroundColor: "#ffcb05",
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryButtonText: {
    color: "#00274c",
  },
  codeBox: {
    backgroundColor: "#e6e9ed",
    borderRadius: 8,
    padding: 14,
    marginBottom: 24,
  },
  code: {
    color: "#222222",
    fontFamily: "monospace",
    fontSize: 14,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTopColor: "#cccccc",
    borderTopWidth: 1,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 16,
  },
  activeTabButton: {
    backgroundColor: "#ffcb05",
  },
  tabButtonPressed: {
    opacity: 0.6,
  },
  tabText: {
    color: "#555555",
    fontSize: 15,
    fontWeight: "600",
  },
  activeTabText: {
    color: "#00274c",
    fontWeight: "800",
  },
});

function NotFoundScreen({ onNavigate }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Screen Not Found</Text>
      <Text style={styles.body}>The requested screen does not exist.</Text>
      <AppButton title="Go Home" onPress={onNavigate} />
    </View>
  );
}
