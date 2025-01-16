import "./styles/app8.css";
import React, { useState } from 'react';
import BookRegister from './components/bookJunil/BookRegister/BookRegister';
import BookSearch from './components/bookJunil/BookSearch/BookSearch';
/**
 * 도서정보 등록 및 조회
 * 
 * App7Ji
 * Component 분리
 */

function App8(props) {
    const [ bookList, setBookList ] = useState([]);

    return (
        <div className='container'>
            <BookRegister bookList={bookList} setBookList={setBookList} />
            <BookSearch bookList={bookList} />
        </div>
    );
}

export default App8;