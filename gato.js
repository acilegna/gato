let turno = false;
let victoria = false;

const handleClick = ( event ) =>
{    //sacar id del evento que se recibe
    const { id } = event.target;
    // hago referancia a la etiqueta id guardando en constante div
    const div = document.getElementById( id );
    if ( div.innerText === "" && victoria == false )
    {
        // agrega texto, SI TURNO verdadero ponme O si es false pon X
        div.innerText = turno ? 'O' : 'X';
        verificaVictoria();
        //TURNO= TRUE CONTRARIO A COMO SE INICIALIZO
        turno = !turno;
    }
}

const verificaVictoria = () =>
{
    const div1 = document.getElementById( 1 );
    const div2 = document.getElementById( 2 );
    const div3 = document.getElementById( 3 );
    const div4 = document.getElementById( 4 );
    const div5 = document.getElementById( 5 );
    const div6 = document.getElementById( 6 );
    const div7 = document.getElementById( 7 );
    const div8 = document.getElementById( 8 );
    const div9 = document.getElementById( 9 );

    const forma1 = div1.innerText === div2.innerText && div1.innerText === div3.innerText && div1.innerText !== "";
    const forma2 = div4.innerText === div5.innerText && div4.innerText === div6.innerText && div4.innerText !== "";
    const forma3 = div7.innerText === div8.innerText && div7.innerText === div9.innerText && div7.innerText !== "";

    const forma4 = div1.innerText === div4.innerText && div1.innerText === div7.innerText && div7.innerText !== "";
    const forma5 = div2.innerText === div5.innerText && div2.innerText === div8.innerText && div2.innerText !== "";
    const forma6 = div3.innerText === div6.innerText && div3.innerText === div9.innerText && div3.innerText !== "";

    const forma7 = div1.innerText === div5.innerText && div1.innerText === div9.innerText && div1.innerText !== "";
    const forma8 = div3.innerText === div5.innerText && div3.innerText === div7.innerText && div3.innerText !== "";
    if ( forma1 )
    {
        const linea = document.getElementById( 'linea' );
        linea.style.height = '10px';
        linea.style.width = '100%';
        linea.style.top = '85px';
        victoria = !victoria;
        alert( "ganaste" );
    }
    else if ( forma2 )
    {
        const linea = document.getElementById( 'linea' );
        linea.style.height = '10px';
        linea.style.width = '100%';
        linea.style.top = '290px';
        victoria = !victoria;
        alert( "ganaste" );
    }
    else if ( forma3 )
    {
        const linea = document.getElementById( 'linea' );
        linea.style.height = '10px';
        linea.style.width = '100%';
        linea.style.top = '495px';
        victoria = !victoria;
        alert( "ganaste" );
    }
    else if ( forma4 )
    {
        const linea = document.getElementById( 'linea' );
        linea.style.height = '100%';
        linea.style.width = '10px';
        linea.style.top = '0px';
        linea.style.left = '92px'
        victoria = !victoria;
        alert( "ganaste" );
    }
    else if ( forma5 )
    {
        const linea = document.getElementById( 'linea' );
        linea.style.height = '100%';
        linea.style.width = '10px';
        linea.style.top = '0px';
        linea.style.left = '293px'
        victoria = !victoria;
        alert( "ganaste" );
    }
    else if ( forma6 )
    {
        const linea = document.getElementById( 'linea' );
        linea.style.height = '100%';
        linea.style.width = '10px';
        linea.style.top = '0px';
        linea.style.left = '495px'
        victoria = !victoria;
        alert( "ganaste" );
    }
    else if ( forma7 )
    {
        const diag2 = document.getElementById( 'diag2' );
        diag2.style.display = "block";


        victoria = !victoria;
        alert( "ganaste" );
    } else if ( forma8 )
    {
        const diag1 = document.getElementById( 'diag1' );
        diag1.style.display = "block";

        victoria = !victoria;
        alert( "ganaste" );
    }
}

const cleanLine = () =>
{
    const linea = document.getElementById( 'linea' );
    const diag1 = document.getElementById( 'diag1' );
    const diag2 = document.getElementById( 'diag2' );
    diag1.style.display = "none";
    diag2.style.display = "none";
    linea.style.height = '0px';
    linea.style.width = '0%';
    linea.style.top = '0px';
}
const divs = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const reload = () =>
{
    for ( let i = 1; i < divs.length; i++ )
    {
        const div = document.getElementById( i );
        //igualamos el indice al div 
        divs[ i ] = div.innerText;
        div.innerText = "";
    }
    cleanLine();
}

