// import { Helmet } from 'react-helmet';
import './App.css';
// import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
// import logo from './assets/images/logo/dentist_logo.jpg'

function App() {
  return (
    <div>
      {/* <Helmet>
        <title>My Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <PhotoProvider>
        <PhotoView src={logo}>
          <img style={{width: '100px'}} src={logo} alt="" />
        </PhotoView>
      </PhotoProvider> */}
      <h1 className='text-2xl font-bold text-pink-300'>Hello world</h1>
    </div>
  );
}

export default App;
