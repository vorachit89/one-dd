
import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container mx-auto min-h-screen">
      {children}
    </div>
  );
};

export default Container;
