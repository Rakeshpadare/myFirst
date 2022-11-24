// //  EXAMINE THE DOCUMENT OBJECTS ie DOM

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL)
// console.log(document.title)
// console.log(document.doctype)
// // console.log(document.head)
// // console.log(document.all)
// // console.log(document.all[10])
// // document.all[10].textContent='rakesh'
// // console.log(document.forms)
// // console.log(document.links)



//------------------------------------------------------//

// // get Element BY Class Name
// var items=document.getElementsByClassName('list-group-item');
// items[2].textContent='new changes';
// items[2].style.fontWeight='bold';
// items[1].style.backgroundColor='green'

// // items.style.fontWeight='bold'----> this gives error to solve this problem we used loop
// // get Elements bY class name
// for(var i=1; i<items.length;i++){
//     items[i].style.color='green'
//     items[i].style.fontWeight='bold'
// }

// Get Elements by Tagname

var li=document.getElementsByTagName('li');
li[2].textContent='new changes';
li[2].style.fontWeight='bold';
li[1].style.backgroundColor='red'