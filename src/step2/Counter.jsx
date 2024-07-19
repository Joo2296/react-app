import {useState, useEffect } from "react";

export function Counter(props){
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(
        ()=>{
            document.title = `총 ${count}/${count2}`;
            console.log("effect_count=>",count)
        }, [count]
    )
    return (
        <div>
            <p id="msg">총 {count}/{count2}번의 클릭했습니다</p>
            <button onClick={()=>{
                setCount(count+1);
                console.log("count=>",count+1)
                }}>클릭1</button>

            <button onClick={()=>{
                setCount2(count2+1);
                console.log("count2=>",count2+1)
                }}>클릭2</button>
        </div>
    )
}