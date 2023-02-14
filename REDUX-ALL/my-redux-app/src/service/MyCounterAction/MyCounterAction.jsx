export const increment = () => {
    return { type: 'INCREMENT' }
}

export const decrement = () => {
    return { type: 'DECREMENT' }
}

export const toggleName = () => {
    return { type: 'TOGGLENAME' }
}

export const addNumber = (data1, data2) => {
    return { type: 'ADDITION', payload1: data1, payload2: data2 }
}


