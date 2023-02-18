import React from 'react';
import {text} from "../utils/constants";
import {base_url} from "../utils/constants";

class FarGalaxy extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text:"loading..."
        }
    }

    componentDidMount() {
        let id = Math.floor(Math.random() * 6) + 1;
        fetch(`${base_url}/v1/films/${id}`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({text:resp.opening_crawl})
            })
    }

    render(){
    return (
        <p className="farGalaxy">{this.state.text}</p>
    )
}
};

export default FarGalaxy;