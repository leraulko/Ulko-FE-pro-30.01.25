function showData(arr) {
    const parent = document.querySelector('.container');
    
    document.forms[0].classList.add('hidden');

    const infoHeading = document.createElement('h2');
    infoHeading.textContent = 'Your information:';
    parent.appendChild(infoHeading);

    arr.forEach(element => {
        if (element) {
            const newDiv = document.createElement('div');
            newDiv.textContent = element;
            parent.appendChild(newDiv);
        }
    });
}


document.querySelector('button').addEventListener('click', () => {
    const formElements = document.forms.registrationForm.elements;
    
    const allData = [];
    
    const selectedLangs = [];
    for (let i = 0; i < formElements.lang.length; i++) {
        if (formElements.lang[i].checked) {
            selectedLangs.push(formElements.lang[i].value);
        }
    }

    allData.push(formElements.firstName.value);
    allData.push(formElements.lastName.value);
    allData.push(formElements.dateOfBirth.value);
    allData.push(formElements.gender.value);
    allData.push(formElements.city.value);
    allData.push(formElements.address.value);
    allData.push(selectedLangs);

    showData(allData);
});