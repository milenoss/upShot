import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Grid} from 'semantic-ui-react'
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedComment from './EventDetailedComment';
import EventDetailedSidebar from './EventDetailedSidebar';
import { withFirestore, firebaseConnect, isEmpty } from 'react-redux-firebase';
import {compose} from 'redux';
import { objectToArray, createDataTree} from '../../../app/common/helpers';
import {goingToEvent, cancelGoingToEvent} from '../../user/userActions'
import { addEventComment } from'../eventAction';
import {openModal} from'../../modals/modalActions'
import LoadingComponent from '../../../app/layout/LoadingComponent';
import NotFound from '../../../app/layout/NotFound'

const mapState = (state, ownProps) => { 
    const eventId = ownProps.match.params.id;
    //own props is the components props if its not available from router.

    let event = {}; //if the event is empty show blank page
    if (state.firestore.ordered.events && state.firestore.ordered.events.length > 0 ){ 
        //if event got id and event got state then we will filter to match event id.
        event = state.firestore.ordered.events.filter(event => event.id === eventId)[0] || {};
    }
    return { 
        event,
        requesting: state.firestore.status.requesting,
        auth: state.firebase.auth,
        eventChat: !isEmpty(state.firebase.data.event_chat) &&
        objectToArray(state.firebase.data.event_chat[ownProps.match.params.id])
    }
}


const actions = {
    goingToEvent, 
    cancelGoingToEvent,
    addEventComment,
    openModal,
 

}

class EventDetailedPage extends Component {
    async componentDidMount() { 
        const {firestore, match} = this.props;
        await firestore.setListener(`events/${match.params.id}`);
        
        }
    async componentWillUnmount(){
        const {firestore, match} = this.props;
        await firestore.unsetListener(`events/${match.params.id}`);

    }
    
    render() {
        const {
            openModal,
            match,
            requesting,
             event,
              auth, 
              goingToEvent, 
              cancelGoingToEvent, 
              addEventComment, 
              eventChat} = this.props;
        const attendees = event && event.attendees && objectToArray(event.attendees).sort((a,b)=> {
            return a.joinDate.toDate() - b.joinDate.toDate()
        });
        const isHost = event.hostUid === auth.uid;
        const isGoing = attendees && attendees.some(a => a.id === auth.uid);
        const chatTree = !isEmpty(eventChat) && createDataTree(eventChat);
        const authenticated = auth.isLoaded && !auth.isEmpty;
        const loadingEvent = requesting[`events/${match.params.id}`]

        if(loadingEvent) return <LoadingComponent/>
        if(Object.keys(event).length === 0) return <NotFound/>
    return (
        <Grid>
        
            <Grid.Column width ={10}>
            <EventDetailedHeader 
            event={event} 
            isGoing={isGoing}
             isHost={isHost} 
             goingToEvent={goingToEvent}
             cancelGoingToEvent={cancelGoingToEvent}
             authenticated = { authenticated} 
             openModal = {openModal}
             /> 
             
            <EventDetailedInfo event={event}/>
            {authenticated &&
            <EventDetailedComment 
            eventChat={chatTree} 
            addEventComment={addEventComment}
             eventId={event.id}
             />}
            

            </Grid.Column>
            <Grid.Column width={6}>
            <EventDetailedSidebar attendees={attendees}/>

            </Grid.Column>
        </Grid>
        )
    }
}


export default compose(
    withFirestore,
    connect(
      mapState,
      actions
    ),
    firebaseConnect(props => [`event_chat/${props.match.params.id}`])
  )(EventDetailedPage);
