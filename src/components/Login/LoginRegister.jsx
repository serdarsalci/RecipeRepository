import React, { useState } from "react";

import "./LoginRegister.scss";
import Register from "./Register";
import Login from "./Login";

const LoginRegister = () => {
  const [showLogin, SetShowLogin] = useState(true);

  return (
    <div id="entry-page" className="border">
      {showLogin ? (
        <Login setShowLogin={SetShowLogin} />
      ) : (
        <Register setShowLogin={SetShowLogin} />
      )}
    </div>
  );
};

export default LoginRegister;
