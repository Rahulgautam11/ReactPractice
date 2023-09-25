import React from 'react'
import './rangeslider.scss'

const Rangesilder = () => {
    // document.getElementById("myinput").oninput = function () {
    //     var value = (this.value - this.min) / (this.max - this.min) * 100
    //     this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
    // };
    return (
        <div className='rangecontainer'>
            <p>range</p>
            <input id="myinput" min="0" max="60" type="range" value="30" />
        </div>
    )
}

export default Rangesilder