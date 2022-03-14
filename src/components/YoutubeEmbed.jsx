import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube-nocookie.com/embed/${embedId}`}
        frameBorder="0"
        clipboard="write" 
        encrypted="media"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Gurenge"
      />
  </div>
);

YoutubeEmbed.defaultProps = {
  embedId: "CzQS7R-m2D4"
}

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
