document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('image-container');
    const generateCatButton = document.getElementById('generate-cat-button');
    const apiKey = 'live_vYwcBEWKMnBGWz02MDPDU9ocCAjA2amvuA1c6ylriSdOjOPy9S5clePqa4UBShy7';
    const apiEndpoint = 'https://api.thecatapi.com/v1/images/search'; // API endpoint

    generateCatButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the anchor tag

        fetch(apiEndpoint, {
            headers: {
                'x-api-key': apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            imageContainer.innerHTML = ''; // Clear any existing image
            const img = document.createElement('img');
            img.src = data[0].url; // Adjust based on the actual API response format
            img.style.maxWidth = '250px'; // Adjust image size as needed
            imageContainer.appendChild(img);
        })
        .catch(error => console.error('Error fetching the image:', error));
    });
});
