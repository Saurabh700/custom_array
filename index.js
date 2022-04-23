function गुरु_अरे(){
    Object.defineProperty(this,"length",{
        value:0,
        writable:true,
        enumerable:false
    });
    this.length = arguments.length
    for(let i=0;i<this.length;i++){
        this[i] = arguments[i]
    }
}
let अरे = new गुरु_अरे("x","y","z")
console.log(Object.values(अरे))

गुरु_अरे.prototype.पुष = function(value){
    let index = this.length;
    this[index] = value;
    this.length++
}

अरे.पुष("a")

console.log(Object.values(अरे))

गुरु_अरे.prototype.पॉप = function(value){
    let index = this.length-1;
    delete this[index]
    this.length--
}

अरे.पॉप("a")

console.log(Object.values(अरे))

गुरु_अरे.prototype.ऊपरी = function(){
    let index = this.length-1;
    console.log(this[index])
}

अरे.ऊपरी() //top()

गुरु_अरे.prototype.छापो = function(){
    let index = this.length-1;
    for(let i=0;i<=index;i++){
        console.log(this[i])
    }
}

अरे.छापो() // console.log(arr)

गुरु_अरे.prototype.उल्ट = function(){
    let index = this.length-1;
    for(let i=index;i>=0;i--){
        console.log(this[i])
    }
}

अरे.उल्ट() //arr.reverse()

गुरु_अरे.prototype.लंबाई = function(){
    let index = this.length;
    return index
}
console.log(अरे.लंबाई()) //arr.length

