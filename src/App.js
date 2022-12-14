// import { Helmet } from 'react-helmet';
import './App.css';
// import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import { Toaster } from 'react-hot-toast';
// import logo from './assets/images/logo/dentist_logo.jpg'

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      {/* <Helmet>
        <title>My Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <PhotoProvider>
        <PhotoView src={logo}>
          <img style={{width: '100px'}} src={logo} alt="" />
        </PhotoView>
      </PhotoProvider> */}
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
