/**
 * 도서정보 등록 및 조회
 * 
 * 도서명, (isbn), 저자명, 출판사명, (카테고리) 입력
 * bookList에 저장
 * 
 * table
 * tbody
 * tr
 * td
 * 
 * 컴포넌트 - 등록 & 조회 로 나눔
 * 
 * 
 * + 검색 조건에 따라 (도서명으로 검색할건지?) 검색할 수 있게 만들어보기
 * <select name="" id="">
 *  <option value="">도서명</option>
 *  <option value="">저자명</option>
 *  <option value="">출판사명</option>
 *  <option value="">카테고리</option>
 * </select>
 * <input type="text">
 * <button>검색</button>
 */

import React, { useState } from 'react';
import BookRegister from './components/book/BookRegister/BookRegister';

function App7(props) {
    const [ path, setPath ] = useState("bookregister");
    const [ bookList, setBookList ] = useState([]);

    const handlePageChangeButtonOnClick = (path) => {
        setPath(path);
    };

    return (
        <div>
            <h1>도서 관리 시스템</h1>
            <button onClick={() => handlePageChangeButtonOnClick("bookregister")}>도서 등록</button>
            <button onClick={() => handlePageChangeButtonOnClick("booksearch")}>도서 조회</button>
            {
                path === "bookregister" && <BookRegister bookList={bookList} setBookList={setBookList} />
            }
        </div>
    );
}

export default App7;