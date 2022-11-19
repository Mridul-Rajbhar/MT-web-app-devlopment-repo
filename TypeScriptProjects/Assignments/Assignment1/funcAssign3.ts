function showAlert(num: number):void{
    if(num>15)
        window.alert(1);
    else if(num < 15)
        window.alert(-1)
    else
        window.alert(0);
}

//showAlert("I am string");
showAlert(15);