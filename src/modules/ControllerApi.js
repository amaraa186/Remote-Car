import {
    request
} from '../../utils/api'

export async function forward() {
    return await request().get('/forward')
}

export async function back() {
    return await request().get(`/back`)
}

export async function right() {
    return await request().get(`/right`)
}

export async function left() {
    return await request().get(`/left`)
}

export async function stop() {
    return await request().get(`/stop`)
}