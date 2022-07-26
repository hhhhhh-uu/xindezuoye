import request from "@/utils/request";


export const recommenfSongList = (params) => {
    return request({
        url: "/personalized",
        params,
    })
}

export const newSongList = (params) => {
    return request({
        url: "/personalized/newsong",
        params,
    })
}