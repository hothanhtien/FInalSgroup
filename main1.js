// script create Task

var todos = [
    {
        category: "Makerting",
        title: "ok em yêu nhé",
        content: "nội dung này hãy ghi ra cho vui vui ok"
    }
]

var doings = [
    {
        category: "Makerting",
        title: "ok em yêu nhé",
        content: "nội dung này hãy ghi ra cho vui vui ok"
    }
]

var completeds = [
    {
        category: "Makerting",
        title: "ok em yêu nhé",
        content: "nội dung này hãy ghi ra cho vui vui ok"
    }
]

var blocked = [
    {
        category: "Makerting",
        title: "ok em yêu nhé",
        content: "nội dung này hãy ghi ra cho vui vui ok"
    }
]


if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'))
    if (!Array.isArray(todos)) {
        todos = [];
    }
}
if (localStorage.getItem('doings')) {
    doings = JSON.parse(localStorage.getItem('doings'))
    if (!Array.isArray(doings)) {
        doings = [];
    }
}
if (localStorage.getItem('completeds')) {
    completeds = JSON.parse(localStorage.getItem('completeds'))
    if (!Array.isArray(completeds)) {
        completeds = [];
    }
}
if (localStorage.getItem('blocked')) {
    blocked = JSON.parse(localStorage.getItem('blocked'))
    if (!Array.isArray(blocked)) {
        blocked = [];
    }
}

var containerItemTodo = document.querySelector('.containerItemDetialTodo');
var containerItemDoing = document.querySelector('.containerItemDetialDoing');
var containerItemCompleted = document.querySelector('.containerItemDetialCompleted');
var containerItemBlocked = document.querySelector('.containerItemDetialBlocked');
function render() {
    let items = todos.map(function (item, index) {
        return `
        <div class="ItemDetial">
        <div class="ContainerItemDetial">
            <div class="ItemDetial1">
                <div class="TitleItem">
                    <div class="TitleHead">${item.category}</div>
                    <p>${item.title}</p>
                </div>
                <div class="Action">
                    <img class="editt" onclick="onEdit(${index}, 'todos')" src="./assets/icon/edit.svg" alt="">
                    <img class="deletee" onclick="onDelete(${index}, 'todos')" src="./assets/icon/delete.svg" alt="">
                </div>
                <div></div>
            </div>
            <div class="ItemDetial2">
                <div class="DesItem">
                    <p class="pDes">${item.content}
                    </p>
                </div>
                <div class="Time">
                    <div class="imgWatch"><img src="./assets/icon/watch.svg" alt=""></div>
                    <div class="TimeCreate">June 30, 2022</div>
                </div>
            </div>
        </div>
    </div>
        `
    })
    console.log('hi')
    containerItemTodo.innerHTML = items.join('');

    let itemDoings = doings.map(function (item, index) {
        return `
        <div class="ItemDetial">
        <div class="ContainerItemDetial">
            <div class="ItemDetial1">
                <div class="TitleItem">
                    <div class="TitleHead">${item.category}</div>
                    <p>${item.title}</p>
                </div>
                <div class="Action">
                    <img class="editt" onclick="onEdit(${index}, 'doings')" src="./assets/icon/edit.svg" alt="">
                    <img class="deletee" onclick="onDelete(${index}, 'doings')" src="./assets/icon/delete.svg" alt="">
                </div>
                <div></div>
            </div>
            <div class="ItemDetial2">
                <div class="DesItem">
                    <p class="pDes">${item.content}
                    </p>
                </div>
                <div class="Time">
                    <div class="imgWatch"><img src="./assets/icon/watch.svg" alt=""></div>
                    <div class="TimeCreate">June 30, 2022</div>
                </div>
            </div>
        </div>
    </div>
        `
    })
    console.log('hi')
    containerItemDoing.innerHTML = itemDoings.join('');


    let itemCom = completeds.map(function (item, index) {
        return `
        <div class="ItemDetial">
        <div class="ContainerItemDetial">
            <div class="ItemDetial1">
                <div class="TitleItem">
                    <div class="TitleHead">${item.category}</div>
                    <p>${item.title}</p>
                </div>
                <div class="Action">
                    <img class="editt" onclick="onEdit(${index}, 'completeds')" src="./assets/icon/edit.svg" alt="">
                    <img class="deletee"  onclick="onDelete(${index}, 'completeds')" src="./assets/icon/delete.svg" alt="">
                </div>
                <div></div>
            </div>
            <div class="ItemDetial2">
                <div class="DesItem">
                    <p class="pDes">${item.content}
                    </p>
                </div>
                <div class="Time">
                    <div class="imgWatch"><img src="./assets/icon/watch.svg" alt=""></div>
                    <div class="TimeCreate">June 30, 2022</div>
                </div>
            </div>
        </div>
    </div>
        `
    })
    console.log('hi')
    containerItemCompleted.innerHTML = itemCom.join('');


    let itemBlocked = blocked.map(function (item, index) {
        return `
        <div class="ItemDetial">
        <div class="ContainerItemDetial">
            <div class="ItemDetial1">
                <div class="TitleItem">
                    <div class="TitleHead">${item.category}</div>
                    <p>${item.title}</p>
                </div>
                <div class="Action">
                    <img class="editt" onclick="onEdit(${index}, 'blocked')" src="./assets/icon/edit.svg" alt="">
                    <img class="deletee" onclick="onDelete(${index}, 'blocked')"  src="./assets/icon/delete.svg" alt="">
                </div>
                <div></div>
            </div>
            <div class="ItemDetial2">
                <div class="DesItem">
                    <p class="pDes">${item.content}
                    </p>
                </div>
                <div class="Time">
                    <div class="imgWatch"><img src="./assets/icon/watch.svg" alt=""></div>
                    <div class="TimeCreate">June 30, 2022</div>
                </div>
            </div>
        </div>
    </div>
        `
    })
    console.log('hi')
    containerItemBlocked.innerHTML = itemBlocked.join('');
}

