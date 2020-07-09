var dropdownWrapper = document.getElementById('dropdown-wrapper');

var introductionDropdown = document.getElementById('introduction-dropdown');
var admissionsDropdown = document.getElementById('admissions-dropdown');
var parentDropdown = document.getElementById('parent-dropdown');
var studentDropdown = document.getElementById('student-dropdown');

// Buttons
var homeButton = document.getElementById('home-button');
var introductionButton = document.getElementById('introduction-button');
var admissionsButton = document.getElementById('admissions-button');
var parentButton = document.getElementById('parent-button');
var studentButton = document.getElementById('student-button');

homeButton.addEventListener('mouseover', (event) => {
    dropdownWrapper.style.display = 'none';
});

introductionButton.addEventListener('mouseover', (event) => {
    dropdownWrapper.style.display = 'block';

    introductionDropdown.style.display = 'block';
    admissionsDropdown.style.display = 'none';
    parentDropdown.style.display = 'none';
    studentDropdown.style.display = 'none';
});

admissionsButton.addEventListener('mouseover', (event) => {
    dropdownWrapper.style.display = 'block';

    introductionDropdown.style.display = 'none';
    admissionsDropdown.style.display = 'block';
    parentDropdown.style.display = 'none';
    studentDropdown.style.display = 'none';
});

parentButton.addEventListener('mouseover', (event) => {
    dropdownWrapper.style.display = 'block';

    introductionDropdown.style.display = 'none';
    admissionsDropdown.style.display = 'none';
    parentDropdown.style.display = 'block';
    studentDropdown.style.display = 'none';
});

studentButton.addEventListener('mouseover', (event) => {
    dropdownWrapper.style.display = 'block';

    introductionDropdown.style.display = 'none';
    admissionsDropdown.style.display = 'none';
    parentDropdown.style.display = 'none';
    studentDropdown.style.display = 'block';
});

dropdownWrapper.addEventListener('mouseleave', (event) => {
    dropdownWrapper.style.display = 'none';
});