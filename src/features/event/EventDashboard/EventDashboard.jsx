import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList';

import {connect} from 'react-redux';
import {createEvent, deleteEvent, updateEvent} from '../eventAction'
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from '../EventActivity/EventActivity';
 
const mapStateToProps = (state) => ({
  events: state.events,
  loading: state.async.loading
})

const actions = { 
  createEvent, 
  deleteEvent, 
  updateEvent
}
class EventDashboard extends Component {

    handleDeleteEvent = (id) => { 
      this.props.deleteEvent(id);
    }
    render() {
        const {events, loading} = this.props
        if (loading) return < LoadingComponent/>
        return (
            <Grid>
                <Grid.Column width={10}>
                 <EventList events={events} deleteEvent={this.handleDeleteEvent}/>
                 </Grid.Column>
                 <Grid.Column width={6}>
                 <EventActivity/>
                 </Grid.Column>
                
            </Grid>

             
        )
    }
}
 
export default connect(mapStateToProps, actions)(EventDashboard);