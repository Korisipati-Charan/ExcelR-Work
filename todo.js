let Form = document.getElementsByClassName("uform");
let table = document.getElementsByClassName("dam");
let Id = 0;
let arr = [];
Form[0].addEventListener("submit", (event) => {
    event.preventDefault();
    let data = new FormData(Form[0]);
    let Event = data.get("Event")
    console.log(Event);
    Id++;
    arr.push({ Id: Id, Event: Event });
    Add(Id,Event);
});

const Add = (Id,Event) =>{
    let tr = document.createElement("tr");
        let th1 = document.createElement("th");
        th1.textContent = `${Id}`;
        tr.appendChild(th1);
        let th2 = document.createElement("th");
        th2.textContent = `${Event}`;
        tr.appendChild(th2);
        let th3 = document.createElement("th");
        let Editbtn = document.createElement("button");
        Editbtn.textContent = "Edit";
        Editbtn.addEventListener("click", () =>{
            let Event = prompt("Enter Event");
            th2.textContent = `${Event}`;
        });
        th3.appendChild(Editbtn);
        let Deletebtn = document.createElement("button");
        Deletebtn.textContent = "Delete";
        Deletebtn.addEventListener("click", () =>{
            tr.remove();
        });
        th3.appendChild(Deletebtn);
        tr.appendChild(th3);
        table[0].appendChild(tr);
}

const load = () => {
    for (let obj of arr) {
        let tr = document.createElement("tr");
        let th1 = document.createElement("th");
        th1.textContent = `${obj.Id}`;
        tr.appendChild(th1);
        let th2 = document.createElement("th");
        th2.textContent = `${obj.Event}`;
        tr.appendChild(th2);
        let th3 = document.createElement("th");
        let Editbtn = document.createElement("button");
        Editbtn.textContent = "Edit";
        Editbtn.addEventListener("click", () =>{
            let Event = prompt("Enter Event");
            th2.textContent = `${Event}`;
        });
        th3.appendChild(Editbtn);
        let Deletebtn = document.createElement("button");
        Deletebtn.textContent = "Delete";
        Deletebtn.addEventListener("click", () =>{
            tr.remove();
        });
        th3.appendChild(Deletebtn);
        tr.appendChild(th3);
        table[0].appendChild(tr);
    }
}

load();