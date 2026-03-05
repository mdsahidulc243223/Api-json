console.log("Explore Api");
const person={
    name:'selim',
    fruit:'dalim',
    dish:"halim",
    friends:["sami","kami","jami"],
    isRich:false,
    money:3400
}
console.log(person,typeof person);
// json -> js object with notation
//  JSON.stringify use kore akta object k json pormet e convert kora jai
const personJason=JSON.stringify(person);
console.log(personJason,typeof personJason);
// json.parse string ke object e convert kore dai
const perseJson=JSON.parse(personJason);
console.log(typeof perseJson)