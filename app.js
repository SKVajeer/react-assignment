var a = document.createElement("h1")
a.innerText="react assignment"
var b = document.getElementById("root")
b.appendChild(a)
let  x = React.createElement("h1",{},"hello world this text add by react" )
let y =  document.getElementById("root1")
let z = ReactDOM.createRoot(y)
z.render(x)
// create nested React Element
var e = React.createElement("h1",{},"important notice");
var f = React.createElement("p",{},"we can add paragraph");
var root = document.getElementById("root2");
var react = ReactDOM.createRoot(root);
react.render(React.createElement('div',{},e,f));
