//Find canvas, create a context
let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

//Find input box and disable it until canvas is ready
let input = document.querySelector("#image_text");
input.disable = true;

//Drawing the image - create an image and set the source
//add callback to know when the image is loaded and ready,
//so can draw it to the canvas and enable the input
let image = new Image();
image.src = "greatDanePuppy.jfif"

image.addEventListener("load", function() {
    context.drawImage(image, 0, 0);
    input.disable = false;
})

//Add event listener to input - will fire if the text is changed
input.addEventListener("input", function() {
    //read the data typed in the input
    // 'this' is the HTML element this function is called for
    let text = this.value;

    context.drawImage(image, 0, 0);
    context.font = "10px Arial"
    context.fillStyle = "dark blue"
    context.fillText(text, 15, 20)
})