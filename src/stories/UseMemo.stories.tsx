import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const Difficult_Counting = () => {

    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const NewMessagesCounter = (props: { count: number }) => {
    console.log('click')
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS was rendered')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {

    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Pasha', 'Lesha', 'Yura', 'Dima']);

    const newArray = useMemo(() => {
        return users.filter(u => u.indexOf('s') > -1)
    }, [users]);

    const addUser = () => {
        const newUsers = [...users, 'newUser']
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={addUser}>Add User</button>
        {counter}
        <Users users={newArray}/>
    </>

}

const BooksSecret = (props: {/* books: Array<string>*/ addBook: () => void }) => {
    console.log('Books was rendered')
    return <div>
        <button onClick={props.addBook}>Add Book</button>
        {/*{props.books.map((b, i) => <div key={i}>{b}</div>)}*/}
    </div>
}

const Book = React.memo(BooksSecret);


export const LikeUseCallBack = () => {

    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'HTML', 'JS', 'Redux']);


    /*const newBooks = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf('e')> -1 )
    }, [books]);
*/
    const addBook = () => {
        const newBooks = [...books, 'Angular']
        setBooks(newBooks)
    }

    const memoizedAddBook = useMemo( () => {
        return addBook
    }, [books])

    const memoizedAddBookUC = useCallback(() =>{
        const newBooks = [...books, 'Angular']
        setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        {counter}
        <Book addBook={memoizedAddBook}/>
    </>

}