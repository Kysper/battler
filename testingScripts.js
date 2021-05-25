

function testing() {
    let inputName = document.querySelector('#inputName')
    inputName.value = "Bleep"
    if (inputName === "Bleep") {
        console.log('green', "Success")
    } else {
        console.log('red', Failed)
    }
}

testing();