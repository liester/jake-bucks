import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGNf9oWiwbzD0MZT6mFvpU_AdpEVgfDCk",
  authDomain: "jake-bucks.firebaseapp.com",
  projectId: "jake-bucks",
  storageBucket: "jake-bucks.appspot.com",
  messagingSenderId: "865351729238",
  appId: "1:865351729238:web:5ad98c062993221249fbf7",
  measurementId: "G-3XXMBXKC00",
  databaseURL: "https://jake-bucks-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const starCountRef = ref(database, "users/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(JSON.stringify(data));
      setUsers(data);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {Object.keys(users).map((user) => (
          <div>{`${user} - ${JSON.stringify(users[user])}`}}</div>
        ))}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
