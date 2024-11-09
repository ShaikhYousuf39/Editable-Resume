var form = document.getElementById('resume-form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('education', education);
    localStorage.setItem('workExperience', workExperience);
    localStorage.setItem('skills', skills);
    window.location.href = 'resume.html';
});