var newTask = document.querySelector('.newTask');
var formCreate = document.querySelector('.FormCreate');
var formCreateMain = document.querySelector('.FromCreateMain');

newTask.addEventListener('click', function () {
    formCreate.classList.toggle('active')
})

formCreate.addEventListener('click', function () {
    formCreate.classList.toggle('active')
})

formCreateMain.addEventListener('click', function (event) {
    event.stopPropagation()
})

var categoryInput = document.querySelector('.categoryValue');
var titleInput = document.querySelector('.titleValue');
var contentInput = document.querySelector('.contentValue');

function onCreate() {
    let categoryValue = categoryInput.value;
    let titleValue = titleInput.value;
    let contentValue = contentInput.value;
    var check = true;
    if (categoryValue == '') {
        check = false;
        categoryInput.classList.add('error');
    }
    if (titleValue == '') {
        check = false;
        titleInput.classList.add('error')
    }
    if (contentValue == '') {
        check = false;
        contentInput.classList.add('error')
    }
    if (check == true) {
        todos.push({
            category: categoryValue,
            title: titleValue,
            content: contentValue
        })
        localStorage.setItem('todos', JSON.stringify(todos));
        formCreate.classList.remove('active')
        render();
    }
}

var formEdit = document.querySelector('.FormEdit');
var formEditMain = document.querySelector('.FromEditMain');
var editBtn = document.querySelector('.submitEdit');
console.log(editBtn)


var categoryValueEdit = document.querySelector('.categoryValueEdit')
var titleValueEdit = document.querySelector('.titleValueEdit')
var contentValueEdit = document.querySelector('.contentValueEdit')
var checkboxValue = document.querySelectorAll('.checkBoxItem');

