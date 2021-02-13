/*var firebaseConfig = {
    apiKey: "AIzaSyCn5Sal_qU060xlGyJjkZY31dNZQEnAY-0",
    authDomain: "l4ter-testing.firebaseapp.com",
    projectId: "l4ter-testing",
    storageBucket: "l4ter-testing.appspot.com",
    messagingSenderId: "597437806224",
    appId: "1:597437806224:web:2477b60d95389df292ca15",
    measurementId: "G-Q4T4D487DK"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var docRef = db.collection("URL").doc("chrome:,,newtab,");

docRef.get().then(function(doc) {
    if (doc.exists) {
        var newlabel = document.createElement("hey")
        newlabel.setAttribute("for",id_from_input)
        newlabel.innerHTML = "Here goes the text"
        parentDiv.appendChild(newlabel)
    }
})

*/

/*
var newlabel = document.createElement("label")
newLabel.appendChild(document.createTextNode("hey"))
document.getElementById("test").appendChild(newLabel)
*/

//document.body.onload = addElement;
/*
function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

document.querySelector('#read').addEventListener('click', addElement)
*/

///////////////////////////////////////////////////////////////////////////////

/*
    *se carga nueva URL:
        if (nuevaURL in collection(URL)):
            abre pestaña extension mostrando las notas en esa URL
*/
/*

chrome.tabs.active.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url_f = tabs[0].url;

    url_f = url_f.replaceAll("/", ",")

    chrome.runtime.sendMessage({command: "fetch", ul:}, (response) => {
            //showData(response.data);
    })

})
*/
