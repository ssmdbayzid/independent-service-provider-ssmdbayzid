import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Services = ({service}) => {

    const {name, price, description, picture} = service;
    return (
        <div>
            <Card className='m-3' style={{ width: '22rem' }}>
                <Card.Img className='img-fluid' variant="top" src={picture} />
                <Card.Body>
                    <h3>{name}</h3>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h4 className='p-2'>Rate : ${price}</h4>
                    <Button href='/checkout' variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Services;