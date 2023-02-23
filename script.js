const newMessage = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>New message</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;

document.querySelector('#msg-container').innerHTML += newMessage;

let messagesCount = document.querySelectorAll('p').length;
document.querySelector('#count').textContent = messagesCount;

let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = year + "-" + month + "-" + day;
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`;

// Delete message
for (let i = 0; i < document.querySelectorAll(".delete").length; i++){
  document.querySelectorAll(".delete")[i].addEventListener("click", function(){
    this.parentNode.remove()

    messagesCount = document.querySelectorAll('p').length;
    document.querySelector('#count').textContent = messagesCount;
  })
} 

// Add message
document.querySelector("#btn-add").addEventListener("click", function(){
  // Check if the input is not empty
    // Add message to a new variable message
    let message = document.querySelector("#add-message").value
    // Empty the input
    document.querySelector("#add-message").value = ""
    // Add new message
    document.querySelector('#msg-container').innerHTML += ` 
    <div class="row new-row">
      <img class="avatar" src="images/avatar-1.jpg" />
      <div class="text-container">
        <h6>John Doe</h6>
        <p>${message}</p>
      </div>
      <span class="delete">✖</span>
    </div>
  `
  // Delete message
  for (let i = 0; i < document.querySelectorAll(".delete").length; i++){
    document.querySelectorAll(".delete")[i].addEventListener("click", function(){
      this.parentNode.remove()
      
      messagesCount = document.querySelectorAll('p').length;
      document.querySelector('#count').textContent = messagesCount;
    })
  }
  // Update nb of messages
  messagesCount = document.querySelectorAll('p').length;
  document.querySelector('#count').textContent = messagesCount;
}) 
// Search
document.querySelector("#btn-search").addEventListener("click", function() {
  if (document.querySelector("#search-message").value.trim() != "") {
    let textToCompare = document.querySelector("#search-message").value
    document.querySelector("#search-message").value = ""
    for (let i = 0; i < document.querySelectorAll(".text-container > h6").length; i++) {
      if (!(document.querySelectorAll(".text-container > h6")[i].textContent.toLowerCase().includes(textToCompare.toLowerCase()))){
        document.querySelectorAll(".text-container > h6")[i].parentNode.parentNode.style.display = "none"
      }
    }   
  }
})