import React from 'react'
import Select from './Select'
import {Link} from 'react-router-dom'


class Days extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            days:[]
        }
    }
    render()
    {
        return(
            
            <div>
                <h1>{this.props.no_days}</h1>
                <h2>days page</h2>
{/*             
                <h1>days</h1>
                <ul>
                    {this.state.days.map(day=>{
                        console.log(day)
                    })}
                </ul>
                <Link to ='/Days'>days</Link> */}
                </div>
           
        )
    }
}
export default Days