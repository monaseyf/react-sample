import React, { Component } from 'react'

function FunctionClick (){
    function clickHandler () {
        console.log('thanks')
    }
    return (
        <div>
        <button onClick={clickHandler}>click me</button>
        </div>
    )
}

export default FunctionClick