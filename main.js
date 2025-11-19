document.getElementById('predictBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputText })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('result').innerText = data.error;
        } else {
            document.getElementById('result').innerHTML = `<strong>Prediction:</strong> ${data.prediction}<br><strong>Confidence:</strong> ${(data.score * 100).toFixed(2)}%`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
