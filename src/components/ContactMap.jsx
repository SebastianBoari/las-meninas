import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import { firebaseVariables } from '../env'

const ContactMap = () => {
  const position = { lat: -33.011059, lng: -58.518454 }

  return (
    <div className="h-[280px] md:w-[380px] spxs:w-[240px] spsm:w-[280px] splg:w-[320px]">
      <APIProvider apiKey={firebaseVariables.apiKey}>
        <Map defaultCenter={position} defaultZoom={16}>
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  )
}

export default ContactMap
