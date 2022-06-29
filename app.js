var button = document.getElementById('button');
var input  = document.getElementById('input');
var list = document.getElementById('list')


button.addEventListener('click', clickButton);
var listcount = 2;
function clickButton() {
    console.log(input.value);
    var li = document.createElement('li');
    li.setAttribute("id", "li"+listcount)

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("onclick", "clickCheckbox("+listcount+")")




    li.appendChild(checkbox);

    li.innerHTML += input.value;

    var buttonHtml = "<button type='button' style='float: right;' onclick='removeTodo("+listcount+")'>삭제</button>"
    li.innerHTML = li.innerHTML + buttonHtml
    list.appendChild(li);
    listcount = listcount + 1
}

function removeTodo(count){
    var li = document.getElementById('li'+count)
    list.removeChild(li)
}

function clickCheckbox(count){
    var li = document.getElementById('li'+count)
    if (li.style.textDecoration == 'line-through') {
        li.style.textDecoration = 'none'
    } else {
        li.style.textDecoration = 'line-through'
    }
}