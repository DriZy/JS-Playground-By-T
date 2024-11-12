const form = document.getElementById('grocery-form')
const input = document.getElementById('grocery-input')
const list = document.getElementById('grocery-list')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const item = input.value.trim()

    if(item !== ''){
        addItem(item)
        input.value=''
    }
})

function addItem(item){
   const li = document.createElement("li")
   li.textContent = item

   const deleteBtn = document.createElement('button')
   deleteBtn.textContent= "Delete"

   deleteBtn.classList.add('delete-btn')
   li.appendChild(deleteBtn)

   list.appendChild(li)

   deleteBtn.addEventListener('click', function(e){
    list.removeChild(li)
   })

}

