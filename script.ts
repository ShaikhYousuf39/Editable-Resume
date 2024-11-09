const form = document.getElementById('resume-form') as HTMLFormElement;

form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('education', education);
    localStorage.setItem('workExperience', workExperience);
    localStorage.setItem('skills', skills);

    window.location.href = 'resume.html';
});

