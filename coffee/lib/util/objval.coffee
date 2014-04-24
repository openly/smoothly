module.exports = objval = (data, key)->
    keys = key.split /\./
    newObj = data[keys.shift()];

    return newObj if(keys.length < 1 or newObj is null)
    return null if typeof newObj is 'string' and keys.length >= 1
    return objval(newObj, keys.join('.'));