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

export function articleCreate(data: Object) {
    return request({
        url: 'api/article/article/',
        method: 'post',
        data: data
    })
}

export function articleUpdate(data: any) {
    const id = data 
    return request({
        url: 'api/article/article/' + data.id + '/',
        method: 'patch',
        data: data
    })
}
