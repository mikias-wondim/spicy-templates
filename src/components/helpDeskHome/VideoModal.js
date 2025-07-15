import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

const VideoModal = ({ isOpen, setOpen }) => {
  return (
    <div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="pPl3ZZdTP3g"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default VideoModal;
