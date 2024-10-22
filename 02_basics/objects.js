// singleton


// object literals

const mySym = Symbol("key1");


const Jsuser = {
    name: "Nagendra",
    "full name": "Nagendra Sutliya",
    age: 30,
    [mySym] : "myKey1",
    location: "Jaipur",
    email: "nk@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
} 

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser[mySym]);


Jsuser.email = "nagendra@yahoo.com"
// Object.freeze(Jsuser)
Jsuser.email = "nk@microsoft.com"
// console.log(Jsuser);


Jsuser.greeting = function(){
   console.log("Hello JS user")
}

Jsuser.greeting2 = function(){
    console.log(`Hello JS user, ${this["full name"]} `);
}

// console.log(Jsuser.greeting);
// console.log(Jsuser.greeting2);
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());