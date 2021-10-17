const person={
    name:"Jack",
    age:23,
    job:"software engineer",
    phone:"0181283884"
}
const{phone,name,job}=person;

console.log(phone,name,job  );
// console.log(  );
// console.log(  )


const friend=["zahin","zannat","ena","eni","hena"]
const[first,next,...rest]=friend;
console.log(rest)