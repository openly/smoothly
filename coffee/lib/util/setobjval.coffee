module.exports = setobjval = (data, key, newVal)->
    keys = key.split /\./

    firstKey = keys.shift();

    data[firstKey] = newVal if keys.length < 1;
    data[firstKey] = {} if typeof data[firstKey] isnt 'object' and keys.length > 0
    data[firstKey] = setobjval(data[firstKey], keys.join('.'), newVal) if keys.length > 0;

    data;