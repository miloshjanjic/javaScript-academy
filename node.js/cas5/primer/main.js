
const { TIMEOUT } = require('dns');
const fs = require('fs');

const Test = require('./crudModule');

const temp = new Test();

// temp.create('./create.txt', persons);

/*
                PODATOCI VO JSON FAJLOT
[{"id":1,"firstName":"Timce","lastName":"Pop-Icovski","age":26},
{"id":2,"firstName":"Lebron","lastName":"James","age":100},
{"id":3,"firstName":"Charles","lastName":"Barkley","age":55}]             */

const data = temp.read('./data.json', 'utf-8');
console.log(data);

const person = {
    "id" : 3,
    "firstName" : 'Charles',
    "lastName" : 'Barkley',
    "age" : 55
}

temp.add('./data.json', person);

// temp.updateAge('./data.json', 2, 100);

// temp.delete('./data.json', 3);

// temp.readId('./data.json', 3);