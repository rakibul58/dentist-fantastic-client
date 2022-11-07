import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
         
                <Helmet>
                    <title>Home</title>
                    <meta name="description" content="Dentist Service" />
                </Helmet>
                <Banner></Banner>
          
        </div>
    );
};

export default Home;