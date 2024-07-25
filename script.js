const chatLog = document.querySelector('.chat-log');
const userInput = document.querySelector('#user-input');
const sendBtn = document.querySelector('#send-btn');

sendBtn.addEventListener('click', () => {
  const userInputValue = userInput.value.trim();
  if (userInputValue!== '') {
    // Send request to backend with user input
    fetch('/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userInputValue }),
    })
     .then(response => response.json())
     .then(data => {
        // Update chat log with response
        const responseMessage = data.response;
        const chatMessage = document.createElement('div');
        chatMessage.className = 'chat-message assistant';
        chatMessage.innerHTML = `<p>${responseMessage}</p>`;
        chatLog.appendChild(chatMessage);
        userInput.value = '';
      })
     .catch(error => console.error(error));
  }
});