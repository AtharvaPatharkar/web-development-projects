// JavaScript file
document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Generate CV content
    const cvContent = `
        <h3>${fullName}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Work Experience:</strong><br>${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;

    // Display CV
    document.getElementById('cv-content').innerHTML = cvContent;
    document.getElementById('cv-output').style.display = 'block';
    
    // Enable download button
    document.getElementById('download-btn').addEventListener('click', function() {
        const link = document.createElement('a');
        const blob = new Blob([cvContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = `${fullName}_CV.html`;
        link.click();
    });
});
