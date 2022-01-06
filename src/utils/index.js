import DeckGL, {
  COORDINATE_SYSTEM,
  PointCloudLayer,
  OrbitView,
  LinearInterpolator,
} from 'deck.gl'


const RADIUS = 6378137
const FLATTENING = 1 / 298.257223563
const POLAR_RADIUS = RADIUS * (1-FLATTENING)

let asqr = RADIUS * RADIUS
let bsqr = POLAR_RADIUS * POLAR_RADIUS
const DegreesPerRadian = 57.295779513082320

const WGS84 = {
  a: RADIUS,
  f: FLATTENING,
  b: POLAR_RADIUS,
  e: Math.sqrt((asqr - bsqr) / asqr),
  eprime: Math.sqrt((asqr - bsqr) / bsqr),
}

const radToDeg = (rad) => rad * DegreesPerRadian

export const ECEFToLonLatAlt = ({ x, y, z }) => {
  let a = WGS84.a, b = WGS84.b, f = WGS84.f

  const e2 = 2*f - f*f;
  const ε2 = e2 / (1-e2)
  const p = Math.sqrt(x*x + y*y);
  const R = Math.sqrt(p*p + z*z)

  const tanBeta = (b*z)/(a*p) * (1+ε2*b/R)
  const sinBeta = tanBeta / Math.sqrt(1+tanBeta*tanBeta)
  const cosBeta = sinBeta / tanBeta

  // geodetic latitude (Bowring eqn 18: tanφ = z+ε²bsin³β / p−e²cos³β)
  const phi = isNaN(cosBeta) ? 0 : Math.atan2(z + ε2*b*sinBeta*sinBeta*sinBeta, p - e2*a*cosBeta*cosBeta*cosBeta);

  // longitude
  const lamda = Math.atan2(y, x);

  // height above ellipsoid (Bowring eqn 7) [not currently used]
  const sinPhi = Math.sin(phi), cosPhi = Math.cos(phi);
  const nu = a/Math.sqrt(1-e2*sinPhi*sinPhi); // length of the normal terminated by the minor axis
  const h = p*cosPhi + z*sinPhi - (a*a/nu);

  const lon = radToDeg(lamda);
  const lat = radToDeg(phi);

  return {
    lon: lon,
    lat: lat,
    alt: h
  };
}

export const determineColor = (height) => {
  let red, blue, green
  if (height >= 6.65 && height <= 32) {
    red = 1 - green
    green = height / 32.0
    blue = 0
  } else if (height > 32 && height <= 58.57) {
    red = 0
    blue = (height - 31) / 32
    green = 1 - blue
  }
  return [red, green, blue]
}

export const INITIAL_VIEW_STATE = {
  target: [0, 0, 0],
  rotationX: 0,
  rotationOrbit: 0,
  orbitAxis: 'Y',
  fov: 50,
  minZoom: 0,
  maxZoom: 10,
  zoom: 0,
}

export const transitionInterpolator = new LinearInterpolator(['rotationOrbit'])

export const colors = { clearColor: [0.07, 0.14, 0.19, 1] }

export const orbit = new OrbitView()

export const PLY_SAMPLE = 'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/point-cloud-ply/lucy800k.ply';
// export const PLY_SAMPLE = 'https://s3.amazonaws.com/web-ui-engineering-challenge/point-cloud.ply';

export const renderLayers = s => [pointLayer(s)]

export const pointLayer = s => new PointCloudLayer({
  id: 'ply-point-cloud-layer',
  coordinateSystem: COORDINATE_SYSTEM.IDENTITY,
  numInstances: s.pointsCount,
  instancePositions: s.points,
  getColor: [255, 255, 255],
  getNormal: [0, 1, 0],
  pointSize: 0.5,
  opacity: 0.5,
})