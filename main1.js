// script create Task

var todos = [

]

var doings = [

]

var completeds = [

]

var blocked = [
]

// localStorage.removeItem('todos');
// localStorage.removeItem('doings');
// localStorage.removeItem('completeds');
// localStorage.removeItem('blocked');


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
    let items = todos.map(function (item, index) {
        var monthText = '';
        if (item.month==1)  monthText= 'January';
        else if (item.month==2)  monthText= 'February';
        else if (item.month==3)  monthText= 'March';
        else if (item.month==4)  monthText= 'April';
        else if (item.month==5)  monthText= 'May';
        else if (item.month==6)  monthText= 'June';
        else if (item.month==7)  monthText= 'July';
        else if (item.month==8)  monthText= 'August';
        else if (item.month==9)  monthText= 'September';
        else if (item.month==10)  monthText= 'October';
        else if (item.month==11)  monthText= 'November';
        else if (item.month==12)  monthText= 'December';
        return `
        <div class="ItemDetial" draggable="true">
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
                    <div class="TimeCreate">${monthText}, ${item.day}, ${item.year}</div>
                </div>
            </div>
        </div>
    </div>
        `
    })
    containerItemTodo.innerHTML = items.join('');

    let itemDoings = doings.map(function (item, index) {
        var monthText = '';
        if (item.month==1)  monthText= 'January';
        else if (item.month==2)  monthText= 'February';
        else if (item.month==3)  monthText= 'March';
        else if (item.month==4)  monthText= 'April';
        else if (item.month==5)  monthText= 'May';
        else if (item.month==6)  monthText= 'June';
        else if (item.month==7)  monthText= 'July';
        else if (item.month==8)  monthText= 'August';
        else if (item.month==9)  monthText= 'September';
        else if (item.month==10)  monthText= 'October';
        else if (item.month==11)  monthText= 'November';
        else if (item.month==12)  monthText= 'December';
        return `
        <div class="ItemDetial" draggable="true">
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
                    <div class="TimeCreate">${monthText}, ${item.day}, ${item.year}</div>
                </div>
            </div>
        </div>
    </div>
        `
    })
    containerItemDoing.innerHTML = itemDoings.join('');


    let itemCom = completeds.map(function (item, index) {
        var monthText = '';
        if (item.month==1)  monthText= 'January';
        else if (item.month==2)  monthText= 'February';
        else if (item.month==3)  monthText= 'March';
        else if (item.month==4)  monthText= 'April';
        else if (item.month==5)  monthText= 'May';
        else if (item.month==6)  monthText= 'June';
        else if (item.month==7)  monthText= 'July';
        else if (item.month==8)  monthText= 'August';
        else if (item.month==9)  monthText= 'September';
        else if (item.month==10)  monthText= 'October';
        else if (item.month==11)  monthText= 'November';
        else if (item.month==12)  monthText= 'December';
        return `
        <div class="ItemDetial" draggable="true">
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
                    <div class="TimeCreate">${monthText}, ${item.day}, ${item.year}</div>
                </div>
            </div>
        </div>
    </div>
        `
    })
    containerItemCompleted.innerHTML = itemCom.join('');


    let itemBlocked = blocked.map(function (item, index) {
        var monthText = '';
        if (item.month==1)  monthText= 'January';
        else if (item.month==2)  monthText= 'February';
        else if (item.month==3)  monthText= 'March';
        else if (item.month==4)  monthText= 'April';
        else if (item.month==5)  monthText= 'May';
        else if (item.month==6)  monthText= 'June';
        else if (item.month==7)  monthText= 'July';
        else if (item.month==8)  monthText= 'August';
        else if (item.month==9)  monthText= 'September';
        else if (item.month==10)  monthText= 'October';
        else if (item.month==11)  monthText= 'November';
        else if (item.month==12)  monthText= 'December';
        return `
        <div class="ItemDetial" draggable="true">
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
                    <div class="TimeCreate">${monthText}, ${item.day}, ${item.year}</div>
                </div>
            </div>
        </div>
    </div>
        `
    })
    containerItemBlocked.innerHTML = itemBlocked.join('');
    updateItemCount();
    initializeDragAndDrop();
}

