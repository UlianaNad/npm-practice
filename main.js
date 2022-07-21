const { default: axios } = require("axios");

const fs  = require('fs');



const timestamp = Date.now();
console.log(timestamp);

const getPeople = async () => {
    let result = await axios.get(`https://swapi.dev/api/people/3/`);
    console.log(result);
   
    fs.writeFile("people.txt", data, (err) =>{
        if (err){
            console.log(err);
        }else{
            console.log("Succesfully");
        }
    });

};
getPeople();





