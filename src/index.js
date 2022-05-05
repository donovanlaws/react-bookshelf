import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeContextProvider from './Context/ThemeContext';
import BookContextProvider from './Context/BookContext';
import BookList from './Components/BookList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
    <BookContextProvider>
      <BookList />
    </BookContextProvider>
  </ThemeContextProvider>
);