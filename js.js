//Funcion de lectura (recibe un input *file* capturado del Form)
    function readFile(input) {
        //Zona de previsualizar capturada en Variable
        var previewZone = document.getElementById('previsual');
        if (input.files && input.files[0]) {
            //Mostrar boton Cancelar Imagen y el img de Previsual
            document.getElementById('cancelImg').style.display = 'block';
            document.getElementById('previsual').style.display = 'block';
            document.getElementById('imagen').style.display = 'none';
            //Instancia lector
            var reader = new FileReader();
            //Funcion al Cargar la Imagen
            reader.onload = function (e) {
                previewZone.src = e.target.result;
                var previsual = document.getElementById('previsual');
                previsual.appendChild(previewZone);

            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    //Capturar el archivo y mandarlo a la funcion 'Readfile()'
    var archivo = document.getElementById('imagen');
    archivo.onchange = function (e) {
        readFile(e.srcElement);
    }
    //Funcion limpiar imagen(resetear valores)
    function limpiar() {
        document.getElementById('imagen').value = null;
        document.getElementById('cancelImg').style.display = 'none';
        document.getElementById('previsual').src = null;
        document.getElementById('previsual').style.display = 'none';
        document.getElementById('imagen').style.display = 'block';
    }
