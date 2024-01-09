export const add = (valeur) => {
    return (
        { type: 'ajouter', valeur })
}
export const Delete = (valeur) => {
    return (
        { type: 'delete', valeur })
}
export const Search = (valeur) => {
    return (
        { type: 'search', valeur })
}