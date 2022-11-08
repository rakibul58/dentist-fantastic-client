import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
                {/* Dynamic Title */}
                <Helmet>
                    <title>Home</title>
                    <meta name="description" content="Dentist Service" />
                </Helmet>
                {/* Banner Component */}
                <Banner></Banner>
          
        </div>
    );
};

export default Home;