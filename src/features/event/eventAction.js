import {  FETCH_EVENTS } from "./eventConstant"
import { asyncActionStart, asyncActionFinish , asyncActionError} from "../async/asyncActions"
import { fetchSampleData } from "../../app/common/data/mockApi"
import { toastr } from "react-redux-toastr"
import {createNewEvent} from '../../app/common/helpers'

export const createEvent = event => {
    return async (dispatch, getState, {getFirestore, getFirebase}) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        const user = firebase.auth().currentUser;
        const photoURL = getState().firebase.profile.photoURL;
        const newEvent = createNewEvent(user, photoURL, event);
        try{
            let createdEvent = await firestore.add('events', newEvent);
            await firestore.set(`event_attendee/${createdEvent.id}_${user.uid}`,{
                eventId: createdEvent.id,
                userUid: user.uid,

                eventDate: event.date,
                host: true
            })
            
            toastr.success('Success!', 'Event has been created' );
            return createdEvent;
        } catch (error) {
            toastr.error('Oops', 'Something went wrong')

        }
    }

}

export const updateEvent = event => { 
    return async (dispatch, getState, {getFirestore})=> {
        const firestore = getFirestore();
        try{
            await firestore.update(`events/${event.id}`, event)
            toastr.success('Success!', 'Event has been updated' )
        } catch (error) {
            toastr.error('Oops', 'Something went wrong')

        }
    }

}

export const cancelToggle = (cancelled, eventId) => 
async (dispatch, getState, {getFirestore}) => { 
    const firestore = getFirestore();
    const message = cancelled ? 'Are you sure you want to cancel the event? ': 'This will reactivate the event, are you sure?';
    try{ toastr.confirm(message, {
        onOk: async () => await firestore.update(`events/${eventId}`, { 
            cancelled: cancelled
        })
    })
     
    }catch (error) { 
        console.log(error)

    }
}



export const loadEvents = () => { 
    return async dispatch => { 
        try { 
            dispatch(asyncActionStart())
            const events = await fetchSampleData();
            dispatch({type: FETCH_EVENTS, payload: {events}})
            dispatch(asyncActionFinish())
        }
     catch (error) {
         console.log(error); 
         dispatch(asyncActionError())
     }
    }
}

export const addEventComment = ( eventId, values) => 
async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase(); 
    const profile = getState().firebase.profile;
    const user = firebase.auth().currentUser;
    let newComment = { 
        displayName: profile.displayName,
        photoURL: profile.photoURL || '/assets/user.png',
        uid: user.uid,
        text: values.comment,
        date: Date.now()

    }


    try { 
        await firebase.push(`event_chat/${eventId}`, newComment)
    } catch (error){
        console.log(error);
        toastr.error('Oops', 'Problem adding comment')

    }

}