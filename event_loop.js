
// function first(){
//   console.log("First Function")
// }

// function second(){
//   console.log("Second Function")
// }

// function main(){
//   console.log("Main Function")

//   first()

//   second()
// }

// main()

























console.log("Step-1: start")

  setTimeout(()=>{
    console.log("Step-2: Set time out")
  },0)

Promise.resolve().then(()=> console.log("Step-3: Promise"))

Promise.resolve().then(()=> console.log("Step-4: Promise"))


console.log("Step-5: end")