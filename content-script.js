var textBox = document.querySelector('._1KUxv._11rtD');
var span = textBox.children[0].children[0];
var words = span.children;
var sentence = "";
for (var i = 0; i < words.length; i++) {
    const word = words[i];
    sentence += word.innerHTML;

}
window.open(`https://www.google.com/search?q=${sentence}+duolingo`);