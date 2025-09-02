function swapName() {
    // >>> put a prompt here, ask the user for a new name <<< 
    // Use document.getElementById("your id").textContent = .... to change the level 1 header to say something new
    const name = document.getElementById("nameInput").value.trim();
    const greeting = document.getElementById("greeting");

    if (name) {
        greeting.textContent = "Hello " + name + "!";
    } else {
            greeting.textContent = "Hello World!";
    }
}

