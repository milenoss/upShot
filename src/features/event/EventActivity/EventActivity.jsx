import React, {Fragment} from 'react'
import {Header, Segment, Feed} from 'semantic-ui-react';
import EventActivityItem  from './EventActivityItem';

const EventActivity = ({activities}) => {
    return (
        <Fragment> 
            <Header attached='top' content='Recent Activity'/>
            <Segment attached> 
             <Feed> 
                {activities && activities.map(activity => (
                    <EventActivityItem key={activity.id} activity={activity}/>
                ))}
             </Feed>
            </Segment>
        </Fragment>
    )
}

export default EventActivity