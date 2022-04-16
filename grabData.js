const grabData = (attribute, data) => {
    let tempData = {}
    attribute.forEach(e => {
        if (data[e]) tempData[e] = data[e]
    })
    return tempData
}

module.exports = grabData