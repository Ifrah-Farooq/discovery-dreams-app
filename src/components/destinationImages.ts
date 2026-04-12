/* ─── Destination Image Constants ────────────────────────────────────
   All image sources used in DestinationsSection.
   • Local assets  — imported directly from /assets
   • JKTDC CDN     — official J&K Tourism photos (cdn.jktdc.co.in)
   • Unsplash      — fallback landscape photos
──────────────────────────────────────────────────────────────────── */

// ── Local asset imports ──────────────────────────────────────────
import ladakhImg       from "@/assets/ladakh.jpg";
import imgShalimar     from "@/assets/shalimar-bagh.jpg";
import imgGulmargResort from "@/assets/gulmarg-resort.jpg";
import imgSonamargMdw  from "@/assets/sonamarg-meadow.jpg";
import imgPangong      from "@/assets/pangong-lake.jpg";
import imgYusmarg      from "@/assets/yusmarg-meadow.jpg";
import imgHouseboat    from "@/assets/dal-houseboat.jpg";
import imgSrinagar     from "@/assets/srinagar-city.jpg";
import imgKokernag     from "@/assets/kokernag-spring.jpg";
import imgVaishnoDevi  from "@/assets/vaishno-devi.jpg";
import imgAmarnath     from "@/assets/amarnath-shrine.jpg";
import imgNubra        from "@/assets/nubra-valley.jpg";
import imgMagneticHill from "@/assets/Ladakh-Magnetic-Hill-03.jpg";
import imgTsoMoriri    from "@/assets/Tso_Moriri,_Ladakh.jpg";
import imgAruValley    from "@/assets/aru-valley-pahalgam2.jpg";
import imgBetaab       from "@/assets/betaab-valley-pahalgam2.jpg";
import imgKounsarnag   from "@/assets/kosarang-lake.webp";
import imgChandanwari  from "@/assets/chandanwari-pahalgam1.jpg";

// ── URL helpers ──────────────────────────────────────────────────
const uo = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=900&q=88&fit=crop&auto=format`;
const jk = (file: string) =>
  `https://cdn.jktdc.co.in/PageImages/${file}`;

// ── JKTDC official images ────────────────────────────────────────
export const JKTDC_AHARBAL    = jk("636440414426830205aharbal.jpg");
export const JKTDC_PAHALGAM   = jk("636441622319861208p.jpg");
export const JKTDC_DAKSUM     = jk("636441629595491420dak.jpg");
export const JKTDC_DOODHP     = jk("636441636707765386doodhe.jpg");
export const JKTDC_GUREZ      = jk("636441652680066290gurez.jpg");
export const JKTDC_LOLAB      = jk("636441659103782225lolab.jpg");
export const JKTDC_NARANAG    = jk("636441666173543094naranag.jpg");
export const JKTDC_SINTHAN    = jk("636441674011899270sinthan.jpg");
export const JKTDC_WATLAB     = jk("636441692986988602wat.jpg");
export const JKTDC_PEERGALI   = jk("636441696821366312peer.jpg");
export const JKTDC_WARWAN     = jk("636441750191590111warwan.jpg");
export const JKTDC_NISHAT     = jk("636441767473184310nishat.jpg");
export const JKTDC_CHASHME    = jk("636441772791753311chash.jpg");
export const JKTDC_PARI       = jk("636441777641389234pari.jpg");
export const JKTDC_TULIP      = jk("636441782629050068tulip.jpg");
export const JKTDC_DAL        = jk("636441788598674509dal.jpg");
export const JKTDC_NAGIN      = jk("636441802602515838nigeen.jpg");
export const JKTDC_VISHANSAR  = jk("636441810320510058vishan.jpg");
export const JKTDC_KRISHNASAR = jk("636441815076675580kis.jpg");
export const JKTDC_VERINAG    = jk("636441826516339701verinag.jpg");

// ── Unsplash fallback landscapes ────────────────────────────────
export const MTN1  = uo("1506905925346-21bda4d32df4"); // mountain valley
export const MTN2  = uo("1519681393784-d120267933ba"); // snowy peak
export const MTN3  = uo("1454496522488-7a8e488e8606"); // mountain range
export const LAKE1 = uo("1472214103451-9374bd1c798e"); // lake reflection
export const LAKE3 = uo("1500534314209-a25ddb2bd429"); // calm lake
export const FOR1  = uo("1441974231531-c6227db76b6e"); // forest stream
export const FOR3  = uo("1448375240586-882707db888b"); // dark forest
export const GRN1  = uo("1501854140801-50d01698950b"); // green hills
export const WILD1 = uo("1474511320723-9a56873867b5"); // wildlife/deer

// ── Re-export local assets ───────────────────────────────────────
export {
  ladakhImg,
  imgShalimar,
  imgGulmargResort,
  imgSonamargMdw,
  imgPangong,
  imgYusmarg,
  imgHouseboat,
  imgSrinagar,
  imgKokernag,
  imgVaishnoDevi,
  imgAmarnath,
  imgNubra,
  imgMagneticHill,
  imgTsoMoriri,
  imgAruValley,
  imgBetaab,
  imgKounsarnag,
  imgChandanwari,
};
