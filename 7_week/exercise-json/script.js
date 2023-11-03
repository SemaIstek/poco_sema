document.getElementById('calculateTip').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    const tipAmount = billAmount * (tipPercentage / 100);

    document.getElementById('tipAmount').textContent = `Tip Amount: $${tipAmount.toFixed(2)}`;
});

document.getElementById('convertToUSD').addEventListener('click', function() {
    const amountCHF = parseFloat(document.getElementById('amountCHF').value);

    fetch('https://api.exchangerate-api.com/v4/latest/CHF')
        .then(response => response.json())
        .then(data => {
            const usdRate = data.rates.USD;
            const convertedAmount = amountCHF * usdRate;
            document.getElementById('convertedAmount').textContent = `Converted Amount: $${convertedAmount.toFixed(2)}`;
        });
});

document.getElementById('convertToEUR').addEventListener('click', function() {
    const amountCHF = parseFloat(document.getElementById('amountCHF').value);

    fetch('https://api.exchangerate-api.com/v4/latest/CHF')
        .then(response => response.json())
        .then(data => {
            const eurRate = data.rates.EUR;
            const convertedAmount = amountCHF * eurRate;
            document.getElementById('convertedAmount').textContent = `Converted Amount: €${convertedAmount.toFixed(2)}`;
        });
});
