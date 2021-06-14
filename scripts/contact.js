const PUBLIC_KEY = "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA15hvZwhyh3JTYvtmTvgCgXfokME199L+dh0h1Nxj1kkGrHHAB5DPtHpPA8aMW8Y5vERDzc2PjD3lQavTsXS7UPgOucVdkN8ALru+ffiVUApAFQqOTSoCsj56MQ0MpB3fFSyD1hpvRifPHMrGicOkqUoj/SUS2SDToQ5x57MXfYhNEdCDyd8SuDQcGbRTYFVunp4rJVwlIlczO2Ef/sgDrlYNmvdbVbCwxadKqRpBOxmQTBVoZc0ILih5PyePgO30z77qump2R/EWQvNqZlu0lKIjYiruCfm/gCnIzsWApYLRUj/Obq6Xqu4MOUXVUnWfmV8sRSTLMwh4z+pXoxc6dFive6kEXQku92MuWocB5fl2kdvyXCYep68sL3FWsF8QF1G7qJih1mlo5SQYH1sXigftkFpz4qvJzCWZVq8h1Z0c6NkaX//987CyabxjZBSoy/brnG52d3SDiRwrdQaHKTw8Sv5hWS5oMWhoMWHoJrc+aduOnMahwZqxukgMn/l/uoMajDfEq1O0d9T6xY8w9kQNf222tewenE+w5flUd2d9v9CYKU4AnPGlFpZFi+i8q7lxsAYKV796HJXTlkeBLRZg1gDlc2mOKIt37oWZCnEwxVJtm+s7ZfoPslZ++lNWCHMYkIfs4jWBqJ1hS4pGSyrhgv0sGe7rVUy8pTwgq/UCAwEAAQ==";

function copyToClipboard() {
    /* Create a textarea element to copy the content to the clipboard. */
    var textArea = document.createElement("textarea");
    textArea.value = PUBLIC_KEY;
    /* Append the textarea on the page. */
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    /* Remove the textarea from the page. */
    document.body.removeChild(textArea);
    var key = document.getElementById("key");
    key.setAttribute("title", "Copied✔");
    var tooltip = bootstrap.Tooltip.getInstance(key);
    tooltip.dispose();
    init();
    tooltip = bootstrap.Tooltip.getInstance(key);
    tooltip.show();
    // alert("Public key is copied to the clipboard.");
}

function init() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
}