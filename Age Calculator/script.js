document.getElementById('calculateBtn').addEventListener('click', function() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();

    if (isNaN(birthdate.getTime())) {
        document.getElementById('result').innerHTML = 'Please enter a valid birthdate.';
        document.getElementById('result').classList.add('show');
        return;
    }

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();  // Last day of the previous month
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const ageInDays = Math.floor((today - birthdate) / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(ageInDays / 7);
    const hours = Math.floor(ageInDays * 24);
    const minutes = Math.floor(hours * 60);

    document.getElementById('result').innerHTML = `
        <strong>Age Details:</strong><br>
        <b>${years}</b> Years<br>
        <b>${months}</b> Months<br>
        <b>${days}</b> Days<br><hr>
        <b>${weeks}</b> Weeks<br>
        <b>${hours}</b> Hours<br>
        <b>${minutes}</b> Minutes
    `;
    document.getElementById('result').classList.add('show');
});
