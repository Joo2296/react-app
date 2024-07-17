import './Sample1.css'
export function Sample1() {
    return (
        <div>
            <form action="" class="a">
                <input type="button" value="추가"/>
                <label htmlFor="name">이름 : </label>
                <input type="text" placeholder="이름" id="name"/><br/>
                <label htmlFor="age">나이 : </label>
                <input type="text" placeholder="나이" id="age"/><br/>
                <label htmlFor="job">직업 : </label>
                <input type="text" placeholder="직업" id="job"/>
            </form>
            <div class="b">
                <form action="">
                    <div>
                        <label htmlFor="">홍길동 (34세) 무직</label>
                        <input type="button" value="삭제"/>
                    </div>
                    <div>
                        <label htmlFor="">이순신 (54세) 군인</label>
                        <input type="button" value="삭제"/>
                    </div>
                </form>
            </div>
        </div>
    );
}