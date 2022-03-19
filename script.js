let myage = document.getElementById('age');
myage.innerText = getAge();

function getAge() {
    let birthday = new Date(1994, 4, 6),
        today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
        age = today.getFullYear() - birthday.getFullYear();
    if (today < new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())) {
        age = age - 1;
    }
    return age;
}
