import React, { Component } from 'react'
import '../src/calculator.css'
export class output extends Component {
    constructor(){
        super()
        this.state={
            count:"0"
        }
    }
    addValue(digit){
        const {count}=this.state
        this.setState({
            count:count==='0'?String(digit):count+digit
        })
    }
    dot(){
        const {count}=this.state
        if(count.indexOf('.'===-1))
        {
          this.setState({
            count:count+'.'
          })
        }
     }
     calculate=()=>{
       const {count}=this.state
       try{
        this.setState({
            count:eval(count)
        })
    }catch (e) {
        this.setState({
            count: "error"
        })

    }
      
       
       
     }
     reset(){
         this.setState({
             count:'0'
         })
     }
     backspace = () => {
        this.setState({
            count: this.state.count.slice(0, -1)
        })
    };
    render() {
        return (
            <div className="calculator-body">
                <h1>Calculator Using ReactJs</h1>
            <div className="result">
            <p>{this.state.count}</p>
                
            </div>
            <div className="button1">
               <button onClick={()=>this.backspace("=")}>CE</button>
             
                <button onClick={()=>this.addValue('(')}>(</button>
               <button onClick={()=>this.addValue(")")}>)</button>
              
               <button onClick={()=>this.reset()}>C</button>
              
              
               
               <br></br>
               <button onClick={()=>this.addValue(7)}>7</button>
               <button onClick={()=>this.addValue(8)}>8</button>
               <button onClick={()=>this.addValue(9)}>9</button>
               <button onClick={()=>this.addValue('-')}>-</button>
              
               <br></br>
               <button onClick={()=>this.addValue(4)}>4</button>
               <button onClick={()=>this.addValue(5)}>5</button>
               <button onClick={()=>this.addValue(6)}>6</button>
               <button onClick={()=>this.addValue('+')}>+</button>
              

               <br></br>

               
               <button onClick={()=>this.addValue(1)}>1</button>
               <button onClick={()=>this.addValue(2)}>2</button>
               <button onClick={()=>this.addValue(3)}>3</button>
               <button onClick={()=>this.addValue("%")}>%</button>
               
               <br></br>
               <button onClick={()=>this.dot()}>.</button>
               <button onClick={()=>this.addValue('*')}>*</button>
               <button onClick={()=>this.addValue("/")}>/</button>
               <button onClick={()=>this.calculate("=")}>=</button>
               
            </div>
            </div>
        )
    }
}

export default output
