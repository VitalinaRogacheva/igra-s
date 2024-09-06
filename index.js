const input = document.querySelector("#typeNumber");
const btn = document.querySelector("#btn");
const result = Math.floor(Math.random()*20)+1;

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
    plays()
    }
})

btn.addEventListener("click", plays);

function plays() {
    const numbers = document.querySelector("#typeNumber").value;
    if (numbers<1 || numbers>20) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter a number from 1 to 20!",
        });
    }

    else if (isNaN(numbers)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter a number!",
        });
    }

    else {
        if (numbers < result) {
            Swal.fire("Enter a higher number!");
        }

        else if (numbers > result) {
            Swal.fire("Enter a lower number!");
            }

        else {
            Swal.fire({
                title: "Win!!!",
                imageUrl: "https://media.istockphoto.com/id/1661163270/photo/studio-shot-of-excited-woman-celebrating-big-win-showered-in-tinsel-confetti-on-yellow.webp?b=1&s=170667a&w=0&k=20&c=DuS0GPp1nnEHjuQ0qWqG3OLbx68GL-IC5vXxNQFGF-M=",
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: "win"
            });
        }
    }
};