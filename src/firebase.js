// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzseZsbe-inhMRQcBYKSZ2aNKwRD74ahk",
    authDomain: "guestbook-3a69e.firebaseapp.com",
    projectId: "guestbook-3a69e",
    storageBucket: "guestbook-3a69e.appspot.com",
    messagingSenderId: "4705545159",
    appId: "1:4705545159:web:f59f20386b18c136b707e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        return user;
    } catch (err) {
        throw (error);
    }
}

const loginWithEmailAndPassword = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return response;
    } catch (err) {
        throw error;
    }
};

const sendPasswordReset = async (email) => {
    await sendPasswordResetEmail(auth, email);

}

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleAuthProvider);
        const user = res.user;
        return user;
    } catch (error) {
        throw (error)
    }
}

export { auth, loginWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset, signInWithGoogle };

