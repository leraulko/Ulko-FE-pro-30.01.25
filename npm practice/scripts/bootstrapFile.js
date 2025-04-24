const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const alertTrigger = document.querySelector('.btn-danger');
let showAlert = false;

if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        if (!showAlert) {
            showAlert = true;
            alertPlaceholder.innerHTML = `
            <div class="alert alert-danger alert-dismissible" role="alert">
                <div>Nice, you triggered this alert message!</div>
            </div>
            `;
        } else {
            showAlert = false;
            alertPlaceholder.innerHTML = '';
        }
    });
}