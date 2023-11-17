// Création d'une balise script dynamique
const scriptTag = document.createElement("script");
// Attribution de la source du script à une URL
scriptTag.src = chrome.runtime.getURL("elementsMap.js");
// Ajout de la balise script à la tête du document
document.head.appendChild(scriptTag);

// Sélectionne tous les éléments dans le document qui correspondent à un sélecteur
function addInvitations() {
	// Specification du sélecteur
	const connections = document.getElementsByClassName(elementsMap.addButton);

	let index = 0;

	// Effectuer une action de manière répetée
	var intervalId = setInterval(function() {
		// Vérification des conditions pour arrêter l'interval
		if (index >= connections.length || connections.length === 0) {
			clearInterval(intervalId);
			return;
		}
		// Simule un Clic sur le bouton accepter
		connections[index].click();
		// Incrémentation de l'index
		index++;
		// Réinitialise le processus après avoir accepté un profil
		addInvitations();
	// 50 ms entre chaque suppresion
	}, 50);
}

// Ecouteur d'événements pour les messages
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	// Si l'action dans le message est égale à "addInvitations" il appel la addInvitation()
	if (message.action === "addInvitations") {
		addInvitations();
	}
});