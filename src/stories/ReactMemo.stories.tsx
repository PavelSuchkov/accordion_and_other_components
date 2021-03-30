import React, {useState} from "react";


export default {
    title: 'React.memo demo'
}


const NewMessagesCounter = (props: {count: number}) => {
    console.log('click')
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('USERS')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret);

export const Example_1 = () => {
    console.log('Example')
        const [counter, setCounter] = useState(0)
        const [users, setUsers] = useState(['Pasha', 'Lesha', 'Yura'])

        const addUser = () => {
            const newUsers = [...users, 'newUser']
            setUsers(newUsers)
        }

  return  <>
        <button onClick={() =>{setCounter(counter + 1 )} }>+</button>
        <button onClick={addUser}>Add user</button>
        <NewMessagesCounter count={counter} />
        <Users users={users}/>
    </>
}