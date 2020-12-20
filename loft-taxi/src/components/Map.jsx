import React from 'react';
import mapboxgl from 'mapbox-gl'


class Map extends React.Component {
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoicnVzdGFtbmV3IiwiYSI6ImNraTA5ajg2eTBpaGQyc3Frc3Q4eDl1YmMifQ.f62dquorxx35MBx07qc8-g'

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [37.616724, 55.751935],
            zoom: 10,
        })
        let map = this.map

        const drawLine = (coords) => {
            map.on('load', function () {
                map.addSource('route', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': coords
                    }
                }
                });
                map.addLayer({
                    'id': 'route',
                    'type': 'line',
                    'source': 'route',
                    'layout': {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    'paint': {
                        'line-color': '#888',
                        'line-width': 8
                    }
                });
                });
        }
        
    }

    componentWillUnmount() {
        this.map.remove()
    }

    render() {
        return <div className='map-wrapper'>
            <div data-testid='map' className='map' ref={this.mapContainer} />
        </div>
    }
}

export default Map