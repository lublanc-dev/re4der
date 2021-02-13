// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCn5Sal_qU060xlGyJjkZY31dNZQEnAY-0",
    authDomain: "l4ter-testing.firebaseapp.com",
    projectId: "l4ter-testing",
    storageBucket: "l4ter-testing.appspot.com",
    messagingSenderId: "597437806224",
    appId: "1:597437806224:web:2477b60d95389df292ca15",
    measurementId: "G-Q4T4D487DK"
};

firebase.initializeApp(firebaseConfig);

console.log(firebase);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    var db = firebase.firestore();
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url_f = tabs[0].url;

    url_f = url_f.replaceAll("/", ",")

    var docRef = db.collection("URL").doc(url_f);
    docRef.get().then(function(doc) {
        if (doc.exists) {

          window.alert(JSON.stringify(doc.data()))


        } else {
            //pass
        }
    }).catch(function(error) {
      //Error getting document:",error
      resp({type: "result", status: "error", data: error, request: msg});
    });

})
})
