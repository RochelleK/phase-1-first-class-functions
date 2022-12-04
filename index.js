function receivesAFunction (cb){
return cb()
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log("hello")
    }
}

function returnsAnAnonymousFunction(){
    return function(){ console.log('hello')}
}