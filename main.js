let screen = document.getElementById('result');
function addToScreen(x){
    screen.value += x;
}
function clearScreen(){
    screen.value = '';
}
function calculatrice(){
    screen.value = eval(screen.value);
}