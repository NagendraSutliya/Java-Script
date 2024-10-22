// const tinderUser = new Object(); // Singleton object

const tinderUser = {}    // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Hanuman";
tinderUser.isLoggedIn = true;


// console.log(tinderUser);


const User = {
    email: "hanuman@bharat.com",
    userfullname: {
        fullname: {
            firstname: "Pawan",
            lastname: "putra"
        }
    }
}

// console.log(User.userfullname.fullname.firstname);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "Java-Script",
    fee: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor} = course

console.log(courseInstructor);
