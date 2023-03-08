// Your code here
Array.prototype.isEqual=function(arguments){
    if(this.length!=arguments.length){
        return false;
    }
    for(let i=0;i<this.length;i++){
        if(this[i]!=arguments[i]){
        return false;
        }
    }
    return true;
}