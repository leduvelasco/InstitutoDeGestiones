export interface LandingData {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  beneficios: string[];
  requisitos?: string[];
  faqs: { q: string; a: string }[];
  service: string;
}

export const LANDINGS: LandingData[] = [
  {
    slug: 'estudio-migratorio',
    eyebrow: 'Empieza aquí',
    title: 'Estudio Migratorio Gratuito — Instituto de Gestiones',
    description: 'Analizamos tu caso migratorio sin coste: qué vías legales aplican a tu situación, requisitos y plazos reales. Empieza tu camino a España.',
    h1: 'Estudio Migratorio Gratuito: descubre tu vía legal para vivir en España',
    subtitle: 'Analizamos tu caso sin coste y te indicamos qué visado o residencia te corresponde. Diagnóstico en 24 h.',
    beneficios: [
      'Análisis de tu situación familiar, académica y laboral',
      'Identificación de todas las vías legales aplicables a tu caso',
      'Requisitos concretos, documentación necesaria y plazos reales',
      'Plan de acción con pasos y fechas recomendadas',
      'Sesión de resolución de dudas con un especialista',
    ],
    faqs: [
      { q: '¿Qué es un estudio migratorio y por qué empezar por aquí?', a: 'Es un análisis personalizado y gratuito de tu perfil. Te decimos qué vías legales aplican a tu caso concreto, qué requisitos debes cumplir y cuánto tarda cada una. Es el paso previo para evitar solicitar un visado que no te corresponde y perder tiempo y dinero.' },
      { q: '¿Cuánto tarda el diagnóstico?', a: 'Rellenas el formulario y un especialista revisa tu caso en menos de 24 horas laborables. Te contacta por WhatsApp con el diagnóstico y siguientes pasos.' },
      { q: '¿Es realmente gratuito y sin compromiso?', a: 'Sí. La evaluación no tiene coste ni te obliga a contratar nada. Nuestro objetivo es que tomes una decisión informada sobre tu proyecto migratorio.' },
    ],
    service: 'Estudio migratorio',
  },
  {
    slug: 'visado-de-estudios',
    eyebrow: 'Visados y Residencia',
    title: 'Visado de Estudios en España — Instituto de Gestiones',
    description: 'Estudia en España con residencia y autorización para trabajar hasta 30h semanales. Gestionamos tu visado de estudios completo. Evaluación gratuita en 24h.',
    h1: 'Visado de Estudios en España: estudia y trabaja legalmente',
    subtitle: 'La vía más rápida para vivir en España. Resolución en 30-90 días con autorización para trabajar 30h semanales.',
    beneficios: [
      'Análisis de tu caso y del centro de estudios',
      'Revisión y preparación de toda la documentación',
      'Legalizaciones y apostillas necesarias',
      'Presentación de la solicitud ante el consulado',
      'Preparación para la cita consular',
      'Seguimiento hasta la resolución y orientación de llegada',
    ],
    requisitos: [
      'Carta de admisión de un centro de enseñanza reconocido en España',
      'Medios económicos suficientes (mínimo 100% del IPREM mensual)',
      'Seguro médico privado sin carencias ni copagos',
      'Certificado de antecedentes penales apostillado',
      'Certificado médico oficial',
      'Pasaporte en vigor con al menos un año de validez',
    ],
    faqs: [
      { q: '¿Cuánto tarda en resolverse el visado?', a: 'La resolución suele llegar en 30-90 días. El principal riesgo no es la vía en sí, sino los errores de forma: seguros no válidos, medios económicos mal justificados o documentos sin apostillar.' },
      { q: '¿Puedo trabajar con el visado de estudios?', a: 'Sí, hasta 30 horas semanales con la autorización correspondiente. Te orientamos en ese trámite cuando llegue el momento.' },
      { q: '¿El visado de estudios incluye a mi familia?', a: 'Es individual. Para traer a tu pareja o hijos, el trámite es la reagrupación familiar, que se solicita desde España una vez tengas tu residencia activa.' },
      { q: '¿Cuándo debo empezar el trámite?', a: 'Recomendamos iniciar con 3-4 meses de antelación al inicio del curso. La cita consular puede tardar 6-8 semanas y la resolución otros 30-60 días.' },
    ],
    service: 'Visado de estudios',
  },
  {
    slug: 'residencia-legal',
    eyebrow: 'Visados y Residencia',
    title: 'Residencia Legal en España — Instituto de Gestiones',
    description: 'Conoce todas las vías para obtener y renovar tu residencia en España: no lucrativa, arraigo, modificación de estudios y más. Evaluación gratuita en 24h.',
    h1: 'Residencia Legal en España: la vía adecuada para tu situación',
    subtitle: 'Residencia no lucrativa, arraigo, familiar de comunitario y más. Te decimos cuál aplica a tu caso.',
    beneficios: [
      'Análisis completo de tu perfil familiar, académico, laboral y económico',
      'Identificación de la vía de residencia que mejor se adapta a tu situación',
      'Preparación y revisión de toda la documentación exigida',
      'Presentación telemática del expediente',
      'Seguimiento hasta la resolución',
      'Gestión de renovaciones a los 2 y 5 años',
    ],
    faqs: [
      { q: '¿Cuánto tarda el proceso de residencia?', a: 'Depende de la vía. Una residencia no lucrativa puede resolverse en 3-4 meses. Un arraigo suele tardar entre 3 y 6 meses. Te damos los plazos reales para tu caso concreto.' },
      { q: '¿Puedo obtener la residencia sin entrar como turista?', a: 'Sí. La vía recomendada es solicitar el visado de residencia en el consulado de tu país de origen. Entrar como turista y luego intentar regularizar es más complejo y no siempre funciona.' },
      { q: '¿Qué pasa cuando se vence la residencia?', a: 'Hay renovaciones a los 2 y 5 años, y a los 10 años la residencia de larga duración. Te avisamos antes de cada vencimiento para que no pierdas tu estatus legal.' },
    ],
    service: 'Residencia legal',
  },
  {
    slug: 'reagrupacion-familiar',
    eyebrow: 'Visados y Residencia',
    title: 'Reagrupación Familiar en España — Instituto de Gestiones',
    description: 'Trae a tu pareja e hijos a España de forma legal. Gestionamos tu reagrupación familiar completa: requisitos, plazos y trámites. Evaluación gratuita en 24h.',
    h1: 'Reagrupación Familiar: trae a los tuyos a España',
    subtitle: 'Si ya tienes residencia en España, reúne a tu pareja e hijos con todas las garantías legales.',
    beneficios: [
      'Estudio de viabilidad de tu solicitud de reagrupación',
      'Preparación del informe de vivienda y medios económicos',
      'Tramitación de la autorización de residencia por reagrupación',
      'Coordinación con el consulado en el país de origen de tu familia',
      'Seguimiento hasta la obtención del visado y la TIE',
    ],
    requisitos: [
      'Un año de residencia legal en España y haber solicitado la renovación',
      'Medios económicos suficientes para mantener a tu familia',
      'Vivienda adecuada: informe de alojamiento del ayuntamiento',
      'Seguro médico o alta en la Seguridad Social de cada familiar',
      'Documentación familiar apostillada (matrimonio, nacimiento)',
    ],
    faqs: [
      { q: '¿A quién puedo reagrupar?', a: 'Puedes reagrupar a tu cónyuge o pareja de hecho, hijos menores de 18 años, hijos mayores con discapacidad y ascendientes a cargo en los supuestos previstos por la norma.' },
      { q: '¿Cuánto tarda todo el proceso?', a: 'La resolución de la solicitud tarda entre 2 y 4 meses, y el visado consular otras 4-8 semanas. En total, cuenta con 4-6 meses desde que presentamos la solicitud hasta que tu familia está contigo.' },
      { q: '¿Necesito tener trabajo para reagrupar?', a: 'Depende de tu situación. Debes acreditar medios económicos suficientes. En la evaluación analizamos tu caso concreto y te decimos si cumples ese requisito.' },
    ],
    service: 'Reagrupación familiar',
  },
  {
    slug: 'homologacion-universitaria',
    eyebrow: 'Homologación',
    title: 'Homologación de Títulos Universitarios — Instituto de Gestiones',
    description: 'Homologa tu título universitario en España para ejercer tu profesión. Gestionamos el expediente completo ante el Ministerio. Evaluación gratuita en 24h.',
    h1: 'Homologación de Títulos Universitarios: ejerce tu profesión en España',
    subtitle: 'Medicina, derecho, ingeniería, arquitectura, docencia... Validamos tu título para que puedas trabajar en lo tuyo.',
    beneficios: [
      'Análisis de viabilidad: profesión, universidad y plan de estudios',
      'Revisión de documentos y apostillas',
      'Presentación telemática ante el Ministerio',
      'Seguimiento del expediente y respuesta a requerimientos',
      'Resolución: homologación, equivalencia o complementos formativos',
    ],
    requisitos: [
      'Título universitario apostillado',
      'Certificado académico de notas apostillado',
      'Plan de estudios (contenido de asignaturas) sellado por la universidad',
      'Acreditación de identidad (pasaporte o NIE)',
      'Tasa administrativa abonada',
    ],
    faqs: [
      { q: '¿Homologación o equivalencia? ¿Cuál necesito?', a: 'Para profesiones reguladas (medicina, derecho, arquitectura, ingeniería, enfermería, docencia) necesitas homologación. Para el resto de titulaciones existe la equivalencia, que reconoce tu título a nivel académico. Lo analizamos en tu evaluación gratuita.' },
      { q: '¿Cuánto tarda la homologación?', a: 'Según la profesión, entre 6 y 12 meses o más. Presentar la documentación completa y correctamente apostillada desde el inicio evita requerimientos que alargan el proceso.' },
      { q: '¿Puedo trabajar mientras se tramita?', a: 'Depende de tu situación migratoria. Si ya tienes residencia y permiso de trabajo, sí. Te orientamos sobre las opciones según tu caso.' },
    ],
    service: 'Homologación de títulos',
  },
  {
    slug: 'homologacion-no-universitaria',
    eyebrow: 'Homologación',
    title: 'Homologación de Títulos No Universitarios — Instituto de Gestiones',
    description: 'Homologa tu bachillerato, FP o ciclos formativos en España. Gestionamos el expediente completo. Evaluación gratuita en 24h.',
    h1: 'Homologación de Estudios No Universitarios: bachillerato y FP',
    subtitle: 'Valida tu bachillerato, formación profesional o ciclos formativos para estudiar o trabajar en España.',
    beneficios: [
      'Análisis de tu título y determinación del procedimiento aplicable',
      'Revisión y preparación de documentos apostillados',
      'Presentación del expediente ante el Ministerio',
      'Seguimiento hasta la resolución',
    ],
    requisitos: [
      'Título o diploma apostillado',
      'Certificado de estudios o notas apostillado',
      'Acreditación de identidad (pasaporte o NIE)',
      'Tasa administrativa abonada',
    ],
    faqs: [
      { q: '¿Qué estudios se pueden homologar?', a: 'Bachillerato, formación profesional, ciclos formativos de grado medio y superior, así como estudios primarios o secundarios equivalentes a la ESO.' },
      { q: '¿Cuánto tarda la homologación no universitaria?', a: 'La resolución suele tardar entre 3 y 8 meses según el tipo de estudios y la carga administrativa del Ministerio.' },
      { q: '¿Para qué sirve la homologación de bachillerato?', a: 'Es imprescindible para acceder a la universidad española, cursar una FP superior o presentarte a oposiciones.' },
    ],
    service: 'Homologación de títulos',
  },
  {
    slug: 'nacionalidad-espanola',
    eyebrow: 'Visados y Residencia',
    title: 'Nacionalidad Española — Instituto de Gestiones',
    description: '¿Cumples los años de residencia para pedir la nacionalidad española? Gestionamos tu expediente completo hasta la jura. Evaluación gratuita en 24h.',
    h1: 'Nacionalidad Española: tu proyecto migratorio culmina aquí',
    subtitle: 'Si ya cumples los años de residencia, te acompañamos hasta obtener el pasaporte español.',
    beneficios: [
      'Revisión de tu expediente y cumplimiento de plazos de residencia',
      'Obtención y apostilla de documentos en tu país de origen',
      'Inscripción en las pruebas CCSE/DELE si aplican',
      'Presentación telemática de la solicitud ante el Ministerio de Justicia',
      'Seguimiento del expediente hasta la concesión',
      'Jura de la nacionalidad e inscripción en el Registro Civil',
    ],
    requisitos: [
      'Residencia legal y continuada en España (2 años para nacionales de países iberoamericanos)',
      'Pasaporte completo en vigor',
      'Certificado de nacimiento apostillado',
      'Certificado de antecedentes penales del país de origen apostillado',
      'Certificado de empadronamiento',
      'Pruebas CCSE (y DELE si tu idioma oficial no es el español)',
    ],
    faqs: [
      { q: '¿Cuántos años de residencia necesito?', a: 'Los nacionales de países iberoamericanos necesitan 2 años de residencia legal y continuada. Para el resto de nacionalidades el plazo general es de 10 años.' },
      { q: '¿Tengo que hacer exámenes?', a: 'Sí, debes aprobar el CCSE (conocimientos constitucionales y socioculturales). Si tu lengua materna no es el español, también necesitas el DELE A2.' },
      { q: '¿Cuánto tarda la resolución?', a: 'Entre 6 y 18 meses según el volumen del Ministerio de Justicia. Un expediente completo y sin errores desde el inicio evita requerimientos que alarguen el proceso.' },
    ],
    service: 'Nacionalidad española',
  },
];
