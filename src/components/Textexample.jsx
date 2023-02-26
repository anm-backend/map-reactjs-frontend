import './App.css'
import Button from './Button'
import React from 'react'
import Select from './Select'
import Text from './Text'

function Textexample() {
  return (
    <div className="duoi-2">
            <label className="pad"> Text</label> <br />
            <Text/>
            <br />
            <label className="pad"> Example select</label> <br />
                <Select/>
            <br />
            <label>Example textarea</label>
            <div className="style7">
               <Button/>
            </div>
          </div>
  )
}

export default Textexample