function updateItemCount() {
    const itemCounts = {
        todos: todos.length,
        doings: doings.length,
        completeds: completeds.length,
        blocked: blocked.length
    };
    var i11 = document.querySelector('.i11')
    var i22 = document.querySelector('.i22')
    var i33 = document.querySelector('.i33')
    var i44 = document.querySelector('.i44')
    i11.innerHTML = itemCounts.todos;
    i22.innerHTML = itemCounts.doings;
    i33.innerHTML = itemCounts.completeds;
    i44.innerHTML = itemCounts.blocked;
}

var newTask = document.querySelector('.newTask');
var formCreate = document.querySelector('.FormCreate');
var formCreateMain = document.querySelector('.FromCreateMain');
var timeCreate = document.querySelector('.TimeCreate');
var categoryInput = document.querySelector('.categoryValue');
var titleInput = document.querySelector('.titleValue');
var contentInput = document.querySelector('.contentValue');
categoryInput.addEventListener('input', function() {
    categoryInput.classList.add('success');
})
titleInput.addEventListener('input', function() {
    titleInput.classList.add('success');
})
contentInput.addEventListener('input', function() {
    contentInput.classList.add('success');
})
newTask.addEventListener('click', function () {
    categoryInput.value = "";
    titleInput.value= "";
    contentInput.value= "";
    categoryInput.classList.remove('error');
    titleInput.classList.remove('error');
    contentInput.classList.remove('error');
    categoryInput.classList.remove('success');
    titleInput.classList.remove('success');
    contentInput.classList.remove('success');
    formCreate.classList.toggle('active')
})


formCreate.addEventListener('click', function () {
    formCreate.classList.toggle('active')
})

var Dele = document.querySelector('.Dele');
Dele.addEventListener('click', function() {
    formCreate.classList.remove('active')
})



formCreateMain.addEventListener('click', function (event) {
    event.stopPropagation()
})



function onCreate() {
    let categoryValue = categoryInput.value;
    let titleValue = titleInput.value;
    let contentValue = contentInput.value;
    var check = true;
    if (categoryValue == '') {
        check = false;
        console.log('ko')
        categoryInput.classList.remove('success');
        categoryInput.classList.add('error');
    }
    else {
        categoryInput.classList.remove('error');
        categoryInput.classList.add('success');
    }
    if (titleValue == '') {
        check = false;
        titleInput.classList.remove('success');
        titleInput.classList.add('error')
    }
    else {
        titleInput.classList.remove('error');
        titleInput.classList.add('success');
    }
    if (contentValue.trim() == '') {
        check = false;
        contentInput.classList.remove('success');
        contentInput.classList.add('error')
    }
    else {
        contentInput.classList.remove('error');
        contentInput.classList.add('success');
    }
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
    if (localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem('todos'))
        if (!Array.isArray(todos)) {
            todos = [];
        }
    }
    if (check == true) {
        todos.push({
            category: categoryValue,
            title: titleValue,
            content: contentValue,
            day,
            month,
            year
        })
        localStorage.setItem('todos', JSON.stringify(todos));
        formCreate.classList.remove('active')
        render();
    }
    // initializeDragAndDrop();
}



var formEdit = document.querySelector('.FormEdit');
var formEditMain = document.querySelector('.FromEditMain');

var Dele1 = document.querySelector('.Dele1');
Dele1.addEventListener('click', function() {
    formEdit.classList.remove('active')
})

var categoryValueEdit = document.querySelector('.categoryValueEdit')
var titleValueEdit = document.querySelector('.titleValueEdit')
var contentValueEdit = document.querySelector('.contentValueEdit')
var checkboxValue = document.querySelectorAll('.checkBoxItem');

var idd, typee;
var checkBoxTodo = document.querySelector('.checkBoxTodo')
var checkBoxDoing = document.querySelector('.checkBoxDoing')
var checkBoxCompleted = document.querySelector('.checkBoxCompleted')
var checkBoxBlocked = document.querySelector('.checkBoxBlocked')


