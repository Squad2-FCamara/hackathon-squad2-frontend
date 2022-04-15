const capitalizeText = (text: string) => {
    const textList = text.split(' ').map((n) => {
        return n[0].toUpperCase() + n.slice(1).toLowerCase()
    })
    return textList.join(' ')
}

export default capitalizeText
