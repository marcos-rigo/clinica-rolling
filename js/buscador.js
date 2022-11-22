const doctors= JSON.parse(localStorage.getItem('doctors'))
const listaBusqueda = document.getElementById('lista-busqueda');
export function buscar() {
    
        if ( listaBusqueda.hasChildNodes() )
        {
            while ( listaBusqueda.childNodes.length != 0 )
            {
                listaBusqueda.removeChild( listaBusqueda.firstChild );
            }
        }
        const input = document.getElementById('buscador-navbar');
        let query = input.value;
        query=query.toLowerCase();
        result=[];
        for(let i=1; i<=query.length; i++)
        {
            let aux=query.substring(0,i)
            result = doctors.filter(doctor => aux === doctor.name.toLowerCase().substring(0,i));
        }
        console.log(result);
        result.map(doctor => {
            const resultadoBusqueda = document.createElement('li');
            resultadoBusqueda.innerHTML = `
            <div class="row no-gutters">
            <div class="col-2" style="height:40px;">
                <img src="${doctor.imagen}" class="card-img w-100 h-100" alt="...">
            </div>
            <div class="col-8 ml-2">
                <a href="test.html#${doctor.id}" class="text-decoration-none color1 commontexts"><h5 class="card-title">${doctor.name}</h5></a>
            </div>
            </div>
            <hr style="margin:1px 0px 1px 0px">
            `;
            listaBusqueda.appendChild(resultadoBusqueda);
        })
}