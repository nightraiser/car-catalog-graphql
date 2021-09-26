import { CAR_IMAGES } from '../const/cars'

export const getCarImage = () => {
    const [min, max] = [0, CAR_IMAGES.length - 1]
    return CAR_IMAGES[Math.floor(Math.random() * (max - min) + min)];
}