//déclarer mes variables
let monH1 = document.querySelector("h1");
let monBtnPlus = document.querySelector("#plus");
let monBtnReset = document.querySelector("#reset");
let monBtnMoins = document.querySelector("#moins");
let monMessage = document.querySelector("#action_nombre");
let n = 10;

let monBtnVert = document.querySelector("#vert");
let monBtnJaune = document.querySelector("#jaune");
let monBtnBrun = document.querySelector("#brun");
let monTableau = document.querySelector(".tableau");

let infos = document.querySelector("#nom");
let monBtnValider = document.querySelector("#valider");
let monBtnEffacer = document.querySelector("#effacer");
let monMessageInfo =  document.querySelector("#message");
/*
Déclarations d'une fonction qui selon le bouton fait un moins 1, un plus 1 ou un retour à 0
@param parametre1 String : c'est le caractère qui décide du type de bouton
*/
function faireOperationBouton (typeBtn){
  
    switch(typeBtn){
        case "+":
            n = Number(monH1.innerText.match(/\d+/g));
            n++;
            monH1.textContent=`n = ${n}`;
            monMessage.textContent="n++";
            break;
        case "0":    
            n=0;
            monH1.textContent=`n = ${n}`;
            console.log(monMessage);
            monMessage.textContent=`n = ${n}`;
            break;
        case "-":
            n = Number(monH1.innerText.match(/\d+/g));
            if (n==0){
                monMessage.textContent="n doit être positif";
            }else{
                n--;
                monH1.textContent=`n = ${n}`;
                monMessage.textContent="n--";
            }    
            break;
        
    }

}
/*
Déclarations d'une fonction qui selon la couleur d'un bouton change la couleur d'un carré 
@param parametre1 String : c'est le caractère qui indique quel bouton a été appuyé
*/
function changerCouleur(typeCouleur){
    switch(typeCouleur){
        case "j":
            //j'ai utilisé cette fonction parce que autrement je ne parvenais pas 
            // à récupérer la couleur du bouton.
            const couleurJaune = window.getComputedStyle(monBtnJaune);
            monTableau.style.backgroundColor = couleurJaune.backgroundColor;   
            break;
        case "v":    
            const couleurVert = window.getComputedStyle(monBtnVert);
            monTableau.style.backgroundColor = couleurVert.backgroundColor;
            break;
        case "b":
            const couleurBrun = window.getComputedStyle(monBtnBrun);
            monTableau.style.backgroundColor = couleurBrun.backgroundColor;
            break;      
    }
}

/*
fonction validerInfo premet de verifier si le champs texte est vide et d'afficher un message en conséquence
*/
function validerInfo(){
    if (infos.value == ""){
        monMessageInfo.style.color="#c1121f";
        monMessageInfo.style.textAlign="center";
        monMessageInfo.textContent = "Rentrer vos informations";
    }else{
        monMessageInfo.style.color="#588157";
        monMessageInfo.textContent = "Merci d'avoir rentrer vos informations";
    }
}

/*
fonction effacerInfo premet de verifier si le champs texte est vide et d'afficher un message en conséquence
*/
function effacerInfo(){
    infos.value="";
}
let moins = "-";
let reset = "0";
let plus = "+";

monBtnMoins.addEventListener("click",()=>{
    faireOperationBouton(moins);
});
monBtnReset.addEventListener("click", ()=>{ 
    faireOperationBouton(reset);
});
monBtnPlus.addEventListener("click", ()=>{
    faireOperationBouton(plus);
});

monBtnVert.addEventListener("click",()=>{  
    changerCouleur("v");
});
monBtnJaune.addEventListener("click", ()=>{ 
     changerCouleur("j");
});
monBtnBrun.addEventListener("click", ()=>{
     changerCouleur("b");
});

monBtnValider.addEventListener("click", ()=>{ 
    validerInfo();
});
monBtnEffacer.addEventListener("click", ()=>{
    effacerInfo();
});
