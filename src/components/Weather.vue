<script>
</script>

<template>
    <div class="tab" id="tiempo">
        <section class="info">
            <div class="alert-banner">
                <img src="../assets/fire.svg" alt="Fire icon">
                <span>¡Alerta por incendio!</span>
            </div>
            <div class="weather" id="weather">
                <div class="current-weather">
                    <h3>Tiempo actual</h3>
                    <div class="weather-info">
                        <div class="weather-icon-temp">
                            <span id="current-weather-icon">🌤️</span>
                            <span id="current-temp"></span>15 °C
                        </div>
                        <ul class="weather-details">
                            <li><strong>Humedad:</strong> <span id="current-humidity"></span>0%</li>
                            <li><strong>Precipitación:</strong> <span id="current-precipitation"></span>71%</li>
                            <li><strong>Viento:</strong> <span id="current-wind"></span>6 km/h</li>
                        </ul>
                    </div>
                </div>
                <div class="forecast">
                    <div class="forecast-days">
                        <!-- Forecast days will be populated by JavaScript -->
                        <div class="forecast-day">
                            <p><strong>MAR</strong></p>
                            <p class="weather_icon">🌤️</p>
                            <p>19°C</p>
                        </div>
                        <div class="forecast-day">
                            <p><strong>MIÉ</strong></p>
                            <p class="weather_icon">☀️</p>
                            <p>19°C</p>
                        </div>
                        <div class="forecast-day">
                            <p><strong>JUE</strong></p>
                            <p class="weather_icon">🌤️</p>
                            <p>19°C</p>
                        </div>
                        <div class="forecast-day">
                            <p><strong>VIE</strong></p>
                            <p class="weather_icon">☀️</p>
                            <p>22°C</p>
                        </div>
                        <div class="forecast-day">
                            <p><strong>SAB</strong></p>
                            <p class="weather_icon">🌤️</p>
                            <p>23°C</p>
                        </div>
                        <div class="forecast-day">
                            <p><strong>DOM</strong></p>
                            <p class="weather_icon">🌤️</p>
                            <p>24°C</p>
                        </div>
                        <div class="forecast-day">
                            <p><strong>LUN</strong></p>
                            <p class="weather_icon">🌤️</p>
                            <p>26°C</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr style="width:100%;text-align:left;margin-left:0">
            <div class="telef">
                <h3>Registra tu teléfono para alertas</h3>
                <form method="post">
                    <div class="inputs-container">
                        <input type="tel" id="phone" name="phone" placeholder="Teléfono: +34666666666" required>
                        <input type="text" id="ciutat" name="ciutat" placeholder="Ciudad: Caracas" required>
                        <button>Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<style>
#tiempo {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    height: 90%;
    margin-top: 40px;
}

.alert-banner {
    margin: 1em 1em 2% 2%;
    display: flex;
    flex-direction: row;
    color: white;
    background-color: #c02613;
    text-align: center;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 96%;
    height: 10%;
    border-radius: 0.7em 0.7em 0.7em 0.7em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
}

.alert-banner img {
    height: 2em;
}

.alert-banner span {
    font-weight: 600;
    font-style: italic;
    margin-left: 0.5em;
}

.info {
    background-color: rgba(255, 255, 255, 0.845);
    width: 65%;
    height: 95%;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
}

.weather {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 60%;
    padding: 10px;
    box-sizing: border-box;
}

.current-weather {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
}

.weather-info {
    display: flex;
    align-items: center;
    gap: 20px; /* Espacio entre el icono/temperatura y la lista de detalles */
}

.weather-icon-temp {
    display: flex;
    align-items: center;
    gap: 10px; /* Espacio entre el icono y la temperatura */
    font-size: 2em; /* Tamaño grande para la temperatura */
}

.weather-icon-temp span {
    font-size: 2em; /* Tamaño grande para el icono */
}

.weather-details {
    list-style: none;
    padding: 0;
    margin: 0;
}

.weather-details li {
    margin-bottom: 10px; /* Espacio entre los elementos de la lista */
}

.weather_icon {
    font-size: 35px;
}

.forecast-days {
    display: flex;
    flex-direction: row;
    column-gap: 15px;
}

.telef {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.telef form {
  display: flex;
  flex-direction: column; /* Cambia a columna para que los labels estén encima de los inputs */
  align-items: flex-start;
  gap: 1em;
  width: 80%;
  margin-top: 1em;
  margin-bottom: 20px;
}

.telef label {
  font-weight: 600;
  color: #333;
  align-self: flex-start;
  margin-left: 10%;
}

.telef .inputs-container {
  display: flex;
  justify-content: space-between; /* Para que los inputs estén uno al lado del otro */
  align-items: center;
  width: 100%;
  gap: 1em;
}

.telef input {
  width: 48%; /* Asigna el 48% del ancho para que queden dos inputs en una fila */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
  font-size: 1em;
}

.telef button {
  padding: 10px 20px;
  background-color: #084558;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.telef button:hover {
  background-color: #125569;
}

</style>