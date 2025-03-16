import { auth } from "./Firebase/config"; // Import auth instance
import { createUserWithEmailAndPassword } from "firebase/auth";

function App() {
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, "abhinandshajigame@gmail.com", "kaattu")
      .then((userCredential) => {
        console.log("User created successfully:", userCredential.user);
      })
      .catch((error) => {
        console.error("Error:", error.code, error.message);
      });
  };

  return (
    <div>
      <h1>Abhinand</h1>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default App;
