import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";

const colors = {
  light: {
    background: "#F4F4F4",
    surface: "#FFFFFF",
    text: "#1F1F1F",
    secondaryText: "#555555",
    inputBackground: "#FFFFFF",
    border: "#666666",
    placeholder: "#777777",
    button: "#00274C",
    buttonText: "#FFFFFF",
    accent: "#2F65A7",
  },
  dark: {
    background: "#121212",
    surface: "#242424",
    text: "#FFFFFF",
    secondaryText: "#CCCCCC",
    inputBackground: "#333333",
    border: "#AAAAAA",
    placeholder: "#BBBBBB",
    button: "#FFCB05",
    buttonText: "#00274C",
    accent: "#FFCB05",
  },
};

function SuccessScreen({ onNavigate }) {
  return (
    <View style={styles.successScreen}>
      <View style={styles.successCard}>
        <Text style={styles.successTitle}>Success!</Text>
        <Text style={styles.successMessage}>Your message has been sent.</Text>
        <AppButton title="Send another message" onPress={onNavigate} />
      </View>
    </View>
  );
}

function FormScreen({ onNavigate }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [draft, setDraft] = useState("");

  const theme = isDarkMode ? colors.dark : colors.light;

  const handleSave = () => {
    // Add your save logic here
  };

  const fullName = `${firstName} ${lastName}`.trim();

  return (
    <ScrollView
      style={[styles.screen, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.titleRow}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: theme.text }]}>Contact Us</Text>
          <Text style={[styles.subtitle, { color: theme.secondaryText }]}>
            Please enter personal information and inquiry about a subject.
          </Text>
        </View>
        <View style={styles.switchContainer}>
          <Text style={[styles.switchLabel, { color: theme.secondaryText }]}>
            Dark mode
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: "#767577", true: theme.accent }}
            thumbColor={isDarkMode ? "#FFFFFF" : "#F4F4F4"}
            accessibilityLabel="Toggle dark mode"
          />
        </View>
      </View>

      {/* Name input example */}
      <View style={[styles.card, { backgroundColor: theme.surface, elevation: 2 }]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Please enter Name and Uniqname
        </Text>

        <Text style={[styles.label, { color: theme.text }]}>Full name</Text>

        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: theme.inputBackground,
              borderColor: theme.border,
              color: theme.text,
            },
          ]}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Enter Full name"
          placeholderTextColor={theme.placeholder}
          autoCapitalize="words"
          returnKeyType="next"
        />

        <Text style={[styles.label, { color: theme.text }]}>Uniqname</Text>

        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: theme.inputBackground,
              borderColor: theme.border,
              color: theme.text,
            },
          ]}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          placeholder="Enter Uniqname"
          placeholderTextColor={theme.placeholder}
          autoCapitalize="words"
          returnKeyType="done"
        />
      </View>

      {/* Inquiry input */}
      <View style={[styles.card, { backgroundColor: theme.surface, elevation: 2 }]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          What do you want to talk about?
        </Text>

        <TextInput
          style={[
            styles.input,
            styles.multilineInput,
            {
              backgroundColor: theme.inputBackground,
              borderColor: theme.border,
              color: theme.text,
            },
          ]}
          value={draft}
          onChangeText={setDraft}
          placeholder="I would like to..."
          placeholderTextColor={theme.placeholder}
          multiline
          textAlignVertical="top"
        />
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.button }]}
        onPress={onNavigate}
        activeOpacity={0.65}
        accessibilityRole="button"
      >
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
          Send Message
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("form");
  function navigate(screenName) {
    setCurrentScreen(screenName);
  }

  // Render one screen based on the current state.
  function renderScreen() {
    if (currentScreen === "form") {
      return <FormScreen onNavigate={() => navigate("success")} />;
    }

    if (currentScreen === "success") {
      return <SuccessScreen onNavigate={() => navigate("form")} />;
    }

    // Fallback in case currentScreen contains an unexpected value.
    return <NotFoundScreen onNavigate={() => navigate("home")} />;
  }

  return (
    <SafeAreaProvider>
      <View style={styles.screen}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <SafeAreaView
        style={styles.safeArea}
        edges={["top", "right", "bottom", "left"]}
      >
        {renderScreen()}
      </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 50,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  titleContainer: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 15,
    lineHeight: 21,
  },
  switchContainer: {
    alignItems: "center",
  },
  switchLabel: {
    marginBottom: 4,
    fontSize: 13,
    fontWeight: "600",
  },
  card: {
    marginBottom: 18,
    padding: 18,
    borderRadius: 12,
  },
  sectionTitle: {
    marginBottom: 18,
    fontSize: 20,
    fontWeight: "700",
  },
  label: {
    marginBottom: 6,
    fontSize: 15,
    fontWeight: "600",
  },
  input: {
    minHeight: 48,
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 17,
  },
  multilineInput: {
    minHeight: 110,
  },
  button: {
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "700",
  },
  pressedButton: {
    opacity: 0.85,
  },
  successScreen: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: colors.light.background,
  },
  successCard: {
    padding: 24,
    borderRadius: 12,
    backgroundColor: colors.light.surface,
    elevation: 3,
  },
  successTitle: {
    marginBottom: 6,
    fontSize: 26,
    fontWeight: "700",
    color: colors.light.text,
  },
  successMessage: {
    marginBottom: 24,
    fontSize: 16,
    lineHeight: 22,
    color: colors.light.secondaryText,
  },
});

function NotFoundScreen({ onNavigate }) {
  return (
    <View>
      <Text>Screen Not Found</Text>
      <Text>The requested screen does not exist.</Text>
      <AppButton title="Go Home" onPress={onNavigate} />
    </View>
  );
}

function AppButton({ title, onPress, secondary = false }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: secondary ? colors.light.surface : colors.light.button },
        pressed && styles.pressedButton,
      ]}
      android_ripple={{ color: "#FFFFFF33" }}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: colors.light.buttonText }]}>
        {title}
      </Text>
    </Pressable>
  );
}
