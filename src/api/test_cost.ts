import request from '@/utils/request'

export function contractToBillsApi(data: any) {
    return request({
        url: 'api/contract/contract-to-bills/',
        method: 'post',
        data
    })
}