import React from "react";
import "./homepage.style.scss";
import Directory from "../../components/directory/directory.component";
export default function homepage(history) {
  console.log(history);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}
