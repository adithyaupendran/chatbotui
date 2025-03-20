document.addEventListener("DOMContentLoaded", function () {
    const messagesContainer = document.getElementById("messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");
    const chatbotContainer = document.querySelector(".chatbot-container");
    const bgBtn1 = document.getElementById("bg-btn1"); // Clear chat
    const bgBtn2 = document.getElementById("bg-btn2"); // Toggle chatbot

    // Send message function
    function sendMessage() {
        if (userInput.value.trim() !== "") {
            // Create user message bubble
            const userMessage = createMessageElement(userInput.value, "user-message");
            messagesContainer.appendChild(userMessage);
            
            // Clear input field
            userInput.value = "";

            // Simulate bot response after 1 second
            setTimeout(() => {
                const botMessage = createMessageElement("I'm here to assist you!", "bot-message");
                messagesContainer.appendChild(botMessage);

                // Scroll to the newest message
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 1000);

            // Scroll to the newest message
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }

    // Create message element
    function createMessageElement(text, className) {
        const messageWrapper = document.createElement("div");
        messageWrapper.className = `message ${className}`;

        const messageText = document.createElement("p");
        messageText.innerText = text;

        const timestamp = document.createElement("span");
        timestamp.className = "timestamp";
        timestamp.innerText = getCurrentTime(); // Get current time

        messageWrapper.appendChild(messageText);
        messageWrapper.appendChild(timestamp);

        return messageWrapper;
    }

    // Get current time
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    // Button click to send message
    sendButton.addEventListener("click", sendMessage);

    // Enter key to send message
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") sendMessage();
    });

    // Toggle chatbot visibility
    bgBtn1.addEventListener("click", function () {
        window.open("chatbot1.html", "_blank");
    });
    
    bgBtn2.addEventListener("click", function () {
        window.open("chatbot2.html", "_blank");
    });
    
});
