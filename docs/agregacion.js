function agregar(nivel) {
    if ($("#info").prop('checked', true)) {
        $("#narrativaHechos").append(`
            <textarea rows="5" cols="110" type="text" name="narrativaHech" id="narrativaHech"
                    maxlength="2000"></textarea>
                  <label for="continuacionNarrativa">Continuacion Narrativa en Anexo G</label>
                  <input type="checkbox" name="continuacionNarrativa" id="continuacionNarrativa" onchange="agregar(` + (nivel + 1) + `)"></input>
            `)
    }


}