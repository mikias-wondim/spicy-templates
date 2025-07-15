import ModalVideo from "react-modal-video";

const SimpleVideoModal = ({ isOpen, setOpen }) => {
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hAP2QF--2Dg"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default SimpleVideoModal;
