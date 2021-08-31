import React from "react";
import classes from "./App.module.css";
import Header from "./Components/Header/Header";
import Movies from "./Components/Movies/Movies";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Movies />
    </div>
  );
}

export default App;

// import React from 'react';
// import classes from  './App.module.css';

// function App() {
//   return (
//     <div className={classes.App}>
//       hello
//     </div>
//   );
// }

// export default App;
