import React from 'react'
import Days from './Days'
// import { Multiselect } from 'multiselect-react-dropdown';

class Select extends React.Component
{
    constructor()
    {
        super()
        this.state={
            name:'',
        
            days:'',
            optionDay:[1,2,3,4,5,6,7],
            places:['bg','dharwad','gul']

        }
    }
    
             handleChange=(e)=>{
                 e.persist()
                 console.log(e.target.name)
                 console.log(e.target.value)
                 this.setState(()=>({
                 [e.target.name]:e.target.value,
                 days:e.target.value
                 }))
             }
             handlePlaceChange=(e)=>{
                 let places=this.state.places
                 console.log(e.target.value)
                 places.push(e.target.value)
                 this.setState({places:places})

             }
             handleSubmit=()=>{
                    let days=this.state.days
                    console.log('clicked')
                    console.log(days ,'me')
                    console.log(this.histroy)
                    // <Days/>

                    // this.props.histroy.push('/Days',days)
             }
    render()
    {
        return(
            <div>
                
                    <div>
                    <label>enter tour name</label>
                    <input type="text"  value={this.state.tourname} type="text" onChange={this.handleChange}  />
                    </div>
                    <br/>
                    <div>
                        <label>Places covered</label>
                        <select name="places" multiple onChange={this.handlePlaceChange}>
                            <option>Select</option>
                            <option value="bg">bg</option>
                            <option value="dharwad">dharwad</option>
                            <option value="gul">gul</option>
                        </select>
                    </div>
                        <div><br/>
                        <label>No of Days</label>
                        {/* <Multiselect
                        option={this.state.optionDay}
                        selectedValues={this.state.selectedValue} displayValue="name"
                        optionClicked={this.optionClicked.bind(this)}
                        selctedClicked={this.selctedClicked.bind(this)}
                        onChange={this.handleChange}/> */}
                        <select name="days" multiple onChange={this.handleChange}>
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
                   <button type="button"  onClick={()=>{this.handleSubmit()}}> create Iteranary</button>
                   {/* <Days no_days={this.state.days}/> */}
                    

                    
                    
             </div>
             
        )
    }
}

export default  Select