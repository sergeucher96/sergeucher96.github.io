document.getElementById('exchangeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const stones = document.getElementById('stones').value;
    const goldAmount = (stones * 0.1).toFixed(2);

    document.getElementById('goldAmount').textContent = goldAmount;
});
