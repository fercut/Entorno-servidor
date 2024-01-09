const comparaFecha = (fecha1, fecha2) => {
    const date1 = new Date(fecha1);
    const date2 = fecha2 ? new Date(fecha2) : new Date();

    if(date1 <= date2) {
        const fecha = {
            startDate: fecha1,
            endDate: date2.toISOString(),
        }
        return fecha;
    }else if (date1 > date2) {
        const fecha = {
            startDate: date2.toISOString(),
            endDate: fecha1
        }
        return fecha;
    }
}
export default comparaFecha;