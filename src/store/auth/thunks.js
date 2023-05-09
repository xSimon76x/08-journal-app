import { deleteDoc, doc } from "firebase/firestore/lite";
import { 
    singInWithGoogle, 
    registerUserWithEmailPassword, 
    loginWithEmailPassword, 
    logoutFirebase 
} from "../../firebase/providers";
import { clearNotesLogout, deleteNoteById } from "../Journal";
import { checkingCredentials, login, logout } from "./";
import { FireBaseDB } from "../../firebase/config";

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

    }
};

export const startGoogleSignIn = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await singInWithGoogle();

        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );
        
        dispatch( login( result ) );
    }
};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {
        
        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if( !ok ) return dispatch( logout({ errorMessage }) );

        dispatch( login({ uid, displayName, email, photoURL }) );

    }
}

export const startLoginWithEmailPassword = ({ email, password, displayName }) => {
     
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });

        if ( !result.ok ) return dispatch( logout( result ) );

        dispatch( login( result ));

    }

};

export const startLogout = () => {
    return async( dispatch ) => {

        await logoutFirebase();

        dispatch( clearNotesLogout() );
        dispatch( logout() );
    }
};

export const startDeletingNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const docRef = doc( FireBaseDB, `${ uid }/journal/notes/${ note.id }` );
        await deleteDoc( docRef );


        dispatch( deleteNoteById( note.id ) );
    }
};