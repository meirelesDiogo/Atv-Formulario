
document.getElementById("telefone").addEventListener("input", function(e) {
    let v = e.target.value.replace(/\D/g, ""); // só números

    // limita a 11 dígitos
    v = v.substring(0, 11);

    // aplica a máscara de forma simples
    if (v.length >= 7) {
        e.target.value = `(${v.substring(0,2)}) ${v.substring(2,7)}-${v.substring(7)}`;
    } else if (v.length > 2) {
        e.target.value = `(${v.substring(0,2)}) ${v.substring(2)}`;
    } else {
        e.target.value = v;
    }
});