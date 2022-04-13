//Select elements
const clear = document.getElementById("refresh");
const dateelement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input_item");


//classes
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-o";
const lineThrough = "line-through";

//Variables

let LIST, id;



//show today's day
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
dateelement.innerHTML = today.toLocaleDateString("en-us", options);


//Add to do
function add_todo(todo, id = 0, done = false, trash = false) {

    if (trash) { return; }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? lineThrough : "";

    const item = ` <li class="item" id=${id}>
     <div><i class="fa ${DONE} co" job="complete"></i></div>
     <p class="text ${LINE}">${todo} </p>
     <div class="delete">
         <i class="fa fa-trash-o de" job="delete"></i></div></li>
     
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
            })
        }
    }
});

//Remove Todo

function removetodo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}