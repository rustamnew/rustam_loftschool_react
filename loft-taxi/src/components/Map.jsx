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
            style: 'mapbox://styles/mapbox/light-v10',
            center: [30.318359, 59.941264],
            zoom: 10,
        })
    }
    componentWillUnmount() {
        this.map.remove()
    }
    
    drawLine = (coords) => {
      let mapLayer = this.map.getLayer('route')
      let mapSource = this.map.getSource('line')
      if(typeof mapLayer !== 'undefined') {
        this.map.removeLayer('route').removeLayer('circle1').removeLayer('circle2').removeSource('line').removeSource('markers');
      }
      console.log(coords[0])
      this.map.flyTo({
      center: coords[0],
      zoom: 15
    });

      this.map.addSource('line', {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: coords
          }
        }
      })
      this.map.addSource('markers', {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": coords[0]
                },
                "properties": {
                    "modelId": 1,
                },
            }]
        }
      });

      this.map.addLayer({
          "id": "circle1",
          "source": "markers",
          "type": "circle",
          "paint": {
              "circle-radius": 25,
              "circle-color": "#ffc617",
              "circle-opacity": 1,
              "circle-stroke-width": 0,
          },
          "filter": ["==", "modelId", 1],
      });
      this.map.addLayer({
        "id": "circle2",
        "source": "markers",
        "type": "circle",
        "paint": {
            "circle-radius": 36,
            "circle-color": "#ffc617",
            "circle-opacity": 0.3,
            "circle-stroke-width": 0,
        },
        "filter": ["==", "modelId", 1],
    });
      
      this.map.addLayer({
        id: "route",
        type: "line",
        source: 'line',
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



