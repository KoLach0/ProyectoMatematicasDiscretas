var _MainMatriz = [];
$(function () {
    Swal.fire({
        title: 'Ingresa el número de elementos de la matriz',
        input: 'number',
        showCancelButton: false,
        confirmButtonText: 'Listo',
        showLoaderOnConfirm: true,
        allowOutsideClick:false,
        preConfirm: (data) => {
          CreateMatriz(parseInt(data));
        },
      }).then((result) => {

      })
})


function CreateMatriz(params) {
  _MainMatriz = new Array(params); 
  var Iscell = true;

  for (var i = 0; i < params; i++) {  
    _MainMatriz[i] = new Array(params);
    Iscell = (i % 2 ==  0 ? true : false);
    $("#board").append("<div id='row_"+i+"' class='row'></div>");
     for (var j = 0; j < params; j++) {
      _MainMatriz[i][j] = "0";
      $("#row_"+i+"").append('<div id="'+i+'_'+j+'" class="cell '+(Iscell?"white":"black")+'"></div>');
      Iscell = (Iscell?false:true);

     }
  }
}