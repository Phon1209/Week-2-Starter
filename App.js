import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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

export default function App() {
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
      style={[
        styles.screen,
        { backgroundColor: theme.background },
      ]}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.titleRow}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: theme.text }]}>
            Contact Us
            
          </Text>

          <Text
            style={[
              styles.subtitle,
              { color: theme.secondaryText },
            ]}
          >
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
      <View
        style={[
          styles.card,
          { backgroundColor: theme.surface },
        ]}
      >
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Who are you?
        </Text>

        <Text
          style={[
            styles.description,
            { color: theme.secondaryText },
          ]}
        >
          Please enter Name and Uniqname
        </Text>

        <Text style={[styles.label, { color: theme.text }]}>
          Full name
        </Text>

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

        <Text style={[styles.label, { color: theme.text }]}>
          Uniqname
        </Text>

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
      <View
        style={[
          styles.card,
          { backgroundColor: theme.surface },
        ]}
      >


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
          <Text
            style={[
              styles.buttonText,
              { color: theme.buttonText },
            ]}
          >
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

          <Text
            style={[
              styles.savedText,
              { color: theme.secondaryText },
            ]}
          >
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

const styles = StyleSheet.create({
  screen: {
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
  buttonText: {
    fontSize: 17,
    fontWeight: "700",
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
});