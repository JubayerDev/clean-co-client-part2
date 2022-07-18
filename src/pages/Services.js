import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fetcher from '../api';

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        // axios.get('http://localhost:5000/service').then(res => setServices(res.data))
        (async ()=> {
            const res = await fetcher.get('/service')
            setServices(res.data)
        })()
    },[])
    return (
        <div>
            Service
        </div>
    );
};

export default Services;