function skillsMember() {
    var member = document.getElementById('member').value;
    var memberSkills = document.getElementById('memberSkills');

    var skills = {
        'John': 'HTML, CSS, JavaScript',
        'Doe': 'Python, Java, C++',
        'Jane': 'SQL, PHP, Ruby'
    };

    if (member in skills) {
        memberSkills.innerHTML = 'Skills: ' + skills[member];
    } else {
        memberSkills.innerHTML = 'Skills: Not found';
    }
}