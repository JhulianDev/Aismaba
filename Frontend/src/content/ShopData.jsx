import { v4 as uuidv4 } from 'uuid';
// Hero
import SHOP_ICON from "../assets/img/generales/shop/hero/shop_icon.svg"
import SOCIAL_ICONS from "../assets/img/generales/shop/hero/social_icons.svg"
import COVER_HERO_01 from "../assets/img/generales/shop/hero/cover_hero_01.png"
import COVER_HERO_02 from "../assets/img/generales/shop/hero/cover_hero_02.png"
import COVER_HERO_03 from "../assets/img/generales/shop/hero/cover_hero_03.png"
import COVER_HERO_04 from "../assets/img/generales/shop/hero/cover_hero_04.png"
import COVER_HERO_05 from "../assets/img/generales/shop/hero/cover_hero_05.png"
import COVER_HERO_06 from "../assets/img/generales/shop/hero/cover_hero_06.png"
import COVER_HERO_07 from "../assets/img/generales/shop/hero/cover_hero_07.png"
import COVER_HERO_08 from "../assets/img/generales/shop/hero/cover_hero_08.png"
import COVER_HERO_09 from "../assets/img/generales/shop/hero/cover_hero_09.png"
import COVER_HERO_10 from "../assets/img/generales/shop/hero/cover_hero_10.png"
import COVER_HERO_11 from "../assets/img/generales/shop/hero/cover_hero_11.png"
import COVER_HERO_12 from "../assets/img/generales/shop/hero/cover_hero_12.png"

export const data = {
  hero: {
    tag: "TIENDA AISMABA",
    iconTag: SHOP_ICON,
    iconTexts: SOCIAL_ICONS,
    title: "Plantillas Editables",
    description: "¡Dale una imagen atractiva a tu marca!",
    covers: [
      COVER_HERO_01,
      COVER_HERO_02,
      COVER_HERO_03,
      COVER_HERO_04,
      COVER_HERO_05,
      COVER_HERO_06,
      COVER_HERO_07,
      COVER_HERO_08,
      COVER_HERO_09,
      COVER_HERO_10,
      COVER_HERO_11,
      COVER_HERO_12
    ]
  },
  templates: [
    { id: uuidv4(), name: "Minimal Mood", price: { ARS: "99.999", USD: "99.99", EUR: "92.99" }, coverImage: "", galleryImages: "" }
  ]
}