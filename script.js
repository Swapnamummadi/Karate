// function chat(){
//     const inputchat = document.getElementById('chat').toLowercase()
//     const search_item = document.getElementsByClassName('Chat-input')
//     const result = document.getElementsByClassName('results_list2')
//     while(result.firstChild){
//         result.removeChild(result.firstChild)
//     }
//     if(search_item.trim() != ''){
//         const Array = ['hello',
//                     'i need help',
//                     'where it is located',
//                     'how many hours per day',
//                     'can we participate in zonals',
//                     'is there any discount',
//                     'when the next batch will started',
//                     'Ok thank you']
    
//     let foundres = false
//     Array.foreach((res)=>{
//         if(res.toLowercase().includes(search_item)){
//             const li = document.createElement('p')
//             li.className = 'search_result'
//             if(res == Array[0]){
//                 li.textContent = "✋ what`s up this is swapna. how can i help"
//             }
//             if(res == Array[1]){
//                 li.textContent = "Yaa sure, am always here to help you. tell me what's your problem"
//             }
//             if(res == Array[2]){
//                 li.textContent = "It is located at KPHB colony, Kukatpally in Hyderabad."
//             }
//             if(res == Array[3]){
//                 li.textContent = "The timings for the sessions are from morning 8Am to evening 5PM.. Any queries, please ask me."
//             }
//             if(res == Array[4]){
//                 li.textContent = "Yaa, why not!... Every year we select the best candidates to participate in the national and international zonal level."
//             }
//             if(res == Array[5]){
//                 li.textContent = "I think the amount of this classes is very cheap. But for asking purpose we give you a discount upto 5%..."
//             }
//             if(res == Array[6]){
//                 li.textContent = "The every batch started on every first month."
//             }
//             if(res == Array[7]){
//                 li.textContent = "Welcome😍... Ask me if any queries!!!"
//             }
            
//             foundres = true;
//         }
//     });
//     if(!foundres){
//         li = document.createElement('p')
//         li.textContent = "Sorry😪 we are not provide any information about this question. contact through +91 87903 23694"
//         result.append(li)
//     }
// }
// }



// function Chat() {
//     const searchTerm = document.querySelector('.Chat-input').value.toLowerCase();
//     const resultsList = document.getElementById('results-list2');
//     const searchResults = document.getElementsByClassName('Chat-result');

//     while (resultsList.firstChild) {
//       resultsList.removeChild(resultsList.firstChild);
//     }
//     if (searchTerm.trim() !== '') {
//       const dataArray = [
//         'Hii hey',
//         'How can i book a room in RK Resorts',
//         'may i know the location',
//         'How are you'
//       ];

//       let foundResults = false;

//       dataArray.forEach((result) => {
//         if (result.toLowerCase().includes(searchTerm)) {
//           const li = document.createElement('p');
//           li.className = 'search-result';
//           if(result==dataArray[0]){
//           li.textContent = 'Hii👋 I am here to help'}
//           else if(result==dataArray[1]){
//           li.textContent = 'Fill the form given in website or contact us through telephone number'}
//           else if(result==dataArray[2]){
//           li.textContent = 'It is near to idupulapaya,kadapa district'}
//           else if(result==dataArray[3]){
//             li.textContent = 'I am Good!...What about you'}
//           resultsList.appendChild(li);
//           foundResults = true;
//         }
//       });

//       if (!foundResults) {
//         const li = document.createElement('p');
//         li.textContent = 'Sorry!😔....cannot get you.Contact us through 91XXXX';
//         resultsList.appendChild(li);
//       }
//     }
//   }
document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
  
    sendButton.addEventListener("click", sendMessage);
  
    function sendMessage() {
      const messageText = messageInput.value.trim();
      if (messageText === "") return;
  
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", "alert", "alert-secondary");
      messageElement.textContent = messageText;
  
      chatBox.appendChild(messageElement);
      messageInput.value = "";
    }
  });
  