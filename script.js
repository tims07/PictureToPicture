const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Prompt the user to select a media stream, pass to video element, and then play

const selectMediaStream = async () => {
     
    try {
       const mediaStream = await navigator.mediaDevices.getDisplayMedia();
       videoElement.srcObject = mediaStream
       videoElement.onloadedmetadata = () => {
        videoElement.play();
       }
    } catch (error) {
        console.log("There is an error: ", error)
    }
}

// Event Listener

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start Pic in Pic
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
})

selectMediaStream()