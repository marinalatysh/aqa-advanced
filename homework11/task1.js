function delayFunc(text, milliseconds) {
    setTimeout(() => {
        console.log(text);
    }, milliseconds);
}

delayFunc("test text", 2000); 
