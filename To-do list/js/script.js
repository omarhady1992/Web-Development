//Select elements
const clear = document.getElementById("refresh");
const dateelement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input_item");


//classes
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-o";
const lineThrough = "lineThrough";

//Variables

let LIST, id;



//show today's day
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
dateelement.innerHTML = today.toLocaleDateString("en-us", options);

//STORAGE

//The load list function to add the items to UI
loadList = (array) => {
    array.forEach(element => {
        add_todo(element.todo, element.id, element.done, element.trash);

    });
}

//Get Item
const data = localStorage.getItem('TODO');
//Check if there is data and load it if found
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST)
} else {
    LIST = [];
    id = 0;
}


//Clear local storage
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});


//Add to do
function add_todo(todo, id, done = false, trash = false) {

    if (trash) { return; }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? lineThrough : "";

    const item = `<li class="item">
    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
    <p class="text ${LINE}">${todo}</p>
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
  </li>
`;
    const position = "beforeend";
    //insert adjacent elements
    list.insertAdjacentHTML(position, item);
}

input.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        const todo = input.value;
        if (todo) {
            add_todo(todo, id, false, false);
            LIST.push({
                todo: todo,
                id: id,
                done: false,
                trash: false,
            });

            //add to local storage
            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }
        input.value = "";
    }
});

//Remove Todo

function removetodo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}
// Complete todo
completetodo = (element) => {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(lineThrough);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

//Target dynamic element
list.addEventListener("click", (e) => {
    const element = e.target;
    const job = element.attributes.job.value;

    if (job == "complete") {
        completetodo(element);

    } else {
        removetodo(element);
    }
    localStorage.setItem("TODO", JSON.stringify(LIST));
});