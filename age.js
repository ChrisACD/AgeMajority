userAge = Number(userAge);
let message = userAge >= 18 ?  "allowed" : "Denied";
console.log(message);
alert(`${message}`);
let userMember = true;

if(userAge >= 18 && userMember) {
    console.log('vous êtes majeure vous pouvez entrer!');
    alert('vous êtes majeure vous pouvez entrer!')
} else {

    console.log('vous êtes mineur. vous ne pouvez pas rentrer!');
     alert('vous êtes mineur. vous ne pouvez pas rentrer!');
