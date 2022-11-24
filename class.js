
// get Element BY Class Name
var items=document.getElementsByClassName('list-group-item');
items[2].textContent='new changes';
items[2].style.fontWeight='bold';
items[1].style.backgroundColor='green'

// items.style.fontWeight='bold'----> this gives error to solve this problem we used loop
// get Elements bY class name
for(var i=1; i<items.length;i++){
    items[i].style.color='green'
    items[i].style.fontWeight='bold'
}
