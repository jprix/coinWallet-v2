import { writable } from 'svelte/store';
import { browser } from '$app/env';

let storesUserSession;
let defaultUser = {
    "isLoggedIn" : false
}
if(browser){
     storesUserSession = localStorage.userSession
    console.log(storesUserSession)
}

//if store usersession parse it else use default user.
export const userSession = writable(storesUserSession ? JSON.parse(storesUserSession) : defaultUser)

// Anytime the store changes, update the local storage value.
// userSession.subscribe((user) => localStorage.userSession = JSON.stringify(user))
if(browser){
    userSession.subscribe((value) => localStorage.userSession = JSON.stringify(value))
}
