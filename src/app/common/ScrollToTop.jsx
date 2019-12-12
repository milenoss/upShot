import {withRouter} from 'react-router-dom'
 
import { Component } from 'react'

 class ScrollToTop extends Component {
    componentDidUpdate(prevProps) { 
        if(this.props.location !== prevProps.location){
            window.scrollTo(0,0)
        }
    }
    render() {
          //index js app is wrapped inside ScrollToTop so now  you can access as their children
     return this.props.children
    }
}

export default withRouter(ScrollToTop)