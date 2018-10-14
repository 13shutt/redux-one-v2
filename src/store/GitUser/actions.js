import { NAME_CHANGE } from './constants';

const userName = value => ({
    type: NAME_CHANGE,
    payload: value
})

export { userName }