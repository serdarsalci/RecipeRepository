import Pages from "./pages/Pages";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

import Category from "./components/Category/Category";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Category />
          <Pages />
        </AuthProvider>
      </BrowserRouter>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
