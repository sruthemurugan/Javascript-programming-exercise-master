const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`


// Level 1

// 1. Change skills array to JSON using JSON.stringify()
// 2. Stringify the age variable
// 3. Stringify the isMarried variable
// 4. Stringify the student object

// Level 2
// 1. Stringify the students object with only firstName, lastName and skills properties

// Level 3
// 1. Parse the txt JSON to object.
// 2. Find the user who has many skills from the variable stored in txt.


const skillsJSON = JSON.stringify(skills);
console.log(skillsJSON); 


const ageJSON = JSON.stringify(age);
console.log(ageJSON); 


const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON); 

const studentJSON = JSON.stringify(student);
console.log(studentJSON);


const studentPartialJSON = JSON.stringify({ firstName: student.firstName, lastName: student.lastName, skills: student.skills });
console.log(studentPartialJSON);


const txtObj = JSON.parse(txt);


let maxSkills = 0;
let userWithMaxSkills = '';
for (let user in txtObj) {
  if (txtObj[user].skills.length > maxSkills) {
    maxSkills = txtObj[user].skills.length;
    userWithMaxSkills = user;
  }
}
console.log(`The user with the most skills is ${userWithMaxSkills} with ${maxSkills} skills.`);

