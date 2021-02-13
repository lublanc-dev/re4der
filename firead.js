// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIXXXXXXXXXXXXXXXXXXX-0",
    authDomain: "XXXXXXX.firebaseapp.com",
    projectId: "XXXXXXXX",
    storageBucket: "XXXXXXX.appspot.com",
    messagingSenderId: "XXXXXXXXXXX",
    appId: "1:5XXXXXX24:web:24XXXXXXXXXXXca15",
    measurementId: "X-XXXXXXK"
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
