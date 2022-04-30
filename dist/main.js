"use strict";
// import { Point } from "./point"
// export {}
// function dosomething() {
//     for(let i=0; i<5 ; i++) {
//         console.log(i);
//     }    
//     console.log("finally "+ i);
// }
// dosomething();
// let count = 0;
// count = "4";
// let a: number;
// a=1;
// a=true;
// a="a";
// let b: number;
// let c :boolean;
// let d :any;
// let e :string;
// let f :number[] = [1,2,3];
// let g :any[] = [1,true,'a', false]
// const ColorRed = 0;
// const ColorGreen= 1;
// const ColorBlue = 2;
// enum Color {Red = 0, Green = 1, Blue = 2};
// let backgroundColor = Color.Red
// let message ;
// message = "abc";
// let endsWithC = (<string>message).endsWith("c");
// let alternativeWay = (message as string).endsWith("c");
// let log = function(message){
//     console.log(message);
// }
// let doLog = (message) => console.log(message);
// class Point{
//     x:number;
//     y:number;
//     constructor(x?:number, y?:number){
//         this.x = x;
//         this.y = y;
//     }
//     draw(){
//         console.log('X: ' + this.x + ' y: ' + this.y);
//     }
// }
// let point: Point = new Point(1,2);
// point.x = 3;
// point.draw()
// class Point{
//     constructor(public x?:number, private y?:number){
//     }
//     draw(){
//         console.log('X: ' + this.x + ' y: ' + this.y);
//     }
// }
// let point: Point = new Point(1,2);
// point.draw()
// point.x
// class Point{
//     constructor(public _x?:number, private _y?:number){
//     }
//     draw(){
//         console.log('X: ' + this._x + ' y: ' + this._y);
//     }
//     get X(){
//         return this._x;
//     }
//     set X(value){
//         if (value<0) {
//             throw new Error("value canot be less than 0");            
//         }
//         this._x = value;
//     }
// }
// let point: Point = new Point(1,2);
// let X = point.X;
// point.X=10;
// point.draw()
// let point: Point = new Point(1,2);
// point.draw()
//  export{}
// new lines
// let id: number = 5
// console.log("ID: " , id)
//  basic types
//  let id:number =5
//  let company: string = "hamza pvt ltd"
//  let isPublished: boolean = true
//  let x:any ="hello"
//  x= true
// let ids: number[] =[1,2,3,4]
// let arr: any[] =[1,true,"hello"]
// // tuple
// let person:[number, string, boolean] = [1, "brad", true]
// // tuple arry
// let employee :[number , string][]
// employee =[
//     [1, "brad"],
//     [2, "jhon"],
//     [3, "harry"],
// ]
// // union
//  let pid: string | number
//  pid = "22"
// //  Enum
// enum Direction1{
//     Up = 1,
//     Down,
//     Left,
//     Right
// }
// enum Direction2{
//     Up = "Up",
//     Down = "Down",
//     Left = "Left",
//     Right = "Right"
// }
// console.log(Direction2.Up)
// // Objects
// const user: {
//     id: number,
//     name: string
// }={
//     id: 1,
//     name: "jhon"
// }
// type User2= {
//     id: number,
//     name: string
// }
// const User:User2={
//     id: 1,
//     name: "jhon"
// }
// // type Assertion
// let cid: any = 1
// // let customerId = <number> cid
// let customerId = cid as number
// console.log(customerId)
// Functions
// function addNum(x:number, y:number): number {
//     return x + y
// }
// console.log(addNum(1, 2))
// // void
// function log(message:string | number): void {
//     console.log(message)
// }
// log("hello")
// Interfaces
// interface UserInterface {
//     readonly id: number
//     name: string
//     age?: number
// }
// const User3 :UserInterface ={
//     id: 1,
//     name: "hamza",
// }
// User3.id =22
// type Point = number | string
// const p1: Point = 1
// interface function
// interface MathFunc{
//     (x:number, y:number):number;
// }
// const add: MathFunc = (x:number, y:number):number => x+y
// const sub: MathFunc = (x:number, y:number):number => x-y
// console.log(add(1,3))
// classes
// interface PersonInterface {
//     readonly id: number;
//     name: string;
//     register(): string;
// age: number;
// }
// class Person implements PersonInterface {
//     public  id: number;
//      name: string;
//     constructor(id: number, name: string){
//         this.id = id;
//         this.name = name;
//     }
//     register(){
//         return `${this.name} with  id: ${this.id} is registered`;
//     }
// }
// const brad = new Person(1,"Brad Traversy")
// const bradPit = new Person(2,"Brad Pit")
// console.log(bradPit.register())
// console.log(brad,bradPit)
// brad.id =3;
// bradPit.name="hamza";
// console.log(bradPit.name)
// subclasses 
// class Employee extends Person {
//     position: string
//     constructor(id: number, name: string, position: string) {
//         super(id, name)
//         this.position = position
//     }
// }
// const emp = new Employee(3, "shawn", "developer")
// console.log(emp.register())
// generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["hamza", "artsal", "shawn"]);
numArray.push(5);
console.log(numArray);
