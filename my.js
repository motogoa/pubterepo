function testJSON(){
const url ="https://script.google.com/macros/s/AKfycbzuEz7EPa84lNG16wJaqh20GIvfXOPQlQWe9TF8GgbZ93EXLOE9bWLWwqImQRbGolo-/exec"
fetch (url)
    .then(d => d.json ())
    .then(d => {
        document.getElementById("app").textContent = d[0].status;
    })
}

document.getElementById("btn").addEventListener("click", testJSON)