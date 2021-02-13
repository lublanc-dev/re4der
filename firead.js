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

//Initialize your Firebase app
firebase.initializeApp(firebaseConfig);

console.log(firebase);

//This listener will activate every time a new tab is opened
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    var db = firebase.firestore();
    //We ask the browser for the URL loaded and save it as "url_f"
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url_f = tabs[0].url;
    
    //Replace the "/" from the URL to ",". This step is needed in order to save the URL as a document in Firestore because Firebase
    //doesn't admit "/", also, you can choose any other element to replace it.
    url_f = url_f.replaceAll("/", ",")
    
    //We get the reference of a pre-build collection from Firebase, in my case it was "URL"
    var docRef = db.collection("URL").doc(url_f);
    docRef.get().then(function(doc) {
        if (doc.exists) {

          //The "JSON.stringify()" method is needed to show the data from the document
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
