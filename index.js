function popup(){
    document.getElementById('main').style.display = 'block';
}
function accept(){
    let task=document.getElementById('input').value; 
    let date=document.getElementById('date').value;
    let time=document.getElementById('time').value;

    if(task=="" || date=="" || time==""){
        alert("Please fill all the fields");
        return;
    }
    let outputdiv=document.getElementById('output');

    let container=document.createElement('div');
    container.classList.add('div-style');

    let check=document.createElement('input');
    check.type='checkbox';
    check.classList.add('check-style');

    let details=document.createElement('div');
    details.innerHTML=`${task}    ${date}    ${time}`;
    details.classList.add('detail-style');

    container.appendChild(check);
    container.appendChild(details);
    outputdiv.appendChild(container);
    
    document.getElementById('input').value="";
    document.getElementById('date').value="";
    document.getElementById('time').value="";

    
    document.getElementById('output').style.display = 'block';
    document.getElementById('main').style.display = 'none';

    check.addEventListener("click",function(){
        if(this.checked){
            details.style.textDecoration='line-through';
        }
        else{
            details.style.textDecoration='none';
        }
    });
    if(outputdiv.children.length>=3){
        let firsttask=outputdiv.children[0];
        let firstcheck=firsttask.querySelector('input[type="checkbox"]');
        if(firstcheck.checked){
            outputdiv.removeChild(firsttask);
        }
    }
}
