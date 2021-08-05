const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Adam', 'Maciek', 'Kamil', 'Grzegorz', 'Tadeusz'];
const femaleNames = ['Anna', 'Joanna', 'Kalina', 'Malwina', 'Karolina'];
const lastNames = ['Kowalski', 'Adamwski', 'Nowak', 'Pawiak'];
const people = [];

const randChoice = function(arr){
  let choise = Math.floor(Math.random() * arr.length);
  return arr[choise];
};

for(i = 0; i < 20; i++){
  let person = {};
  person.gender = randChoice(genders);

  if(person.gender === 'F'){
    person.firstName = randChoice(femaleNames);
  }else{
    person.firstName = randChoice(maleNames);
  }

  person.lastName = randChoice(lastNames);
  person.age = Math.floor((Math.random()*61)+18);
  person.phoneNumber = Math.floor((Math.random()*50000)+601000000);
  person.email = `${person.firstName}.${person.lastName}@gmail.com`;

  people.push(person);
}

fs.writeFile('people.json', JSON.stringify(people), (err) => {
    if (err) throw console.log('Something went wrong');
    console.log('File has been successfully generated! Check people.json');
  });