import "./Map.css"

function Map() {
    return (
        <div className="map ">
            <h1>Location</h1>
        <iframe width="100%" height="585" id="gmap_canvas" src="https://maps.google.com/maps?q=pristina&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
    );
  }
  
  export default Map;