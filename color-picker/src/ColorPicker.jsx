import React, {useState} from "react"

function ColorPicker() {
    const [color, setColor] = useState("#000000");

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <>
            <h1>Color Picker</h1>
            <div className="color-box" style={{backgroundColor: color}}></div>
            <p className="hex-code" >{color}</p>
            <input type="color" onChange={handleColorChange}/>
        </>
    )
}

export default ColorPicker