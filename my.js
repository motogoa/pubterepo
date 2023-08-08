function testJSON(){
    // this is the url of the "try if JSON works" appscript attached to the "JSON API, Wep App" googlesheet
    const url ="https://script.google.com/macros/s/AKfycbx-hBT3WzH0q67H0NmW0ZPm8fn_860CLjYStEwQghR6Dimtl4LJOhhE1k0kX5-IdEWa/exec"
    

    // this gets data from a appscript
    fetch (url)
    .then(d => d.json ())
    .then(d => {
        document.getElementById("app").textContent = d[0].status;
    })
}

function addRow(){
    // this is the url of the "try if JSON works" appscript attached to the "JSON API, Wep App" googlesheet
    const url ="https://script.google.com/macros/s/AKfycbx-hBT3WzH0q67H0NmW0ZPm8fn_860CLjYStEwQghR6Dimtl4LJOhhE1k0kX5-IdEWa/exec"
    
    
    // this gets data from a appscript
    fetch (url,{
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        redirect: "follow", // manual, *follow, error
        body: JSON.stringify({name: "Olly Foil"}), // body data type must match "Content-Type" header
      })
        
}

document.getElementById("btn").addEventListener("click", testJSON)
document.getElementById("btn2").addEventListener("click", addRow)
