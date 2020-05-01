import React from 'react'
// import Form from './Form'
// import {Link} from 'react-router-dom'
import Select from 'react-select'


const actvities=[
    {value:'Act1',label:'Activity1'},
    {value:'Act2',label:'Activity2'},
    {value:'Act3',label:'Activity3'},
    {value:'Act4',label:'Activity4'}
]
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
    handleActivity=(activity)=>{
        this.setState({activity:activity})


    }
    // handleButton=(id)=>{
    //     id=this.match.params.id
    //     console.log(id)

    // }
    render() {
        let row=[]
        for(let i=1;i<=this.state.day;i++)
        {
            // <label>Day {i}</label>
            row.push(

                
                <div>
                    <h2>Days {i}</h2>
                    <label>Select Activity</label>
                    
                    <Select 
            value={this.state.activity}
            onChange={this.handleActivity}
            options={actvities}
            closeMenuOnSelect={false}
            hideSelectedoptions={false}
            isMulti
            />
                    
                </div>
            )
        }
        return(
            <div>
                 {row}
            </div>
           
        )
       
        
        
     }
}
export default Days