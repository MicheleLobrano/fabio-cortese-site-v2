
function sendMessage() {
    const input = document.getElementById("user-input");
    const messages = document.getElementById("messages");
    const text = input.value.trim();
    if (text !== "") {
        const userMsg = document.createElement("div");
        userMsg.textContent = "Tu: " + text;
        messages.appendChild(userMsg);

        const reply = document.createElement("div");
        reply.textContent = "Cortese: " + rispostaAutomatica(text);
        messages.appendChild(reply);
        input.value = "";
        messages.scrollTop = messages.scrollHeight;
    }
}

function rispostaAutomatica(testo) {
    return "Grazie per il messaggio. Fabio Cortese ti risponderà presto!";
}
