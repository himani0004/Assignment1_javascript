//OPERATORS IN JAVASCRIPT

//Arthematic operators------------------------>>>>>>>>>>>>>>>>>>>>>>>>>

a=10;
b=20;
d=1;
f=5;
c=a+b*d-f;
console.log(c)


a=20
b=10
c=a/b;
console.log(c)

a=20
b=10
c=a%b;
console.log(c)

//comparision and logical operators--------------------->>>>>>>>>>>
x=10;
y=20;
if ((x>0) && (y<0))  //(greater than)(AND)
 console.log("greater then zero")
else 
  console.log("smaller then zero")


a=10;
b=20;
if ((a>=0) || (b<=0))  //(greater than and equal to)(OR )
 console.log("greater then zero")
else 
  console.log("smaller then zero")


 
p=15
q=16
if (p!=q)
console.log("not equal")  //(not equal to)
else
console.log("equal")



riya=15
siya=15
if (riya==siya)  //(equal to)
console.log("equal in age")
else
console.log("not equal in age")  

//ternary operators---------------------->>>>>>>>>>>>>>

result = (10 != 0) ? true : false; 
console.log(result)


//string operators---------------------------->>>>>>>>>>>>>
//concatinating strings
const a = 10
const b = 20
const c = a+b
console.log(c)

 
const name= "himani"
const surname = "sharma"
const fullname =  name  + " " +  surname
console.log(fullname)

// const name= "himani"
// const surname = "sharma"
// const fullname =  name  + " " +  surname
// console.log(fullname) // (concatinating two string)
// console.log (fullname[0])// (Assigning chracters in string)
// console.log(fullname.length)//(String length)

//type of operator--------------------->>>>>>>>>>>>>>>>>>>>
a=10
console.log (typeof(a))

b= "HIMANI"
console.log (typeof(b))

