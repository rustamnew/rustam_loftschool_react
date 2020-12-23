import React from 'react';
import mapboxgl from 'mapbox-gl'
import {Address} from './Address'
import { Route } from 'react-router-dom';

export class Map extends React.Component {
    mapContainer = React.createRef();
    
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoicnVzdGFtbmV3IiwiYSI6ImNraTA5ajg2eTBpaGQyc3Frc3Q4eDl1YmMifQ.f62dquorxx35MBx07qc8-g'
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [30.318359, 59.941264],
            zoom: 10,
        })
    }
    componentWillUnmount() {
        this.map.remove()
    }
    
    drawLine = (coords) => {
        this.map.flyTo({
          center: coords[0],
          zoom: 15
        });
       
        this.map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: coords
              }
            }
          },
          layout: {
            "line-join": "round",
            "line-cap": "round"
          },
          paint: {
            "line-color": "#ffc617",
            "line-width": 8
          }
        });
      };
    render() {
        return <div className='map-wrapper'>
            <Route path='/main/home' component={() => <Address drawLine={this.drawLine}/>}/>
            <div data-testid='map' className='map' ref={this.mapContainer} />
        </div>
    }
}

/*
drawLine = (coords) => {
        this.map.on('load', function () {
            console.log('drawLine')
            console.log(this)
            console.log(this.map)
            this.map.addSource('route', {
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
            this.map.addLayer({
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
*/ 



