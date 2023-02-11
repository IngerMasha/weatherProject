import React from 'react';
import Form from "./Form";
import Weather from "./Weather";
import {api_key, base_url} from "../utils/constans";

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: {
                temp: null,
                city: null,
                country: null,
                pressure: null,
                sunset: null
            }
        }
    }

    getWeather = city => {

        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => response.json())
            .then(data => this.setState({
                    weatherInfo: {
                        city: data.name,
                        temp: data.main.temp,
                        country: data.sys.country,
                        pressure: data.main.pressure,
                        sunset: data.sys.sunset
                    }
            }))
    }

    render() {
        return (
            <div className={'card'}>
                <Form getWeather={this.getWeather}/>
                <Weather weatherInfo={this.state.weatherInfo}/>
            </div>
        );
    }
}

export default Data;