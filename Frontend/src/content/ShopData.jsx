import { v4 as uuidv4 } from 'uuid';
// Hero
import SHOP_ICON from "../assets/img/generales/shop/hero/shop_icon.svg"
import SOCIAL_ICONS from "../assets/img/generales/shop/hero/social_icons.svg"
import { HERO_COVERS } from '../assets/img/generales/shop/hero/HERO_COVERS';
// Templates
import { AESTHETIC_BROWN_IMAGES } from "../assets/img/generales/shop/templates/01_AESTHETIC_BROWN/AESTHETIC_BROWN_IMAGES"
import { NEUTRAL_MINIMALIST_IMAGES } from '../assets/img/generales/shop/templates/02_NEUTRAL_MINIMALIST/NEUTRAL_MINIMALIST_IMAGES';
import { BLACK_AESTHETIC_IMAGES } from '../assets/img/generales/shop/templates/03_BLACK_AESTHETIC/BLACK_AESTHETIC_IMAGES';
import { MINIMAL_MOOD_IMAGES } from '../assets/img/generales/shop/templates/04_MINIMAL_MOOD/MINIMAL_MOOD_IMAGES';
import { ROSE_LOVE_IMAGES } from '../assets/img/generales/shop/templates/05_ROSE_LOVE/ROSE_LOVE_IMAGES';
import { ELEGANT_INSPO_IMAGES } from '../assets/img/generales/shop/templates/06_ELEGANT_INSPO/ELEGANT_INSPO_IMAGES';
import { GREEN_EXPERIENCES_IMAGES } from '../assets/img/generales/shop/templates/07_GREEN_EXPERIENCES/GREEN_EXPERIENCES_IMAGES';
import { OCEAN_BLUE_IMAGES } from '../assets/img/generales/shop/templates/08_OCEAN_BLUE/OCEAN_BLUE_IMAGES';
import { MIX_NUDE_IMAGES } from '../assets/img/generales/shop/templates/09_MIX_NUDE/MIX_NUDE_IMAGES';
import { SOL_GREY_IMAGES } from '../assets/img/generales/shop/templates/10_SOL_GREY/SOL_GREY_IMAGES';
import { CURVE_PINK_IMAGES } from '../assets/img/generales/shop/templates/11_CURVE_PINK/CURVE_PINK_IMAGES';
import { GREEN_WORLD_IMAGES } from '../assets/img/generales/shop/templates/12_GREEN_WORLD/GREEN_WORLD_IMAGES';
import { THREE_PACK_01_IMAGES } from '../assets/img/generales/shop/templates/13_THREE_PACK_01/THREE_PACK_01_IMAGES';
import { THREE_PACK_02_IMAGES } from '../assets/img/generales/shop/templates/14_THREE_PACK_02/THREE_PACK_02_IMAGES';
import { THREE_PACK_03_IMAGES } from '../assets/img/generales/shop/templates/15_THREE_PACK_03/THREE_PACK_03_IMAGES';
import { THREE_PACK_04_IMAGES } from '../assets/img/generales/shop/templates/16_THREE_PACK_04/THREE_PACK_04_IMAGES';
import { TWELVE_PACK_IMAGES } from '../assets/img/generales/shop/templates/17_TWELVE_PACK/TWELVE_PACK_IMAGES';

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
    { id: "2", name: "Neutral Minimalist", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (NEUTRAL_MINIMALIST_IMAGES.coverImage), galleryImages: (NEUTRAL_MINIMALIST_IMAGES.galleryImages) },
    { id: "3", name: "Black Aesthetic", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (BLACK_AESTHETIC_IMAGES.coverImage), galleryImages: (BLACK_AESTHETIC_IMAGES.galleryImages) },
    { id: "4", name: "Minimal Mood", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (MINIMAL_MOOD_IMAGES.coverImage), galleryImages: (MINIMAL_MOOD_IMAGES.galleryImages) },
    { id: "5", name: "Rose Love", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (ROSE_LOVE_IMAGES.coverImage), galleryImages: (ROSE_LOVE_IMAGES.galleryImages) },
    { id: "6", name: "Elegant Inspo", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (ELEGANT_INSPO_IMAGES.coverImage), galleryImages: (ELEGANT_INSPO_IMAGES.galleryImages) },
    { id: "7", name: "Green Experiences", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (GREEN_EXPERIENCES_IMAGES.coverImage), galleryImages: (GREEN_EXPERIENCES_IMAGES.galleryImages) },
    { id: "8", name: "Ocean Blue", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (OCEAN_BLUE_IMAGES.coverImage), galleryImages: (OCEAN_BLUE_IMAGES.galleryImages) },
    { id: "9", name: "Mix Nude", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (MIX_NUDE_IMAGES.coverImage), galleryImages: (MIX_NUDE_IMAGES.galleryImages) },
    { id: "10", name: "Sol Grey", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (SOL_GREY_IMAGES.coverImage), galleryImages: (SOL_GREY_IMAGES.galleryImages) },
    { id: "11", name: "Curve Pink", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (CURVE_PINK_IMAGES.coverImage), galleryImages: (CURVE_PINK_IMAGES.galleryImages) },
    { id: "12", name: "Green World", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (GREEN_WORLD_IMAGES.coverImage), galleryImages: (GREEN_WORLD_IMAGES.galleryImages) },
    { id: "13", name: "Three Pack 01", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (THREE_PACK_01_IMAGES.coverImage), galleryImages: (THREE_PACK_01_IMAGES.galleryImages) },
    { id: "14", name: "Three Pack 02", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (THREE_PACK_02_IMAGES.coverImage), galleryImages: (THREE_PACK_02_IMAGES.galleryImages) },
    { id: "15", name: "Three Pack 03", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (THREE_PACK_03_IMAGES.coverImage), galleryImages: (THREE_PACK_03_IMAGES.galleryImages) },
    { id: "16", name: "Three Pack 04", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (THREE_PACK_04_IMAGES.coverImage), galleryImages: (THREE_PACK_04_IMAGES.galleryImages) },
    { id: "17", name: "Twelve Pack", type: "Plantillas Instagram", price: { ARS: "6000", USD: "30", EUR: "28" }, coverImage: (TWELVE_PACK_IMAGES.coverImage), galleryImages: (TWELVE_PACK_IMAGES.galleryImages) }
  ]
}