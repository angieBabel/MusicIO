Vue.component('movie-card', {
  props: ['image', 'title'],
  template: `
    <div>
      <img width="100" v-bind:src="image" v-bind:alt="title"/>
      <h2>{{ title }}</h2>  
    </div>
  `,
})

new Vue({
    el: '#app'
})

// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });