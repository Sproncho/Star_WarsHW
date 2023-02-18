import React from 'react';
import {text} from "../utils/constants";
import {base_url} from "../utils/constants";
import {findAllByDisplayValue} from "@testing-library/react";

class AboutMe extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            gender:"",
            mass:"",
            height:"",
            birth_year:"",
            isLoading:true
        }
    }
    componentDidMount() {
        fetch(`${base_url}/v1/peoples/1`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    name:resp.name,
                    gender:resp.gender,
                    mass:resp.mass,
                    height:resp.height,
                    birth_year:resp.birth_year,
                    isLoading:false
                })
            })
    }

    render() {
        if(this.state.isLoading){
            return<div>Loading...</div>
        }else{
            return <div>
                <p>Name: {this.state.name}</p>
                <p>gender: {this.state.gender}</p>
                <p>mass: {this.state.mass}</p>
                <p>height: {this.state.height}</p>
                <p>birth_year: {this.state.birth_year}</p>
            </div>
        }

    }
};

export default AboutMe;