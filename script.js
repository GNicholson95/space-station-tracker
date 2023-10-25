function logLocation() {
     fetch('https://api.wheretheiss.at/v1/satellites/25544.json')
          .then(res => res.json())
          .then(data => {
            const container = document.getElementById("location");
            container.textContent = `Latitude: ${data.latitude}, Longitude: ${data.longitude}`;
          });
      }
  
      const sub = document.getElementById("sub-button");
      sub.addEventListener('click', logLocation);