import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList';

import {connect} from 'react-redux';
import {createEvent, updateEvent} from '../eventAction'
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from '../EventActivity/EventActivity';

import {firestoreConnect, isLoaded} from 'react-redux-firebase';
 
const mapStateToProps = (state) => ({
  events: state.firestore.ordered.events,
  
})

const actions = { 
  createEvent, 
  
  updateEvent
}
class EventDashboard extends Component {

    handleDeleteEvent = (id) => { 
      this.props.deleteEvent(id);
    }
    render() {
        const {events} = this.props
        if (!isLoaded(events)) return < LoadingComponent/>
        return (
            <Grid>
                <Grid.Column width={10}>
                 <EventList events={events} />
                 </Grid.Column>
                 <Grid.Column width={6}>
                 <EventActivity/>
                 </Grid.Column>
                
            </Grid>

             
        )
    }
}
 
export default connect(mapStateToProps, actions) (firestoreConnect ([{collection: 'events'

}])(EventDashboard));