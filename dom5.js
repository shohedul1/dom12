let name1= document.getElementById('name')

name1.addEventListener('keypress',function(event){
    if(event.key === 'Enter') {
      let showName= document.getElementById('showName')
      showName.innerHTML = `Your Name is ${event.target.value}`

        event.target.value =''
    }
})

let skills = document.getElementsByName('skills');
let result = document.getElementById('result')

let checkedskills = [];

[...skills].forEach(skill=>{
  skill.addEventListener('change',function(event){
    if(event.target.checked){
      checkedskills.push(event.target.value)
      outputSkills(result,checkedskills)
    }else{
      let ind = checkedskills.indexOf(event.target.value)
      checkedskills.splice(ind, 1)
      outputSkills(result,checkedskills)
    }
  })
})

function outputSkills(parent,skills){
  let result = ''
  skills.forEach((skill,index)=>{
    result += `(${index + 1}) ${skill}`
  })
  parent.innerHTML = result
}

let list = document.getElementById('list')

list.addEventListener('click',function(event){
  if(this.contains(event.target)){
    let innerText = event.target.innerText
    event.target.innerHTML = ''
    let inputBox = createInputBox(innerText)
    event.target.appendChild(inputBox)

    inputBox.addEventListener('keypress',function(e){
      if(e.key==='Enter'){
        event.target.innerHTML = e.target.value
      }
    })
  }
})


function createInputBox(value){
  let inp = document.createElement('input')
  inp.type = 'text'
  inp.className = 'form-control'
  inp.value = value
  return inp
}



