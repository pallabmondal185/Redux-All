import { increment_value, decriment_value, upper_case, addition_number } from '../Types'

export const incriment = () => {
    return {
        type: increment_value
    }
}

export const decriment = () => {
    return {
        type: decriment_value
    }
}

export const uppercase = () => {
    return {
        type: upper_case
    }
}

export const addition = () => {
    return {
        type: addition_number
    }
}