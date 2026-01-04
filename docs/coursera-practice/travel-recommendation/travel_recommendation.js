// Fetch and store travel data
let travelData = null;

// Fetch data from the JSON file
async function fetchTravelData() {
    try {
        const response = await fetch('assets/travel_recommendation_api.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        travelData = await response.json();
        console.log('Travel data loaded successfully:', travelData);
        return travelData;
    } catch (error) {
        console.error('Error fetching travel data:', error);
        return null;
    }
}


// Search recommendations based on user input
async function searchRecommendations() {
    const searchInput = document.getElementById('searchInput');
    const resultsDiv = document.getElementById('results');
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        resultsDiv.innerHTML = '<p style="color: white; text-align: center; padding: 20px;">Please enter a search term.</p>';
        return;
    }

    // Ensure data is loaded
    if (!travelData) {
        await fetchTravelData();
    }

    if (!travelData) {
        resultsDiv.innerHTML = '<p style="color: white; text-align: center; padding: 20px;">Error loading data. Please try again.</p>';
        return;
    }

    // Search logic
    const results = [];

    // Search in countries/cities
    if (query.includes('country') || query.includes('countries') || query.includes('city') || query.includes('cities')) {
        travelData.countries.forEach(country => {
            country.cities.forEach(city => {
                results.push({
                    type: 'City',
                    ...city
                });
            });
        });
    }

    // Search in temples
    if (query.includes('temple') || query.includes('temples')) {
        travelData.temples.forEach(temple => {
            results.push({
                type: 'Temple',
                ...temple
            });
        });
    }

    // Search in beaches
    if (query.includes('beach') || query.includes('beaches')) {
        travelData.beaches.forEach(beach => {
            results.push({
                type: 'Beach',
                ...beach
            });
        });
    }

    // If no keyword match, search by name
    if (results.length === 0) {
        // Search countries/cities
        travelData.countries.forEach(country => {
            if (country.name.toLowerCase().includes(query)) {
                country.cities.forEach(city => {
                    results.push({
                        type: 'City',
                        ...city
                    });
                });
            } else {
                country.cities.forEach(city => {
                    if (city.name.toLowerCase().includes(query)) {
                        results.push({
                            type: 'City',
                            ...city
                        });
                    }
                });
            }
        });

        // Search temples
        travelData.temples.forEach(temple => {
            if (temple.name.toLowerCase().includes(query)) {
                results.push({
                    type: 'Temple',
                    ...temple
                });
            }
        });

        // Search beaches
        travelData.beaches.forEach(beach => {
            if (beach.name.toLowerCase().includes(query)) {
                results.push({
                    type: 'Beach',
                    ...beach
                });
            }
        });
    }

    // Display results
    displayResults(results, query);
}


// Function to get timezone based on location name
function getTimeZone(locationName) {
    const timezones = {
        // Australia
        'Sydney': 'Australia/Sydney',
        'Melbourne': 'Australia/Melbourne',

        // Japan
        'Tokyo': 'Asia/Tokyo',
        'Kyoto': 'Asia/Tokyo',

        // Brazil
        'Rio de Janeiro': 'America/Sao_Paulo',
        'São Paulo': 'America/Sao_Paulo',

        // Cambodia
        'Angkor Wat': 'Asia/Phnom_Penh',

        // India
        'Taj Mahal': 'Asia/Kolkata',

        // French Polynesia
        'Bora Bora': 'Pacific/Tahiti',

        // Brazil beaches
        'Copacabana Beach': 'America/Sao_Paulo'
    };

    // Check if location name contains any of the keys
    for (const [key, timezone] of Object.entries(timezones)) {
        if (locationName.includes(key)) {
            return timezone;
        }
    }

    return null; // Return null if no timezone found
}

// Function to get formatted local time for a location
function getLocalTime(locationName) {
    const timeZone = getTimeZone(locationName);

    if (!timeZone) {
        return null;
    }

    const options = {
        timeZone: timeZone,
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    };

    try {
        const localTime = new Date().toLocaleTimeString('en-US', options);
        return localTime;
    } catch (error) {
        console.error(`Error getting time for ${locationName}:`, error);
        return null;
    }
}

// Display search results as dropdown
function displayResults(results, query) {
    const resultsDiv = document.getElementById('results');

    if (results.length === 0) {
        resultsDiv.innerHTML = `
            <div class="no-results">
                <p>No results found for "${query}"</p>
                <small>Try searching for: countries, cities, temples, or beaches</small>
            </div>
        `;
        resultsDiv.classList.add('show');
        return;
    }

    let html = '';

    results.forEach(result => {
        // Use placeholder directly if imageUrl is invalid or placeholder
        const imageSrc = result.imageUrl && !result.imageUrl.includes('enter_your_image')
            ? result.imageUrl
            : `https://via.placeholder.com/400x250/144147/ffffff?text=${encodeURIComponent(result.name)}`;

        // Get local time for this location
        const localTime = getLocalTime(result.name);
        const timeDisplay = localTime
            ? `<p class="result-time">🕒 Local time: ${localTime}</p>`
            : '';

        html += `
            <div class="result-item">
                <div class="result-image">
                    <img src="${imageSrc}" alt="${result.name}" loading="lazy">
                </div>
                <div class="result-info">
                    <h3 class="result-title">${result.name}</h3>
                    ${timeDisplay}
                    <p class="result-description">${result.description}</p>
                    <button class="result-btn">Visit</button>
                </div>
            </div>
        `;
    });

    resultsDiv.innerHTML = html;
    resultsDiv.classList.add('show');
}


// Clear search results
function clearResults() {
    const searchInput = document.getElementById('searchInput');
    const resultsDiv = document.getElementById('results');

    searchInput.value = '';
    resultsDiv.innerHTML = '';
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchTravelData();

    // Add Enter key support for search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchRecommendations();
            }
        });
    }
});
