import { useState,useEffect } from "react"
const MAX_CAPACITY = 10;

export function Gate2() {
    const [isFull, setIsFull] = useState(false);
    const [isEmpty, setEmpty] = useState(true);
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        let _count = count + 1;
        setCount(_count)
    }
    const decreaseCount = () => {
        let _count = count - 1;
        setCount(_count)
    }

    useEffect(()=>{
        setIsFull(count >= MAX_CAPACITY);
        setEmpty(count <= 0);
    },[count])
    return (
        <div style={{ padding: 16 }}>
            <p>총 {count}명 수용했습니다.</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount} disabled={isEmpty}>퇴장</button>

            { isFull && <p style={{ color: 'red' }}>정원이 가득찼습니다.</p> }
            { isEmpty && <p style={{ color: 'red' }}>입장객이 없습니다.</p> }
        </div>
    )
}