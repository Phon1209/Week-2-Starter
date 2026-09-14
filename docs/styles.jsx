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