import "../styles/tailwind.css";
//import "../styles/video-react.css";
//import "node_modules/video-react/dist/video-react.css"; // import css for video player
import "video-react/dist/video-react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
