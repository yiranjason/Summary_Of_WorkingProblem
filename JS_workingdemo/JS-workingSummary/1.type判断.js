/**
* type类型判断在日常开发过程中是一个经常用到的，用处广泛，总结一些
*/

/**
* 七大基础数据类型判断
*/


// 是否为String字符串类型
isString(o){
    return Object.prototype.toString.call(o).slice(8,-1) === "String"
}
isString(o){
    return (typeof o == "string") && o.constructor == String
}

// 是否为Number数字类型
isNumber(o){
    return Object.prototype.toString.call(o).slice(8,-1) === "Number"
}
isNumber(o){
    return (typeof o == "number") && o.constructor == Number
}

// 是否为Boolean布尔类型
isBoolean(o){
    return Object.prototype.toString.call(o).slice(8,-1) === "Boolean"
}
isBoolean(o){
    return (typeof o == "boolean") && o.constructor == Boolean
}

// 是否为Null对空类型
isNull(o){
    return Object.prototype.toString.call(o).slice(8,-1) === "Null"
}
isNull(o){
    return (!o && typeof(o)!="undefined" && o!=0)
}

// 是否为Undefined未定义类型
isUndefined(o){
    return Object.prototype.toString.call(o).slice(8,-1) === "Undefined"
}

// 是否为Object对象类型
isObj(o){
    return Object.prototype.toString.call(o).slice(8,-1) === "Object"
}

// 是否为Symbol类型
isSymbol(o){
    return Object.prototype.toString.call(o).slice(8,-1) === "Symbol"
}

/**
* 引用类型
*/

// 是否为Array数组类型
isArray(o){
    return Object.prototype.toString.call(o).slice(8,-1) === "Array"
}

// 是否为Function函数类型
isFun(o){
    return Object.prototype.toString.call(o).slice(8,-1) === "Function"
}