categoryValueEdit.addEventListener('input', function() {
    categoryValueEdit.classList.add('success');
})
titleValueEdit.addEventListener('input', function() {
    titleValueEdit.classList.add('success');
})
contentValueEdit.addEventListener('input', function() {
    contentValueEdit.classList.add('success');
})
function onEdit(id, type) {
    // formCreate.classList.toggle('active')
    categoryValueEdit.classList.remove('error');
    titleValueEdit.classList.remove('error');
    contentValueEdit.classList.remove('error');
    categoryValueEdit.classList.remove('success');
    titleValueEdit.classList.remove('success');
    contentValueEdit.classList.remove('success');
    idd = id;
    typee = type;

    // console.log(checkBoxTodo, checkBoxDoing, checkBoxBlocked, checkBoxCompleted)
    // console.log(id, type)
    var array = window[type]
    categoryValueEdit.value = array[id].category;
    // console.log(array[id].category)
    titleValueEdit.value = array[id].title;
    contentValueEdit.value = array[id].content;
    if (type == 'todos') {
        checkBoxTodo.checked = true;
        checkBoxDoing.checked = false;
        checkBoxCompleted.checked = false;
        checkBoxBlocked.checked = false;
    }
    else if (type == 'doings') {
        checkBoxTodo.checked = false;
        checkBoxDoing.checked = true;
        checkBoxCompleted.checked = false;
        checkBoxBlocked.checked = false;
    }
    else if (type == 'completeds') {
        checkBoxTodo.checked = false;
        checkBoxDoing.checked = false;
        checkBoxCompleted.checked = true;
        checkBoxBlocked.checked = false;
    }
    else if (type == 'blocked') {
        checkBoxTodo.checked = false;
        checkBoxDoing.checked = false;
        checkBoxCompleted.checked = false;
        checkBoxBlocked.checked = true;
    }
    formEdit.classList.toggle('active')
}

var allCheckbox = document.querySelectorAll('.ch');
// console.log(allCheckbox)
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
var checkBoxTemp = document.querySelector('.checkBoxTodo');
document.querySelectorAll('.ch').forEach(function (item) {
    item.addEventListener('click', function () {
        checkBoxTemp = item;
    })
})

