const checkboxes = document.querySelectorAll('.container input[type="checkbox"]')

let lastChecked;

function handleCheck(e) {
    
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

