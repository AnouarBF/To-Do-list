const input = document.querySelector('.input')
const addBtn = document.getElementById('addBtn')
const container = document.getElementById('container')

addBtn.addEventListener('click', ()=>{
    

    if(input.value === ""){
        alert('Please enter your task');
    }else{

        let newTask = document.createElement('div');
        newTask.classList.add('task');
        


        let li = document.createElement('li');
        li.innerText = `${input.value}`;
        newTask.appendChild(li)
    
        let checkBtn = document.createElement('button');
        checkBtn.innerHTML = `<i class = "fa-solid fa-check"></i>`;
        checkBtn.classList.add('checked');
        newTask.appendChild(checkBtn)
    
        let dltBtn = document.createElement('button');
        dltBtn.innerHTML = `<i class = "fa-solid fa-trash-can"></i>`;
        dltBtn.classList.add('deleted');
        newTask.appendChild(dltBtn)

        container.appendChild(newTask)

        input.value = "";

        // checkBtn.addEventListener('click', ()=>{
        //     checkBtn.parentElement.style.textDecoration = "line-through";
        // })

        checkBtn.addEventListener('click', ()=>{
            li.classList.toggle('style');
        })

        dltBtn.addEventListener('click', ()=>{
            newTask.remove();
        })

    }
    

})