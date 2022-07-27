import React, { Component } from 'react'

class FirstCompnent extends Component {
    state = { 
        firstNum : '',
        secondNum : '',
        operator : '', 
        result : ''
    } 
    numberMaker  = (num) =>{
            this.setState({firstNum : this.state.firstNum + num})
    }
    numberMaker2 = (opt) =>{
        this.setState({secondNum : this.state.firstNum })
        this.setState({firstNum : ''})
        this.setState({operator : opt})
    }
    render() { 
        return (
            <div className='container p-0 m-0'>
                <header>
                    <div>Calculus</div>
                    <div><div className='bg-dark text-warning opacity-25'>
                        {this.state.result}
                    </div>
                        <div>
                            {this.state.secondNum + this.state.operator + this.state.firstNum}
                        </div></div>
                </header>
                <main className='container'>
                    <div className='row'>
                    <div className='col'>
                        <div className='container'>
                            <div className='row'><button className='btn col bg-dark text-light' onClick={()=>{
                                this.numberMaker('1')

                            }}>1</button> <button className='btn col bg-dark text-light' onClick={()=>{
                                this.numberMaker('2')

                            }}>2</button> <button className='btn col bg-dark text-light' onClick={()=>{
                                this.numberMaker('3')

                            }}>3</button></div>
                            
                        </div>
                        <div className='container'>
                        <div className='row'><button className='btn col bg-dark text-light' onClick={()=>{
                                this.numberMaker('4')

                            }}>4</button> <button className='btn col bg-dark text-light' onClick={()=>{
                                this.numberMaker('5')

                            }}>5</button> <button className='btn col bg-dark text-light' onClick={()=>{
                                this.numberMaker('6')

                            }}>6</button></div>
                        </div>
                        <div className='container'>
                            <div className='row'><button className='btn col bg-dark text-light' onClick={()=>{
                                this.numberMaker('7')

                            }}>7</button> <button className='btn col bg-dark text-light' onClick={()=>{
                                this.numberMaker('8')

                            }}>8</button> <button className='btn col bg-dark text-light' onClick={()=>{
                                this.numberMaker('9')

                            }}>9</button></div>
                        </div>
                        <div className='container'>
                            <div className='row'><button className='btn col bg-dark text-light' onClick={()=>{
                                this.numberMaker('0')

                            }}>0</button> <button className='btn col bg-warning' onClick={()=>{
                                console.log(this.state.firstNum , this.state.secondNum , this.state.operator)
                                var num1 = Number(this.state.firstNum)
                                var num2 = Number(this.state.secondNum)
                                if(this.state.operator === '+'){
                                    console.log(num1 + num2)
                                    this.setState({result : (num1 + num2)})
                                }
                                if(this.state.operator === '-'){
                                    console.log(num2 - num1)
                                    this.setState({result : (num2 - num1)})
                                }
                                if(this.state.operator === '*'){
                                    console.log(num1 * num2)
                                    this.setState({result : (num1 * num2)})
                                }
                                if(this.state.operator === '/'){
                                    console.log(num2 / num1)
                                    this.setState({result :  (num2 / num1)})
                                }
                            }}> = </button></div></div>
                    </div>
                    <div className='col container'>
                        <div className='row'>
                    <button className='btn bg-warning' onClick={()=>{
                        this.numberMaker2('+')
                    }}>+</button> <button className='btn bg-warning' onClick={()=>{
                        this.numberMaker2('-')
                    }}>-</button> <button className='btn bg-warning' onClick={()=>{
                        this.numberMaker2('*')
                    }}>x</button> <button className='btn bg-warning' onClick={()=>{
                        this.numberMaker2('/')
                    }}>%</button>
                    </div>
                    </div>
                    </div>
                </main>
            </div>
        );
    }
}
 
export default FirstCompnent;