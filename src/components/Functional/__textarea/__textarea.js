import React, {useState} from "react";

function Textarea({limiter}) {

    limiter = limiter ? limiter : 10
    const [value, setValue] = useState('')
    const [length, setLength] = useState(0)

    const onChange = (e) => {
        const length = e.target.value.length
        if(length <= limiter) {
            setLength(length)
            setValue(e.target.value)
        }
    }

    return(
        <div className="functional__textarea container__item">
            <b>Текстовая область с ограничителем:</b><br/>
            <textarea onChange={onChange} value={value}/><br />
            {length}/{limiter}
        </div>
    )
}

export default Textarea