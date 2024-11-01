document.getElementById('scan-button').addEventListener('click', function() {
    const video = document.getElementById('video'); // Get the video element
    const constraints = {
        video: { facingMode: 'environment' } // Use the rear camera
    };

    navigator.mediaDevices.getUserMedia(constraints) // Access the camera
        .then(function(stream) {
            video.srcObject = stream; // Set the video source to the camera stream
            video.play(); // Start playing the video
        })
        .catch(function(error) {
            console.error("Error accessing the camera: ", error); // Log any errors
        });
});
