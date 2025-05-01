<script>
</script>

<template>
    <div class="document">
        <header>
            <h1>🌍 Latamergence: Alertas y Asistencia en Emergencias Climáticas 🚨</h1>
            <p><strong>Latamergence</strong> es una aplicación diseñada para mejorar la calidad de vida en Latinoamérica mediante el uso responsable de tecnologías de IA. Nuestra solución se centra en proporcionar alertas tempranas en caso de emergencias meteorológicas o catástrofes naturales, así como en ofrecer asistencia y recomendaciones de sostenibilidad a través de un chatbot experto. 🌦️🤖</p>
        </header>

        <section>
            <h2>🎯 Objetivos del Proyecto</h2>
            <ul>
                <li><strong>Alertas en tiempo real</strong>: Enviar SMS a los usuarios cuando se detecten condiciones meteorológicas extremas o desastres naturales. 📲</li>
                <li><strong>Mapa interactivo</strong>: Mostrar información sobre desastres naturales, temperaturas y refugios climáticos. 🗺️</li>
                <li><strong>Chatbot experto</strong>: Ofrecer asistencia y recomendaciones de sostenibilidad basadas en el contexto actual. 💬</li>
                <li><strong>Concienciación climática</strong>: Promover buenas prácticas y acciones sostenibles para combatir el cambio climático. 🌱</li>
            </ul>
        </section>

        <section>
            <h2>🛠️ Tecnologías Utilizadas</h2>
            <ul>
                <li><strong>Backend</strong>: Python, Flask, Open-Meteo API, Twilio API.</li>
                <li><strong>Frontend</strong>: HTML, CSS, JavaScript, Leaflet.js.</li>
                <li><strong>IA</strong>: Integración de LLMs para el chatbot y añadir información sobre refugios en zonas de interés.</li>
            </ul>
        </section>

        <section>
            <h2>🚀 Funcionalidades Principales</h2>

            <h3>1. <strong>Alertas por SMS</strong> 📨</h3>
            <p>Un usuario interesado en recibir alertas debe proporcionar su número de teléfono y su ciudad de interés.</p>
            <p>Cuando se detecta una condición meteorológica extrema (como una ola de calor o una tormenta), el sistema enviará un SMS de alerta a estos usuarios. Esto se logra mediante la integración de la API de Twilio.</p>
            <p><strong>Implementado:</strong></p>
            <p>Cuando cualquier usuario consulta la web, se revisan las próximas temperaturas de las ubicaciones de interés (predicción). Si estas muestran una subida brusca, avisa a todos los teléfonos asociados a esa ubicación.</p>
            <p><strong>Nota: </strong>Los mensajes se envían por SMS para evitar la posible brecha digital que pueden sufrir los usuarios a causa de recursos no disponibles (Internet).</p>
            <img src="../assets/screenshot_1.jpg" alt="Captura de pantalla 1">

            <h3>2. <strong>Mapa Interactivo</strong> 🗺️</h3>
            <p>El mapa muestra:</p>
            <ul>
                <li><strong>Temperaturas actuales</strong> por país (con colores que indican la gravedad).</li>
                <li><strong>Incendios reportados</strong> (marcadores rojos).</li>
                <li><strong>Refugios climáticos</strong> (marcadores verdes).</li>
            </ul>
            <img src="../assets/screenshot_2.jpg" alt="Captura de pantalla 2">

            <h3>3. <strong>Asistente Virtual Experto en Emergencias Climáticas, Prevención de Riesgos y Sostenibilidad</strong> 🤖</h3>
            <p>El asistente ofrece:</p>
            <ul>
                <li><strong>Asistencia en emergencias</strong>: Información sobre qué hacer en caso de desastres naturales.</li>
                <li><strong>Recomendaciones de sostenibilidad</strong>: Consejos personalizados basados en el contexto (por ejemplo, cómo ahorrar agua durante una sequía).</li>
            </ul>
            <img src="../assets/screenshot_3.jpg" alt="Captura de pantalla 3">

            <h3>4. <strong>Refugios climáticos personalizados</strong> 🏫</h3>
            <p>La aplicación web proporciona, inicialmente, algunas ubicaciones de refugios climáticos (escuelas, ayuntamientos, bibliotecas...) para informar al usuario. Sin embargo, cuando un usuario se interesa por una zona concreta (país), la web genera nuevos indicadores de refugios mediante IA.</p>
            <p>Esta funcionalidad se podría implementar a pequeña escala, siendo realmente útil en una situación de emergencia real.</p>
            <img src="../assets/screenshot_4.jpg" alt="Captura de pantalla 4">
        </section>

        <section>
            <h2>🌱 Sostenibilidad</h2>
            <p>Nuestra aplicación no solo alerta sobre emergencias, sino que también promueve la sostenibilidad:</p>
            <ul>
                <li><strong>Consejos personalizados</strong>: El asistente virtual ofrece recomendaciones basadas en el contexto (por ejemplo, cómo reducir el consumo de energía durante una ola de calor).</li>
                <li><strong>Concienciación climática</strong>: La aplicación busca proporcionar información sobre el cambio climático y cómo las acciones individuales pueden marcar la diferencia.</li>
                <li><strong>Refugios climáticos</strong>: Localización de espacios seguros durante emergencias.</li>
            </ul>
        </section>

        <section>
            <h2>🧩 Partes Relevantes del Código</h2>

            <h3><strong>Backend</strong></h3>
            <ul>
                <li><strong>`addNum.py`</strong>: Registra números de teléfono y ciudades para enviar alertas.</li>
                <li><strong>`current_weather_api.py`</strong>: Obtiene datos meteorológicos actuales.</li>
                <li><strong>`weather_api.py`</strong>: Obtiene datos meteorológicos horarios.</li>
                <li><strong>`temp.py`</strong>: Detecta cambios bruscos de temperatura y envía alertas.</li>
            </ul>

            <h3><strong>Frontend</strong></h3>
            <ul>
                <li><strong>`index.html`</strong>: Interfaz de usuario con el mapa y el chatbot.</li>
                <li><strong>`script.js`</strong>: Lógica del mapa interactivo.</li>
                <li><strong>`functions.js`</strong>: Interfaz del asistente y visualización de datos meteorológicos.</li>
            </ul>
        </section>

        <section>
            <h2>📈 Potencial Futuro</h2>
            <p>El proyecto tiene un gran potencial de crecimiento:</p>
            <ul>
                <li><strong>Múltiples tipos de desastres naturales en tiempo real</strong>: Integrar más APIs para obtener información en tiempo real sobre otros desastres naturales: inundaciones, terremotos,...</li>
                <li><strong>Escala local</strong>: Cambiar la implementación para que sea específica para ciudades, sobretodo en las funcionalidades de indicadores de refugios y previsión del clima.</li>
                <li><strong>Integración de un sistema de routing</strong>: Implementar un sistema que permita generar rutas desde la ubicación del usuario hasta los refugios climáticos cercanos disponibles.</li>
            </ul>
        </section>

        <section>
            <h2>👥 Equipo</h2>
            <ul>
                <li><strong>Jan</strong>: Full-stack (centrado en back-end).</li>
                <li><strong>Albert</strong>: Integración APIs, SMS y refugios climáticos generados.</li>
                <li><strong>Natàlia</strong>: Asistente virtual y diseño de la interfície.</li>
                <li><strong>Arnau</strong>: Mapa Javascript y css app (front-end).</li>
            </ul>
        </section>

        <section>
            <h2>🌟 Conclusión</h2>
            <p><strong>Latamergence</strong> es una solución innovadora que combina tecnología, sostenibilidad y concienciación climática para mejorar la calidad de vida en Latinoamérica. Con un enfoque en la escalabilidad y el impacto positivo, esta app tiene el potencial de convertirse en una herramienta esencial para comunidades locales. 🌟</p>
        </section>
    </div>
</template>

<style>
    .document {
        text-align: justify;
        line-height: 1.6;
        font-family: Arial, sans-serif;
        padding: 40px;
        margin-right: 20px;
        margin-left: 20px;
    }

    header h1 {
        font-size: 2.5em;
        margin-bottom: 0.5em;
    }

    section h2 {
        font-size: 2em;
        margin-top: 1.5em;
        margin-bottom: 1em;
    }

    section ul {
        margin-left: 20px;
    }

    section li {
        margin-bottom: 0.5em;
    }

    blockquote {
        margin: 1em 0;
        padding: 1em;
        background-color: #f9f9f9;
        border-left: 5px solid #ddd;
    }

    img {
        max-width: 100%;
        display: block;
        margin: 1em 0;
    }
</style>