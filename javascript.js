images = [
    ["image1", "Hades1.jpg"],
    ["image2", "Hades2.jpg"],
    ["image3", "Hades3.jpg"],
    ["image4", "Hades4.jpg"],
    ["image5", "Hades5.jpg"],
    ["image6", "Hades6.jpg"],
    ["image7", "Hades7.jpg"],
    ["image8", "Hades8.jpg"],
    ["image9", "Hades9.jpg"],
]

function setImages() {
    /* Set all the images to the images as defined above in the 'images' variable */
    images.forEach((image, index) => {
        let ele = document.querySelector(`#image${index + 1}`).children;
        ele[0].innerText = image[0];  // Text on image
        ele[1].src = `images/${image[1]}`;  // Image
    });
}

/* Function that runs after the HTML is totally loaded */
window.onload = () => {
    /* Set IDs of HTML nodes based on 'images' variable set above */
    let imageIndex = 0;
    document.querySelectorAll(".image").forEach(image => {
        image.id = images[imageIndex][0];
        imageIndex++;
    })

    setImages();  // Set images with initial values
}

function clickTheButton() {
    let imgA = document.querySelector("#inputA").value;
    let imgB = document.querySelector("#inputB").value;
    
    for (let index1 = 0; index1 < images.length; index1++) {
        if (images[index1][0] == imgA) {  // Find the first image
            for (let index2 = 0; index2 < images.length; index2++) {
                if (images[index2][0] == imgB) {  // Find the second image
                    // Swap the images
                    console.log("SWAP!", imgA, "with", imgB);
                    let temp = images[index1];
                    images[index1] = images[index2];
                    images[index2] = temp;
                    setImages();
                    return;  // Stop looking at images, we're done here
                }
            }
        }
    }

    // If we get here in the code, then one of the images wasn't found
    alert("Image not found!")
}