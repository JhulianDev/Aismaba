import { v4 as uuidv4 } from 'uuid';
// Hero
import SHOP_ICON from "../assets/img/generales/shop/hero/shop_icon.svg"
import SOCIAL_ICONS from "../assets/img/generales/shop/hero/social_icons.svg"
import { HERO_COVERS } from '../assets/img/generales/shop/hero/HERO_COVERS';
// Templates
import { AESTHETIC_BROWN_IMAGES } from "../assets/img/generales/shop/templates/01_AESTHETIC_BROWN/AESTHETIC_BROWN_IMAGES"
import { NEUTRAL_MINIMALIST_IMAGES } from '../assets/img/generales/shop/templates/02_NEUTRAL_MINIMALIST/NEUTRAL_MINIMALIST_IMAGES';

export const data = {
  hero: {
    tag: "TIENDA AISMABA",
    iconTag: SHOP_ICON,
    iconTexts: SOCIAL_ICONS,
    title: "Plantillas Editables",
    description: "¡Dale una imagen atractiva a tu marca!",
    covers: HERO_COVERS
  },
}

export const products = {
  templates: [
    { id: "1", name: "Aesthetic Brown", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (AESTHETIC_BROWN_IMAGES.coverImage), galleryImages: (AESTHETIC_BROWN_IMAGES.galleryImages) },
    { id: "2", name: "Neutral Minimalist", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (NEUTRAL_MINIMALIST_IMAGES.coverImage), galleryImages: (NEUTRAL_MINIMALIST_IMAGES.galleryImages) }
  ]
}