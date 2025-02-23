
// function mulby3(arr){
//    return arr.map(num=>num*3)
// }

// console.log(mulby3([1,2,3,4,5]))


// function getOdd(arr){
//     const res = arr.filter(num=>num%2!==0)
      // return res
// }

// console.log(getOdd([1,2,3,4,5]))
// const op = getOdd([1,2,3,4,5])



// function getSum(arr){
//     const sum = arr.reduce((acc,cur)=>acc+cur,0)
//     console.log("sum val",sum)
//     return sum
// }

// console.log(getSum([1,2,3,4,5]))


// function getEvenSum(arr){
//    const filterArr = arr.filter(num=>num%2===0)
//    return filterArr.reduce((acc,cur)=>acc+cur,0)
// }

// console.log(getEvenSum([1,2,3,4,5]))

// function getEvenSum(arr){
//    return arr.filter(num=>num%2===0).reduce((acc,cur)=>acc+cur,0)
   
// }

// console.log(getEvenSum([1,2,3,4,5]))

// function getARR(arr,key){
//     return arr.filter(str=>str.length>key)
// }
// console.log(getARR(['hi','hello','world','js'],3))




// function captializeWord(arr){
//     return arr.map(word=>word.charAt(0).toUpperCase() + word.slice(1))
// }

// console.log(captializeWord(['hi','hello','world','js']))

// function getChunkBykey(arr,key){
//     let res = []
//     for(let i =0;i<arr.length;i+=key){
//         let op = arr.slice(i,i+key)
//         res.push(op)

//     }
//     return res

// }
// console.log(getChunkBykey([1,2,3,4,5,6,7],4))


// function getNotCommonEle(arr1,arr2){
//     let op1 = arr1.filter(num=>!arr2.includes(num))
//     let op2 = arr2.filter(num=>!arr1.includes(num))
//     return [...op1,...op2]
// }

// console.log(getNotCommonEle([1,2,3,4,5,6],[4,5,6,7,8,9]))



// function customMap (arr,cb){
//       let res = []
//       for(let i =0;i<arr.length;i++){
//             res.push(cb(arr[i]))

//       }
//       return res

// }

// console.log(customMap([1,2,3,4],num=>num*2))


// function customFilter(arr,cb){
//       let res = []
//       for(let i =0;i<arr.length;i++){

//             if(cb(arr[i])){
//                   res.push(arr[i])
//             }
//       }
//       return res;
// }

// console.log(customFilter([1,2,3,4,5,6],num=>num%2===0))



// function customReduce(arr,cb,init){
//       let acc = init
//       for(let i =0;i<arr.length;i++){
//             acc = cb(acc,arr[i])
//       }
//       return acc


// }

// console.log(customReduce([1,2,3,4,5],(x,y)=>x+y,0))


// function getfreq(arr){
//       let freq = {}
//       for(let i = 0;i<arr.length;i++){
//             if(freq[arr[i]]){
//                   freq[arr[i]]++
//             }
//             else{
//                   freq[arr[i]]=1
//             }
//       }
//       return freq
// }

// console.log(getfreq(['aman','aman','ab','ab','dg']))


// function getfreq(arr){
//       return arr.reduce((acc,val)=>{
//             if(acc[val]){
//                   acc[val]++
//             }
//             else{
//                   acc[val]=1
//             }
//             return acc
//       },{})
     
// }

// console.log(getfreq(['aman','aman','ab','ab','dg']))



// function freq(arr) {
//       let freq = [];
    
//       for (let i = 0; i < arr.length; i++) {
//         if (freq[arr[i]]) {
//           freq[arr[i]]++;
//         } else {
//           freq[arr[i]] = 1;
//         }
//       }
//       // console.log(freq);
//       return freq
//     }
//     const arr = ["aditya", "aditya", "ad", "ad", "a"];
//     console.log(typeof(freq(arr)))



// let abc = 1
// let nam = abc

// nam = 2

// console.log(abc) //1
// console.log(nam) //2

// let obj = {name:'aman'}

// let obj2 = obj

// // obj2.name = "xyz"
// obj2.age = 20

// obj2 = {school:"DPS"}

// console.log(obj) //name+
// console.log(obj2)// DPS+age


// function tranfomrArr(arr){
//     return  arr.map(str=>({fName:str.toUpperCase(),len:str.length}))
// }
// function tranfomrArr(arr){
//     return  arr.map(str=>{
//       return {
//             fName:str.toUpperCase(),
//             len:str.length
//       }
//     })
// }

// console.log(tranfomrArr(["apple","banana","cherry"]))




// function arrToFxn(arr){
//       return arr.map(x=>()=>x*x)
// }


// console.log(arrToFxn([1,2,3,4,5]))
// let op = arrToFxn([1,2,3,4,5])

// console.log(op)

// let res = op.map(f=>f())

// console.log("res",res)


// function square(num){
//       return num*num;
//    }

// const arr = [1,2,3,4,5];

// function Objects(arr) {
    
//     return arr.map(num =>()=>square(num));
// }

// console.log(Objects(arr));4



// function prodArr(arr){
//       return arr.map(subArr=>subArr.reduce((acc,cur)=>acc*cur,1))
// }

// console.log(prodArr([[1,2,3],[4,5,6],[6,7]]))


// function flatArr(arr){

//       return arr.reduce((acc,subArr)=>{
//             // return [...acc,...subArr]


//       },[])
// }

function flatArr(arr){

      return arr.reduce((acc,subArr)=>acc.concat(subArr),[])
}

console.log(flatArr([[1,2,3],[4,5,6],[6,7]]))