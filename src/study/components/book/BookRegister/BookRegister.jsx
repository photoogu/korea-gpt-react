import React, { useState } from 'react';

function BookRegister({ bookList, setBookList }) {
    const [ bookRegisterInputValue, setBookRegisterInputValue ] = useState({
        bookName: "",
        authorName: "",
        publisherName: "",
    });

    const handleBookRegisterInputOnChange = (e) => {
        setBookRegisterInputValue({
            ...bookRegisterInputValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleBookRegisterButtonOnClick = () => {
        setBookList([
            ...bookList,
            bookRegisterInputValue,
        ]);
        alert(`[ ${bookRegisterInputValue.bookName} ] 도서 등록이 완료되었습니다.`);
        setBookRegisterInputValue({
            bookName: "",
            authorName: "",
            publisherName: "",
        });
    };

    return (
        <div>
            <div>
                <h1>도서 등록</h1>
                <input type="text" name="bookName" placeholder="도서명" onChange={handleBookRegisterInputOnChange} value={bookRegisterInputValue.bookName} />
                <input type="text" name="authorName" placeholder="저자명" onChange={handleBookRegisterInputOnChange} value={bookRegisterInputValue.authorName} />
                <input type="text" name="publisherName" placeholder="출판사명" onChange={handleBookRegisterInputOnChange} value={bookRegisterInputValue.publisherName} />
                <button onClick={handleBookRegisterButtonOnClick}>등록</button>
            </div>
            <div>
                <h1>등록된 도서 목록 표</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>도서명</td>
                            <td>저자명</td>
                            <td>출판사명</td>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.map((books,index) => (
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

export default BookRegister;