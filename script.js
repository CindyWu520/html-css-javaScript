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
        // template Literals（模板字符串）
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

// spread operators (扩展运算符) if array use [], object use {}
const object = {a: 1, b: 2};
const newObject = {...object, c: 3, d: 4};
console.log(newObject);

// destructure (解构) !important
const {a} = object;
console.log(a);

// array method
const arr = [1, 2, 3, 4];
const newArr = arr.map(item => item + 2);
const result = arr.filter(item => item > 2);
const hasBig = arr.some(item => item > 4);
const allEven = arr.every(item => item % 2 === 0);
const sum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(newArr, result, sum, hasBig, allEven);


// asynchronous: 异步
// 网络请求(AJAX/Fetch)，定时器(setTimeout)，文件读取，数据库操作

// promise: 对未来结果的承诺
// 用来处理异步任务
// 有三种状态：pending, fullfilled: then(), rejected: catch()
function fetchData() {
    return fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Unexpected error: ", error);
    })
}

// async/await: 基于promise(会返回一个promise)，使异步看起来像同步。
// keyword: await
async function callApi(params) {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Unexpected error: ", error);
    }
}

