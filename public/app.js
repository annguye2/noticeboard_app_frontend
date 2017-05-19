console.clear();
console.log('connect from app.js to index.html');

var app = angular.module('noticeboard', []);
app.controller("mainController", ["$http", function ($http){
  var controller = this;
  this.message = 'angular works';
  // declare variable for visibility, holding notice information
  this.notices = [];

  // save this for heroku deployment
   this.URL = 'https://an-noticeboard-app-api.herokuapp.com/notices';
  // this.URL = 'http://localhost:3000/notices'

  $http({
    method: "GET",
    url: this.URL  // AJAX data from RAILS
  }).then(function (response){
    console.log(response);
    this.notices = response.data; //get notices from RAILS
  }.bind(this));


this.processForm = function(){
 console.log("add author information ", this.formdata);
 $http({
    method: "POST",
    url: this.URL,
    data: this.formdata
 }).then(function(response){
   console.log("Data from server: ", response);
   this.formdata = {};
   this.notices.unshift(response.data)// this will add
 }.bind(this));

}//end processForm


}]); // end of controller
