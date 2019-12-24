import React, {Fragment} from 'react'
import {Segment, Label, Item, List} from 'semantic-ui-react'
 


const EventDetailedSidebar =({attendees}) => {
    const isHost = false;
    return (
       <Fragment>
         
                <Segment
                  textAlign='center'
                  style={{ border: 'none' }}
                  attached='top'
                  secondary
                  inverted
                  color='green'
                >
                 {attendees && attendees.length}{attendees && attendees.length === 1 ? 'Person' : 'People'} Going
                </Segment>
                <Segment attached>
                    <List relaxed divided> 
                    {attendees && 
                    attendees.map((attendee) => (
                         //debugger
                             <Item key={attendee.id} style={{ position: 'relative' }}>
                             {isHost &&
                             <Label
                               style={{ position: 'absolute' }}
                               color='blue'
                               ribbon='right'
                             >
                               Host
                             </Label>
                             }
                             <Item.Image size='tiny' src={attendee.photoURL}/>
                             <Item.Content verticalAlign='middle'>
                               <Item.Header as='h3'>{attendee.displayName}</Item.Header>
                             </Item.Content>
                           </Item>
                    ))}
                  
                   
                
                  </List>
                </Segment>
                

       </Fragment>
    )
}
export default EventDetailedSidebar