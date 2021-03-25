/*const pi = 3.1416;
console.log(pi);

var pi = 3.1415;

var resltado = 10//0;
console.log(res//ltado);
alert("click");
alert("Bienvenidos a la clase");
console.log("Bienvenidos a la clase");
var click = prompt ("¿A que clase deas ingresar?");
alert ("Bienvenidos a la clase " + click);
(function (){
let enlace = document.querySelector("#enlace");
enlace.addEventListener('click', function(){

    alert("Bienvenidos al sistema");
    console.log("Bienvenidos al sistema");
})

})
function resultadoOperacion(datoUno, datoDos){

   let numero = datoUno;
   let numero = datoDos;
    let resultado = numUno + numDos;

    document.getElementById("resultado").value = resultado;

}*/ //practicas



( función ( )  {
    consola . log ( "hola" ) ;


    /*
        let atributo = document.querySelector ('# btn');
        atributo.addEventListener ('click', function () {
            alert ('En un evento');
        })

     let atr = document.querySelector ('# btn');
      atr.addEventListener ('clic', saludar);
      función saludar (e) {
          alerta (e.target);
      } 
    // guardar datos

     localStorage.setItem ('nombre', 'Maycol');
    let n = localStorage.getItem ('nombre'); 

     // eliminar ese dato

    localStorage.removeItem ('nombre');
 
    // descanso del parametro

    función enviarnombre (... idnombre) {
         idnombre.forEach (id => console.log (id));
     }
     enviarnombre ("Jacksel", "Nahun");
      

    // destruyendo matrices

    let uraccan = ["Matagalpa", "Waslala"];
    sea ​​[rs1, rs2] = uraccan;
    alerta (rs2);

    // destruy array con rest

     let colore = ["negro", "blanco", "azul"];   
        let color1, colorN;
        [color1, ... colorN] = colore;
        console.log (colorN);
 
    // objeto con descanso

    sea celulares = {
     id: 1,
     nombre: 'Jacksel',
     dirrecion: '380',
     celular: 87110994
     }
     let {id, ... datos} = celulares
     console.log (datos); 

    // propagación de sintaxis

    función iniciarcell (Huawei,Honor, Asus) {
         console.log (Huawei,Honor, Asus);
     }
         let celular = ['Huawei', 'Honor 'Asus'];
         iniciarcel (... celular); 
    
     // vida

    (función () {
             console.log ('la función');
             dejar app = (function () {
                 deje cellid = 1221;
                 console.log ('1221');
                 regreso{};
             }) ();
         }) (); 

    // cierres

    let app = (function () {
           deje cellid = 1221;
           deje getId = function () {
                   volver cellid;
           };
           regreso{
               getId: getId
           };
           
       })
       console.log (app.getId ()); 
    
       // la palabra clave esto

    sea fn = function () {
         console.log (esta === ventana);
     };
     fn (); // verdadero
     deje o = {
         cellid: 1221,
         getid: function () {
             devuelve this.cellid;
         }
     };
     console.log (o.getid ());

    //llamada

    sea o = {
           cellid: 1221,
           getid: function () {
               devuelve this.celid;
           }
           
       };
       let newcell = {cellid: 1221};
       console.log (o.getid.call (newcell));
    
       // aplly

    dejar objet = {
          cellid: 1221,
          getid: function (prefijo) {
              return prefix + this.celid; 
          }
         
      };
      let newcell = {cellid: 87110994};
      console.log (objet.getid.apply (newcell, ['id:'])); 
    
      //compartimiento

    dejar objet = {
        cellid: 1221,
        getid: function () {
            devuelve this.cellid;
        }
    };
    let newcell = {cellid: 87110994};
    dejar newfn = objet.getid.bind (newcell);
    console.log (newfn ());

    // funciones de flecha

    deje getid = () => 111
    console.log (getid ()); 
     deje getid = pref => pref + 2020;
    console.log (getid ('id:')); 
    
                let getid = (pref, suf) => {
                    return pref + 1515 + suf;
                }
                console.log (getid ('id:', '!')); 

     
                sea ​​multi = (a, b, c) => (a * b * c);
                alerta (multi (2,2,2));
     

    // iterando matriz

    sea abc = [
            {cellid: 111, estilo: 'gold'},
            {cellid: 222, estilo: 'rouse'},
            {cellid: 333, estilo: 'green'}
        ];
        abc.forEach (cell => console.log (cell));
        abc.forEach ((cell, índice) => console.log (cell, índice));
    
        // filtando matriz

    sea abc = [
          {idcell: 111, estilo: 'Black'},
          {idcell: 222, estilo: 'rosue'},
          {idcell: 333, estilo: 'green'}
      ];
      deje convertibles = abc.filter (
          cell => cel.estilo === 'rouse'
      );
      console.log (convertibles); 

    // matriz probando

     sea abc = [
         {idcell: 111, estilo: 'gold'},
         {idcell: 222, estilo: 'rouse'},
         {idcell: 333, estilo: 'green'}
     ];
     resultado = abc.every (
         cell => cel.idcel> 0
     );
     console.log (resultado);
     
    */ // encontrar primer coincidencia

     deja abcd = [
         {idcell: 123, estilo: 'gold'},
         {idcell: 321, estilo: 'rouse'},
         {idcell: 987, estilo: 'green'},
         {idcell: 1003, estilo: 'RGB'}
     ];
     dejar celda = abcd.find (
         celda => celda.idcell> 1000
     );
     console.log (celda); 
     deje cell = {
               id: 111,
               estilo: 'gold'
           };
           console.log (JSON.stringify (cell));
            
    


} ) ( ) ;