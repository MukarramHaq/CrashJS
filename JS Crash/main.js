// //Concatenation
// const name = 'Mukarram'
// console.log('My name is ' + name)

// //Template String
// console.log(`My name is ${name}`)

// //String Properties and methods
// const s = 'Hello, world';
// //Creates a substring. It will stop at 5 meaning it will give the 4th character
// console.log(s.substring(0,5))
// //Turns a string into an array
// console.log(s.split(''))

// //Object Literals are literally key:value pairs
// const person ={
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '8 Azalea Road',
//         city: 'Newark',
//         state: 'Delaware',
//         zip: 19711
//     }
// }

// console.log(person.hobbies[1])
// console.log(person.address.state)

// //To add properties
// person.email = 'john@gmail.com'
// console.log(person)

// //Arrays of To Do's
// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     },
// ];

// //High order array: Suggested way to do iteration over an array: forEach, map, filter
// todos.forEach(function(todo){
//     console.log(todo.text)
// });

// //map returns an array
// const todoText = todos.map(function(todo){
//     return todo.text
// })

// console.log(todoText)

// //Filter: Creates a new array filled with elements that pass a test provided by a function
// const todoTextFilter = todos.filter(function(todo){
//     return todo.isCompleted === true;
// })

// console.log(todoTextFilter)


// //This will turn it into a JSON making it ready to sent it to a server
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// //Prints out meeting with boss
// console.log(todos[1].text)

// //function
// function addNums(num1 = 1, num2 = 1){
//     return num1 + num2;
// }

// console.log(addNums(5, 5))

// //Arrow Functions: Reduces the amount of code needed for function expressions.
// const subNums = (num1, num2) => {
//     return num1 - num2;
// }

// console.log(subNums(5, 5))

// /* Object Oriented Programming: Understand JS OOP */
// class Person{
//     constructor(fName, lName, dob){
//         this.fName = fName;
//         this.lName = lName;
//         this.dob = new Date(dob)
//     }

//     getBirthYear(){
//         return this.dob.getFullYear();
//     }

//     getFullName(){
//         return `${this.fName} ${this.lName}`
//     }

// }


// //Instantiate Object
// const person1 = new Person('Mukarram', 'Haq', '03-24-1998')
// console.log(person1.getFullName())

//Single Element
// const form = document.getElementById('my-form');
// console.log(document.querySelector('.container'));

// //Multiple Element
// const items = document.querySelectorAll('.item') //It gives us a node list that we can use array methods on.
// items.forEach((item) => console.log(item))

// //Manipulating the DOM or changing the DOM
// const ul = document.querySelector('.items')
// //ul.remove() //Removes the whole thing. There are a lot of different methods that you can use.
// //ul.lastElementChild.remove(); //Item 3 is gone
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Mukarram'
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// const btn = document.querySelector('.btn');
// // btn.style.background = 'red';
// btn.addEventListener('click', function(e){
//     e.preventDefault(); //To prevent the submit btn from reloading
//     document.querySelector('#my-form').style.background = '#ccc'
//     //The line below is used to add a class.
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello - 2</h1>'
// })

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const usersList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        //Created a class in CSS and added it over here using the line below
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000)
    }else{
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        usersList.appendChild(li)

        //Clear fields
        nameInput.value = ''
        emailInput.value = ''
    }
}