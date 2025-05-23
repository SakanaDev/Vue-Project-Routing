<template>
    <div class="tab" id="maptab">
        <div id="map"></div>
    </div>
</template>
  
<script>
  import refugiosIcon from '@/assets/refugios.png'
  import 'leaflet/dist/leaflet.css';
  import L from 'leaflet';
  import axios from 'axios';
  
  export default {
    name: 'LatamMap',
    mounted() {
      this.initializeMap();
    },
    methods: {
      initializeMap() {
        // Coordenadas aproximadas para centrar el mapa en Latinoamérica
        const lat = -16.475932966035082;
        const lng = -69.30473618188294;
        const zoomLevel = 3;
  
        // Inicializar el mapa
        const map = L.map('map').setView([lat, lng], zoomLevel);
  
        // Añadir varias capas base
        const baseLayers = {
          "Satélite": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          }),
          "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }),
          "OpenTopoMap": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
          })
        };
  
        // Añadir la capa base predeterminada (Satélite)
        baseLayers["Satélite"].addTo(map);
  
        // Crear un panel personalizado para los polígonos de países
        const polygonPane = map.createPane('polygonPane');
        polygonPane.style.zIndex = 400;
  
        // Lista de países de Latinoamérica
        const paisesLatinoamerica = [
          "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Costa Rica", "Cuba",
          "Dominican Republic", "Ecuador", "El Salvador", "Guatemala", "Haiti", "Honduras",
          "Mexico", "Nicaragua", "Panama", "Paraguay", "Peru", "Uruguay", "Venezuela"
        ];
  
        // Objeto para almacenar los límites geográficos de cada país
        const countryBounds = {};
  
        // Crear control para mostrar información sobre el país en hover
        const info = L.control();
  
        info.onAdd = function (map) {
          this._div = L.DomUtil.create('div', 'info');
          this._div.style.backgroundColor = 'white';
          this._div.style.padding = '10px';
          this._div.style.borderRadius = '10px';
          this._div.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
          this.update();
          return this._div;
        };
  
        info.update = function (props) {
          const contents = props ? `<b>${props.name}</b><br>${props.temp}°C` : 'Selecciona un país';
          this._div.innerHTML = `<h4>Temperatura</h4>${contents}`;
        };
  
        info.addTo(map);
  
        // Definir escala de colores basada en temperatura
        const getColor = (temp) => {
          return temp > 30 ? '#ff0000' :
            temp > 25 ? '#ff7800' :
              temp > 20 ? '#ffcc00' :
                temp > 15 ? '#33cc33' :
                  '#3399ff';
        };
  
        // Crear grupos de capas
        const temperaturaLayer = L.layerGroup().addTo(map);
        const incendiosLayer = L.layerGroup().addTo(map);
        const refugiosLayer = L.layerGroup().addTo(map);
  
        // Lista de incendios ficticios
        const incendios = [
          { lat: 8.208421495768071, lng: -65.3668229266167 },
          { lat: -1.4603006464211254, lng: -51.915542343550506 },
          { lat: -6.977965716513684, lng: -76.20605500589615 },
          { lat: -5.0675990856397393, lng: -66.9400341012391 },
          { lat: -10.906903431428805, lng: -53.27976777041133 },
          { lat: -15.709119546665434, lng: -65.131620352787735 },
          { lat: -30.158037355158942, lng: -61.74870596971203 },
        ];
  
        // Añadir marcadores de incendios
        incendios.forEach(({ lat, lng }) => {
          L.marker([lat, lng], {
            icon: L.icon({
              iconUrl: 'https://media.tenor.com/F3xUrsjCSzUAAAAj/fire.gif',
              iconSize: [30, 30],
              iconAnchor: [15, 15],
              popupAnchor: [0, -15]
            })
          }).bindPopup("Incendio reportado").addTo(incendiosLayer);
        });
  
        // Obtener temperaturas y actualizar el mapa
        this.updateMapWithTemperature(map, paisesLatinoamerica, temperaturaLayer, getColor, info, countryBounds, refugiosLayer);
        
        // Añadir leyenda
        this.addLegend(map, getColor);
        
        // Control de capas
        const overlayMaps = {
          "Temperaturas": temperaturaLayer,
          "Incendios": incendiosLayer,
          "Refugios": refugiosLayer
        };
        L.control.layers(baseLayers, overlayMaps).addTo(map);

        const refugios = [
            // Caracas, Venezuela
            { lat: 10.4926, lng: -66.9016, name: "Plaza Venezuela" },
            { lat: 10.5061, lng: -66.9146, name: "Parque del Este" },
            { lat: 10.4953, lng: -66.8451, name: "El Hatillo" },
            { lat: 10.5014, lng: -66.9092, name: "Universidad Central de Venezuela" },
            // Maracaibo, Venezuela
            { lat: 10.6545, lng: -71.6406, name: "Plaza Bolívar" },
            { lat: 10.6689, lng: -71.5901, name: "Vereda del Lago" },
            { lat: 10.6550, lng: -71.6149, name: "Hospital Universitario" },
            { lat: 10.6732, lng: -71.6384, name: "Terminal de Pasajeros" },
            // Valencia, Venezuela
            { lat: 10.1709, lng: -68.0047, name: "Parque Fernando Peñalver" },
            { lat: 10.1774, lng: -67.9999, name: "Plaza Bolívar de Valencia" },
            { lat: 10.1539, lng: -67.9752, name: "Metrópolis Valencia" },
            { lat: 10.1927, lng: -67.9805, name: "Aeropuerto Arturo Michelena" },
            // Barquisimeto, Venezuela
            { lat: 10.0676, lng: -69.3478, name: "Catedral de Barquisimeto" },
            { lat: 10.0712, lng: -69.3217, name: "Obelisco de Barquisimeto" },
            { lat: 10.0632, lng: -69.3340, name: "Parque del Este" },
            { lat: 10.0559, lng: -69.3571, name: "Complejo Ferial Bicentenario" },
            // Bogotá, Colombia
            { lat: 4.7109, lng: -74.0721, name: "Plaza de Bolívar" },
            { lat: 4.6584, lng: -74.0937, name: "Parque Simón Bolívar" },
            { lat: 4.6012, lng: -74.0669, name: "Terminal de Transportes" },
            { lat: 4.6761, lng: -74.0485, name: "Universidad Nacional" },
            // Medellín, Colombia
            { lat: 6.2518, lng: -75.5636, name: "Plaza Botero" },
            { lat: 6.2707, lng: -75.5792, name: "Parque Explora" },
            { lat: 6.2442, lng: -75.5812, name: "Estadio Atanasio Girardot" },
            { lat: 6.2316, lng: -75.6052, name: "Aeropuerto Olaya Herrera" },
            // Cali, Colombia
            { lat: 3.4516, lng: -76.5320, name: "Cristo Rey" },
            { lat: 3.4550, lng: -76.5315, name: "Parque del Perro" },
            { lat: 3.4143, lng: -76.5402, name: "Terminal de Transportes" },
            { lat: 3.4199, lng: -76.5525, name: "Universidad del Valle" },
            // Barranquilla, Colombia
            { lat: 10.9639, lng: -74.7964, name: "Plaza de la Paz" },
            { lat: 10.9859, lng: -74.8182, name: "Malecón del Río" },
            { lat: 10.9786, lng: -74.7856, name: "Estadio Metropolitano" },
            { lat: 10.9053, lng: -74.8013, name: "Terminal de Transportes" },
            // Argentina
            { lat: -34.6037, lng: -58.3816, name: "Buenos Aires, Plaza de Mayo" },
            { lat: -31.4167, lng: -64.1833, name: "Córdoba, Plaza San Martín" },
            { lat: -32.8895, lng: -68.8458, name: "Mendoza, Parque General San Martín" },
            { lat: -24.7859, lng: -65.4116, name: "Salta, Plaza 9 de Julio" },
            { lat: -51.6231, lng: -69.2168, name: "Río Gallegos, Plaza San Martín" },
            { lat: -27.4512, lng: -58.9866, name: "Resistencia, Plaza 25 de Mayo" },
            // Bolivia
            { lat: -16.4897, lng: -68.1193, name: "La Paz, Plaza Murillo" },
            { lat: -17.3895, lng: -66.1568, name: "Cochabamba, Plaza 14 de Septiembre" },
            { lat: -19.0476, lng: -65.2599, name: "Sucre, Plaza 25 de Mayo" },
            { lat: -17.7833, lng: -63.1821, name: "Santa Cruz de la Sierra, Plaza 24 de Septiembre" },
            { lat: -21.5318, lng: -64.7312, name: "Tarija, Plaza Luis de Fuentes" },
            { lat: -10.9833, lng: -66.1000, name: "Trinidad, Plaza Mayor" },
            // Brazil
            { lat: -22.9068, lng: -43.1729, name: "Rio de Janeiro, Cristo Redentor" },
            { lat: -23.5505, lng: -46.6333, name: "São Paulo, Avenida Paulista" },
            { lat: -15.7942, lng: -47.8822, name: "Brasília, Praça dos Três Poderes" },
            { lat: -3.7319, lng: -38.5267, name: "Fortaleza, Praça do Ferreira" },
            { lat: -12.9777, lng: -38.5016, name: "Salvador, Pelourinho" },
            { lat: -30.0346, lng: -51.2177, name: "Porto Alegre, Praça da Matriz" },
            // Chile
            { lat: -33.4489, lng: -70.6693, name: "Santiago, Plaza de Armas" },
            { lat: -36.8201, lng: -73.0444, name: "Concepción, Plaza de la Independencia" },
            { lat: -23.6345, lng: -70.3933, name: "Antofagasta, Plaza Colón" },
            { lat: -53.1638, lng: -70.9171, name: "Punta Arenas, Plaza Muñoz Gamero" },
            { lat: -38.7359, lng: -72.5904, name: "Temuco, Plaza Aníbal Pinto" },
            { lat: -20.2133, lng: -70.1503, name: "Iquique, Plaza Arturo Prat" },
            // Mexico
            { lat: 19.4326, lng: -99.1332, name: "Ciudad de México, Zócalo" },
            { lat: 20.6736, lng: -103.3445, name: "Guadalajara, Plaza de Armas" },
            { lat: 21.1619, lng: -86.8515, name: "Cancún, Parque Las Palapas" },
            { lat: 25.6714, lng: -100.3086, name: "Monterrey, Macroplaza" },
            { lat: 32.5149, lng: -117.0382, name: "Tijuana, Plaza Río" },
            { lat: 19.0414, lng: -98.2063, name: "Puebla, Zócalo" },
            // Peru
            { lat: -12.0464, lng: -77.0428, name: "Lima, Plaza Mayor" },
            { lat: -13.5183, lng: -71.9781, name: "Cusco, Plaza de Armas" },
            { lat: -16.4090, lng: -71.5375, name: "Arequipa, Plaza de Armas" },
            { lat: -6.7714, lng: -79.8409, name: "Chiclayo, Plaza de Armas" },
            { lat: -8.1091, lng: -79.0215, name: "Trujillo, Plaza de Armas" },
            { lat: -3.7491, lng: -73.2538, name: "Iquitos, Plaza de Armas" },
            // Costa Rica
            { lat: 9.9281, lng: -84.0907, name: "San José, Parque Central" },
            { lat: 10.3158, lng: -85.4538, name: "Liberia, Parque Central" },
            { lat: 9.9763, lng: -84.8384, name: "Puntarenas, Parque Central" },
            // Cuba
            { lat: 23.1353, lng: -82.3589, name: "La Habana, Plaza de la Revolución" },
            { lat: 20.0217, lng: -75.8294, name: "Santiago de Cuba, Parque Céspedes" },
            { lat: 22.1461, lng: -80.4356, name: "Santa Clara, Parque Vidal" },
            // Dominican Republic
            { lat: 18.4861, lng: -69.9312, name: "Santo Domingo, Zona Colonial" },
            { lat: 19.4517, lng: -70.6970, name: "Santiago, Parque Duarte" },
            { lat: 18.4286, lng: -69.6686, name: "Boca Chica, Playa Boca Chica" },
            // Ecuador
            { lat: -0.2202, lng: -78.5123, name: "Quito, Plaza Grande" },
            { lat: -2.9006, lng: -79.0045, name: "Cuenca, Parque Calderón" },
            { lat: -0.9592, lng: -80.7087, name: "Manta, Playa El Murciélago" },
            // El Salvador
            { lat: 13.6989, lng: -89.1914, name: "San Salvador, Plaza Libertad" },
            { lat: 13.6769, lng: -89.2797, name: "Santa Ana, Parque Libertad" },
            { lat: 13.4814, lng: -88.1775, name: "San Miguel, Parque Guzmán" },
            // Guatemala
            { lat: 14.6349, lng: -90.5069, name: "Ciudad de Guatemala, Plaza Mayor" },
            { lat: 14.8333, lng: -91.5167, name: "Quetzaltenango, Parque Central" },
            { lat: 16.9297, lng: -89.8833, name: "Flores, Parque Central" },
            // Haiti
            { lat: 18.5392, lng: -72.3364, name: "Puerto Príncipe, Plaza de los Héroes" },
            { lat: 19.7579, lng: -72.2041, name: "Cabo Haitiano, Plaza Público" },
            { lat: 18.2345, lng: -72.5377, name: "Jacmel, Plaza Central" },
            // Honduras
            { lat: 14.0940, lng: -87.2067, name: "Tegucigalpa, Parque Central" },
            { lat: 15.5032, lng: -88.0252, name: "San Pedro Sula, Parque Central" },
            { lat: 16.3167, lng: -86.5500, name: "Roatán, West End" },
            // Nicaragua
            { lat: 12.1364, lng: -86.2514, name: "Managua, Plaza de la Revolución" },
            { lat: 11.9139, lng: -86.0558, name: "Granada, Parque Central" },
            { lat: 12.4816, lng: -86.5822, name: "León, Parque Central" },
            // Panama
            { lat: 8.9833, lng: -79.5167, name: "Ciudad de Panamá, Casco Viejo" },
            { lat: 9.0000, lng: -79.5000, name: "Panamá, Parque Omar" },
            { lat: 8.9500, lng: -79.5667, name: "Panamá, Amador Causeway" },
            // Paraguay
            { lat: -25.2822, lng: -57.6351, name: "Asunción, Plaza de los Héroes" },
            { lat: -25.5097, lng: -54.6117, name: "Ciudad del Este, Plaza Central" },
            { lat: -27.3369, lng: -55.8667, name: "Encarnación, Plaza de Armas" },
            // Uruguay
            { lat: -34.9011, lng: -56.1645, name: "Montevideo, Plaza Independencia" },
            { lat: -34.9059, lng: -56.1913, name: "Montevideo, Parque Rodó" },
            { lat: -34.4833, lng: -54.3333, name: "Punta del Este, Playa Mansa" }
        ];

        refugios.forEach(({ lat, lng, name }) => {
            L.marker([lat, lng], {
                icon: L.icon({
                    iconUrl: refugiosIcon, // Ruta de la imagen
                    iconSize: [30, 30], // Tamaño del icono
                    iconAnchor: [15, 15], // Punto de anclaje
                    popupAnchor: [0, -15] // Ajuste del popup
                })
            }).bindPopup(name).addTo(refugiosLayer)
        });
      },
  
      async updateMapWithTemperature(map, paisesLatinoamerica, temperaturaLayer, getColor, info, countryBounds, refugiosLayer) {
        const apiKey = 'edde7a742c7e0db4cadb5a510b69c988';
        const countryTemps = {};
  
        const temperaturePromises = paisesLatinoamerica.map(async (country) => {
          try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
              params: {
                q: country,
                appid: apiKey,
                units: 'metric'
              }
            });
            countryTemps[country] = response.data.main.temp;
          } catch (error) {
            console.error(`Error obteniendo la temperatura de ${country}:`, error);
            countryTemps[country] = null;
          }
        });
  
        await Promise.all(temperaturePromises);
  
        axios.get('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
          .then(response => {
            const countries = response.data.features;
            const latamCountries = countries.filter(country =>
              paisesLatinoamerica.includes(country.properties.name)
            );
  
            latamCountries.forEach(country => {
              const temp = countryTemps[country.properties.name];
              const polygon = L.geoJSON(country, {
                pane: 'polygonPane',
                style: {
                  color: "#000",
                  weight: 1,
                  fillColor: getColor(temp),
                  fillOpacity: 0.6
                }
              }).addTo(temperaturaLayer);
  
              countryBounds[country.properties.name] = polygon.getBounds();
  
              polygon.on({
                mouseover: function (e) {
                  const layer = e.target;
                  layer.setStyle({
                    weight: 2,
                    fillOpacity: 0.7
                  });
                  layer.bringToFront();
                  info.update({ name: country.properties.name, temp: temp });
                },
                mouseout: function (e) {
                  const layer = e.target;
                  layer.setStyle({
                    weight: 1,
                    color: "#000",
                    fillOpacity: 0.6
                  });
                  info.update();
                },
                click: async function(e) {
                    map.fitBounds(e.target.getBounds());                    
                }
              });
            });
          })
          .catch(error => {
            console.error("Error cargando el GeoJSON:", error);
          });
      },
  
      addLegend(map, getColor) {
        const legend = L.control({ position: 'bottomright' });
  
        legend.onAdd = function (map) {
          const div = L.DomUtil.create('div', 'info legend');
          const grades = [0, 15, 20, 25, 30, 40];
          const labels = [];
          let from, to;
  
          labels.push('<h4>Temperatura (°C)</h4>');
  
          for (let i = 0; i < grades.length; i++) {
            from = grades[i];
            to = grades[i + 1];
            labels.push(
              `<i style="background:${getColor(from + 1)}; width: 18px; height: 18px; display: inline-block; margin-right: 5px;"></i> ${from}${to ? `&ndash;${to}` : '+'}°C`
            );
          }
  
          div.innerHTML = labels.join('<br>');
          div.style.backgroundColor = 'white';
          div.style.padding = '10px';
          div.style.borderRadius = '10px';
          div.style.width = '15%';
          div.style.textAlign = 'left';
          div.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
          return div;
        };
  
        legend.addTo(map);
      }
    }
  };
</script>
  
<style scoped>
  .tab {
    display: block;
  }
  
  #map {
    height: 85vh;
    width: 96.8%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 1em 1em 1em 1em;
    margin-right: 1.6%;
    margin-left: 1.6%;
    margin-top: 1em;
  }
  
  .container-llista {
    padding-bottom: 10px;
  }
  
  #country-select {
    width: 40vh;
    padding: 10px;
    font-size: 16px;
  }
</style>