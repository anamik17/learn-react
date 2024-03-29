import React from 'react';
import ReactDOM from 'react-dom/client'


const heading = React.createElement("div", {id: "parent"}, 
[React.createElement("div", {id: "chid1"}, [
React.createElement("h1", {}, "I m h1 tag"), 
React.createElement("h2", {}, "I m h2 tag")
]),
React.createElement("div", {id: "chid2"}, [
React.createElement("h1", {}, "I m h1 tag"), 
React.createElement("h2", {}, "I m h2 tag")
])]);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);