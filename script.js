// Ensure map runs only if the #map container exists on the current page
document.addEventListener("DOMContentLoaded", function () {
    const mapContainer = document.getElementById('map');
    
    if (mapContainer) {
        // 1. Initialize map centered over the Greater Boston area
        const map = L.map('map').setView([42.3350, -71.0750], 12);

        // 2. Add an elegant, clear basemap layer (CartoDB Positron)
        L.tileLayer('https://{s}://{z}/{x}/{y}{r}.png', {
            attribution: '© OpenStreetMap contributors © CARTO',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);

        // 3. Your dataset containing addresses and spatial coordinates
        const locations = [
            { address: "364 Rindge Ave, Cambridge, MA 02140", coords: [42.3927, -71.1345] },
            { address: "186 Alewife Brook Pkwy #310, Cambridge, MA 02138", coords: [42.3878, -71.1415] },
            { address: "120 Beacon St., 2nd floor, Somerville, MA 02143", coords: [42.3781, -71.1042] },
            { address: "51 Inman St, Cambridge, MA 02139", coords: [42.3687, -71.1017] },
            { address: "11 Inman St, Cambridge, MA 02139", coords: [42.3675, -71.1018] },
            { address: "820 Massachusetts Ave, Cambridge, MA 02139", coords: [42.3671, -71.1059] },
            { address: "5 Western Avenue, Cambridge, MA 02139", coords: [42.3644, -71.1030] },
            { address: "86 Boardman Street, Boston, MA 02128", coords: [42.3842, -71.0163] },
            { address: "75 Federal St 3rd Floor, Boston, MA 02110", coords: [42.3551, -71.0563] },
            { address: "8 Oak St W, Boston, MA 02116", coords: [42.3496, -71.0645] },
            { address: "61 Woodruff Way, Boston, MA 02126", coords: [42.2741, -71.0963] },
            { address: "776 Washington St, Boston, MA 02124", coords: [42.2905, -71.0718] },
            { address: "85 Olney St, Dorchester, MA 02121", coords: [42.3051, -71.0772] },
            { address: "1135 Dorchester Ave, Dorchester, MA 02125", coords: [42.3168, -71.0583] },
            { address: "135 Dorchester Ave, Dorchester, MA 02125", coords: [42.3421, -71.0549] },
            { address: "6 Cummins Highway, Boston, MA 02131", coords: [42.2869, -71.1218] },
            { address: "20 South St, Jamaica Plain, MA 02130", coords: [42.3089, -71.1154] }
        ];

        // 4. Iterate through data list and append markers to the map canvas
        locations.forEach(loc => {
            const marker = L.circleMarker(loc.coords, {
                radius: 8,
                fillColor: "#3498db",  // Sleek map blue indicator
                color: "#ffffff",      // Outer boundary ring border
                weight: 2,
                opacity: 1,
                fillOpacity: 0.85
            }).addTo(map);

            // 5. Bind the text hover tooltip to the individual node geometries
            marker.bindTooltip(loc.address, {
                permanent: false,      // Displays only on mouse hover
                direction: "top",      // Shows tooltip cleanly above the marker
                className: "custom-tooltip", 
                offset: [0, -5]        // Prevents tooltip from overlapping marker
            });
        });
    }
});
