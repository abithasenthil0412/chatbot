const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

async function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") return;

    // Show user message
    chatBox.innerHTML += `
        <div class="user-message">
            👤 ${message}
        </div>
    `;

    userInput.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;

    try {

        const response = await fetch("/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })

        });

        const data = await response.json();

        chatBox.innerHTML += `
            <div class="bot-message">
                🤖 ${data.reply}
            </div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;

    } catch (error) {

        chatBox.innerHTML += `
            <div class="bot-message">
                ❌ Server Error
            </div>
        `;

    }

}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(event){

    if(event.key==="Enter"){

        sendMessage();

    }

});