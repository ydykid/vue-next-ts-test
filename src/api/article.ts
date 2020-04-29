// import request from '@utils/request'
import request from '../utils/request'

export function articleList() {
    return request({
        url: 'api/article/article/',
        method: 'get'
    })
}
