const ADMIN_PASSWORD = 'jqueryismyjam';
let message;


const answer = prompt(`О боги, здесь нужен пароль!`)
if (answer === null) {
message = `Отменено пользователем!`
console.log(message);
 }
else if (answer === ADMIN_PASSWORD) {
message = `Добро пожаловать!`
console.log(message);
} else message = `Доступ запрещен, неверный пароль!`
console.log(message);
