const myBirthDate = moment("06/11/2001").format("MMM Do YYYY");

const birthDateText = document.createElement('p');
birthDateText.innerHTML = `<p>I was born on ${myBirthDate}</p>`;
document.querySelector('.container2').prepend(birthDateText);


document.querySelector('#convertBtn').addEventListener('click', () => {
    const dateRegExp = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const inputData = document.querySelector('#birthDateInput').value.trim();
    const userResult = document.querySelector('.converted');
    userResult.innerHTML = '';

    if (!dateRegExp.test(inputData)) {
        userResult.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Wrong format!
            </div>
        `;
        return;
    }

    const converted = moment(inputData).format('YYYY-MM-DD');
    userResult.innerHTML = `
        <div class="alert alert-success" role="alert">
            Converted birth date: <strong>${converted}</strong>
        </div>
    `;

});