import React, { Component } from 'react';
import logo from '../logo.svg';
import'../style/App.css';
import KeySearch from './keySearch'
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { searchterm: '' };
    }

    setSearchTermState(term) {
        this.setState({searchterm: term});
    };

    render() {

        const setSearchTermState = this.setSearchTermState;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <br />
                <br />
                <br />
                <KeySearch setSearchTerm={setSearchTermState.bind(this)} />
                <br />
                Value: {this.state.searchterm}
                <br />
                <br />
                <br />
                <div class="booklistdiv">
                    <BookList />
                </div>
                <BookDetail />
            </div>
        );
    };
};

export default App;
