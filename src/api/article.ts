// import request from '@utils/request'
import request from '../utils/request'

export function articleList() {
    return request({
        url: 'api/article/article/',
        method: 'get'
    })
}

export function articleDetail(id: Number|undefined) {
    return request({
        url: 'api/article/article/' + id + '/',
        method: 'get'
    })
}