function VideoGallery() {
  return (
    <div className="container py-5 text-center">
      <h2 className="fw-bold text-success">Video Gallery</h2>

      <div className="mt-4">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Biofuel Awareness"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoGallery;
