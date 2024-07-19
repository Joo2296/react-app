import { useState, useEffect } from "react"

function Grade(props){
    
    const { engscore, mathscore, korscore, score} = props;
    const allAvg = score >= 60; 
    const isEngPass = engscore >= 60;
    const isMathPass = mathscore >= 60;
    const isKorPass = korscore >= 60;
    
    return (
        <div>
            <p>국어 : {korscore} 영어 : {engscore} 수학 : {mathscore}</p>
            <p>총점 : {engscore+mathscore+korscore}, 평균 : {(engscore + mathscore + korscore) / 3}점, 과락 : {}건</p>
            <p>{allAvg? "합격입니다":"불합격입니다"}</p>
        </div>
    )
}

export function ScoreComp(props){

    const [score, setScore] = useState(0);
    const [engscore, setEngScore] = useState(50);
    const [mathscore, setMathScore] = useState(50);
    const [korscore, setKorScore] = useState(50);
    
    useEffect(()=>{
        const avg = (engscore + mathscore + korscore) / 3;
        setScore(avg);
    },[engscore,mathscore,korscore])

    function changeText(event){
        console.log(event.target.value);
        let _score = Number(event.target.value);
        setScore(_score);
    }
    function changeText2(event){
        console.log(event.target.value);
        let _score2 = Number(event.target.value);
        setEngScore(_score2);
    }
    function changeText3(event){
        console.log(event.target.value);
        let _score3 = Number(event.target.value);
        setMathScore(_score3);
    }
    function changeText4(event){
        console.log(event.target.value);
        let _score4 = Number(event.target.value);
        setKorScore(_score4);
    }
    return (
        <>  
            <div>
                <label>영어 : </label>
                <input type="text" onChange={changeText2}/>
            </div>
            <div>
                <label>수학 : </label>
                <input type="text" onChange={changeText3}/>
            </div>
            <div>
                <label>국어 : </label>
                <input type="text" onChange={changeText4}/>
            </div>
            <div>
                <label> 평균 : </label>
                <input type="text" value={score}/>
            </div>
            <Grade engscore={engscore} mathscore={mathscore} korscore={korscore} score={score}></Grade>
        </>
    )
}