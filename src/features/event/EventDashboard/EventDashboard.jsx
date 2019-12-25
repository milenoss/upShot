import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList';

import {connect} from 'react-redux';
import {getEventsForDashboard} from '../eventAction'
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from '../EventActivity/EventActivity';

import {firestoreConnect} from 'react-redux-firebase';
 
const mapStateToProps = (state) => ({
  events: state.events, 
  loading: state.async.loading
  
})

const actions = { 
  getEventsForDashboard
}
class EventDashboard extends Component {

  componentDidMount() { 
    this.props.getEventsForDashboard();
  }

    render() {
        const {events, loading} = this.props
        if (loading) return < LoadingComponent/>
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