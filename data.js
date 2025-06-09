var APP_DATA = {
  "scenes": [
    {
      "id": "0-pano_20250609_095547_1",
      "name": "PANO_20250609_095547_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -0.594108234313552,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.0943834815104871,
          "pitch": 0.3283476939782517,
          "rotation": 0,
          "target": "1-pano_20250609_100347_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pano_20250609_100347_2",
      "name": "PANO_20250609_100347_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.924873121536942,
          "pitch": 0.3266542991739243,
          "rotation": 0,
          "target": "0-pano_20250609_095547_1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "TESTE CEFET 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
