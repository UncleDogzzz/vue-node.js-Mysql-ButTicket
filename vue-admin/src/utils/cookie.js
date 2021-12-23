export function setCookie (token) {

 document.cookie =token;
}

export function getToken () {

return document.cookie;
}

export function deleteCookie () {
    document.cookie='';
}