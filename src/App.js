import React, {Component} from 'react';
import Main from "./components/MainComponent";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import BrowserRouter from "react-router-dom/BrowserRouter";

class App extends Component{
    render(){
        return (
                <BrowserRouter>
                    <div className="App">
                        <Main />
                    </div>
                </BrowserRouter>
        );
    }

}

export default App;
