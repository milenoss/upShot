import React from 'react'
import {Grid, List, Header, Item, Segment, Icon} from 'semantic-ui-react'
import {format} from 'date-fns'

const UserDetailedDescription = ({profile}) => {
    let createdAt; 
    if(profile.createdAt) { 
        createdAt = format(profile.createdAt.toDate(), 'd MMM yyyy'); 
    }
    return (
        <Grid.Column width={12}>
        <Segment>
            <Grid columns={2}>
                <Grid.Column width={10}>
                    <Header icon='smile' content='About Display Name'/>
                    
                    <p>I am a: <strong>{profile.occupation || 'tbn'}</strong></p>
                    
                    <p>Originally from <strong>{profile.origin || 'tbn'}</strong></p>
                    
                    <p>Member Since: <strong>{createdAt} </strong></p>
                    
                    <p>Description of user</p>

                </Grid.Column>
                <Grid.Column width={6}>

                    <Header icon='heart outline' content='Interests'/>
                    {profile.interest ? 
                    <List>
                        {profile.interests && 
                        profile.interests.map((interest, index) => (
                        <Item key ={index}>
                            <Icon name='heart'/>
                            <Item.Content>{interest}</Item.Content>
                        </Item>
                        ))}
                         </List> : <p>No interests</p> }
                </Grid.Column>
            </Grid>

        </Segment>
    </Grid.Column>
    )
}


export default UserDetailedDescription;