
// Example of an interactive hover effect for the skills
document.querySelectorAll('.skill-box').forEach(skill => {
    skill.addEventListener('mouseover', function() {
        skill.style.transform = 'scale(1.1)';
    });
    skill.addEventListener('mouseout', function() {
        skill.style.transform = 'scale(1)';
    });
});