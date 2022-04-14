import axios from 'axios';

const GOOGLE_API_KEY = 'AIzaSyDh0mx5VESE-TtMxxMmI56y5e9jQhpvn4A';

function getMapPreview(lat, lng) {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200
    &markers=color:red%7Clabel:S%7C${lat},${lng}
    &key=${GOOGLE_API_KEY}`;
    
    return imagePreviewUrl;
}

async function getAddress(lat, lng) {
    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
        const data = response.data;
        return data.display_name;
    } catch(error) {
        return '';
    }
}

export { getMapPreview, getAddress };