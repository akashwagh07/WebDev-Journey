/*1. Create a Business name generator by combining the list of adjectives and shop name and another word

Adjectives:
Crazy
Amazing
Fire

Shop name:
Engine
Food
Garment

Another word:
Bros
Limited
Hub

Dont use arrays
*/


alert("Let's make a Business name just for you !!")

let Adj={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
};

let Shop={
    1:"Engine",
    2:"Food",
    3:"Garment"
};

let Aword={
    1:"Bros",
    2:"Limited",
    3:"Hub"
};


let pre=prompt("Enter you choice for Adjective: ")

let main=prompt("Enter you choice for Shop: ")

let next=prompt("Enter you choice for Another Word: ")

let Shop_name=Adj[pre].concat(" ",Shop[main]," ",Aword[next])

alert(`Your personalized shop name is : ${Shop_name}`);