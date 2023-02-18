import React from 'react';
import {base_url} from "../utils/constants";


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            planets: []
        }
    }

    componentDidMount() {
        fetch(`${base_url}/v1/planets`)
            .then(resp => resp.json())
            .then(resp => {
                let planets = resp.map(planet => planet.name);
                this.setState({
                    planets: planets,
                    isLoading: false
                })
            })
    }

    render() {
        if (!this.state.isLoading) {
            return (
                <div className="container">
                    <form action="action_page.php">

                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                        <label htmlFor="country">Planet</label>
                        <select id="country" name="country">
                            {this.state.planets.map(planet => <option value={`${planet}`}>{planet}</option>)}
                        </select>

                        <label htmlFor="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                        <input type="submit" value="Submit"/>

                    </form>
                </div>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
};

export default Contact;