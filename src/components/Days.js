import React from 'react'
import Form from './Form'
import {Link} from 'react-router-dom'


class Days extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            activity:[],
            day:0,
            count:0,
        }
    }
    componentDidMount()
    {
        let day=this.props.match.params.daysCount
        this.setState({day:day})
        console.log(day,'me in mount')
        
    }
    render() {
        
       let  day=this.state.day
       let row=[]
         console.log(day,'me in render')
         for(let i=0;i<day;i++)
         {
           console.log( row.push(i))
         }
       
        return(
            <div>
                {/* {console.log(this.state.count,'its meddd')} */}
               {
                   

               /* /* {    this.state.count && (
                   <ul>
                       {this.state.count.map((d=>{
                           return <button >d</button>
                       }))}
                   </ul>
                    )} */ }

                   

            </div>
           
            
        )
    }
}
export default Days