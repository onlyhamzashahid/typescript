import { Point } from "./point.ts";
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
let point = new Point(1, 2);
point.draw();
