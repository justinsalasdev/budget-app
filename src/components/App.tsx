import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import Calendar from "react-calendar";

export default function App() {
  const [value, onChange] = useState(new Date());
  function handleLogin() {
    signInWithRedirect(auth, provider);
  }
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <button onClick={handleLogin} className="bg-red-400">
        signin
      </button>
    </div>
  );
}
