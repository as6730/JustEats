import React, { Component } from "react";

class PhotoGallery extends Component {
  constructor(props) {
    super(props);

    this.createPhotoShow = this.createPhotoShow.bind(this);
    this.calculatePhotos = this.calculatePhotos.bind(this);
  }

  createPhotoShow() {
    return this.props.photos.slice(0, 5);
  }

  calculatePhotos() {
    let photos = this.props.photos;

    if (photos.length === 1) {
      return "1 Photo"
    } else {
      return `${photos.length} Photos`
    }
  }

  render() {
    const photos = this.createPhotoShow();
    const photoHeader = this.calculatePhotos();

    return (
      <div className="photo-gallery">
        <div className="photo-gallery-header">{photoHeader}</div>
        <div className="photo-gallery-layout">
          <ul>
            {photos.map((photo, idx) => (
              <li key={idx} className="photo-gallery-layout">
                <img className="photo-gallery-li"
                  src={photo.url} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PhotoGallery;
