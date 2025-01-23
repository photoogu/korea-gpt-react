/**@jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import * as s from './style';
import React, { useEffect, useState } from 'react';

import { LuUserRoundPlus, LuLogIn, LuLogOut, LuUser, LuLayoutList, LuNotebookPen } from "react-icons/lu";
import { useRecoilState } from 'recoil';
import { authUserIdAtomState } from '../../atoms/authAtom';
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';


function MainHeader(props) {
    const queryClient = useQueryClient();
    const userId = queryClient.getQueryData(["authenticatedUserQuery"])?.data.body;

    // const [ userId, setUserId ] = useRecoilState(authUserIdAtomState);
    // const [ loadStatus, setLoadStatus ] = useState("idle"); // loading(로딩중), success(로딩완료), idle(대기상태)
    
    
    //const getUserApi = async (userId) => {
        // try {
        //     const response = await axios.get("http://localhost:8080/servlet_study_war/api/user", {
        //         headers: {
        //             "Authorization": "Bearer " + localStorage.getItem("AccessToken"),
        //         },
        //         params: {
        //             "userId": userId,
        //         }
        //     });
        //     console.log(response);
        // } catch (error) {
            
    // }
    // useEffect(() => {
    //     if(!!userId) {
    //         getUserApi(userId);
    //     }
    // }, [userId]); // userId 가 변했다 >> 로그인 or 로그아웃 됨
    const getUserApi = async () => {
        return await axios.get("http://localhost:8080/servlet_study_war/api/user", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("AccessToken"),
            },
            params: {
                "userId": userId,
            }
        });
    }

    const getUserQuery = useQuery(
        ["getUserQuery", userId],
        getUserApi,
        {
            refetchOnWindowFocus: false,
            enabled: !!userId,
        }
        // enabled 가 false 면 요청 자체가 되지 않아서 getUserApi 가 동작 하지 않음.
    );

    
    return (
        <div css={s.layout}>
            <div css={s.leftContainer}>
                <Link to={"/"} ><h1>미니 게시판 프로젝트</h1></Link>
                <ul>
                    <Link to={"/list"} >
                        <li>
                            <LuLayoutList />게시글 목록
                        </li>
                    </Link>
                    <Link to={"/write"} >
                        <li>
                            <LuNotebookPen />게시글 작성
                        </li>
                    </Link>
                </ul>
            </div>
            <div css={s.rightContainer}>
                {
                    !!userId ?
                    <ul>
                        <Link to={"/mypage"}>
                            <li>
                                <LuUser />{getUserQuery.isLoading ? "" : getUserQuery.data.data.username}
                            </li>
                        </Link>
                        <Link to={"/logout"}>
                            <li>
                                <LuLogOut />로그아웃
                            </li>
                        </Link>        
                    </ul>
                    :
                    <ul>
                        <Link to={"/signin"}>
                            <li>
                                <LuLogIn />로그인
                            </li>
                        </Link>
                        <Link to={"/signup"}>
                            <li>
                                <LuUserRoundPlus />회원가입
                            </li>
                        </Link>        
                    </ul>
                }
            </div>
        </div>
    );
}

export default MainHeader;