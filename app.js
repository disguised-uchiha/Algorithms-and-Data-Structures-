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
//************* SOME RANDOM CODE CHALLENGE ****************/

// function countUniqueValues(arr){
//     let i=0;
//     let j=1;
//     while(j !==arr.length){
//         if(arr[i]!==arr[j]){
//             i++;
//             arr[i]=arr[j];
//             j++;
//         }
//         else{
//             j++;
//         }
//     }
//     return i+1;
// }

// let x = countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);

// function factorial(num){
//     if(num === 1)
//         return 1;
//     else
//         return num*factorial(num-1);
// }

// console.log(factorial(400))


// //***************Binary Search*****************/
// function computeMiddle(left, right){
//     return Math.floor((left+right) /2);
// }
// function binarySearch(arr, val, start=0, end=arr.length){
//     let middle = computeMiddle(start, end);
//     if(arr[middle]===val){
//         return middle
//     }
//     if(val < arr[middle])
//         return binarySearch(arr, val, start, end=middle-1);
//     if(val > arr[middle])
//         return binarySearch(arr, val, start=middle+1, end);
// }


// console.log(binarySearch([1,2,3,5,6,6,7],5));

// function stringMatching(str1, str2){
//     let count = 0;
//     for(let i=0; i<str1.length-str2.length+1; i++){
//         if(str1.slice(i,i+str2.length)===str2)
//             count++;
//     }
//     return count;
// }

// function stringMatching(long, pattern){
//     let count = 0;
//     for(let i=0; i< long.length; i++){
//         for(let j=0; j< pattern.length; j++){
//             if(long[i+j]!==pattern[j]) break;
//             if(j === pattern.length-1) count++;
//         }
//     }
//     return count;
// }
// console.log(stringMatching('helloworldllollollo','llo'));


//****************** Bubble sorting Naive Approach ****************/
// function bubbleSort(arr) {
//     for(let j=arr.length; j>0; j--) {
//         for(let i=0; i < j-1; i++) {
//             if(arr[i]>arr[i+1]) {
//                 [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
//             }
//             console.log(arr);
//         }
//     }
// }

// bubbleSort([2,552,12,533,12,22]);


//*********** Selection Sort *************/
// function selectionSort(arr){
//     let min;
//     //First iterate through the first element and set it to min
//     // then using another loop traverse one position ahead tilll end and find the min
//     // when you found the min update it
//     // and replace it with i's position so that the minimum is in the starting.
//     for(let i=0; i<arr.length; i++){
//         min = i;
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[j]<arr[min]){
//                 min = j;
//             }
//         }
//         [arr[i], arr[min]] = [arr[min], arr[i]]
//     }
//     console.log(arr);
// }

// selectionSort([1,2,6,2,2,4,52,3]);

//*************************** Merge Sort ***********************/

// function merge(arr1, arr2){
//     let i=0;
//     let j=0;
//     let sortedArr = [];
//     while(i!==arr1.length && j!== arr2.length){
//         if(arr1[i]<arr2[j]){
//             sortedArr.push(arr1[i]);
//             i++;
//         }
//         else{
//             sortedArr.push(arr2[j])
//             j++;
//         }      
//     }
//     if(i==arr1.length && j<=arr2.length-1){
//         sortedArr.push(...arr2.slice(j));
//     }
//     if(j==arr2.length && i<=arr1.length-1){
//         sortedArr.push(...arr1.slice(i));
//     }
//     return sortedArr;
// }
 

// let x = mergeSort([11, 66, 1, 32, 2, 50, 12]);
// console.log(x);

// function mergeSort(arr){
//     if(arr.length <= 1) return arr;
//     let middle = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,middle));
//     let right = mergeSort(arr.slice(middle));
//     return merge(left, right);
// }
//************** Singly Linked List ***************/
// class Node {
//     constructor(val){
//         this.value = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val){
//         let newNode = new Node(val);
//         if(this.length===0){
//             this.head = newNode;
//             this.tail = newNode;
//             this.length++;
//             return;
//         }
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }

//     pop(){
//         if(!this.head){
//             return 'The List is Empty';
//         }
//         let newTail = this.head;
//         while(newTail.next.next!==null){
//             newTail = newTail.next;
//         }
//         let removedNode = newTail.next;
//         newTail.next = null;
//         this.tail = newTail;
//         this.length--;
//         if(this.head.next === null){
//             this.head = this.tail = null;
//         }
//         return removedNode;
//     }

