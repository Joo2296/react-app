import { useState,useEffect } from "react"

export function Toggle(props) {
    const [onAir, setOnair] = useState(true);
    const [onAir2, setOnair2] = useState(false);
    function func(event, mode) {
        console.log(mode, '==>', event.target, ',', event.target.textContent)
        const _text = event.target.textContent
        if (mode === 1) {
            if (_text == "방송 중") {
                setOnair(false);
            } else {
                setOnair(true);
            }
        } else if (mode === 2) {
            if (_text == "방송 중") {
                setOnair2(false);
            } else {
                setOnair2(true);
            }
        }
        // setOnair(!onAir);
        // setOnair2(!onAir2);
    }

    return (
        <div>
            <button onClick={(event) => func(event, 1)}>
                {onAir ? "방송 중" : "방송 끝"}
            </button>
            <button onClick={(event) => func(event, 2)}>
                {onAir2 ? "방송 중" : "방송 끝"}
            </button>
        </div>
    )
}

export default Toggle