import React from 'react'
// import Days from './Days'
// import { Multiselect } from 'multiselect-react-dropdown';
import Select from 'react-select'

const places=[
    {value:'bangalore',label:'Bangalore'},
    {value:'mysore',label:'Mysore'},
    {value:'belguam',label:'Belguam'}
]
const optionday=[
    {value:'1',label:'1'},
    {value:'2',label:'2'},
    {value:'3',label:'3'}

]

class Form extends React.Component
{
    constructor()
    {
        super()
        this.state={
            name:'',
        
            daysCount:0,
            // optionDay:[1,2,3,4,5,6,7],
           selectedplaces:[],
           selectedDay:0

        }
    }
    
             handleChange=(e)=>{
                 e.persist()
                 console.log(e.target.name)
                 console.log(e.target.value)
                 this.setState(()=>({
                    //  sel:selectedDay
                 [e.target.name]:e.target.value,
                //  daysCount:e.target.value
                 }))
             }
             handlePlaceChange=selectedplaces=>{
                //  let places=this.state.places
                //  console.log(e.target.value)
                //  places.push(e.target.value)
                 this.setState({selectedplaces:selectedplaces})

             }
             handleSubmit=(e)=>{
                 e.preventDefault() 
                    let daysCount=this.state.daysCount
                    let selectedDay=this.state.selectedDay
                    console.log('clicked')
                    console.log(daysCount ,'me in submit')
                    // console.log(this.histroy)
                    // <Days/>

                    this.props.history.push(`/Days/${daysCount}`)
             }
    render()
    {
        return(
            <div>
                
                    <div><br/>
                    <label>Enter Tour Name</label>
                    <input type="text"  value={this.state.tourname} type="text" onChange={this.handleChange}  />
                    </div>
                    <br/>
                    <div>
                        
                    <label>Places covered</label> 
                    <Select
                        value={this.state.selectedplaces}
                        onChange={this.handlePlaceChange}
                        options={places}
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        isMulti
                        />
                        {/* <select name="places" multiple onChange={this.handlePlaceChange}>
                            <option>Select</option>
                            <option value="bg">bg</option>
                            <option value="dharwad">dharwad</option>
                            <option value="gul">gul</option>
                        </select> */}
                    </div>
                        <div><br/>
                        <label>No of Days</label>
                        {/* <Multiselect
                        option={this.state.optionDay}
                        selectedValues={this.state.selectedValue} displayValue="name"
                        optionClicked={this.optionClicked.bind(this)}
                        selctedClicked={this.selctedClicked.bind(this)}
                        onChange={this.handleChange}/> */}
                        {/* <Select
                        value={this.state.selectedDay}
                        onChange={this.handleChange}
                        options={optionday}
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}/> */}
                        <select name="daysCount" multiple onChange={this.handleChange}>
                            <option > --Select--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select><br/>
                        
                        </div><br/>
                   <button type="button"  onClick={this.handleSubmit}> create Iteranary</button>
                   {/* <Days no_days={this.state.days}/> */}
                    

                    
                    
             </div>
             
        )
    }
}

export default  Form