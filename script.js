//your JS code here. If required.
const now = new Date();
let nowDate = document.getElementById("timer");
nowDate.innerText = `${now.toLocaleDateString()}, ${now.toLocaleTimeString()}`;