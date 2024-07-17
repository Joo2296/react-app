import './Sample1.css'
import React, { useState } from 'react';
export function Sample1() {
    // React에서의 상태 정의
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [job, setJob] = useState('');

    // 사용자 추가 이벤트 핸들러
    const handleAddUser = (e) => {
        e.preventDefault();
        // 새로운 사용자 객체 생성
        const newUser = {
            name: name,
            age: age,
            job: job
        };
        // 사용자 목록에 추가
        setUsers([...users, newUser]);
        // 입력 필드 초기화
        setName('');
        setAge('');
        setJob('');
    };

    // 사용자 삭제 이벤트 핸들러
    const handleDeleteUser = (index) => {
        // 인덱스를 이용하여 사용자 목록에서 삭제
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
    };
    return (
        <div>
            <form onSubmit={handleAddUser} className="a">
                <input type="submit" value="추가" />
                <label htmlFor="name">이름 : </label>
                <input type="text" placeholder="이름" id="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <label htmlFor="age">나이 : </label>
                <input type="text" placeholder="나이" id="age" value={age} onChange={(e) => setAge(e.target.value)} /><br />
                <label htmlFor="job">직업 : </label>
                <input type="text" placeholder="직업" id="job" value={job} onChange={(e) => setJob(e.target.value)} />
            </form>
            <div class="b">
                <ul id="userList">
                    {users.map((user, index) => (
                        <li key={index}>
                            {user.name} ({user.age}세) {user.job}
                            <button onClick={() => handleDeleteUser(index)}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}