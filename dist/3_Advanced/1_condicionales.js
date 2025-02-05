"use strict";
// ejemplo de uso
const authConfig = {
    isAuth: true,
    username: "lola", //obligatorio
    password: "1234", // No obligatorio
};
const openConfig = {
    isAuth: false,
    username: false,
    password: undefined,
};
console.log("authConfig:", authConfig); //authConfig: { isAuth: true, username: 'lola', password: '1234' }
console.log("openConfig:", openConfig); // openConfig: { isAuth: false }
