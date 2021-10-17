class Parent{
    constructor(name){
        this.fahername="Schrodinger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
}
const baby=new Child("Arnord");
console.log(baby.getFullName());
