import { atom } from "recoil";

export const accessTokenAtomState = atom({
    key: "accessTokenAtomState",
    default: localStorage.getItem("AccessToken"),
});