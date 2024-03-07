document.getElementById('submitBtn').addEventListener('click', function() {
    checkAge();
});

function checkAge() {
    var dobInput = document.getElementById('dobInput').value;
    
    // Extract day, month, and year from the input
    var dobArray = dobInput.split('.');
    var dob = new Date(dobArray[2], dobArray[1] - 1, dobArray[0]);

    // Calculate age in milliseconds
    var ageInMilliseconds = Date.now() - dob.getTime();

    // Calculate age in years
    var ageInYears = new Date(ageInMilliseconds).getUTCFullYear() - 1970;

    // Check if age is 18 or older, or within a week before turning 18
    if (ageInYears >= 18 || (ageInYears === 17 && dob.getMonth() === new Date().getMonth() && new Date().getDate() - dob.getDate() <= 7)) {
        displayResult('oldEnough');
    } else {
        displayResult('underage');
    }
}

function displayResult(resultType) {
    var resultText = document.getElementById('resultText');
    resultText.innerHTML = resultType === 'oldEnough' ? 'Old Enough' : 'Underage';
    resultText.className = resultType;
    resultText.classList.remove('hidden');
}
