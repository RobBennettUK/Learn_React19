import React from "react";
import Login from "./Login";

var isLoggedIn = false;

// Method 1:
// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return (
//       <form className="form">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     );
//   }
// }

// function App() {
//   return <div className="container">{renderConditionally()}</div>;
// }

// export default App;

// Each component should have a single responsibility.
// https://en.wikipedia.org/wiki/Single-responsibility_principle
// This will give us:

// Method 2:

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

// function App() {
//   return <div className="container">{renderConditionally()}</div>;
// }

// export default App;

// We can use a Ternary Operator to turn a statement into an expression. This means that we can simplify our code again

// Method 3:
// NOTE: Because isLoggedIn is a Boolean, we don't even need the "=== true"

const currentTIme = new Date().getHours();
console.log(currentTIme);

function App() {
  return (
    <div className="container">
      {isLoggedIn === true ? <h1>Hello</h1> : <Login />}
      {/* Here is another example of how this could be used: */}
      {currentTIme > 12 ? <h1>Why are you still working?</h1> : null}
      {/* Which is the same as below (think how booleans work). If the first statement is wrong, then it won't bother doing the next */}
      {currentTIme > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
