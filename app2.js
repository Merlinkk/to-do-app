const todolist = document.getElementById('todolist')
const add = document.getElementById('button')
const task = document.getElementById('input')
const cross = document.getElementsByClassName('cross')

let storage = []    
add.onclick = () =>{
    addItem()
}

function addItem(){
    storage.push(task.value)
    console.log(storage)
    addTask()
}

function renderList(){
    todolist.innerHTML = "" 
    storage.forEach(function(element,index){
        
        todolist.innerHTML += `<li class="listflex"> ${storage[index]} 
        <div style="display:flex; align-items:center;" >
            <div class="crs" onclick="crossfn(${index})" >
                X
            </div>
        <div class="edit" onclick="edit(${index})" >|Edit </div></li>`
    })
}


// let taskNumber = 0

function crossfn(index){
    storage.splice(index, 1);
    // console.log("clicked")
    // todolist.innerHTML = "" 
    // storage.forEach(function(element,index){
        
    //     todolist.innerHTML += `<li class="listflex"> ${storage[index]} <div><div class="crs" onclick="crossfn(${index})" >X</div>|<div onclick="edit(${index})" >Edit </div></li>`
    // }
    renderList()
}

function addTask(){
    // todolist.innerHTML = "" 
    // storage.forEach(function(element,index){
        
    //     todolist.innerHTML += `<li class="listflex"> ${storage[index]} <div><div class="crs" onclick="crossfn(${index})" >X</div>|<div onclick="edit(${index})" >Edit </div></li>`
    // })
    renderList()
    
    // taskNumber++
}

function edit(index){
    let newval = prompt("Enter new task:")
    if(newval !== null && newval.length>0 ){
        storage.splice(index,1,newval)
        renderList()
    }
    

}