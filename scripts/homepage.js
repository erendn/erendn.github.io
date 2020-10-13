function update() {
    textFit(document.getElementById('name-container'));
    textFit(document.getElementById('occupation-container'));
    var contentTitles = document.getElementsByClassName('content-title');
    for (var i = 0; i < contentTitles.length; i++) {
        textFit(contentTitles[i]);
    }
}