import "./style.css"
import React, { useState } from 'react';

function BookSearchItems({ bookList, setBookTableList }) {

    const [ searchValue, setSearchValue ] = useState({
        select: "bookName",
        text: "",
    });

    const searchOptions = [
        {
            id: 1,
            label: "도서명",
            value: "bookName",
        },
        {
            id: 2,
            label: "저자명",
            value: "author",
        },
        {
            id: 3,
            label: "출판사",
            value: "publisher",
        },
    ];

    const handleSearchValueOnChange = (e) => {
        setSearchValue({
            ...searchValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleSearchButtonOnClick = () => {

        if(!searchValue.text.trim()) {  // trim: 좌우 공백 지우기
            setBookTableList(bookList); // 검색칸이 비어있을 경우, 모든 도서 목록 조회
        }

        const foundBooks =  bookList.filter(book => book[searchValue.select].includes(searchValue.text)); // book이라는 객체 안에 select 값 찾아오기

        setBookTableList(foundBooks);
    };

    return (
        <div className='search-items'>
            <select name="select" value={searchValue.select} onChange={handleSearchValueOnChange}>
                {
                    searchOptions.map(option => <option key={option.id} value={option.value}>{option.label}</option>)
                }
            </select>
            <input type="text" name='text' value={searchValue.text} onChange={handleSearchValueOnChange} />
            <button onClick={handleSearchButtonOnClick}>검색</button>
        </div>
    );
}

export default BookSearchItems;