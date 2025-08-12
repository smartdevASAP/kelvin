import React from "react";
import Nav from "./components/nav.jsx";
import Header from "./components/header.jsx";
import About from "./components/about.jsx";
import Projects from "./components/projects.jsx";
import Services from "./components/services.jsx";
import Example from "./components/contacts.jsx";
import Footer from "./components/footer.jsx";
import { useAppContext } from "./context/appContext.jsx";

function App() {
  const { mode, setMode } = useAppContext();

  return (
    <div
      className={`px-8 py-4 ${
        mode === "light" ? "bg-white text-gray-600" : "bg-black text-white"
      }`}
    >
      <Nav />
      <Header />
      <About />
      <Services />
      <Projects />
      <Example />
      <Footer />
    </div>
  );
}

export default App;