var idd, typee;
var checkBoxTodo = document.querySelector('.checkBoxTodo')
var checkBoxDoing = document.querySelector('.checkBoxDoing')
var checkBoxCompleted = document.querySelector('.checkBoxCompleted')
var checkBoxBlocked = document.querySelector('.checkBoxBlocked')
function onEdit(id, type) {
    idd = id;
    typee = type;

    console.log(checkBoxTodo, checkBoxDoing, checkBoxBlocked, checkBoxCompleted)
    console.log(id, type)
    var array = window[type]
    categoryValueEdit.value = array[id].category;
    console.log(array[id].category)
    titleValueEdit.value = array[id].title;
    contentValueEdit.value = array[id].content;
    if (type == 'todos') checkBoxTodo.checked = true;
    else if (type == 'doings') {
        checkBoxDoing.checked = true;
    }
    else if (type == 'completeds') {
        checkBoxCompleted.checked = true;
    }
    else if (type == 'blocked') {
        checkBoxBlocked.checked = true;
    }

    formEdit.classList.toggle('active')
}

var allCheckbox = document.querySelectorAll('.ch');
console.log(allCheckbox)
allCheckbox.forEach(function (item) {
    item.addEventListener('change', function () {
        var temp = this;
        if (this.checked) {
            allCheckbox.forEach(function (itemm) {
                if (itemm !== temp) {
                    itemm.checked = false
                }
                // else itemm.checked = true;
            })
        }
    })
})

var submitEdit = document.querySelector('.submitEdit')

var checkSubmitEdit = false;

var checkBoxTemp = null;

document.querySelectorAll('.ch').forEach(function (item) {
    item.addEventListener('click', function () {
        checkBoxTemp = item;
    })
})

submitEdit.addEventListener('click', function () {
    console.log(todos)
    console.log(doings)
    checkSubmitEdit = true;
    console.log(idd, typee)
    var array = window[typee];
    array[idd].category = categoryValueEdit.value;
    array[idd].title = titleValueEdit.value;
    array[idd].content = contentValueEdit.value;

    var itemAdd = array[idd];
    console.log(itemAdd)
    array.splice(idd, 1);

    if (checkBoxTemp.parentNode.querySelector('.lable').textContent == 'Todo') {
        todos.push(itemAdd)
        localStorage.setItem('doings', JSON.stringify(todos));
        checkBoxTodo.checked = false;
        checkBoxDoing.checked = false;
        checkBoxCompleted.checked = false;
        checkBoxBlocked.checked = false;
        render()
    }

    if (checkBoxTemp.parentNode.querySelector('.lable').textContent == 'Doing') {
        doings.push(itemAdd)
        localStorage.setItem('doings', JSON.stringify(doings));
        checkBoxTodo.checked = false;
        checkBoxDoing.checked = false;
        checkBoxCompleted.checked = false;
        checkBoxBlocked.checked = false;
        render()
    }

    if (checkBoxTemp.parentNode.querySelector('.lable').textContent == 'Completed') {
        completeds.push(itemAdd)
        localStorage.setItem('doings', JSON.stringify(completeds));
        checkBoxTodo.checked = false;
        checkBoxDoing.checked = false;
        checkBoxCompleted.checked = false;
        checkBoxBlocked.checked = false;
        render()
    }
    if (checkBoxTemp.parentNode.querySelector('.lable').textContent == 'Blocked') {
        blocked.push(itemAdd)
        localStorage.setItem('doings', JSON.stringify(blocked));
        checkBoxTodo.checked = false;
        checkBoxDoing.checked = false;
        checkBoxCompleted.checked = false;
        checkBoxBlocked.checked = false;
        render()
    }


    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('doings', JSON.stringify(doings));
    localStorage.setItem('completeds', JSON.stringify(completeds));
    localStorage.setItem('blocked', JSON.stringify(blocked));
    // localStorage.setItem(type, JSON.stringify(array)); 
    formEdit.classList.toggle('active')

    render();


})


formEdit.addEventListener('click', function () {
    checkBoxTodo.checked = false;
    checkBoxDoing.checked = false;
    checkBoxCompleted.checked = false;
    checkBoxBlocked.checked = false;
    formEdit.classList.toggle('active')
})








formEditMain.addEventListener('click', function (event) {
    event.stopPropagation()
})



function onDelete(id, type) {
    var array = window[type];
    array.splice(id, 1);
    console.log('ne', array)
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('doings', JSON.stringify(doings));
    localStorage.setItem('completeds', JSON.stringify(completeds));
    localStorage.setItem('blocked', JSON.stringify(blocked));
    render();
}



render();

