import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from '../Services/Services'
import './Home.css'


const Home = () => {

    const [services, setServices] = useState([]);


    useEffect( () => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setServices(data))
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            <div className='w-30'> <hr /> </div>
            <h1>My Services</h1>
            <div className='w-30'> <hr /></div>
            <section className='service-card d-flex service-section'>
                {
                    services.map(service => <Services key={service.id} service={service}></Services>)
                }
            </section>

        </div>
    );
};

export default Home;