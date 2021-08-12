const form = document.getElementById("form")

form.addEventListener('submit', e => {
    e.preventDefault()
    if (e.target[3].value == "WXAT") {
        alert("Message sent")
        location.reload()
    } else {
       alert("An error occured")
       e.target[0].value = ""
       e.target[1].value = ""
       e.target[2].value = ""
       e.target[3].value = ""
    }
})