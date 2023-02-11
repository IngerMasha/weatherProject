import React from 'react';
import {api_key, base_url} from "../utils/constans";

class Form extends React.Component{
    constructor(props)
    {
        super(props);
        this.state ={}
    }

    handleGetCitySubmit = (e) =>
    {
        e.preventDefault()
        const city = e.currentTarget.city.value.trim()
        fetch(`${base_url}?q=${city}&appid=${api_key}`)
            .then(response => response.json())
            .then(data => this.setState({
                    city: data.name,
                    temp: data.main.temp
                }
            ))
    }

    render()
    {
        return (
            <div>
                <form onSubmit={this.handleGetCitySubmit}>
                    <input type={'text'} name={'city'} placeholder={'City'}/>
                    <button type={'submit'}>Get weather</button>
                </form>
                <h2>Location: {this.state.city}</h2>
                <h3>Temperature: {this.state.temp}</h3>
            </div>
        );
    }
}

export default Form;