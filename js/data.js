// ===== DATA.JS — Listas de participantes =====

const EMPRESAS = [
    "Abastible", "Aeropuerto", "Aliservice", "Andina (Emboteladora y Transporte)",
    "Angloamerican", "Antofagasta Minerals", "Agrosuper", "Aramark",
    "BCI", "BHP Chile", "Cencosud (Jumbo / Santa Isabel)", "CMPC",
    "Cran Chile", "Dirección ChileCompra", "Empresas Arauco", "Enel Chile / Engie",
    "Enex", "Lipigas", "Local Shop", "Mall Plaza",
    "Mercado Libre", "Metro", "Simón de Cirene", "SMU (Unimarc)",
    "Sura", "Viña Chocalán", "Walmart Chile", "BHP Chile"
];

const CDN_LIST = [
    "CDN Aconcagua", "CDN Angol", "CDN Antofagasta", "CDN Alto Hospicio",
    "CDN Arica", "CDN Aysén", "CDN Calama", "CDN Cañete",
    "CDN Centro Cooperativo", "CDN Chillán", "CDN Chiloé", "CDN Chacabuco",
    "CDN Choapa", "CDN Concepción", "CDN Constitución", "CDN Copiapó",
    "CDN Coquimbo", "CDN Coyaique", "CDN Curicó", "CDN Del Ranco",
    "CDN Estación Central", "CDN Inakeyu", "CDN Independencia", "CDN Iquique",
    "CDN La Florida", "CDN La Serena", "CDN Las Condes", "CDN Linares",
    "CDN Los Angeles", "CDN Maipú", "CDN Marga Marga", "CDN Melipilla",
    "CDN Ñuñoa", "CDN Osorno", "CDN Limarí", "CDN San Pablo",
    "CDN Puente Alto", "CDN Puerto Montt", "CDN Puerto Natales", "CDN Puerto Varas",
    "CDN Punta Arenas", "CDN Quilicura", "CDN Quillota", "CDN Rancagua",
    "CDN Rapa Nui", "CDN San Antonio", "CDN San Bernardo", "CDN San Carlos",
    "CDN San Fernando", "CDN San Pedro de Atacama", "CDN Santa Cruz", "CDN Santiago",
    "CDN Talagante", "CDN Talca", "CDN Talcahuano", "CDN Tamaruga",
    "CDN Temuco", "CDN Valdivia", "CDN Vallenar", "CDN Valparaíso",
    "CDN Villarrica", "CDN Viña del Mar"
];

function obtenerFechasNoviembre() {
    const fechas = [];
    for (let i = 4; i <= 29; i++) {
        const fecha = new Date(2026, 10, i);
        if (fecha.getDay() !== 0 && fecha.getDay() !== 6) {
            fechas.push(`2026-11-${String(i).padStart(2, '0')}`);
        }
    }
    return fechas;
}

function obtenerHorarios() {
    const horarios = [];
    for (let h = 8; h <= 17; h++) {
        for (let m of [0, 30]) {
            if (h === 8 && m === 0) continue;
            if (h === 17 && m === 30) continue;
            horarios.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
        }
    }
    return horarios;
}

const FECHAS_DISPONIBLES = obtenerFechasNoviembre();
const HORARIOS_DISPONIBLES = obtenerHorarios();
