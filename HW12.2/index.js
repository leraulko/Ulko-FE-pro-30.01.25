'use strict';

// 12.2. Використання подій

document.querySelector('.container').addEventListener('click', (event) => {
    switch (event.target.getAttribute('data-number')) {
        case 'first':
            alert(`You clicked: button #1`);
            break;
        case 'second':
            alert(`You clicked: button #2`);
            break;
        case 'third':
            alert(`You clicked: button #3`);
            break;
    }
});