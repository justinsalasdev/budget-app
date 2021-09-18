import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";

export default function App() {
  function handleLogin() {
    signInWithRedirect(auth, provider);
  }
  return (
    <div>
      hahahaha
      <button onClick={handleLogin}>signin</button>
    </div>
  );
}
