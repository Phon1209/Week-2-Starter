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
  useSafeAreaInsets,
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

function SuccessScreen() {
  return (
    <View>
      <Text>Success!</Text>
      <Text>Your message has been sent</Text>
    </View>
  );
}

function FormScreen({ onNavigate }) {
  // Each call to useState creates one piece of component state.
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [draft, setDraft] = useState("");
  const [savedContents, setSavedContents] = useState("");

  const theme = isDarkMode ? colors.dark : colors.light;

  // An event handler can be defined separately from the JSX.
  const handleSave = () => {
    setSavedContents(draft);
  };

  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setDraft("");
    setSavedContents("");
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
          <Text style={[styles.switchLabel, { color: theme.text }]}>
            Dark mode
          </Text>

          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{
              false: "#767577",
              true: "#light-blue",
            }}
            thumbColor={isDarkMode ? "#blue" : "#light-blue"}
            accessibilityLabel="Toggle dark mode"
          />
        </View>
      </View>

      {/* Name input example */}
      <View style={[styles.card, { backgroundColor: theme.surface }]}>
        <Text style={[styles.description, { color: theme.secondaryText }]}>
          Please enter Name and Uniqname
        </Text>

        <Text style={[styles.label, { color: theme.text }]}>Full name</Text>

        <TextInput
          style={[
            styles.input,
            {
              color: theme.text,
              backgroundColor: theme.inputBackground,
              borderColor: theme.border,
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
              color: theme.text,
              backgroundColor: theme.inputBackground,
              borderColor: theme.border,
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

      {/* Save input example */}
      <View style={[styles.card, { backgroundColor: theme.surface }]}>
        <Text style={[styles.label, { color: theme.text }]}>
          What do you want to talk about?
        </Text>

        <TextInput
          style={[
            styles.input,
            styles.multilineInput,
            {
              color: theme.text,
              backgroundColor: theme.inputBackground,
              borderColor: theme.border,
            },
          ]}
          value={draft}
          onChangeText={setDraft}
          placeholder="I would like to..."
          placeholderTextColor={theme.placeholder}
          multiline
          textAlignVertical="top"
        />

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.button },
            !draft.trim() && styles.disabledButton,
          ]}
          onPress={handleSave}
          disabled={!draft.trim()}
          activeOpacity={0.65}
          accessibilityRole="button"
          accessibilityLabel="Save the current draft"
          accessibilityState={{ disabled: !draft.trim() }}
        >
          <Text style={[styles.buttonText, { color: theme.buttonText }]}>
            Save
          </Text>
        </TouchableOpacity>

        <View
          style={[
            styles.savedBox,
            {
              backgroundColor: theme.inputBackground,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={[styles.savedLabel, { color: theme.text }]}>
            Saved value
          </Text>

          <Text style={[styles.savedText, { color: theme.secondaryText }]}>
            {savedContents || "Nothing has been saved yet."}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.clearButton, { borderColor: theme.accent }]}
        onPress={handleClear}
        activeOpacity={0.65}
        accessibilityRole="button"
      >
        <Text style={[styles.clearButtonText, { color: theme.accent }]}>
          Clear all fields
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("success");
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
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
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
  subtitle: {
    marginTop: 4,
    fontSize: 15,
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
    fontSize: 20,
    fontWeight: "700",
  },
  description: {
    marginTop: 6,
    marginBottom: 18,
    fontSize: 15,
    lineHeight: 21,
  },
  greeting: {
    marginBottom: 18,
    fontSize: 24,
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
  },
  disabledButton: {
    opacity: 0.4,
  },
  savedBox: {
    minHeight: 80,
    marginTop: 18,
    padding: 14,
    borderWidth: 1,
    borderRadius: 8,
  },
  savedLabel: {
    marginBottom: 6,
    fontWeight: "700",
  },
  savedText: {
    fontSize: 16,
    lineHeight: 22,
  },
  clearButton: {
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 8,
  },
  clearButtonText: {
    fontSize: 16,
    fontWeight: "700",
  },
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

function AppButton({ title, onPress, secondary = false }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        secondary && styles.secondaryButton,
        pressed && styles.buttonPressed,
      ]}
    >
      <Text
        style={[styles.buttonText, secondary && styles.secondaryButtonText]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

