import { useState } from "react"

export function Toggle(props) {
    const [onAir, setOnair] = useState(true);
    const [onAir2, setOnair2] = useState(true);
    function func1() {
        setOnair(!onAir);
    }
    const func2 = () => {
        setOnair2(!onAir2);
    }
    return (
        <div>
            <button onClick={func1}>
                {onAir ? "방송 중" : "방송 끝"}
            </button>
            <button onClick={func2}>
                {onAir2 ? "방송 중" : "방송 끝"}
            </button>
        </div>
    )
}