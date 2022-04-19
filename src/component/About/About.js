import React from 'react';
import Card from 'react-bootstrap/Card';
import photo from '../images/profile.jpg';
import './About.css'

const About = () => {
    return (
        <div className='about border mt-3'>
            <Card className='' style={{ width: '22rem' }}>
                <Card.Img className='img-fluid' variant="top" src={photo} />
                <Card.Body>
                    <h3>S S Md. Bayzid</h3>
                    <Card.Text>
                    আমি ওয়েব ডেভেলপন্ট পেশাকে খুব পছন্দ করি। আমার খুব ইচ্ছা আমি একজন পেশাগত ডেভেলপার হতে চাই।  আমি বর্তমানে টেক্সটাইল এ চাকুরি করার জন্য ১২ ঘন্টা ডিউটি করতে হয় তাই আমি সঠিকভাবে কাজে সময় দিতে পারি না। তবে আমি আমার এইম হিসাবে ওয়েব ডেভেলপমেন্ট কেই পছন্দ করেছি। তাই কষ্ট করে রাত জেগে হলেও আমি তা  করব ইনশা আল্লাহ..
                    </Card.Text>                   
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;