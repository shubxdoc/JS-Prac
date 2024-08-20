// const tinderUser = new Object(); // SingleTon
const tinderUser = {}; // Literals

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "sam@gmail.com",
  usersFullName: {
    fullname: {
      firstname: "sam",
      lastname: "kumar",
    },
  },
};

// "?" means optional chaning which is mainly used while working with API's
// it means if the value exist only then check else dont
// console.log(regularUser.usersFullName.fullname?.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// console.log({ ...obj1, ...obj2 });

const user = [
  {
    id: 1,
    email: "asd@gmail.com",
  },
  {
    id: 2,
    email: "qwe@gmail.com",
  },
  {
    id: 3,
    email: "zxc@gmail.com",
  },
];

// console.log(user[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true

// Destrcturing

const course = {
  coursename: "js prac",
  price: "freeForLife",
  courseInstructor: "Life",
};

console.log(({ coursename, price, courseInstructor } = course));
