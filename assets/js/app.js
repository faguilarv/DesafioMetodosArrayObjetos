document.write('<p>Estadisticas centro medico ñuñoa</p>');

var radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];
var tableRadiologia = document.getElementById('tableRadiologia')

tableRadiologia.innerHTML = ""

radiologia.forEach((item, index, array) => {
    tableRadiologia.innerHTML += `
    <tr>
        <td scope="row">${item.hora}</td>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>
    `
})

var traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

var tableTraumatologia = document.getElementById('tableTraumatologia')

tableTraumatologia.innerHTML = ""

traumatologia.forEach((item, index, array) => {
    tableTraumatologia.innerHTML += `
    <tr>
        <td scope="row">${item.hora}</td>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>
    `
})

var dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];
var tableDental = document.getElementById('tableDental')

tableDental.innerHTML = ""

dental.forEach((item, index, array) => {
    tableDental.innerHTML += `
    <tr>
        <td scope="row">${item.hora}</td>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>
    `
})


// punto 1 nuevas horas a traumatologia:
var nuevasHoras = [
    { hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
    { hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
    { hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' },
];
//agregamos las horas usando el metodo push
nuevasHoras.forEach(nuevaHora => {
    traumatologia.push(nuevaHora);
});
//ordenamos el array por hora
traumatologia.sort((a, b) => {
    return new Date('1970/01/01' + a.hora) - new Date('1970/01/01' + b.hora);
});
//actualizamos la tabla
tableTraumatologia.innerHTML = ""

traumatologia.forEach((item, index, array) => {
    tableTraumatologia.innerHTML += `
    <tr>
        <td scope="row">${item.hora}</td>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>
    `
})

//punto 2 agregar y quitar el ultimo elemento del array radiologia usaremos shift y pop
radiologia.shift();
radiologia.pop();
//actualizamos la tabla
var tableRadiologia = document.getElementById('tableRadiologia');
tableRadiologia.innerHTML = "";
radiologia.forEach((item) => {
    tableRadiologia.innerHTML +=
        `
    <tr>
        <td scope="row">${item.hora}</td>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>
    `;
});

//punto 3 imprimir en pag html creamos un id listaDental
var listaDental = document.getElementById('listaDental')
listaDental.innerHTML = ""
dental.forEach((item) => {
    listaDental.innerHTML += `<p>${item.hora} - ${item.especialista}
     - ${item.paciente} - ${item.rut} - ${item.prevision}</p>`
})
//punto 4 imprimir el listado total de pacientes c/u por cada parrafo
var listadoTotalPacientes = radiologia.concat(traumatologia, dental);

// Obtenemos el id donde vamos a insertar los nombres de los pacientes
var listaPacientes = document.getElementById('listaPacientes');

//  agregamos cada nombre de paciente al HTML
listadoTotalPacientes.forEach(function (paciente) {
    listaPacientes.innerHTML += `<p>${paciente.paciente}</p>`;
});
//punto 5 Paciente que indican ser Isapre
var pacienteIsapre = dental.filter(function (paciente) {
    return paciente.prevision === 'ISAPRE'

})
var tableDentalIsapre = document.getElementById('tableDentalIsapre')

tableDentalIsapre.innerHTML = ""

pacienteIsapre.forEach((item) => {
    tableDentalIsapre.innerHTML +=
        `
    <tr>
        <td scope="row">${item.hora}</td>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>
    `;
});
//punto 6 Paciente que indican ser Fonasa
var pacienteFonasa = traumatologia.filter(function (paciente) {
    return paciente.prevision === 'FONASA'

})
var tableTraumatologiaFonasa = document.getElementById('tableTraumatologiaFonasa')

tableTraumatologiaFonasa.innerHTML = ""

pacienteFonasa.forEach((item) => {
    tableTraumatologiaFonasa.innerHTML +=
        `
    <tr>
        <td scope="row">${item.hora}</td>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    </tr>
    `;
});


document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.</p>`);

