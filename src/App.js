import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className='text-2xl font-bold text-pink-300'>Hello world</h1>
    </div>
  );
}

export default App;
