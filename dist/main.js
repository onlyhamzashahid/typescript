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
let id = 5;
let company = "hamza pvt ltd";
let isPublished = true;
let x = "hello";
x = true;
let ids = [1, 2, 3, 4];
let arr = [1, true, "hello"];
// tuple
let person = [1, "brad", true];
// tuple arry
let employee;
employee = [
    [1, "brad"],
    [2, "jhon"],
    [3, "harry"],
];
// union
let pid;
pid = "22";
//  Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
// Objects
const user = {
    id: 1,
    name: "jhon"
};
const User = {
    id: 1,
    name: "jhon"
};
// type Assertion
let cid = 1;
// let customerId = <number> cid
let customerId = cid;
