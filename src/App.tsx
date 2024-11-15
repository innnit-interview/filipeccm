/** @jsxImportSource @emotion/react */
import "./App.css";
import FormComponent from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import { Global, ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    primary: "#9466F2",
    primaryHover: "#8f3ee5",
    secondary: "#F7661E",
    secondaryHover: "#e64a00",
    error: "#f53838",
    helper: "#767676",
  },
  typography: {
    default: "'Soehne Buch', Arial, sans-serif",
    italic: "'Soehne Buch Kursiv', Arial, sans-serif",
    bold: "'Soehne Kraeftig', Arial, sans-serif",
    heavy: "'Soehne Dreiviertelfett', Arial, sans-serif",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          "*": {
            fontFamily: theme.typography.default,
            boxSizing: "border-box",
            margin: 0,
          },
        }}
      />
      <div className="react-modal">
        <Modal isOpen>
          <FormComponent />
        </Modal>
      </div>
    </ThemeProvider>
  );
}

export default App;
