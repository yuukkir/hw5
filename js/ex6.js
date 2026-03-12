const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

let content = document.getElementById("content");
let dl = document.createElement("dl");

for (let i = 0; i < words.length; i++) {

   let dt = document.createElement("dt");
   let strong = document.createElement("strong");

   strong.innerText = words[i].term;
   dt.appendChild(strong);

   let dd = document.createElement("dd");
   dd.innerText = words[i].definition;

   dl.appendChild(dt);
   dl.appendChild(dd);
}

content.appendChild(dl);