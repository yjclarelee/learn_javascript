
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno: 12
};
    
// go over keys
for (let key in student) {
    console.log(key);
}

// delete property
console.log(student);
delete student.rollno;
console.log(student);

// get length
let length = 0;
for (let key in student) {
    length++;
}
console.log(length);

// display reading status
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

// Print out info
library.forEach(book => {
        console.log(`The book ${book.title} written by ${book.author}'s reading status is ${book.readingStatus}.`)
    })

