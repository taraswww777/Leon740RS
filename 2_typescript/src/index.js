"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
const fnGetComments = async (url) => {
    try {
        const objResponse = await (0, node_fetch_1.default)(url);
        const arrData = await objResponse.json();
        return arrData;
    }
    catch (error) {
        throw new Error(error);
    }
};
fnGetComments(COMMENTS_URL)
    .then((arrFetchedComments) => {
    const arrModifiedComments = arrFetchedComments.map((comment) => ({
        id: comment.id,
        email: comment.email,
    }));
    return arrModifiedComments;
})
    .then((objData) => console.log(objData));
