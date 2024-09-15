var nameElement = document.getElementById('name');
var contactInfoElement = document.getElementById('contact-info');
var profileElement = document.getElementById('profile');
var educationList = document.getElementById('education-list');
var experienceList = document.getElementById('experience-list');
var skillsList = document.getElementById('skills-list');
var userName = "Bilal";
var contactInfo = "bilal@gmail.com | LinkedIn";
var profile = "Experienced Web Developer with expertise in modern web technologies.";
var education = [
    { degree: "BSc in Computer Science", institution: "ABC University", year: "2018-2022" },
    { degree: "High School Diploma", institution: "XYZ High School", year: "2016-2018" }
];
var experience = [
    { jobTitle: "Frontend Developer", company: "Tech Corp", duration: "2022-Present" },
    { jobTitle: "Intern Web Developer", company: "Web Solutions", duration: "2021-2022" }
];
var skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
nameElement.innerHTML = userName;
contactInfoElement.innerHTML = contactInfo;
profileElement.innerHTML = profile;
education.forEach(function (edu) {
    var eduItem = document.createElement('p');
    eduItem.innerHTML = "".concat(edu.degree, ", ").concat(edu.institution, " (").concat(edu.year, ")");
    educationList.appendChild(eduItem);
});
experience.forEach(function (exp) {
    var expItem = document.createElement('p');
    expItem.innerHTML = "".concat(exp.jobTitle, ", ").concat(exp.company, " (").concat(exp.duration, ")");
    experienceList.appendChild(expItem);
});
skills.forEach(function (skill) {
    var skillItem = document.createElement('li');
    skillItem.innerHTML = skill;
    skillsList.appendChild(skillItem);
});
