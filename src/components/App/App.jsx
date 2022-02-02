// import React from "react";
// import SearchBox from "./../SearchBox/SearchBox";
// import ResultsContainer from "./../ResultsContainer/ResultsContainer";
// import Header from './../Header/Header'
// import './App.css';


// const name = require('@rstacruz/startup-name-generator');

// class App extends React.Component {
//     // lifecycle, states, props, 

//     //old method of state 

//     constructor(){
//         super();

//         this.state = {
//             headerText: "Name It!",
//             headerExpanded: true,
//         };
//     }
//     // state = {
//     //     headerText: 'Name It!',
//     // }

//     handleInputChange = (inputText) => {

//         this.setState( { headerExpanded: !inputText });
//     }

//     render() {
//         return (
//             <div>
//                 <Header 
//                     headerExpanded={this.state.headerExpanded}
//                     headTitle={this.state.headerText} />
//                 <SearchBox onInputChange={this.handleInputChange} />
//                 <ResultsContainer />

//                 {/* <h3>{this.state.headerText}</h3>
//                 <button onClick={
//                     () => {
//                         this.setState({
//                             headerText: "Woaaah, It's Magic!!"
//                         })
//                     }
//                 }> Magic Happens Here</button> 
//                 // State: a piece of data that might change in future
//                // prop: a piece of data that transfer from parent to child 
//                 */}

//             </div>

//         )
//     }
// }

// // function App() {
// //     return <h1>This is my functional Components</h1>
// // }

// export default App;

import React from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            headerText: 'Name It!',
            headerExpanded: true,
            suggestedNames: [],
        };
    }

    handleInputChange = (inputText) => {
       
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChage={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;