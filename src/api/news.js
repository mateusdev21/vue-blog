import apiHandler from './api-handler'

export async function getNews(size) {
    const res = await apiHandler.get(`/everything`, {
        params: {
            apiKey: 'eeddad64c2e84848af45131d0162a726',
            sources: 'cnn',
            pageSize: size
        }
    })
    return res
}

export async function getHeadline() {
    const res = await apiHandler.get(`/top-headlines`, {
        params: {
            apiKey: 'eeddad64c2e84848af45131d0162a726',
            country: 'us',
            pageSize: 5
        }
    })
    return res
}