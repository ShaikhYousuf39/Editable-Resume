function getElement(id: string): HTMLElement | null {
    return document.getElementById(id);
}

const userName: string | null = localStorage.getItem('userName');
const email: string | null = localStorage.getItem('email');
const phone: string | null = localStorage.getItem('phone');
const education: string | null = localStorage.getItem('education');
const workExperience: string | null = localStorage.getItem('workExperience');
const skills: string | null = localStorage.getItem('skills');

const nameElem = getElement('display-name');
if (nameElem && userName) nameElem.textContent = userName;

const emailElem = getElement('display-email');
if (emailElem && email) emailElem.textContent = email;

const phoneElem = getElement('display-phone');
if (phoneElem && phone) phoneElem.textContent = phone;

const educationElem = getElement('display-education');
if (educationElem && education) educationElem.textContent = education;

const workExperienceElem = getElement('display-work-experience');
if (workExperienceElem && workExperience) workExperienceElem.textContent = workExperience;

const skillsElem = getElement('display-skills');
if (skillsElem && skills) skillsElem.textContent = skills;

function saveContent(id: string, storageKey: string) {
    const element = getElement(id);
    if (element) {
        element.addEventListener('input', () => {
            const updatedContent = element.textContent || '';
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

