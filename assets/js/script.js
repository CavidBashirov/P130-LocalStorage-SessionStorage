
localStorage.setItem("name","Huseyn");
localStorage.setItem("surname","Ceferov");
let data = localStorage.getItem("name");

localStorage.setItem("name","Orxan")



localStorage.removeItem("name")

localStorage.clear()


let arr = ["Orxan","Mirsamir","Emil","Seid"];

 localStorage.setItem("arr",JSON.stringify(arr));

let datas = JSON.parse(localStorage.getItem("arr"));



for (const item of datas) {
    console.log(item);
}

 localStorage.setItem("age",55)

 console.log(parseInt(localStorage.getItem("age")));

 sessionStorage.setItem("address","Ehmedli");
 console.log(sessionStorage.getItem("address"));






