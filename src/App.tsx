import ThemeContextProvider, { useTheme } from "./components/Context";

function AppContent() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h1 className={theme === "light" ? "text-black" : "text-white"}>ThemeContext: {theme}</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle Theme
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;