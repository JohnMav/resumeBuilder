// $("#main").append(["Ben Nimmons"])

var email = "ben.nimmons@gmail.com";

var newEmail = email.replace("gmail", "icloud")

console.log(email);
console.log(newEmail);

var awesomeThoughts = "My name is Ben and I'm awesome."

var funThoughts = awesomeThoughts.replace("awesome", "fun");

var name = "Ben Nimmons";

var role = "Front-End Maven";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

var bio = {
	"name": "Ben",
	"role": "Front-End Maven",
	"contacts": {
		"phone": "206.451.9096",
		"email": "ben@bennimmons.co",
		"github": "benjaminnimmons",
		"location": "United States"
	},
	"headshot": "images/headshot.jpg",
	"welcome": "Thank you for visiting!",
	"skills": [
				"Prototyping", "Killing it", "Professional"
				]
}

var education = {
	"schools": [
		{
		"name": "Carnegie Mellon University",
		"location": "Pittsburgh, PA",
		"degree": "Masters",
		"major": ["Human-Computer Interaction"],
		"dates": 2011,
		"url": "https://www.hcii.cmu.edu/academics/mhci"
		},
		{
		"name": "Santa Clara University",
		"location": "Santa Clara, CA",
		"degree": "Bachelors",
		"major": ["Behavioral Science"],
		"dates": 2008,
		"url": "https://www.santaclara.edu"
		}
	],
	"onlineCourses": [
		{
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"dates": 2015,
		"url": "http://www.udacity.com/course/ud804"
		}
	]
}

var work = {
	"firms": [
		{
		"name": "Carnegie Mellon University",
		"location": "Pittsburgh, PA",
		"degree": "Masters",
		"major": ["Human-Computer Interaction"],
		"dates": 2011,
		"url": "https://www.hcii.cmu.edu/academics/mhci"
		}
	],
}

var projects = {
	"projects": [
		{
		"name": "Carnegie Mellon University",
		"location": "Pittsburgh, PA",
		"degree": "Masters",
		"major": ["Human-Computer Interaction"],
		"dates": 2011,
		"url": "https://www.hcii.cmu.edu/academics/mhci"
		}
	],
}

$('#projects').append(HTMLprojectStart);

// $("#main").append(bio.name);
// $("#main").append(bio.role);
// $("#main").append(bio.contacts);
// $("#main").append(bio.headshot);
// $("#main").append(bio.welcome);
// $("#main").append(bio.skills);

// bio.city = "Seattle";
// bio.email = "ben@bennimmons.co";

// $("#main").append(bio.city);

// var job1 = {};
// job1.position = "Interaction Designer";
// job1.currentEmployer = "Expedia";
// job1.years = 2;
// job1.city = "Bellevue";

// $("#main").append(job1["position"]);
// $("#main").append(education.name);