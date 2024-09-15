type Education = {
    degree: string;
    institution: string;
    year: string;
};

type Experience = {
    jobTitle: string;
    company: string;
    duration: string;
};

type Skill = string;

const nameElement = document.getElementById('name') as HTMLHeadingElement;
const contactInfoElement = document.getElementById('contact-info') as HTMLParagraphElement;
const profileElement = document.getElementById('profile') as HTMLParagraphElement;

const educationList = document.getElementById('education-list') as HTMLDivElement;
const experienceList = document.getElementById('experience-list') as HTMLDivElement;
const skillsList = document.getElementById('skills-list') as HTMLUListElement;


const userName: string = "Bilal";
const contactInfo: string = "bilal@gmail.com | LinkedIn";
const profile: string = "Experienced Web Developer with expertise in modern web technologies.";

const education: Education[] = [
    { degree: "BSc in Computer Science", institution: "ABC University", year: "2018-2022" },
    { degree: "High School Diploma", institution: "XYZ High School", year: "2016-2018" }
];

const experience: Experience[] = [
    { jobTitle: "Frontend Developer", company: "Tech Corp", duration: "2022-Present" },
    { jobTitle: "Intern Web Developer", company: "Web Solutions", duration: "2021-2022" }
];

const skills: Skill[] = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];


nameElement.innerHTML = userName;
contactInfoElement.innerHTML = contactInfo;
profileElement.innerHTML = profile;

education.forEach(edu => {
    const eduItem = document.createElement('p');
    eduItem.innerHTML = `${edu.degree}, ${edu.institution} (${edu.year})`;
    educationList.appendChild(eduItem);
});

experience.forEach(exp => {
    const expItem = document.createElement('p');
    expItem.innerHTML = `${exp.jobTitle}, ${exp.company} (${exp.duration})`;
    experienceList.appendChild(expItem);
});

skills.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.innerHTML = skill;
    skillsList.appendChild(skillItem);
});
