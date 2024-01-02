var route = {
    _routes : {},
    add:function(url, action){
        this._routes[url] = action;
    },
    run:function(){
        $.each(this._routes,function(patron){
            if(location.href.match(patron)){
                //I can execute wherever code
                this();
            }
        })
    }
}

route.add('index.html',()=>{
    console.log('This code, only works on index.html')
})

route.add('about.html',()=>{
    console.log('This code, only works on about.html')
})

route.add('.*.html',()=>{
    console.log('This code, works in any html page')
})

route.run()