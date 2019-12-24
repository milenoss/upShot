import React, { Component } from 'react'
import {Segment, Item, Icon, List, Button, Label} from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { Link } from 'react-router-dom';
import {format } from 'date-fns'
 class EventListItem extends Component {
    render() {
        const {event}= this.props;
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
                          {event.cancelled &&
                          <Label style={{top: '-40px'}} ribbon='right' color='red' content='This event has been cancelled'/>}
                        
                        
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