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

function ValidarMatriz() {
  $("#matriz input[type=text]").each(function(){
    if ($(this).val() == "") {
        $(this).val("0");
    }
});

// validador reflexiva
var no_reflexiva = 0;
for (var i = 1; i < (nextinput+1); i++) {
    if (parseInt($("#"+i+"_"+i).val()) != 1 ) {
       no_reflexiva = no_reflexiva+1;
    }   
}
if (no_reflexiva == 0) {
    if ($("#reflexiva").hasClass("glyphicon-remove")) {
        $("#reflexiva").removeClass("glyphicon-remove").addClass( "glyphicon-ok" );
    }
    if ($("#reflexiva").hasClass("glyphicon-question-sign")) {
        $("#reflexiva").removeClass("glyphicon-question-sign").addClass( "glyphicon-ok" );
    }       
}
else{
    if ($("#reflexiva").hasClass("glyphicon-ok")) {
        $("#reflexiva").removeClass("glyphicon-question-sign").addClass( "glyphicon-remove" );
    }
    if ($("#reflexiva").hasClass("glyphicon-question-sign")) {
        $("#reflexiva").removeClass("glyphicon-question-sign").addClass( "glyphicon-remove" );
    } 
}
// -------------------
// validador irreflexiva
var no_irreflexiva = 0;
for (var i = 1; i < (nextinput+1); i++) {
    if (parseInt($("#"+i+"_"+i).val()) != 0 ) {
       no_irreflexiva = no_irreflexiva+1;
    }   
}
if (no_irreflexiva == 0) {
    if ($("#irreflexiva").hasClass("glyphicon-remove")) {
        $("#irreflexiva").removeClass("glyphicon-remove").addClass( "glyphicon-ok" );
    }
    if ($("#irreflexiva").hasClass("glyphicon-question-sign")) {
        $("#irreflexiva").removeClass("glyphicon-question-sign").addClass( "glyphicon-ok" );
    }       
}
else{
    if ($("#irreflexiva").hasClass("glyphicon-ok")) {
        $("#irreflexiva").removeClass("glyphicon-question-sign").addClass( "glyphicon-remove" );
    }
    if ($("#irreflexiva").hasClass("glyphicon-question-sign")) {
        $("#irreflexiva").removeClass("glyphicon-question-sign").addClass( "glyphicon-remove" );
    } 
}
// -------------------
// validador simetrica
var no_simetrica = 0;

// <crea la transpuesta de la matriz>

for (var i = 1; i < (nextinput+1); i++) {
    for (var j = 1; j < (nextinput+1); j++) {
        $("#t_"+i+"_"+j).val($("#"+j+"_"+i).val());
    }   
}

// <valida la transpuesta de la matriz>

for (var i = 1; i < (nextinput+1); i++) {
    for (var j = 1; j < (nextinput+1); j++) {

        if ($("#t_"+i+"_"+j).val() != $("#"+i+"_"+j).val()) {

            no_simetrica = no_simetrica+1;
        }
        
    }   
}

if (no_simetrica == 0) {
    if ($("#simetrica").hasClass("glyphicon-remove")) {
        $("#simetrica").removeClass("glyphicon-remove").addClass( "glyphicon-ok" );
    }
    if ($("#simetrica").hasClass("glyphicon-question-sign")) {
        $("#simetrica").removeClass("glyphicon-question-sign").addClass( "glyphicon-ok" );
    }       
}
else{
    if ($("#simetrica").hasClass("glyphicon-ok")) {
        $("#simetrica").removeClass("glyphicon-question-sign").addClass( "glyphicon-remove" );
    }
    if ($("#simetrica").hasClass("glyphicon-question-sign")) {
        $("#simetrica").removeClass("glyphicon-question-sign").addClass( "glyphicon-remove" );
    } 
}
// -------------------
// asimetrica
var no_asimetrica = 0;

for (var i = 1; i < (nextinput+1); i++) {
    for (var j = 1; j < (nextinput+1); j++) {
        if ($("#t_"+i+"_"+j).val() != 0 && $("#"+i+"_"+j).val() != 0) {
            if ($("#t_"+i+"_"+j).val() == $("#"+i+"_"+j).val()) {

            no_asimetrica = no_asimetrica+1;
            }
        }
    }   
}

if (no_asimetrica == 0) {
    if ($("#asimetrica").hasClass("glyphicon-remove")) {
        $("#asimetrica").removeClass("glyphicon-remove").addClass( "glyphicon-ok" );
    }
    if ($("#asimetrica").hasClass("glyphicon-question-sign")) {
        $("#asimetrica").removeClass("glyphicon-question-sign").addClass( "glyphicon-ok" );
    }       
}
else{
    if ($("#asimetrica").hasClass("glyphicon-ok")) {
        $("#asimetrica").removeClass("glyphicon-question-sign").addClass( "glyphicon-remove" );
    }
    if ($("#asimetrica").hasClass("glyphicon-question-sign")) {
        $("#asimetrica").removeClass("glyphicon-question-sign").addClass( "glyphicon-remove" );
    } 
}

// -------------------
// antisimetrica
var no_antisimetrica = 0;

for (var i = 1; i < (nextinput+1); i++) {
    for (var j = 1; j < (nextinput+1); j++) {
        if (i != j) {
            if ($("#"+i+"_"+j).val() != 0) {

            no_antisimetrica = no_antisimetrica+1;
            }
        }
    }   
}

if (no_antisimetrica == 0) {
    if ($("#antisimetrica").hasClass("glyphicon-remove")) {
        $("#antisimetrica").removeClass("glyphicon-remove").addClass( "glyphicon-ok" );
    }
    if ($("#antisimetrica").hasClass("glyphicon-question-sign")) {
        $("#antisimetrica").removeClass("glyphicon-question-sign").addClass( "glyphicon-ok" );
    }       
}
else{
    if ($("#antisimetrica").hasClass("glyphicon-ok")) {
        $("#antisimetrica").removeClass("glyphicon-question-sign").addClass( "glyphicon-remove" );
    }
    if ($("#antisimetrica").hasClass("glyphicon-question-sign")) {
        $("#antisimetrica").removeClass("glyphicon-question-sign").addClass( "glyphicon-remove" );
    } 
}

// -------------------
$("#table").show(); 

}

function GenerarGrafo() {
  new sigma({
    container: $('.content-grafo')[0],
    graph: {
      "nodes": [
        {
          "id": "n0",
          "label": "A node",
          "x": 0,
          "y": 0,
          "size": 3
        },
        {
          "id": "n1",
          "label": "Another node",
          "x": 3,
          "y": 1,
          "size": 2
        },
        {
          "id": "n2",
          "label": "And a last one",
          "x": 1,
          "y": 3,
          "size": 1
        }
      ],
      "edges": [
        {
          "id": "e0",
          "source": "n0",
          "target": "n1"
        },
        {
          "id": "e1",
          "source": "n1",
          "target": "n2"
        },
        {
          "id": "e2",
          "source": "n2",
          "target": "n0"
        }
      ]
    },
    settings: {
      defaultNodeColor: '#ec5148',
      sideMargin: 2
    }
  });
}


 
  




//https://github.com/jacomyal/sigma.js