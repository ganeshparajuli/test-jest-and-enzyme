import React, { Component } from 'react'
import Table from './Table'
export class Article extends Component {
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }
    render() {
        const {count}=this.state;
        return (
            <div>
                <div className="clicks-1"></div>
                <div className={`clicks-${count}`}>{count}</div>
                <button onClick={()=>{this.setState({count: count + 1 }); }}>Increment</button>
                <h1>Article Details</h1>
                <Table />
            </div>
        )
    }
}

export default Article
