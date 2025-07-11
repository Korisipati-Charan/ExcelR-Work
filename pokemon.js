const pokeID = () => {
    const id = Math.floor(Math.random() * 800) + 1;
    return id;
}

const randomMove = (size) => {
    const randomMov = Math.floor(Math.random() * size);
    return randomMov;
}

const Pocketamonster = async () => {
    const id = pokeID();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    const name = data.name;
    const pokeurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const allmoves = await data.moves;
    const moves = [allmoves[randomMove(allmoves.length)].move.name, allmoves[randomMove(allmoves.length)].move.name, allmoves[randomMove(allmoves.length)].move.name, allmoves[randomMove(allmoves.length)].move.name];
    const total = { name: name, pokeurl: pokeurl, moves: moves };
    return total;
}

let row = document.getElementsByClassName("main");
let count = 0;

const CreateOneListing = async () => {
    const { name, pokeurl, moves } = await Pocketamonster();
    let div = document.createElement("div");
    div.className = "row poket mb-3";
    const h3 = document.createElement("h3");
    h3.className = "col-md-12";
    h3.textContent = `Pokemon ${name}`;
    div.appendChild(h3);
    const left = document.createElement("div");
    left.className = "row col-md-6";
    const img = document.createElement("img");
    img.src = pokeurl;
    img.alt = name;
    left.appendChild(img);
    div.appendChild(left);
    const right = document.createElement("div");
    right.className = "row col-md-6";

    moves.forEach(move => {
        const cha = document.createElement("div");
        cha.className = "col-md-6 me-3";
        const h5 = document.createElement("h5");
        h5.className = "blue";
        h5.textContent = move;
        cha.appendChild(h5);
        right.appendChild(cha);
    });
    
    div.appendChild(right);
    let end = document.createElement("div");
    end.className = "item-centering";
    let btn=document.createElement("button");
    btn.className = "btn btn-primary";
    btn.textContent="Wanna hear me?";
    let audio = document.createElement("audio");
    let currentID=++count;
    audio.id = `clicksound${currentID}`;
    audio.src = `https://play.pokemonshowdown.com/audio/cries/${name}.mp3`;
    btn.addEventListener("click",() =>{
        let sound = document.getElementById(`clicksound${currentID}`);
        sound.play();
    });
    end.appendChild(btn);
    end.appendChild(audio);
    div.appendChild(end);
    row[0].appendChild(div);
}

// row[0].appendChild(CreateOneListing());
// row[0].appendChild(CreateOneListing());
// row[0].appendChild(CreateOneListing());
// row[0].appendChild(CreateOneListing());
// row[0].appendChild(CreateOneListing());
// row[0].appendChild(CreateOneListing());

const arsenal = async (j) => {
    for (let i = 0; i < j; i++) {
        await CreateOneListing()
         .then((res) =>{
            console.log("Successfully collected data");
         })
         .catch((err) =>{
            console.log("Unable to fetch data");
         });
    }
}

window.onload = () => {
    arsenal(6);
};