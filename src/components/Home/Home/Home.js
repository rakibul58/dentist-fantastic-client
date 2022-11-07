import React from 'react';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
        </div>
    );
};

export default Home;