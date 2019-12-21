import React, { Component } from 'react'
import {Segment, Item, Icon, List, Button} from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { Link } from 'react-router-dom';
import {format } from 'date-fns'
 class EventListItem extends Component {
    render() {
        const {event, deleteEvent}= this.props;
        return (
               <Segment.Group>
                  <Segment>
                    <Item.Group>
                      <Item>
                        <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                        <Item.Content>
                          <Item.Header> {event.title}</Item.Header>
                          <Item.Description>
                            Hosted by {event.hostedBy}
                          </Item.Description>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Segment>
                  <Segment>
                    <span>
                      <Icon name="clock" /> 
                      {format(event.date.toDate(), 'EEEE do LLL')} at{''}
                      {format(event.date.toDate(), 'h:mm a')}
                      <Icon name="marker" />{event.time}
                    </span>
                  </Segment>
                  <Segment secondary>
                    <List horizontal>
                        {/* event attendees is only valid if there are attendees or else it will throw map undefined error */}
                        {event.attendees && 
                        Object.values(event.attendees).map((attendee,index) => ( 
                        <EventListAttendee key={index} attendee={attendee}/>
                        ))}
                        
                    </List>
                  </Segment>
                  <Segment clearing>
                  <Button 
                    onClick={()=> deleteEvent(event.id)} 
                    as="a" 
                    color="red" 
                    floated="right" 
                    content="Delete" />

                      <span>{event.description}</span>
                    <Button 
                    as={Link}
                    to ={`/events/${event.id}`}
                    color="teal" 
                    floated="right" 
                    content="View" />

                  </Segment>
                </Segment.Group>
        )
    }
}
export default EventListItem