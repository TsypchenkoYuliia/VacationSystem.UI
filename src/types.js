export const getType = (id) => {
    if (id === 1)
        return 'Administrative'
    else if (id === 2)
        return 'Annual'
    else if (id === 3)
        return 'Study'
    else if (id === 4)
        return 'Sick'
};

export const getTypeId = (type) => {
    if (type === 'Administrative')
        return 1
    else if (type === 'Annual')
        return 2
    else if (type === 'Study')
        return 3
    else if (type === 'Sick')
        return 4
};