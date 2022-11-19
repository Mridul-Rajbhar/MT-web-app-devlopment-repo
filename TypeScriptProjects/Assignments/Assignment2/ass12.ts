var names: string[] = [];  

names[0] = "john"; 
names[1] = "jill"; 
names[2] = "peter";
names[3] = "mridul";
names[4] = "rajbhar";
names[5] = "ann"; 

let ulElement = document.createElement('ul');
document.body.appendChild(ulElement);

for(let i = 0; i< names.length; i++){
    let listItem = document.createElement('li');
    listItem.textContent = names[i];
    ulElement.appendChild(listItem);
}
