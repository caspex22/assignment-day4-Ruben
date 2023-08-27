class Course {
    constructor(id, username) {
        this.id = id;
        this.username = username;
    }
}

let courses = [
    {id:1 ,username:"MidnightRider" ,nameBook: "Introduction to Data Science", author: "John D. Kelleher", pages: 10, role: "user", publication:2011},
    {id:2 ,username:"CulinaryExplorer" ,nameBook: "Machine Learning", author: "Andrew Ng", pages: 7 , role: "admin", publication:2013},
    {id:3 ,username:"QuantumQuester" ,nameBook: "Data Analysis and Visualization with Python", author: "Jose Portilla", pages: 15, role: "user", publication:2010},
    {id:4 ,username:"MelodicWhisper" ,nameBook: "Deep Learning Specialization", author: "Andrew Ng", pages: 23, role: "admin", publication:2011},
    {id:5 ,username:"PixelPioneer" ,nameBook: "SQL for Data Science", author: "DataCamp", pages: 55, role: "user", publication:2010},
    {id:6 ,username:"CosmicJester" ,nameBook: "Applied Data Science with Python", author: "University of Michigan (Coursera)", pages: 10, role: "admin", publication:2011},
    {id:7 ,username:"WanderlustDreamer" ,nameBook: "Data Science and Machine Learning Bootcamp with R", author: "Udemy", pages: 32, role: "user", publication:2007},
    {id:8 ,username:"BookwormNinja" ,nameBook: "Big Data Fundamentals", author: "UC San Diego (edX)", pages: 22, role: "user", publication:2014},
    {id:9 ,username:"TechSavvyGuru" ,nameBook: "Data Engineering on Google Cloud Platform", author: "Google Cloud Training", pages: 45, role: "user", publication:2004},
    {id:10 ,username:"StarryAdventurer" ,nameBook: "Data Science for Business", author: "Foster Provost and Tom Fawcett", pages: 51, role: "user", publication:2009}
]

function getAllCourse() {
    return courses;
}

function createCourse(username) {
    const newCourse = new Course(courses.length + 1, username);
    courses.push(newCourse);
    return newCourse;
}

function getCourseById(id) {
    return courses.find(course => course.id === id);
}

function updateCourse(id, username) {
    const course = getCourseById(id);
    if (course) {
        course.username = username;
    }
    return course;
}

function deleteCourse(id) {
    const index = courses.findIndex(course => course.id === id);
    if (index !== -1) {
        courses.splice(index, 1);
    }
    return index !== -1;
}

module.exports = {
    getAllCourse,
    createCourse,
    getCourseById,
    updateCourse,
    deleteCourse
};