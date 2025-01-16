import React, { useState } from 'react';

function BookSearch({ bookList }) {
    const [ searchType, setSearchType ] = useState("bookName");
    const [ searchBookListInput, setSearchBookListInput ] = useState("");
    const [ searchBookList, setSearchBookList ] = useState([]);

    const handleTypeOnChange = (e) => {
        setSearchType(e.target.value);
    };

    const handleSearchInputOnChange = (e) => {
        setSearchBookListInput(e.target.value);
    };

    const handleSearchButtonOnClick = () => {
        const searchCheck = bookList.find((books) => {
            if(searchType === "bookName") {
                return books.bookName === searchBookListInput
            } else if(searchType === "authorName") {
                return books.authorName === searchBookListInput
            } else {
                return books.publisherName === searchBookListInput
            }
        });

        if(!searchCheck) {
            alert("검색 결과를 찾을 수 없습니다.");
        } else {
            setSearchBookList([
                searchCheck,
            ]);
        };
        setSearchBookListInput("");
    };

    return (
        <div>
            <div>
                <h2>도서 조회</h2>
                <select onChange={handleTypeOnChange} value={searchType}>
                    <option value="bookName">도서명</option>
                    <option value="authorName">저자명</option>
                    <option value="publisherName">출판사명</option>
                </select>
                <input type="text" placeholder="조회할 정보를 입력하세요" onChange={handleSearchInputOnChange} value={searchBookListInput} />
                <button onClick={handleSearchButtonOnClick}>조회</button>
            </div>
            <div>
                <h2>조회한 도서 목록표</h2>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>도서명</th>
                            <th>저자</th>
                            <th>출판사</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchBookList.map((books, index) => (
                            <tr key={index}>
                                <td>{books.bookName}</td>
                                <td>{books.authorName}</td>
                                <td>{books.publisherName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BookSearch;