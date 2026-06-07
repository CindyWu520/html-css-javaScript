// null vs undefined

// type: primative and object
let name = "cindy";
let age = 18;
let isGraduate = true;

let students = ["cindy", "christy", "choco"];
students.forEach((s) => {
    console.log(s);
})

// function
// 1) function Declartion
function printName(students) {
    for (let name of students) {
        console.log(name);
    }
}

// 2) function expression
const eachName = function (arr) {
    return arr.length;
}
console.log(eachName(students));

// 3) arrow function
const student = (students) => {
    for (let name of students) {
        console.log()
    }
}

// window.document
// alert(), setTimeout(), setInterval()
// window.innerWidth, window.innerHeight
// window.location, window.history
// window.localStorage, window.sessionStorage

// event
const handleClick = () => {
    alert("button click");
}

// object
let person = {
    name:"cindy",
    age:18,
    greet: () => {
        console.log("hello")
    }
}
console.log(person.age);

// constructor
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // sayhi () {
    //     console.log(`hello, I am ${this.name}, and I am ${this.age} old.`)
    // }
    sayHi = function () {
        console.log(`hello, I am ${this.name}, and I am ${this.age} old.`)
    }
}
let user1 = new User("cindy", 18);
user1.sayHi();

// extends
class VipUser extends User {
    constructor(name, age) {
        super(name, age);
    }
}
let vipUser1 = new VipUser("christy", 20);
vipUser1.sayHi();

// template Literals（模板字符串）
// spread operators (扩展运算符)
