import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='QnA w-50 mx-auto'>

                {/* Question No 1 Answer */}
                <div className='card mx-auto mb-4'>
                    <div className="card-body">
                        <h3 className="card-title">Question No 1</h3>
                        <h3 className="card-subtitle mb-2 text-muted">Different of Authentication & Authorization</h3>
                        <p className="card-text"> অথোরাইজেশন ও এথনটিকেঠনের মধ্য মূল পার্থক্য হচ্ছে এথেনটিকেশন যাচিাই করে  যে কে, কি পরিচয় ইত্যাদি আর অথোরাইজেশন হচ্ছে এই প্রক্রিয়া সম্পাদনের একটি প্রারমিশেন দাতা। এটি তথ্য পাঠানো এবং যাচাই করার অনুমতি প্রদান করে।  </p>
                    </div>
                </div>

                {/* Question No 2 Answer */}
                <div className='card mx-auto mb-4'>
                    <div className="card-body">
                        <h3 className="card-title">Question No 2</h3>
                        <h4 className="card-subtitle mb-2 text-muted">Why are you using firebase? What other options do you have to implement
                            authentication?</h4>
                        <p className="card-text">
                            গুগল ফায়ার বেইজ ব্যবহার করা অনেক সহজ এবং এর মধ্যে অনেক গুলো ফিচার আছে । এবং এটি অনেক স্টংগ ভাবে তৈরি করা যাতে হ্যাকার সাইট হ্যাক করার সময় এটি তা রোধ করে। এজন্যই ফায়ার বেইজ ব্যবহার করা ভালো।

                            1. Two-Factor Authentication (2FA) ...
                            2. Challenge Handshake Authentication Protocol (CHAP) .
                            3. Extensible Authentication Protocol (EAP)
                            4. Single Sign-On (SSO) ... </p>
                    </div>
                </div>
                {/* Question No 2 Answer */}
                <div className='card mx-auto mb-4'>
                    <div className="card-body">
                        <h3 className="card-title">Question No 3</h3>
                        <h4 className="card-subtitle mb-2 text-muted">DWhat other services does firebase provide other than authentication</h4>
                        <p className="card-text">
                            অথেনটিকেশন ছাড়ার গুগোল ফায়ার বেইজ নিম্মোক্ত সেবা প্রদার করে।

                            Parse – Open Source Backend Platform;
                            Back4app – Parse Hosting Platform;
                            Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;
                            Backendless – Mobile Backend and API Services Platform;
                            Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects;
                            Pubnub – Real-time APIs and Global Messaging;
                            Kumulos – App Performance Management;
                            Game Sparks – Game Backend Platform;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;