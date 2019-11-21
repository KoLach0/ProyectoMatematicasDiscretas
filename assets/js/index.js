var _MainMatriz = [];
$(function () {
    Swal.fire({
        title: 'Ingresa el número de elementos de la matriz',
        input: 'number',
        showCancelButton: false,
        confirmButtonText: 'Listo',
        showLoaderOnConfirm: true,
        allowOutsideClick:false
      }).then((result) => {
        var sizeMatriz = parseInt(result.value);
        Swal.fire({
          title: '¿Desea cargar la matriz de forma automatica?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si!',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.value) {
            CreateMatriz(sizeMatriz,result.value);
          }else{
            CreateMatriz(sizeMatriz,false);
          }
        })
      })
})


$(document).on("keyup",".cell",function () {
  if (parseInt($(this).val()) != 0 && parseInt($(this).val()) != 1) {
    $(this).val(""); 
  }
})

function CreateMatriz(size,auto) {
  _MainMatriz = new Array(size); 
  var Iscell = true;
  var valor = 0;
  for (var i = 0; i < size; i++) {  
    _MainMatriz[i] = new Array(size);
    Iscell = (i % 2 ==  0 ? true : false);
    $("#board").append("<div id='row_"+i+"' class='row'></div>");
     for (var j = 0; j < size; j++) {
      valor = Math.round(Math.random() * (1 - 0) + 0);
      _MainMatriz[i][j] = valor;
      $("#row_"+i+"").append('<div id="'+i+'_'+j+'" ><input type="number" class="cell '+(Iscell?"white":"black")+'" value="'+(auto?valor:"")+'" '+(auto?"readonly":"")+' ></div>');
      Iscell = (Iscell?false:true);

     }
  }
}
//https://github.com/jacomyal/sigma.js