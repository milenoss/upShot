import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Icon, Segment } from 'semantic-ui-react';

const Marker = () => <Icon name='marker' size='big' color='red'/>;



 const EventDetailedMap = ({lat,lng}) => {
    const zoom = 14
    return (
        <Segment attached='bottom' style={{padding:0}}>
            <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAOI05Nk9gekeqCihuMkweh17jhKNSOwAQ' }}
          defaultCenter={{lat,lng}}
          defaultZoom={zoom}
        >
          <Marker
            lat={lat}
            lng={lng}
           
          />
        </GoogleMapReact>
      </div>

        </Segment>
    )
}

export default EventDetailedMap
