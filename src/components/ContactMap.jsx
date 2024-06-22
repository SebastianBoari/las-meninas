import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import { firebaseVariables } from '../config/env.config'

const ContactMap = () => {
  const position = { lat: -33.011059, lng: -58.518454 }

  return (
    <div className="h-[280px] w-[380px]">
      {/* <APIProvider apiKey={firebaseVariables.apiKey}>
        <Map defaultCenter={position} defaultZoom={16}>
          <Marker position={position} />
        </Map>
      </APIProvider> */}
    </div>
  )
}

export default ContactMap
