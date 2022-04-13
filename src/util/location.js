const GOOGLE_API_KEY = 'AIzaSyCIJ_1Un5ujcYmEMGyc3wYIK2MHYqYb3h8';

function getMapPreview(lat, lng) {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200
    &markers=color:red%7Clabel:S%7C${lat},${lng}
    &key=${GOOGLE_API_KEY}`;

    return imagePreviewUrl;
}

export { getMapPreview };