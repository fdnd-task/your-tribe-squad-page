document.getElementById('submit').addEventListener('click', function() {
    const passcode = document.getElementById('passcode').value;
    if (passcode === "1,2,3") {
        alert('Access granted!');
    } else {
        alert('Invalid passcode!');
    }
});
