// const doubleInt=function(){
//     return num*2;
// }
const doubleIt=num =>num*2;
console.log(doubleIt(50));

const double=(x,y) =>x+y;
console.log(double(50,70));

const give5=()=>5;
console.log(give5())

const doMath=(x,y) =>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
}
console.log(doMath(7,5))