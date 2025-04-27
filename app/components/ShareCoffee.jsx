"use client"; // This will mark this component as client-only

import { useEffect } from "react";

const ShareCoffee = () => {
  useEffect(() => {
    // Dynamically load the "Buy Me a Coffee" widget script only on the client
    const script = document.createElement("script");
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    script.setAttribute("data-name", "BMC-Widget");
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-id", "talktokrishna");
    script.setAttribute("data-description", "Support me on Buy me a coffee!");
    script.setAttribute("data-message", "Support this project.");
    script.setAttribute("data-color", "#40DCA5");
    script.setAttribute("data-position", "Right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "18");

    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty array ensures this runs once on the client

  return null; // The widget is added to the page by the script, so no need for any JSX here
};

export default ShareCoffee;
