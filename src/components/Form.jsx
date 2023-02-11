import React from 'react';
function Form(props)
{
    const handleGetCitySubmit = e =>{
        e.preventDefault()
        const city = e.currentTarget.city.value.trim()
        props.getWeather(city)

    }
    return (
        <form onSubmit={handleGetCitySubmit} className={'form'}>
            <input type={'text'} class="input" name={'city'} placeholder={'City'}/>
            <button type={'submit'}>Get weather</button>
        </form>
    );
}

export default Form;
