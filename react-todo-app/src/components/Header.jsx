import React, { useState } from "react";
import { Icon } from "./Icon";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const handleSearch = () => {
    if(projectName.trim() === "" || projectName.length < 3){
      setError(true);
      setTimeout(() => setError(false), 3000); // Clear error after 3 seconds
    }else{
      setError(false);
      // Implement search functionality here
      console.log("Searching for project:", projectName);
    }
    
  }
  const iconClass ="w-7 h-6 text-primary-500 cursor-pointer transition-transform duration-300 hover:scale-110";

  return (
    <header className="bg-primary-200 flex items-center justify-between px-6 py-4">

      {/* Left */}
      <button aria-label="Menu">
        <Icon name="Menu" className={iconClass} />
      </button>

      {/* Center */}
      <div className="relative flex-1 max-w-md mx-4">
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Write your project name"
                    className={`w-full bg-primary-50 text-primary-500 placeholder:text-sm placeholder:font-light rounded-md py-1 px-3 pr-10 
                      ${
                        error ?
                         "border-2 border-red-500" :
                         "focus:ring-2 focus:ring-primary-500"
                        } transition-colors duration-300`}
        />
        <Icon
          name="Search"
          strokeWidth={2.5}
          className="w-5 h-5 text-primary-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={handleSearch}              
                      
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button aria-label="Notifications">
          <Icon name="Bell" className={iconClass} />
        </button>

        <button onClick={toggleTheme} aria-label="Toggle theme">
          <Icon
            name={theme === "light" ? "Moon" : "Sun"}
            className="w-7 h-6 text-primary-500 cursor-pointer transition-transform duration-300 hover:rotate-90"
            
          />
        </button>

        <button aria-label="User profile">
          <Icon name="CircleUserRound" className={iconClass} />
        </button>
      </div>
    </header>
  );
};

export default Header;