'use strict';

// let p_b = document.getElementsByClassName('pop_body');

var returnBtn = document.getElementById('return-img');
var popBlock = document.getElementsByClassName('popBlock');
returnBtn.onclick = function () {

  returnBtn.style += ';display:none;';
  popBlock[0].style += ';display:none;';
};

var home_btn = document.getElementsByClassName('home_more')[0];
var china_btn = document.getElementsByClassName('china_btn');
var wd_btn = document.getElementsByClassName('wd_text');

home_btn.addEventListener('click', function (e) {
  fetch('http://localhost:3002/server/init?pid=1', {
    method: 'get'
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return console.log('data is', data);
  }).catch(function (error) {
    return console.log('error is', error);
  });
  returnBtn.style += ';display:block;';
  popBlock[0].style += ';display:block;';
});