import { images } from '../utils';

export const NotFound = () => {
  const bgStyles = {
    background: `url(${images[4]}) no-repeat center`,
  };

  return <div className="not_found" style={bgStyles}></div>;
};
