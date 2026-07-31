let mesListes = [];

afficherMesListes();


function enregistrerTexte(){
    event.preventDefault();
    let texteForm = document.querySelector("input").value;
    mesListes.push(texteForm);
    ajouterTache(mesListes);
};

function ajouterTache(tableau){
    let ul = document.querySelector("ul");
    ul.innerHTML = "";

    for (let index = 0; index < tableau.length; index++) {
        let li = document.createElement("li");
        li.innerHTML = `<div class="listeElement">
            <li>${tableau[index]}</li>
                <div class="btnSupprime" onclick="supprimerItem(this, ${index} )">❌</div>
            </div>`
        ul.appendChild(li);

    localStorage.setItem("mesListes", JSON.stringify(tableau));
    };
}

function supprimerItem(element, numero){
    mesListes.splice(numero, 1);
    console.log(mesListes);
    element.parentElement.remove();
    localStorage.setItem("mesListes", JSON.stringify(mesListes));
    
    afficherMesListes();
}

function afficherMesListes(){

    if(localStorage.getItem("mesListes")){
        mesListes = JSON.parse(localStorage.getItem("mesListes"));
    }
   
    let ul = document.querySelector("ul");
    ul.innerHTML = "";

    for (let index = 0; index < mesListes.length; index++) {
        
        let li = document.createElement("li");
        li.innerHTML = `<div class="listeElement">
            <li>${mesListes[index]}</li>
                <div class="btnSupprime" onclick="supprimerItem(this, ${index} )">❌</div>
            </div>`;
        ul.appendChild(li);
    }
}