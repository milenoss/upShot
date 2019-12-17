import React, { Component } from 'react'
import {Segment, Form, Button, Grid, Header} from 'semantic-ui-react'
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate';
import {createEvent, updateEvent} from '../eventAction';
import cuid from 'cuid';
import { TextInput } from '../../../app/common/form/TextInput';
import { SelectInput } from '../../../app/common/form/SelectInput';
import { TextArea }from '../../../app/common/form/TextArea';
import DateInput from '../../../app/common/form/DateInput';

const mapState = (state, ownProps) => { 
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0){
    //we will check if events matches the event id and then return the only element in the array 0
  event = state.events.filter(event => event.id === eventId)[0]
  }
  return{
    initialValues: event 
  }
}
 const actions  = { 
   createEvent, 
   updateEvent

 }
 //from revalidate library and then pass the function to reduxForm below.

 const validate = combineValidators ({
  title: isRequired({message: 'The event title is required'}),
  category: isRequired({message: 'The category is required'}),
  description: composeValidators(
    isRequired({message: 'Please enter a description'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'})
  )(), 
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
 })


 const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];


 class EventForm extends Component {

  //we getting our values from redux forms now
      onFormSubmit = values => { 
        if (this.props.initialValues.id){ 
            this.props.updateEvent(values);
            this.props.history.push(`/events/${this.props.initialValues.id}`);
        } else { 
          const newEvent = { 
            ...values, 
             id: cuid(),
             hostPhotoURL: '/assets/user.png',
             hostedBy: 'Bob'

          }
            this.props.createEvent(newEvent);
            this.props.history.push(`/events/${newEvent.id}`)
        }
    }

    // myHandleSubmit = () => {


    //   this.props.handleSubmit(this.onFormSubmit)
    // }

   
    render() {
        const {history, initialValues, invalid, submitting, pristine} = this.props
        return (
          <Grid.Column width={6}>
                    <Segment>
                      <Header sub color='blue' content= 'Event Detail'/>
                    <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}autoComplete='off'>
                      <Field 
                      name='title' 
                      type ='text'
                      component={TextInput}
                      placeholder='Give your event a name'/>
                      <Field 
                      name='category' 
                      type = 'text'
                      component={SelectInput} 
                      options = {category}
                      placeholder='What is your event about'/>


                      <Field 
                      name='description' 
                      type='text'
                      component={TextArea} 
                      rows = {3}
                      placeholder='Tell us about your event'/>
                      
                      <Header sub color='blue' content= 'Event Location Details'></Header>

                      <Field 
                      name='city' 
                      type = 'text'
                      component={TextInput} 
                      placeholder='Event City'/>
                      <Field
                       name='venue' 
                       type= 'text'
                       component={TextInput} 
                       placeholder='Event Venue'/>
                      <Field 
                      name='date'
                      type = 'text'
                       component={TextInput} ///fixing needed
                       dateFormat= 'dd LLL yyyy h:mm a'
                       showTimeSelect
                       timeFormat = 'HH:mm'
                       placeholder='Event Date'/>

                      <Button disabled={invalid || submitting || pristine} positive type="submit">
                        Submit
                      </Button>
                      <Button onClick={
                        initialValues.id? () => history.push(`/events/${initialValues.id}`) : () => history.push('/events')
                      }
                      type="button">
                        Cancel
                      </Button>
                    </Form>
                  </Segment>
          </Grid.Column>
                 
        )
    }
} 

export default connect(
  mapState, actions
  )
  (reduxForm({form: 'eventForm', validate})(EventForm)); 
