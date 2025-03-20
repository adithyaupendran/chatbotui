document.addEventListener("DOMContentLoaded", function () {
    const messagesContainer = document.getElementById("messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");
    const bgBtn1 = document.getElementById("bg-btn1");
    const bgBtn2 = document.getElementById("bg-btn2");

    // Function to send user message
    function sendMessage() {
        if (userInput.value.trim() !== "") {
            appendMessage(userInput.value, "user-message");
            userInput.value = "";

            // Simulate bot response
            setTimeout(() => appendMessage("I'm here to assist you!", "bot-message"), 1000);
        }
    }

    // Function to create and append message
    function appendMessage(text, className) {
        const messageWrapper = document.createElement("div");
        messageWrapper.className = `message ${className}`;

        const messageText = document.createElement("p");
        messageText.innerText = text;

        const timestamp = document.createElement("span");
        timestamp.className = "timestamp";
        timestamp.innerText = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        messageWrapper.appendChild(messageText);
        messageWrapper.appendChild(timestamp);
        messagesContainer.appendChild(messageWrapper);

        // Auto-scroll to latest message
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Send button event
    sendButton.addEventListener("click", sendMessage);

    // Enter key event
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") sendMessage();
    });

    // Background button events
    bgBtn1.addEventListener("click", () => window.open("chatbot1.html", "_blank"));
    bgBtn2.addEventListener("click", () => window.open("chatbot2.html", "_blank"));

    // Switch Chat Options
    window.switchChat = function(option) {
        if (option === 'chat1') {
            appendMessage("You selected Option 1! How can I help?", "bot-message");
        } else {
            appendMessage("You selected Option 2! What would you like to do?", "bot-message");
        }
    };
});
