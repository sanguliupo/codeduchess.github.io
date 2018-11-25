//Create a request variable and assign a new XMLHttpRequest object
var request = new XMLHttpRequest();

//Open a new connection, using GET request on the URL endpoint
request.open('GET', 'https://www.themuse.com/api/public/jobs?category=Creative%20%26%20Design&category=Data%20Science&category=Engineering&category=Marketing%20%26%20PR&category=Social%20Media%20%26%20Community&page=1', true);
             
request.onload = function () {
 // begin accessing JSON data here 
 }

// send request
request.send();

//must convert JSON into JS objects in order to work with it -- will use JSON.parse()
var data = text.parse(this.response);

//create a data variable that contains all the JSON as an array using forEach()
data.forEach(job => {
  // log each job title
 console.log(job.title);
});
