function toggler(){
    arr=arguments;
    index=-1
    return function(){
        index=index+1
        if(index>=arr.length){
            index=0
        }
        return arr[index]
    }
    
}

const toggle=toggler(1,2,3,4)
console.log(toggle())
console.log(toggle())
console.log(toggle())
console.log(toggle())
console.log(toggle())
console.log(toggle())
