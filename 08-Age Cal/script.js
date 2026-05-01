function calculation (birthYear) {
    return currentYear - birthYear;
}

const calButton = document.querySelector('.age-calculate');
const now = new Date();
const currentYear = now.getFullYear();

calButton.addEventListener('click', () =>{
    const birthDay = document.querySelector('input').value;
    const birthYear = birthDay.split('-')[0];
    if(birthYear === ''){
        alert('ENTER YOUR AGE FIRST BUDDY!!');
    }else{
        const age = calculation(birthYear);
        document.querySelector('#noti').innerHTML = `Your age is ${age} years old`;
    };
});



