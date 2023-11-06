function goToHomePage() {
    window.location.href = 'index.html';
}

function predictHealth() {
    // Get input values
    const temperatureCelsius = parseFloat(document.getElementById("temperatureCelsius").value);
    const pulseRate = parseInt(document.getElementById("pulseRate").value);
    const hrv = parseInt(document.getElementById("hrv").value);
    const healthTemperature = parseFloat(document.getElementById("healthTemperature").value);

    // Define the health status categories
    const healthStatus = {
        temperature: "Normal",
        pulseRate: "Normal",
        hrv: "Normal",
        overall: "Healthy"
    };

    // Check body temperature
    if (temperatureCelsius < 35 || temperatureCelsius > 41.7) {
        healthStatus.temperature = "Extreme";
        healthStatus.overall = "Dangerous";
    } else if (temperatureCelsius < 37.5 || temperatureCelsius > 40.6) {
        healthStatus.temperature = "Dangerous";
        healthStatus.overall = "Dangerous";
    }

    // Check pulse rate
    if (pulseRate < 40 || pulseRate > 120) {
        healthStatus.pulseRate = "Extreme";
        healthStatus.overall = "Dangerous";
    } else if (pulseRate < 50 || pulseRate > 100) {
        healthStatus.pulseRate = "Dangerous";
        healthStatus.overall = "Dangerous";
    }

    // Check HRV
    if (hrv < 10 || hrv > 140) {
        healthStatus.hrv = "Extreme";
        healthStatus.overall = "Dangerous";
    } else if (hrv < 20 || hrv > 120) {
        healthStatus.hrv = "Dangerous";
        healthStatus.overall = "Dangerous";
    }

    // Output the result
    alert(`Health Status:
    - Body Temperature: ${healthStatus.temperature}
    - Pulse Rate: ${healthStatus.pulseRate}
    - HRV: ${healthStatus.hrv}
    - Overall: ${healthStatus.overall}`);
}


function analyzeEnvironment() {
    // Get input values
    const temperatureCelsius = parseFloat(document.getElementById("temperatureCelsius").value);
    const humidity = parseFloat(document.getElementById("humidity").value);

    // Define the environment status categories
    const environmentStatus = {
        temperature: "Normal",
        humidity: "Normal",
        overall: "Healthy"
    };

    // Check temperature and humidity
    if (temperatureCelsius > 48 && humidity > 70) {
        environmentStatus.temperature = "Extreme Danger";
        environmentStatus.humidity = "Extreme Danger";
        environmentStatus.overall = "Extreme Danger";
    } else if (temperatureCelsius >= 43 && temperatureCelsius <= 20 && humidity >= 60 && humidity <= 10) {
        environmentStatus.temperature = "Dangerous";
        environmentStatus.humidity = "Dangerous";
        environmentStatus.overall = "Dangerous";
    } else if (temperatureCelsius < 13 || humidity < 5) {
        environmentStatus.temperature = "Dangerous";
        environmentStatus.humidity = "Dangerous";
        environmentStatus.overall = "Dangerous";
    }

    // Output the result
    alert(`Environment Status:
    - Temperature: ${environmentStatus.temperature}
    - Humidity: ${environmentStatus.humidity}
    - Overall: ${environmentStatus.overall}`);
}








document.getElementById("serviceType").addEventListener("change", function() {
    var selectedService = this.value;
    var questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = "";

    if (selectedService === "healthCheck") {
        // Ask questions for health check
        questionContainer.innerHTML = `
            <h2>Health Check</h2>
            <div class="input-group">
                <label>Select Animal Type:</label>
                <select id="animalType">
                    <option value="cow">Cow</option>
                    <option value="buffalo">Buffalo</option>
                    <!-- Add other animal options -->
                </select>
            </div>
            <div class="input-group">
                <label>Temperature in Celsius:</label>
                <input type="number" id="temperatureCelsius">
            </div>
            <div class="input-group">
                <label>Humidity:</label>
                <input type="number" id="humidity">
            </div>
            <h3>Enter the data of Health Monitor Device:</h3>
            <div class="input-group">
                <label>Temperature (°C):</label>
                <input type="number" id="healthTemperature">
            </div>
            <div class="input-group">
                <label>Pulse Rate:</label>
                <input type="number" id="pulseRate">
            </div>
            <div class="input-group">
                <label>HRV (Heart Rate Variability):</label>
                <input type="number" id="hrv">
            </div>
            <div class="input-group">
                <label>Calories Burned:</label>
                <input type="number" id="caloriesBurned">
            </div>
            <button onclick="predictHealth()">Predict Health</button>
        `;
    } else if (selectedService === "environmentAnalysis") {
        // Ask questions for environment analysis
        questionContainer.innerHTML = `
            <h2>Environment Analysis</h2>
            <div class="input-group">
                <label>Select Animal Name:</label>
                <select id="animalName">
                    <option value="cow">Cow</option>
                    <option value="buffalo">Buffalo</option>
                    <!-- Add other animal options -->
                </select>
            </div>
            <div class="input-group">
                <label>Temperature in Celsius:</label>
                <input type="number" id="temperatureCelsius">
            </div>
            <div class="input-group">
                <label>Humidity:</label>
                <input type="number" id="humidity">
            </div>
            <button onclick="analyzeEnvironment()">Analyze Environment</button>
        `;
    }
});
