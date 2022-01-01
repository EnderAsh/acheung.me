import React from "react";
import { Modal } from "react-responsive-modal";
import LazyLoad from "react-lazyload";
import "react-responsive-modal/styles.css";

interface BaseImageProps {
  imageElement: JSX.Element;
  isModalOpen: boolean;
  onModalClose: () => void;
}

function ModalImage(props: BaseImageProps) {
  const { imageElement, isModalOpen, onModalClose } = props;

  return (
    <div className="image-wrapper">
      <Modal open={isModalOpen} onClose={onModalClose} showCloseIcon={false}>
        {imageElement}
      </Modal>

      {imageElement}
    </div>
  );
}

export function Image(props: { src: string; caption: string }) {
  const { src, caption } = props;
  const [isModalOpen, setModalOpen] = React.useState(false);

  const imageElement = (
    <figure className="image" onClick={() => setModalOpen(true)}>
      <LazyLoad offset={500}>
        <img src={src} alt={caption} />
        {/* wrap caption to allow for content-box but also not use the size of padding in width */}
        <div style={{ position: "relative" }}>
          <figcaption className="image__caption">{caption}</figcaption>
        </div>
      </LazyLoad>
    </figure>
  );

  return (
    <ModalImage
      imageElement={imageElement}
      isModalOpen={isModalOpen}
      onModalClose={() => setModalOpen(false)}
    />
  );
}

export function AnimatedImage(props: { src: string; caption: string }) {
  const { src, caption } = props;
  const [isModalOpen, setModalOpen] = React.useState(false);

  const imageElement = (
    <figure className="image" onClick={() => setModalOpen(true)}>
      <video controls loop>
        <source src={src} />
        Sorry, your browser does not support embedded videos.
      </video>
      {/* wrap caption to allow for content-box but also not use the size of padding in width */}
      <div style={{ position: "relative" }}>
        <figcaption className="image__caption">{caption}</figcaption>
      </div>
    </figure>
  );

  return (
    <ModalImage
      imageElement={imageElement}
      isModalOpen={isModalOpen}
      onModalClose={() => setModalOpen(false)}
    />
  );
}
