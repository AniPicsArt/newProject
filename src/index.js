import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from "./Components/Common/Header";
import './index.css';
import List from './Components/Common/list/List'

ReactDOM.render(<App />, document.getElementById('root'));


const Head = () => {
    return (<div>
            <h1>Hello World!</h1>
            <Header/>
            <List/>
        </div>
    )
};


    ReactDOM.render(
        <Head/>,
        // <Header/>,
        document.getElementById('root')

    );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
