import React from 'react'
import {connect} from 'react-redux'
import {Grid} from 'semantic-ui-react'
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedComment from './EventDetailedComment';
import EventDetailedSidebar from './EventDetailedSidebar';

const mapState = (state, ownProps) => { 
    const eventId = ownProps.match.params.id;
    //own props is the components props if its not available from router.

    let event = {}; //if the event is empty show blank page
    if (eventId && state.events.length > 0 ){ 
        //if event got id and event got state then we will filter to match event id.
        event = state.events.filter(event => event.id === eventId)[0];
    }
    return { 
        event
    }
}

const EventDetailedPage = ({event}) => {
    return (
        <Grid>
        
            <Grid.Column width ={10}>
            <EventDetailedHeader event={event}/> 
            <EventDetailedInfo event={event}/>
            <EventDetailedComment/>
            {/* <EventDetailedSidebar/> */}

            </Grid.Column>
            <Grid.Column width={6}>
            <EventDetailedSidebar attendees={event.attendees}/>

            </Grid.Column>
        </Grid>
    )
}

export default connect(mapState) (EventDetailedPage);