submitEdit.addEventListener('click', function () {
    let categoryValueE = categoryValueEdit.value;
    let titleValueE = titleValueEdit.value;
    let contentValueE = contentValueEdit.value;
    var check = true;
    if (categoryValueE == '') {
        check = false;
        console.log('ko')
        categoryValueEdit.classList.remove('success');
        categoryValueEdit.classList.add('error');
    }
    else {
        categoryValueEdit.classList.remove('error');
        categoryValueEdit.classList.add('success');
    }
    if (titleValueE == '') {
        check = false;
        titleValueEdit.classList.remove('success');
        titleValueEdit.classList.add('error')
    }
    else {
        titleValueEdit.classList.remove('error');
        titleValueEdit.classList.add('success');
    }
    if (contentValueE.trim() == '') {
        check = false;
        console.log('buc nha')
        contentValueEdit.classList.remove('success');
        contentValueEdit.classList.add('error')
    }
    else {
        contentValueEdit.classList.remove('error');
        contentValueEdit.classList.add('success');
    }
    // console.log(todos)
    // console.log(doings)
    checkSubmitEdit = true;
    // console.log(idd, typee)
   if (check==true) {
    var array = window[typee];
    array[idd].category = categoryValueEdit.value;
    array[idd].title = titleValueEdit.value;
    array[idd].content = contentValueEdit.value;
    const currentDate1 = new Date();
    const day1 = currentDate1.getDate();
    const month1 = currentDate1.getMonth() + 1; 
    const year1 = currentDate1.getFullYear();
    // console.log('ne', day1, month1, year1)
    array[idd].day = day1;
    array[idd].month = month1;
    array[idd].year = year1;
    // console.log('array',array[idd])
    var itemAdd = array[idd];
    // console.log('them xo',itemAdd)
    array.splice(idd, 1);
    // console.log('sau khi xoa: ',array)
    if (checkBoxTodo.checked) {
        // console.log('1')
        todos.push(itemAdd)
        localStorage.setItem('todos', JSON.stringify(todos));
        checkBoxTodo.checked = false;
        checkBoxDoing.checked = false;
        checkBoxCompleted.checked = false;
        checkBoxBlocked.checked = false;
        // render()
    }

    if (checkBoxDoing.checked) {
        // console.log('2')

        doings.push(itemAdd)
        localStorage.setItem('doings', JSON.stringify(doings));
        checkBoxTodo.checked = false;
        checkBoxDoing.checked = false;
        checkBoxCompleted.checked = false;
        checkBoxBlocked.checked = false;
        // render()
    }

    if (checkBoxCompleted.checked) {
        // console.log('3')

        completeds.push(itemAdd)
        localStorage.setItem('completeds', JSON.stringify(completeds));
        checkBoxTodo.checked = false;
        checkBoxDoing.checked = false;
        checkBoxCompleted.checked = false;
        checkBoxBlocked.checked = false;
        // render()
    }
    if (checkBoxBlocked.checked) {
        // console.log('4')

        blocked.push(itemAdd)
        localStorage.setItem('blocked', JSON.stringify(blocked));
        checkBoxTodo.checked = false;
        checkBoxDoing.checked = false;
        checkBoxCompleted.checked = false;
        checkBoxBlocked.checked = false;
        // render()
    }


    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('doings', JSON.stringify(doings));
    localStorage.setItem('completeds', JSON.stringify(completeds));
    localStorage.setItem('blocked', JSON.stringify(blocked));

    // localStorage.setItem(type, JSON.stringify(array)); 
    formEdit.classList.toggle('active')

    render();
   }

    // initializeDragAndDrop();
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
    // console.log('ne', array)
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('doings', JSON.stringify(doings));
    localStorage.setItem('completeds', JSON.stringify(completeds));
    localStorage.setItem('blocked', JSON.stringify(blocked));
    render();
}



render();


// // kéo thả


let lists = document.querySelectorAll('.ItemDetial');
let containers = document.querySelectorAll('.containerItemDetial');

function initializeDragAndDrop() {
    let lists = document.querySelectorAll('.ItemDetial');
    let containers = document.querySelectorAll('.containerItemDetial');
      function updateCheckboxStates(container) {
        checkBoxTodo.checked = container.classList.contains('containerItemDetialTodo');
        checkBoxDoing.checked = container.classList.contains('containerItemDetialDoing');
        checkBoxCompleted.checked = container.classList.contains('containerItemDetialCompleted');
        checkBoxBlocked.checked = container.classList.contains('containerItemDetialBlocked');
    }
    console.log(containers)
    // function clearCheckboxSelections() {
    //     checkBoxTodo.checked = false;
    //     checkBoxDoing.checked = false;
    //     checkBoxCompleted.checked = false;
    //     checkBoxBlocked.checked = false;
    // }
    for (const container of containers) {
        container.addEventListener('dragover', function (e) {
            e.preventDefault();
            const draggingElement = document.querySelector('.dragging');
        });
        container.addEventListener('drop', function (e) {
            e.preventDefault();
            const selected = document.querySelector('.dragging');
            if (selected) {
                const afterElement = getDragAfterElement(container, e.clientY);
                if (afterElement == null) {
                    container.appendChild(selected);
                } else {
                    container.insertBefore(selected, afterElement);
                }
                selected.classList.remove('dragging');
                updateCheckboxStates(container);
                saveStateToLocalStorage();
                render()
            }   
        });
    }
    for (const list of lists) {
        list.addEventListener('dragstart', function (e) {
            e.target.classList.add('dragging');
        });
    }
    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.ItemDetial:not(.dragging)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
}

function saveStateToLocalStorage() {
    const containers = document.querySelectorAll('.containerItemDetial');
    containers.forEach(container => {
        const items = [];
        container.querySelectorAll('.ItemDetial').forEach(item => {
            const category = item.querySelector('.TitleHead').textContent;
            const title = item.querySelector('.TitleItem p').textContent;
            const content = item.querySelector('.pDes').textContent;
            const timeCreate = item.querySelector('.TimeCreate').textContent.split(', ');
            const monthNames = {
                January: 1,
                February: 2,
                March: 3,
                April: 4,
                May: 5,
                June: 6,
                July: 7,
                August: 8,
                September: 9,
                October: 10,
                November: 11,
                December: 12
            };
            const [monthStr, day, year] = timeCreate;
            const month = monthNames[monthStr];
            const monthNumber = month !== undefined ? month : monthStr;
            items.push({ category, title, content, day, month: monthNumber, year });
            console.log(items)
        });    
        const containerName = container.classList.contains('containerItemDetialTodo') ? 'todos' :
                              container.classList.contains('containerItemDetialDoing') ? 'doings' :
                              container.classList.contains('containerItemDetialCompleted') ? 'completeds' :
                              container.classList.contains('containerItemDetialBlocked') ? 'blocked' : '';
        if (containerName !== '') {
            localStorage.setItem(containerName, JSON.stringify(items));
        }
    });
}


initializeDragAndDrop();






























































































































































































































































































