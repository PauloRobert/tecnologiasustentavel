function validar(dom, tipo) {

    document.getElementById("kw").focus();
    switch (tipo) {
        case 'num': var regex = /[A-Za-z]/g; break;
        case 'text': var regex = /\d/g; break;
    }
    dom.value = dom.value.replace(regex, "");
}

