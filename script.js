//your JS code here. If required.
let age=document.getElementById("age")
let name=document.getElementById("name")

document.getElementById("btn").addEventListener("click",()=>{
   if(age.value.length===0 || name.value.length===0){
    alert("Please enter valid details")
   }
  
       let promise1=new Promise((res,rej)=>{
        setTimeout(()=>{
        if (age.value>=18){
          res(alert(`Welcome ${name.value},.You can vote.`))
        }
        else{
            rej(alert("oh sorry "+name.value+". You aren't old enough."))
        }
        },4000)
       })
       promise1.then(()=>{
    console.log("fulfilled")
       }).catch(()=>{
        console.log("reject")
       })

   
})