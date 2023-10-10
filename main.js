const input = document.querySelector('.input')
const display = document.querySelector('.display')
const btn = document.querySelector('.btn')
const listclass = document.querySelector('.listClasses')
const subclasses = document.querySelector('.listSubClasses')


btn.addEventListener('click', getInput)

function getInput(){
   
    let inputText = input.value
    //fetch url
    fetch(`https://www.dnd5eapi.co/api/spell
    /`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for(const i of data.subclasses){
            console.log(i)
            for(const key in i ){
            console.log(key)
            const listItem = document.createElement('li')
            if(key === 'name'){
            listItem.innerText = i[key]
            listclass.appendChild(listItem)
             }
           }
          
        }
       })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