//     shift(){
//         if(!this.head){
//             return undefined;
//         }
//         let removedHead = this.head;
//         this.head = this.head.next;
//         this.length--;
//         if(this.head.next === null){
//             this.head = this.tail = null;
//         }
//         return removedHead;
//     }

//     unshift(val){
//         let newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//             this.length++;
//             return;
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this;
//     }

//     get(index){
//         let nodeSearched = this.head;
//         if(index<this.length){
//             for(let i=1; i<=index; i++){
//                 nodeSearched = nodeSearched.next;
//             }
//             return nodeSearched;
//         }
//         return null;
//     }

//     set(index, value){
//         let node = this.get(index);
//         if(node){
//         node.value = value;
//         return true;
//         }
//         return false;
//     }

//     insert(index, value){
//         let newNode = new Node(value);
//         let node = this.get(index-1);
//         if(node){
//             newNode.next = node.next;
//             node.next = newNode;
//             return true;
//         }
//         return false;
//     }
// }

// let sl = new SinglyLinkedList();
// sl.unshift('bantai');
// sl.push('helo');
// sl.push('world');
// sl.set(0,'dd');
// sl.insert(1,'hello')
// console.log(sl.get(3));
//********************** Binary Search Tree ************/
// class Node {
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right =  null; 
//     }
// }

// class BST{
//     constructor(){
//         this.root = null;
//         this.count = 0;
//     }
//     insert(val){
//         let newNode = new Node(val);
//         let currentNode = this.root;
//         while(true){
//             if(!this.root){
//                 this.root = newNode;
//                 return this;
//             }
//             if(val<currentNode.value){
//                 if(currentNode.left === null){
//                     currentNode.left = newNode;
//                     return this;
//                 }
//                 else {currentNode = currentNode.left;}
//             }
//             if(val>currentNode.value){
//                 if(currentNode.right === null){
//                     currentNode.right = newNode;
//                     return this;
//                 }
//                 else {currentNode = currentNode.right;}
//             }
//             if(val==currentNode.value){
//                 currentNode.count++;
//                 return this;
//             }
//         }
//     }
//     find(val){
//         let currentNode = this.root;
//         while(true){
//             if(val === currentNode.value) return true;
//             if(val < currentNode.value && currentNode.left !== null){
//                 currentNode = currentNode.left;
//             }
//             else if(val > currentNode.value && currentNode.right !== null){
//                 currentNode = currentNode.right;
//             }
//             else{
//                 return false;
//             }
//         }
//     }
//     bredthFirstSearch(){
//         let queue = [this.root];
//         let visited = [];
//         while(queue.length){
//             let currentNode = queue.shift();
//             if(currentNode.left)
//             queue.push(currentNode.left);
//             if(currentNode.right)
//             queue.push(currentNode.right);
//             visited.push(currentNode.value);
//         }
//         return visited;
//     }
// }

// let tree = new BST();
// tree.insert(10);
// tree.insert(5);
// tree.insert(3);
// tree.insert(15);
// tree.insert(11);
// tree.insert(16);
// console.log(tree.bredthFirstSearch());


//         10
//     5       15
//    3       11  16

//***********Event and EventEmitter in JavaScript *******/
// let EventEmitter = require('events');
// let util = require('util');
// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     greet(){
//         console.log(`Hello ${this.firstName} ${this.lastName}`);
//     }
// }
// class Policeman extends Person{
//     constructor(fn , ln){
//         super(fn , ln);
//         this.badge = 1234;
//     }
// }
// // util.inherits(Policeman, Person);
// let policeman = new Policeman('h','h');
// console.log(policeman.greet())


//********** HEAP DATASTRUCTURE *************/

// let arr = [100,40,23]
// function heapInsert(value){
//     arr.push(value);
//     let index = arr.length -1;
//     let maxHeapNode = Math.floor((index-1)/2);
//     if(arr[index]>arr[maxHeapNode]){
//         [arr[index],arr[maxHeapNode]] = [arr[maxHeapNode], arr[index]];
//     }
// }
// heapInsert(101);
// console.log(arr);