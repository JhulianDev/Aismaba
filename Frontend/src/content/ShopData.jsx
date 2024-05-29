// Test
import TEST_IMAGE from "../assets/img/generales/test-image.webp"
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

const contentTemplates = [
  "9 Plantillas para Posts en formato vertical (1080 x 1350px)",
  "6 Plantillas para Portadad de Reels en formato vertical (1080 x 1920px)",
  "9 Plantillas para Historias en formato vertical (1080 x 1920px)",
  "3 Plantillas para Carrusel de 5 Páginas c/u (1080 x 1350px)",
  "6 Portadas para Historias Destacadas (1080 x 1920px)"
]

export const products = {
  templates: [
    {
      id: "1",
      name: "Aesthetic Brown",
      type: "Plantillas Instagram",
      price: { ARS: "4800", USD: "24", EUR: "22" },
      previousPrice: { ARS: "6000", USD: "30", EUR: "28" },
      coverImage: (AESTHETIC_BROWN_IMAGES.coverImage),
      galleryImages: (AESTHETIC_BROWN_IMAGES.galleryImages),
      content: contentTemplates
    },
    {
      id: "2",
      name: "Neutral Minimalist",
      type: "Plantillas Instagram",
      price: { ARS: "4800", USD: "24", EUR: "22" },
      previousPrice: { ARS: "6000", USD: "30", EUR: "28" },
      coverImage: (NEUTRAL_MINIMALIST_IMAGES.coverImage),
      galleryImages: (NEUTRAL_MINIMALIST_IMAGES.galleryImages),
      content: contentTemplates
    },
    {
      id: "3",
      name: "Black Aesthetic",
      type: "Plantillas Instagram",
      price: { ARS: "4800", USD: "24", EUR: "22" },
      previousPrice: { ARS: "6000", USD: "30", EUR: "28" },
      coverImage: (BLACK_AESTHETIC_IMAGES.coverImage),
      galleryImages: (BLACK_AESTHETIC_IMAGES.galleryImages),
      content: contentTemplates
    },
    {
      id: "4",
      name: "Minimal Mood",
      type: "Plantillas Instagram",
      price: { ARS: "4800", USD: "24", EUR: "22" },
      previousPrice: { ARS: "6000", USD: "30", EUR: "28" },
      coverImage: (MINIMAL_MOOD_IMAGES.coverImage),
      galleryImages: (MINIMAL_MOOD_IMAGES.galleryImages),
      content: contentTemplates
    },
    {
      id: "5",
      name: "Rose Love",
      type: "Plantillas Instagram",
      price: { ARS: "4800", USD: "24", EUR: "22" },
      previousPrice: { ARS: "6000", USD: "30", EUR: "28" },
      coverImage: (ROSE_LOVE_IMAGES.coverImage),
      galleryImages: (ROSE_LOVE_IMAGES.galleryImages),
      content: contentTemplates
    },
    {
      id: "6",
      name: "Elegant Inspo",
      type: "Plantillas Instagram",
      price: { ARS: "4800", USD: "24", EUR: "22" },
      previousPrice: { ARS: "6000", USD: "30", EUR: "28" },
      coverImage: (ELEGANT_INSPO_IMAGES.coverImage),
      galleryImages: (ELEGANT_INSPO_IMAGES.galleryImages),
      content: contentTemplates
    },
    {
      id: "7",
      name: "Green Experiences",
      type: "Plantillas Instagram",
      price: { ARS: "4800", USD: "24", EUR: "22" },
      previousPrice: { ARS: "6000", USD: "30", EUR: "28" },
      coverImage: (GREEN_EXPERIENCES_IMAGES.coverImage),
      galleryImages: (GREEN_EXPERIENCES_IMAGES.galleryImages),
      content: contentTemplates
    },
    {
      id: "8",
      name: "Ocean Blue",
      type: "Plantillas Instagram",
      price: { ARS: "4800", USD: "24", EUR: "22" },
      previousPrice: { ARS: "6000", USD: "30", EUR: "28" },
      coverImage: (OCEAN_BLUE_IMAGES.coverImage),
      galleryImages: (OCEAN_BLUE_IMAGES.galleryImages),
      content: contentTemplates
    },
    {
      id: "9",
      name: "Mix Nude",
      type: "Plantillas Instagram",
      price: { ARS: "4800", USD: "24", EUR: "22" },
      previousPrice: { ARS: "6000", USD: "30", EUR: "28" },
      coverImage: (MIX_NUDE_IMAGES.coverImage),
      galleryImages: (MIX_NUDE_IMAGES.galleryImages),
      content: contentTemplates
    },
    {
      id: "10",
      name: "Sol Grey",
      type: "Plantillas Instagram",
      price: { ARS: "4800", USD: "24", EUR: "22" },
      previousPrice: { ARS: "6000", USD: "30", EUR: "28" },
      coverImage: (SOL_GREY_IMAGES.coverImage),
      galleryImages: (SOL_GREY_IMAGES.galleryImages),
      content: contentTemplates
    },
    {
      id: "11",
      name: "Curve Pink",
      type: "Plantillas Instagram",
      price: { ARS: "4800", USD: "24", EUR: "22" },
      previousPrice: { ARS: "6000", USD: "30", EUR: "28" },
      coverImage: (CURVE_PINK_IMAGES.coverImage),
      galleryImages: (CURVE_PINK_IMAGES.galleryImages),
      content: contentTemplates
    },
    {
      id: "12",
      name: "Green World",
      type: "Plantillas Instagram",
      price: { ARS: "4800", USD: "24", EUR: "22" },
      previousPrice: { ARS: "6000", USD: "30", EUR: "28" },
      coverImage: (GREEN_WORLD_IMAGES.coverImage),
      galleryImages: (GREEN_WORLD_IMAGES.galleryImages),
      content: contentTemplates
    },
    {
      id: "13",
      name: "Three Pack 01",
      type: "Pack Plantillas",
      price: { ARS: "10400", USD: "52", EUR: "48" },
      previousPrice: { ARS: "13000", USD: "65", EUR: "60" },
      coverImage: (THREE_PACK_01_IMAGES.coverImage),
      galleryImages: (THREE_PACK_01_IMAGES.galleryImages),
      content: [
        "Paquete de plantillas Aesthetic Brown",
        "Paquete de plantillas Minimal Mood",
        "Paquete de plantillas Elegant Inspo"
      ]
    },
    {
      id: "14",
      name: "Three Pack 02",
      type: "Pack Plantillas",
      price: { ARS: "10400", USD: "52", EUR: "48" },
      previousPrice: { ARS: "13000", USD: "65", EUR: "60" },
      coverImage: (THREE_PACK_02_IMAGES.coverImage),
      galleryImages: (THREE_PACK_02_IMAGES.galleryImages),
      content: [
        "Paquete de plantillas Rose Love",
        "Paquete de plantillas Mix Nude",
        "Paquete de plantillas Curve Pink"
      ]
    },
    {
      id: "15",
      name: "Three Pack 03",
      type: "Pack Plantillas",
      price: { ARS: "10400", USD: "52", EUR: "48" },
      previousPrice: { ARS: "13000", USD: "65", EUR: "60" },
      coverImage: (THREE_PACK_03_IMAGES.coverImage),
      galleryImages: (THREE_PACK_03_IMAGES.galleryImages),
      content: [
        "Paquete de plantillas Black Aesthetic",
        "Paquete de plantillas Neutral Minimalist",
        "Paquete de plantillas Sol Grey"
      ]
    },
    {
      id: "16",
      name: "Three Pack 04",
      type: "Pack Plantillas",
      price: { ARS: "10400", USD: "52", EUR: "48" },
      previousPrice: { ARS: "13000", USD: "65", EUR: "60" },
      coverImage: (THREE_PACK_04_IMAGES.coverImage),
      galleryImages: (THREE_PACK_04_IMAGES.galleryImages),
      content: [
        "Paquete de plantillas Ocean Blue",
        "Paquete de plantillas Green Experiences",
        "Paquete de plantillas Green World"
      ]
    },
    {
      id: "17",
      name: "Twelve Pack",
      type: "Pack Plantillas",
      price: { ARS: "40320", USD: "136", EUR: "126" },
      previousPrice: { ARS: "50400", USD: "170", EUR: "158" },
      coverImage: (TWELVE_PACK_IMAGES.coverImage),
      galleryImages: (TWELVE_PACK_IMAGES.galleryImages),
      content: [
        "Incluye los 12 Packs de plantillas disponibles en nuestra tienda:",
        "· Pack Aesthetic Brown",
        "· Pack Neutral Minimalist",
        "· Pack Black Aesthetic",
        "· Pack Minimal Mood",
        "· Pack Rose Love",
        "· Pack Elegant Inspo",
        "· Pack Green Experiences",
        "· Pack Ocean Blue",
        "· Pack Mix Nude",
        "· Pack Sol Grey",
        "· Pack Curve Pink",
        "· Pack Green World",
      ]
    },
    // {
    //   id: "18",
    //   name: "TEST 1",
    //   type: "Pack Plantillas",
    //   price: { ARS: "10", USD: "136", EUR: "126" },
    //   previousPrice: { ARS: "50", USD: "170", EUR: "158" },
    //   coverImage: TEST_IMAGE,
    //   galleryImages: [TEST_IMAGE],
    //   content: [
    //     "Este producto NO CONTIENE PLANTILLAS",
    //     "Solo debe ser utilizado por los desarrolladores del sitio web para realizar pruebas."
    //   ]
    // },
    // {
    //   id: "19",
    //   name: "TEST 2",
    //   type: "Pack Plantillas",
    //   price: { ARS: "10", USD: "136", EUR: "126" },
    //   previousPrice: { ARS: "50", USD: "170", EUR: "158" },
    //   coverImage: TEST_IMAGE,
    //   galleryImages: [TEST_IMAGE],
    //   content: [
    //     "Este producto NO CONTIENE PLANTILLAS",
    //     "Solo debe ser utilizado por los desarrolladores del sitio web para realizar pruebas."
    //   ]
    // }
  ]
}