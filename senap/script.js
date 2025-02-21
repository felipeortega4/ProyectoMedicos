document.addEventListener('DOMContentLoaded', () => {
    const eventoSelect = document.getElementById('evento');
    const formRegistro = document.getElementById('formRegistro');
    const tipoDocSelect = document.getElementById('tipoDoc');
    const numDocInput = document.getElementById('numDoc');
    const nombreInput = document.getElementById('nombre');
    const cursoInput = document.getElementById('curso');
    const correoInput = document.getElementById('correo');
    const busquedaInput = document.getElementById('busqueda');
    const buscarBtn = document.getElementById('buscarBtn');
    const listaRegistrados = document.createElement('select'); // Crear un select para mostrar los resultados de búsqueda
    const infoRegistrado = document.createElement('div'); // Crear un div para mostrar los detalles del registrado
    const registrados = [
        { tipoDoc: 'Cédula', numDoc: '12345678', nombre: 'Juan Pérez', curso: 'Curso 1', correo: 'juan@correo.com', evento: 'Evento 1' },
        { tipoDoc: 'Pasaporte', numDoc: '98765432', nombre: 'Ana García', curso: 'Curso 2', correo: 'ana@correo.com', evento: 'Evento 2' },
        { tipoDoc: 'DNI', numDoc: '11223344', nombre: 'Carlos López', curso: 'Curso 3', correo: 'carlos@correo.com', evento: 'Evento 3' },
        { tipoDoc: 'Cédula', numDoc: '55667788', nombre: 'María Sánchez', curso: 'Curso 1', correo: 'maria@correo.com', evento: 'Evento 1' },
        { tipoDoc: 'Pasaporte', numDoc: '44332211', nombre: 'Pedro Rodríguez', curso: 'Curso 2', correo: 'pedro@correo.com', evento: 'Evento 2' },
        { tipoDoc: 'DNI', numDoc: '99887766', nombre: 'Laura Fernández', curso: 'Curso 3', correo: 'laura@correo.com', evento: 'Evento 3' }
    ];

    // Inicialmente ocultar el select de resultados
    listaRegistrados.style.display = 'none';

    eventoSelect.addEventListener('change', (event) => {
        if (event.target.value) {
            document.getElementById('infoEvento').innerHTML = `Has seleccionado el evento: ${event.target.value}`;
            formRegistro.style.display = 'block';  // Mostrar el formulario de registro
        } else {
            document.getElementById('infoEvento').innerHTML = '';
            formRegistro.style.display = 'none';  // Ocultar el formulario de registro
        }
    });

    // Manejo del formulario de registro
    formRegistro.addEventListener('submit', (event) => {
        event.preventDefault();

        const tipoDoc = tipoDocSelect.value;
        const numDoc = numDocInput.value.trim();
        const nombre = nombreInput.value.trim();
        const curso = cursoInput.value.trim();
        const correo = correoInput.value.trim();
        const evento = eventoSelect.value;

        if (tipoDoc && numDoc && nombre && curso && correo && evento) {
            // Agregar el registrado al arreglo
            registrados.push({ tipoDoc, numDoc, nombre, curso, correo, evento });

            // Limpiar los campos del formulario
            tipoDocSelect.value = 'Cédula';
            numDocInput.value = '';
            nombreInput.value = '';
            cursoInput.value = '';
            correoInput.value = '';

            // Ocultar el formulario de registro
            formRegistro.style.display = 'none';
        }
    });

    // Buscar registrado por nombre o número de documento
    buscarBtn.addEventListener('click', () => {
        const busqueda = busquedaInput.value.trim().toLowerCase();

        if (busqueda) {
            // Filtrar por nombre o número de documento
            const resultados = registrados.filter(r => 
                r.nombre.toLowerCase().includes(busqueda) || r.numDoc.includes(busqueda)
            );

            // Limpiar la lista de resultados previos
            listaRegistrados.innerHTML = '<option value="">--Selecciona un registrado--</option>';

            // Agregar los resultados a la lista
            resultados.forEach(registrado => {
                const option = document.createElement('option');
                option.value = registrado.numDoc;
                option.textContent = registrado.nombre;
                listaRegistrados.appendChild(option);
            });

            // Si hay resultados, mostrar el select
            if (resultados.length > 0) {
                listaRegistrados.style.display = 'block';
            } else {
                alert('No se encontró ningún registrado con ese nombre o número de documento.');
                listaRegistrados.style.display = 'none';
            }
        } else {
            // Si el campo de búsqueda está vacío, mostrar toda la lista
            listaRegistrados.innerHTML = '<option value="">--Selecciona un registrado--</option>';
            registrados.forEach(registrado => {
                const option = document.createElement('option');
                option.value = registrado.numDoc;
                option.textContent = registrado.nombre;
                listaRegistrados.appendChild(option);
            });
            listaRegistrados.style.display = 'block';
        }
    });

    // Mostrar detalles del registrado seleccionado
    listaRegistrados.addEventListener('change', (event) => {
        const seleccionado = registrados.find(r => r.numDoc === event.target.value);
        if (seleccionado) {
            infoRegistrado.innerHTML = `
                <p>Tipo de Documento: ${seleccionado.tipoDoc}</p>
                <p>Número de Documento: ${seleccionado.numDoc}</p>
                <p>Nombre: ${seleccionado.nombre}</p>
                <p>Curso: ${seleccionado.curso}</p>
                <p>Correo: ${seleccionado.correo}</p>
                <p>Evento: ${seleccionado.evento}</p>
            `;
        } else {
            infoRegistrado.innerHTML = '';
        }
    });

    // Agregar el select de resultados y el div de detalles al DOM
    document.body.appendChild(listaRegistrados);
    document.body.appendChild(infoRegistrado);
});