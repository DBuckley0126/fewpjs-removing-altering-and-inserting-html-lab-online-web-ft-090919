// Write your code here!
document.getElementById("main").remove()
const newHeader = document.getElementsByTagName("body")[0].appendChild(document.createElement("h1"))
newHeader.setAttribute("id", "victory")
newHeader.innerHTML = "DANNY is the champion"