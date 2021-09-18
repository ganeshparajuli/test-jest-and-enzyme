import React from 'react'

function Blog() {
    return (
        <div className="mainCls">
            <ul>
                <li key="react" className="liCls">Angular</li>
                <li key="node" className="liCls">Node</li>
                <li key="react" className="liCls">React</li>
            </ul>
            <div className="number">
                <span>one</span>
                <span>two</span>
            </div>
            <div>
                <button className="my-button disable btn-primary">Submit</button>
            </div>
            
        </div>
    )
}

export default Blog
