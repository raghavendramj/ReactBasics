//With JSX
const element = <h1> i love react with jsx </h1>
ReactDOM.render(element, document.getElementById('root'));


//Without JSX
const newElement = React.createElement('h1', "i don't love react with jsx");
ReactDOM.render(newElement, document.getElementById('root'));