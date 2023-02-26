const {Webview} = require('webview-nodejs');

let w = new Webview();
w.title("Aplikasi Desktop NodeJS");
w.size(1000,600);
w.navigate("http://localhost:8080");
w.dispatch(()=>{
    w.title("Aplikasi Desktop NodeJS")
});
w.bind("increment", (w,arg1,arg2)=>{
    w.title(arg1);
    return arg1+arg2;
});
w.show();