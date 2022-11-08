import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import GetUpdate from '../GetUpdate/GetUpdate';
import MyServices from '../MyServices/MyServices';


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
                <MyServices></MyServices>
                <Feature></Feature>
                <GetUpdate></GetUpdate>
        </div>
    );
};

export default Home;