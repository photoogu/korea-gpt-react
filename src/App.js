import { Route, Routes, useLocation } from 'react-router-dom';
import { Global } from '@emotion/react';
import { global } from './styles/global';
import MainLayout from './components/MainLayout/MainLayout';
import IndexPage from "./pages/IndexPage/IndexPage";
import WritePage from "./pages/WritePage/WritePage";
import ListPage from './pages/ListPage/ListPage';
import SignupPage from './pages/SignupPage/SignupPage';
import SigninPage from './pages/SigninPage/SigninPage'
import { useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authUserIdAtomState } from './atoms/authAtom';
import { useQuery } from 'react-query';


function App() {
    // const [ userId, setUserId ] = useRecoilState(authUserIdAtomState);
    const location = useLocation();

    const authenticatedUser = async () => {
        // let response = null;
        // try {
        //     response = await axios.get("http://localhost:8080/servlet_study_war/api/authenticated", {
        //         headers: {
        //             "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`,
        //         }
        //     });
        // } catch (error) {
        //     console.error(error);
        //     // setUserId(0); // userId 가 0 >> 로그아웃 상태
        // }
        // return response;
        return await axios.get("http://localhost:8080/servlet_study_war/api/authenticated", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`,
            }
        });
    }

    const authenticatedUserQuery = useQuery( // useEffect 와 비슷하게 동작(렌더링 후 요청)
        ["authenticatedUserQuery"],
        authenticatedUser, // 렌더링 후 호출
        {
            // onSuccess: (response) => {  // >> then
            //     console.log(response);
            //     setUserId(response.data.body);
            // },
            // onError: (error) => {       // >> catch
            //     console.error(error);
            //     setUserId(0);
            // },
            refetchOnWindowFocus: false,
            enabled: !!localStorage.getItem("AccessToken"),
            // useQuery 는 enabled 값이 true 여야 동작함. 즉, authenticatedUser 이 동작하려면 enabled 값이 true여야함
        }
    );

    console.log(authenticatedUserQuery.isLoading)

    return (
        <>
            <Global styles={global} />

            {
                authenticatedUserQuery.isLoading // 로딩중: true, 로딩 끝: false >> 로딩이 끝나야지만 렌더링 하겠다!
                ?
                    <></>
                :
                    <MainLayout>
                        <Routes>
                            <Route path="/" element={ <IndexPage />} />
                            <Route path="/write" element={ <WritePage /> } />
                            <Route path="/list" element={ <ListPage /> } />
                            <Route path="/signup" element={ <SignupPage /> } />
                            <Route path="/signin" element={ <SigninPage /> } />
                        </Routes>
                    </MainLayout>
            }
        </>
    );
}

export default App;
