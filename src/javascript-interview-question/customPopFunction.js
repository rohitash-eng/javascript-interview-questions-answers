
const myArr = [1,4,5,6,7,8,9,10,11,12,13];
Array.prototype.customPop = function(){
    console.log('this=',this);
    if(!Array.isArray(this)){
        return undefined;
    }
    if(Array.isArray(this) && this.length === 0){
        return [];
    }
    const lastElement = this[this.length - 1];
    this.length = this.length - 1;
    return lastElement;
}
console.log('using pop function we can do tow things one is get the last element from array, second if we want to delete the last element from array - so after using pop function - the last emlement will be get/removed from that array', myArr.pop());
console.log('Existing Array=', myArr)

