# jm site

This challenge explores various approaches to creating dynamic point cloud visualizations with WebGL and a modern react stack supported by Next.js, AWS Lambda and Serverless framework.

## Stack:

- [Three.js](https://threejs.org/)
- [React](https://reactjs.org/)
- [Next.js](https://github.com/zeit/next.js)

Bonus Round:

- [DeckGL](https://deck.gl/)

## Getting started

Install [Node.js](https://nodejs.org/en/download/) and add its `bin/` directory to `$PATH`.

Make sure `node` and `npm or yarn` are available from the command line:

For Development
```bash
  yarn
  yarn dev
```

For Production
```bash
  yarn build
  yarn start
```


## Solutions

My first instinct was move to tried and true tools like Deck.GL, as I'm more comfortable with them. I went with this partly because of  the flexibility of the rendering api. It lends itself well to the decalarative and functional styles come part and parcel with modern React. It was quite straightforward to compose an environment to render 3D Pointclouds, though I hit a stumbling block with the ECEF geometries encoded into the PLY file.

I utilized [Loaders.gl](https://loaders.gl/) to parse the PLY, which was successfull though I needed to find a clever way to find min and max for x, y, z and construct the bounds for the scene. I didn't want to spend to much time on that so I decided to move on to a solution with Three.js

I did get some interesting results experimenting with the `ECEFToLonLatAlt` method. I had experimented with translating the point cloud ontop of Map with [react-map-gl](https://uber.github.io/react-map-gl/). I had however let things stand with an interactive point cloud vis that can be found at `localhost:3000/deck`

Moving from the experiments with deck.gl, I went on to bring over the environment for three.js, and broke down the rendering context and the logic to support the scene, geometries et all.

From there I established the scene and webGL frame buffer that the ply model and other logic are bound. A key method, `initScene` is where the the main model geometries and scene enviornment are referenced. I did come upon some issues with transforming the model geometries and colors after they were bound to the scene, but there probably is a clever and simple way to do so that im missing. That said, I had a lot of fun with this challenge!
