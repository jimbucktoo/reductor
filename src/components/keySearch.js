import React, { Component } from 'react';

class KeySearch extends Component {

    constructor(props) {
        super(props);
        this.state = { term: "" };
    }

    onInputChange(term) {
        this.setState({term});
        this.props.setSearchTerm(term);
    };

    render() {
        return (
            <div>
                <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    };
};

export default KeySearch;

