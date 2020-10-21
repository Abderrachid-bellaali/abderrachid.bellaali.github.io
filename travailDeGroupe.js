/*faire une fonction
stocker le mail et le MP dans un tableau (ou prompt)
faire une boucle pour vérifier si mail et MP est == à ce qui est enregistré dans le tableau*/

let tableau = [["email1","MDP1"],["email2","MDP2"]];
let varEmail=false;
let varMdp=false;
let email;
let mdp;
let user;

while(varEmail==false){
	email = prompt("Rentrez votre email.");
	if (email != "") { //si email est rempli 

		while ((tableau[0][0] != email) && ( tableau[1][0] != email)) {//le && permet de vérifier les 2 condition et le "ou" permet de vérifier qu'une seule condition.
			email = prompt("email incorrect, réssayer SVP");
		}
		if (tableau[0][0] == email) {
			user = 0;
		} else {
			user = 1;
		}

		console.log("email correct");
		varEmail=true;
	}
	else{
		console.log("Le champ est vide ");
	}
}	
		
while (varMdp==false) {
	mdp = prompt("Introduisez votre mot de passe");
	if (mdp != "") { //si email est rempli 
		while (tableau[user][1] != mdp)  {
			mdp = prompt("Mot de passe incorrect, réssayer SVP");
		}
		console.log("Mot de passe correct");
		varMdp=true;
	}
	else{
		console.log("Le champ est vide ");
	}
}
console.log("Vous êtes connecté");
