// charCount('aaaa') // return something like {a:4};
// charCount('hello ,.Hello 12346233'); //return {h:1, e:1, l:2, o:1};

// // split the str into an array
// // iterate over the array
// // take the first value and then reiterate form the next index to the last one
// // and add the number of times it showed up
// function charCount(value){
//     let obj = {};
//     let value1 = value.replace(/\s|\W/gi, '');
//     let arr = value1.toLowerCase().split("");
//     arr.forEach((item)=>{
//         let count=0;
//         for(let i=arr.indexOf(item); i<=arr.length; i++){
//             if(arr[i]===item){
//                 count++;
//             }
//         }
//         obj[item] = count;
//     })
//     console.log(obj);
// }

//**************Frequency counter NAIVE METHOD *************************/
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length)
//         return false;
//     arr1.forEach(item => {
//         let x = arr2.indexOf(item**2);
//         if(x === -1){
//             return false;
//         }
//         arr2.splice(x, 1);
//     });
//     return true;
// }
//***********************Frequency Counter Refactored******************/
// console.log(same([1, 2, 4], [1, 4, 16]));

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   //frequecyCounter obj has arr1's values as it's key
//   //the below logic will add a new value into the object as well as increment exisiting values
//   for (let value of arr1) {
//     frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
//   }
//   for (let value of arr2) {
//     frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) return false;
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
//   }

//   return true;
// }
/*************Anagram frequency Counter*********************/
// function validAnagram(str1, str2){
//     //first i'll check whether length of both the strings are same
//     // if same then proceed or else return false;
//     if(str1.length !== str2.length)
//     return false;
//     // Now here I will traverse through str1 and store it's element and number of times they appeared into an object ---ie. my frequency counter pattern 
//     let lookup = {};
//     for(let i of str1){
//         // storing logic 
//         lookup[i] ? lookup[i]+=1 : lookup[i]=1
//     }
//     //traverse through each element in string2 
//     // given an element if that element is in the stored object
//     // then proceed by decrementing the value of the element in the stored obj

//     for(let i of str2){
//         // lookup[i] ? lookup[i]-=1 : false;
//         if(!lookup[i])
//             return false;
//         else
//             lookup[i] -= 1;
//     }
//     console.log(lookup)
//     return true;
// }



// let x= validAnagram('helfflo','ohlkkle')
// console.log(x);

/************************* MULTIPLE POINTERS NAIVE APPROACH ******************/
// function sumZero(arr){

//     let arr1 = arr.sort(function(a,b){
//         return a-b;
//     });

//     // We will use a for loop to traverse through the array
//     // now take the first element and substract it with last element
//     // if the result is +ve then continue to 2nd last element substraction
//     // else if it's 0 then return the pair
//     // if the first loop is iterated completely but there is not pair 
//     // then return undefined
//     for(let i=0; i<arr1.length; i++){
//         for(let  j=0; j<arr1.length; j++){
//             if(arr1[i]+arr[j]===0)
//                 return [arr1[i],arr1[j]];
//         }
//     }
//     return undefined;
// }

/***************** MULTIPLE POINTERS REFACTORED APPROACT *********************/
// function sumZero(arr1){
//    console.log(arr1);
//    let arr = arr1.sort(function(){
//        return a-b;
//    });
//    console.log(arr);
// }
// let x = sumZero([3,1,2,-8]);
// console.log(x);



function countUniqueValues(arr){
    let i=0;
    let j=1;
    while(j !==arr.length){
        if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j];
            j++;
        }
        else{
            j++;
        }
    }
    return i+1;
}

let x = countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])

let arr = [1,24,5,2,3];
let arr_forEach = arr.forEach(item => item**2);
let arr_map = arr.map(item => item**2);

console.log('ForEachArray: '+ arr_forEach);
console.log('MapArray '+ arr_map)