
//dummy data for use during testing
const mapColorVisits = [
        {
          "level": 3,
          "country": {
            "name": "Hungary",
            "code": "HUN"
          }
        },
        {
          "level": 1,
          "country": {
            "name": "China",
            "code": "CHN"
          }
        },
        {
          "level": 1,
          "country": {
            "name": "Belize",
            "code": "BLZ"
          }
        },
        {
          "level": 3,
          "country": {
            "name": "Sweden",
            "code": "SWE"
          }
        },
        {
          "level": 1,
          "country": {
            "name": "Costa Rica",
            "code": "CRI"
          }
        }
      ];

//dummy data for use during testing
const dataWeGet = [
  {
    "id": "cjqpxk83t000o0829p7mr6qto",
    "name": "Ally Paca",
    "visits": [
      {
        "id": "cjr0da23s002r0847hq4jx8g5",
        "level": 4,
        "country": {
          "id": "cjqy9e28y00i20840rwy5l1ti",
          "name": "Hungary",
          "code": "HUN"
        }
      }
    ]
  },
  {
    "id": "cjqt5d9ox00sl0894ur6k9qza",
    "name": "Albert Paca",
    "visits": [
      {
        "id": "cjr0cztae000j0847e0nwmvzr",
        "level": 2,
        "country": {
          "id": "cjqy9e28y00i20840rwy5l1ti",
          "name": "Hungary",
          "code": "HUN"
        }
      },
      {
        "id": "cjr0d27uq00110847j71uybat",
        "level": 3,
        "country": {
          "id": "cjqy9e0wl007q08402wv4d6qk",
          "name": "Argentina",
          "code": "ARG"
        }
      },
      {
        "id": "cjr0d2qdf001a0847w8j99vk9",
        "level": 2,
        "country": {
          "id": "cjqy9e38t00pq0840hc5u8n0f",
          "name": "Nepal",
          "code": "NPL"
        }
      }
    ]
  },
  {
    "id": "cjqy1r16l00200831bj7hpkwk",
    "name": "Lorelei",
    "visits": [
      {
        "id": "cjqya1gq300zp0840l4468h9s",
        "level": 2,
        "country": {
          "id": "cjqy9e0tw007e08407aebjb7r",
          "name": "Aland",
          "code": "ALA"
        }
      }
    ]
  }
];

//gets the country polygon information from the country code
function getFeature(data, code) {
  return data.features.find(feature => feature.properties.ISO_A3 === code)
};

//massages the data into a form easily used in the map render
function fixData(userArray) {
  let finalArray = []
  userArray.map(user => {
    user.visits.map(visit => {
      finalArray.push(visit);
    })
  })
  return finalArray;
}

//urls for if we choose to add a tile layer
const tileURLs = {
  starting: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  gray: 'https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png',
  cartoVoyager: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
};


module.exports = {
  mapColorVisits,
  dataWeGet,
  getFeature,
  fixData
}
