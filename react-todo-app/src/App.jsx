import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
        
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
