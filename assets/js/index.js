
let ul
let li
let divList
let btnEdit
let btnDelete
let checkBox  
let state
let izy
function ajouter(inputValue){
    li = document.createElement('div')
    li.classList.add('li')
    ul = document.querySelector('ul')
    li.innerHTML = `${inputValue}`
    
    divList = document.createElement('div')
    divList.classList.add('list')
    ul.append(divList)
    checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.id = "check-box"

    state = document.createElement('div')
    state.classList.add('state-ok')
    state.innerHTML = "Uncompleted"
    state.style.color="red"

    let btn = document.createElement('div')
    divList.append(checkBox,li,state,btn)
    btn.classList.add('edit')
    btnEdit = document.createElement('div')
    btnEdit.classList.add('modifier')
    btnEdit.innerHTML = '<i class="fa-solid fa-pencil"></i>'
    
    btnDelete= document.createElement('div')
    btnDelete.classList.add('supprimer')
    btnDelete.classList.add('supprimer')
    btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>'
    btn.append(btnEdit,btnDelete)
}

let inputText  = document.getElementById("input-to-do")
let ajout = document.getElementById('add')
let todoList = document.querySelector('.todo-list')
ajout.addEventListener('click',function(){

    let inputValue = inputText.value
    if(inputValue == ""){
        inputText.style.border = "solid 1px red!important"
    }
    else{
            
        ajouter(inputValue)
        checkBox.addEventListener('change',function(){
            let check
            let ok
            check = this.closest('.list')
            ok=check.querySelector(':nth-child(3)')
            if(this.checked){
                ok.innerHTML = "Completed"
                ok.style.color="green"
            }
            else{
                ok.innerHTML = "Uncompleted"
                ok.style.color="red"
            }
          
        })
        if(li.textContent==""){
            todoList.style.display="none" 
        }
        else{
            todoList.style.display="block"
        }
        
        inputText.value = ""
        btnDelete.addEventListener('click',function(){
            this.closest('.list').remove()
        })
     
        let inputMod =  document.querySelector('.edit-input')
        let save =  document.querySelector('#edit-save')

        let liActuel

        
        btnEdit.addEventListener('click',function(){
            liActuel = this.closest('.list')
            izy = liActuel.querySelector(':nth-child(2)')
            inputMod.value = izy.textContent
            inputMod.focus()
            save.addEventListener('click',function(){
                    izy.innerHTML = ""
                    izy.innerHTML = inputMod.value        
                    
         }) 
    
        })
        }
                            
})

