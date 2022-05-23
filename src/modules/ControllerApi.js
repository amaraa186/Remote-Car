import {
    request
} from '../../utils/api'

export async function forward(ip) {
    return await request(ip).get('/forward')
}

export async function back(ip) {
    return await request(ip).get(`/back`)
}

export async function right(ip) {
    return await request(ip).get(`/right`)
}

export async function left(ip) {
    return await request(ip).get(`/left`)
}

export async function stop(ip) {
    return await request(ip).get(`/stop`)
}