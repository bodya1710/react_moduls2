import {axioService} from './axio.service';
import {urls} from '../configs/urls'

export const userService = {
    getAll:()=>axioService.get(urls.users).then(value => value.data),
    getById:(id)=>axioService.get(`${urls.users}/${id}`).then(value => value.data)
}