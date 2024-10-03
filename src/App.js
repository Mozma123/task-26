import React, { useState } from "react";

export default function App() {
  // State variables
  const [name, setName] = useState('tito'); // Initial state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: 'tito',
    age: 22,
    sex: 'female'
  });
  const [names, setNames] = useState([]);
  const [isEmailVisible, setIsEmailVisible] = useState(false); // New state for email visibility

  function handleSubmit(e) {
    e.preventDefault();

    // simulate loading
    setLoading(true);
    // submit email and password via post request for server authentication
    if (email === "mozmashk@gmail.com" && password === "12345678") {
      setTimeout(() => {
        setSuccess(true);
        // stop loading after success
        setLoading(false);
        // simulate message pop up
        setTimeout(() => setSuccess(false), 2000);
      }, 2000);
    } else {
      setTimeout(() => {
        setError(true);
        // stop loading after error
        setLoading(false);
        // simulate message pop up
        setTimeout(() => setError(false), 2000);
      }, 2000);
    }
  }

  // Example of updating state correctly
  function updateUserName(newName) {
    setUser(prevUser => ({ ...prevUser, name: newName }));
  }

  function addName(newName) {
    setNames(prevNames => [...prevNames, newName]);
  }

  return (
    <div className="App">
      <button onClick={() => setIsEmailVisible(true)}>
        Show Email
      </button>

      {isEmailVisible && (
        <ChildComponent email={email} />
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">{loading ? "Loading..." : "Log in"}</button>
      </form>

      {/* Display notification messages */}
      {success && <p>Welcome back!</p>}
      {error && <p>Invalid email or password. Please try again.</p>}

      {/* Example of name update and adding to names list */}
      <button onClick={() => setName('moazma')}>Change Name to Moazma</button>
      <button onClick={() => updateUserName('moazma')}>Update User Name</button>
      <button onClick={() => addName('moazma')}>Add Name</button>

      <p>Current Name: {name}</p>
      <p>User Name: {user.name}</p>
      <p>Names List: {names.join(', ')}</p>
    </div>
  );
}

const ChildComponent = ({ email }) => {
  return (
    <>
      {email && <p>Your email is {email}. Thanks for joining us!</p>}
    </>
  );
};
