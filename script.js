let input = document.getElementById('inputField')
    let task = document.getElementById('addTask')
    let display = document.getElementById('diplayList')

    // let count=1
        task.addEventListener('click', plus);
         
function plus(){

    if (input.value == ''){

        alert("enter a task")
    }
    else{

        // create new elemnts
        let newTask = document.createElement('span')
        let btn = document.createElement('button')
        let parent = document.createElement("div");
        let check = document.createElement("input");

        // give each elem a class or an id
        newTask.setAttribute('class', 'newTask')
        btn.setAttribute('class', 'remove')
        check.setAttribute('type', 'checkbox')
        check.setAttribute('class', 'checkbox')
        parent.setAttribute('class', 'parent')

        
        // add the click function to the add and remove buttons

        btn.addEventListener('click', function(e){
            display.removeChild(e.target.parentElement)
            // e.target.parent.remove
        })

        check.addEventListener('click', function(e){
            e.target
            if (check.checked){
            console.log('it worked')
            e.target.parentElement.children[1].style.textDecoration = 'line-through';}
            else {
                e.target.parentElement.children[1].style.textDecoration = 'none';

        
  }
        })
        // parent.setAttribute('id', 'parent'+count)
        // btn.setAttribute('id', 'parent'+count)

        btn.innerText= 'X'
        newTask.innerText= input.value
        // assign each child to a parent div
        display.appendChild(parent)
        parent.appendChild(check)
        parent.appendChild(newTask)
        parent.appendChild(btn)
        // count++

        // empty the input box
        input.value= ''
        
    
       
    }


// return taskList
}



