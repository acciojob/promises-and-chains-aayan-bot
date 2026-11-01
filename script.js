//your JS code here. If required.
let age=document.getElementById("age")
let name=document.getElementById("name")

document.getElementById("btn").addEventListener("click",()=>{
   if(age.value.length===0 || name.value.length===0){
    alert("Please enter valid details")
    return;
   }
  
       let promise1=new Promise((res,rej)=>{
        setTimeout(()=>{
        if (age.value>=18){
          res()
        }
        else{
            rej()
        }
        },4000)
       })
       promise1.then(()=>{
        console.log("hi")
         alert(`Welcome ${name.value}.You can vote.`)
       }).catch(()=>{
        alert("oh sorry "+name.value+". You aren't old enough.")
       })

   
})