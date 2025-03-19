let Text = document.getElementById('text');
let HideText = document.getElementById('hideButton');
let ShowText = document.getElementById('showButton');

HideText.onclick = function() {
    Text.style.display = 'none';
}

ShowText.onclick = function() {
    Text.style.display = 'block';
}