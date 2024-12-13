import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from 'home/Header';
import Footer from 'home/Footer';

import './index.scss';

const App = () => (
  <div className='text-3xl mx-auto max-w-6xl'>
    <Header />
    <div className='my-10'>Home page content</div>
    <Footer></Footer>
  </div>
);
rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
