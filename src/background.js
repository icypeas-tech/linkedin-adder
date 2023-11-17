// Fonction pour accepter les invitations
function addInvitations(tabId) {
	// Envoie un message au script d'injection de contenu dans l'onglet actuel
	chrome.tabs.sendMessage(tabId, { action: "addInvitations" });
}

// Déclenché lorsqu'un utilisateur clique sur l'icône de l'extension
chrome.browserAction.onClicked.addListener(function(tab) {
	addInvitations(tab.id);
});

// Écoute les mises à jour des onglets
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    // Vérifie si la page a fini de charger
    if (changeInfo.status === "complete" && tab.active) {
		// Exécute la fonction pour accepter les invitations
        addInvitations(tabId);  
    }
});
