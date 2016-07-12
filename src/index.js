import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));


//
// // const $ = require('jquery');
//
// // change require to es6 import style
// import $ from 'jquery';
// import './style.scss';
//
// let count = 0;
//
// function increment(num) {
//   count++;
//   $('#main').html(`Youve been on this page for ${count} seconds.`);
// }
//
// setInterval(increment, 1000);
