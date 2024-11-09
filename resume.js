function getElement(id) {
    return document.getElementById(id);
}
var userName = localStorage.getItem('userName');
var email = localStorage.getItem('email');
var phone = localStorage.getItem('phone');
var education = localStorage.getItem('education');
var workExperience = localStorage.getItem('workExperience');
var skills = localStorage.getItem('skills');
var nameElem = getElement('display-name');
if (nameElem && userName)
    nameElem.textContent = userName;
var emailElem = getElement('display-email');
if (emailElem && email)
    emailElem.textContent = email;
var phoneElem = getElement('display-phone');
if (phoneElem && phone)
    phoneElem.textContent = phone;
var educationElem = getElement('display-education');
if (educationElem && education)
    educationElem.textContent = education;
var workExperienceElem = getElement('display-work-experience');
if (workExperienceElem && workExperience)
    workExperienceElem.textContent = workExperience;
var skillsElem = getElement('display-skills');
if (skillsElem && skills)
    skillsElem.textContent = skills;
function saveContent(id, storageKey) {
    var element = getElement(id);
    if (element) {
        element.addEventListener('input', function () {
            var updatedContent = element.textContent || '';
            localStorage.setItem(storageKey, updatedContent);
        });
    }
}
saveContent('display-name', 'userName');
saveContent('display-email', 'email');
saveContent('display-phone', 'phone');
saveContent('display-education', 'education');
saveContent('display-work-experience', 'workExperience');
saveContent('display-skills', 'skills');
