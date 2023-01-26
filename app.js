//colorful heart
document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;

    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let size = Math.random() * 100;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';

    body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 2000)
})



//Email Validation
function validation () {
    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    let text = document.getElementById("text");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is Valid.";
        text.style.color = "#00ff00"
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter Valid Email Address!";
        text.style.color = "#ff0000";
    }

     if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00"
    } 
}

/*let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3,4}$/;

Use this format for .tech domain... 
or{2,4}*/