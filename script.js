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

function getAge(){
    let birthday = new Date(1994, 4, 6),
        today = new Date();
    let diff = today.getTime() - birthday.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

let layoutChangeBtn = document.getElementById('layout-change');

layoutChangeBtn.addEventListener('click', () => {
    document.getElementById('main').classList.toggle('floatlayout');
})