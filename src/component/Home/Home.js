import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from '../Services/Services';
import img from '../images/palestine.jpg'
import socialmedia from '../images/socialmedia2.png'
import './Home.css'


const Home = () => {

    const [services, setServices] = useState([]);


    useEffect(() => {
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
            <section>
                <div>
                    <hr />
                    <h1 style={{ color: 'brown' }}>Save Palestine</h1>
                    <hr />
                    <div className='d-flex mx-auto justify-content-center p-5 align-items-center'>
                    <img className='img-fluid' style={{width: '300px', height: '400px'}} src={img} alt="" srcset="" />
                    <h5 className='w-50'>This time it is different – the Palestinian struggle for equality and freedom has reached a new and radical stage.

                        In the face of Israel’s most recent assault on their rights and lives in occupied East Jerusalem and Gaza, the Palestinians not only demonstrated unprecedented courage and unity, but also embarked on a landmark general strike, the first in decades, with the full support of both Fatah and Hamas.</h5>
                    </div>    
                </div>
            </section>

            <footer style={{backgroundColor : 'navy', color: 'white', padding: '20px 10px'}} className=''>
                <h4>contact with me</h4>
                <img style={{width: '150px'}} src={socialmedia} alt="" srcset="" />
                <p></p>
            </footer>

        </div>
    );
};

export default Home;