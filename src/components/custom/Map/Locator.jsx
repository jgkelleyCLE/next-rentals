"use client"
import React from 'react'
import { MapContainer } from '../UI'
import Map, { Marker } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';


const Locator = () => {
  return (
    <MapContainer>
        <Map
      mapboxAccessToken="pk.eyJ1IjoiamFja2lld2ViZGV2IiwiYSI6ImNsdjFoeWlzdzA1NWIydGxkNDZnM2V6NGcifQ.ob63OSXlq8HcLLTYHRirbw"
      initialViewState={{
        longitude: -81.5306693,
        latitude: 41.4271272,
        zoom: 9
      }}
      style={{width: '100vw', height: '100%'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
        <Marker
        className="hover:scale-150 cursor-pointer relative "
        longitude={-81.693933}
        latitude={41.499948}
        anchor="bottom"
      >
        
        {/* <FaSafari className="w-10 h-10 rounded-full animate-bounce" /> */}
        <Image width={50} height={50} src="https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/media%2FFaviconDiviMap.png?alt=media&token=1bd25b4d-6df9-4f32-a951-ee989c365bbe" alt="giraffe" className="w-16 animate-bounce" />
      </Marker>
      {/* <div className="bg-black/80 w-11/12 max-w-[650px] absolute left-1/2 transform -translate-x-1/2 bottom-10 z-20 p-4 flex flex-col items-center rounded-md">
        <h1 className="text-white text-3xl">21600 Miles Rd</h1>
        <h1 className="text-white text-3xl">N Randall, OH 44128</h1>
        <h1 className="text-white text-3xl">(216) 365-0365</h1>
      </div> */}
        </Map>
    </MapContainer>
  )
}

export default Locator