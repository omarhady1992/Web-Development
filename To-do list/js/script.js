//Select elements
const clear = document.getElementById("refresh");
const dateelement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input_item");


//classes
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-o";
const lineThrough = "line-through";


//show today's day
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
dateelement.innerHTML = today.toLocaleDateString("en-us", options);

//insert adjacent elements



//Add to do
function add_todo(todo, id, done, trash) {
    const item = ` <li class="item" id=${id}>
     <div><i class="fa fa-circle-o co" job="complete"></i></div>
     <p class="text">${todo} </p>
     <div class="delete">
         <i class="fa fa-trash-o" job="delete"></i></div></li>
     
     `;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);

}






//store todo 




//remove to do




//update to do