
const products = [
 
  {
    id: 1,
    name: "Lumière Solitaire Ring",
    category: "rings",
    price: 4800,
    shortDescription: "18k gold with a 1.2ct round brilliant diamond",
    fullDescription:
      "The Lumière Solitaire is our purest expression of devotion. Hand-forged from recycled 18-karat yellow gold, the band tapers to a whisper-thin profile before rising into a six-claw mount that cradles a 1.2ct round brilliant diamond. The geometry ensures maximum light return — the stone appears to float above the hand, radiating fire in any light. Each ring is laser-engraved with a unique serial number and arrives with a full GIA certificate.",
    image: "/jew1.jpg",
    featured: true,
    specs: {
      material: "18k Recycled Yellow Gold",
      stone: "1.2ct Round Brilliant Diamond — GIA Certified, VS1 Clarity, F Colour",
      weight: "4.8g",
      craftsmanshipNote:
        "Six-claw mount hand-shaped and polished by a single goldsmith over eight hours. Each claw tip burnished to a mirror finish.",
    },
  },
  {
    id: 2,
    name: "Céleste Drop Earrings",
    category: "earrings",
    price: 2200,
    shortDescription: "White gold with cascading sapphire drops",
    fullDescription:
      "Inspired by raindrops suspended mid-fall, the Céleste earrings descend from a pavé-set diamond stud into three graduating oval sapphires linked by delicate white gold joints. The sapphires are matched for depth of colour — a vivid cornflower blue from Sri Lanka — and move freely, catching light with each turn of the head. Lightweight despite their presence, they are designed for all-day wear.",
    image: "/jew2.jpg",
    featured: true,
    specs: {
      material: "18k White Gold",
      stone: "3 × Oval Sri Lankan Sapphires (total 2.1ct) + 0.18ct Pavé Diamond Studs",
      weight: "3.2g per pair",
      craftsmanshipNote:
        "Open-back bezel setting allows maximum light entry through each sapphire. Joint links hand-soldered for fluid articulation.",
    },
  },
  {
    id: 3,
    name: "Orbis Bangle",
    category: "bracelets",
    price: 3100,
    shortDescription: "Hammered 22k gold — sculptural, wearable art",
    fullDescription:
      "The Orbis Bangle is cast in high-purity 22-karat gold for an unmistakably warm, sun-drenched tone. The surface is hand-hammered — each facet struck individually to create a texture that catches and scatters light like a moving mosaic. No two bangles are identical. The rigid C-form slips over the wrist with ease yet sits with sculptural authority. A statement that requires nothing else.",
    image: "/jew3.jpg",
    featured: true,
    specs: {
      material: "22k Yellow Gold",
      stone: "None — pure metalwork",
      weight: "19.6g",
      craftsmanshipNote:
        "Hand-hammered over a mandrel using a cross-peen hammer. Each strike placed deliberately — the process takes five hours per bangle.",
    },
  },
  {
    id: 4,
    name: "Étoile Pendant",
    category: "necklaces",
    price: 1650,
    shortDescription: "Star sapphire in white gold, pavé diamond halo",
    fullDescription:
      "At the centre of the Étoile Pendant sits a 2.4ct natural star sapphire — its silky asterism shifting from the centre as the light moves. Around it, a halo of sixty-two hand-set brilliant diamonds creates a constellation effect. Suspended from a 45cm white gold chain with an adjustable 50cm extender, it sits beautifully at the collar.",
    image: "/jew4.jpg",
    featured: true,
    specs: {
      material: "18k White Gold + 45cm Chain",
      stone: "2.4ct Natural Star Sapphire + 0.28ct Brilliant Pavé Diamonds",
      weight: "4.1g (pendant only)",
      craftsmanshipNote:
        "Cabochon sapphire aligned under a loupe to perfectly centre the star. Halo setting completed over twelve hours.",
    },
  },
  {
    id: 5,
    name: "Soleil Stackable Set",
    category: "rings",
    price: 980,
    shortDescription: "Set of three slim 18k gold bands",
    fullDescription:
      "Three rings that speak alone and sing together. The Soleil set includes a plain polished band, a half-pavé diamond band, and a milgrain-edge band — each in 18-karat yellow gold. Wear all three stacked, mix with existing pieces, or gift them individually. The uniformly slender 1.6mm profile means zero bulk when worn together.",
    image: "/jew5.jpg",
    featured: false,
    specs: {
      material: "18k Yellow Gold",
      stone: "0.09ct Total Diamond Weight (half-pavé band)",
      weight: "2.1g per set of three",
      craftsmanshipNote:
        "Each band finished on a motorised polishing wheel then hand-buffed. Milgrain edge applied with a hand-held beading tool.",
    },
  },
  {
    id: 6,
    name: "Cascade Tennis Bracelet",
    category: "bracelets",
    price: 5600,
    shortDescription: "4ct total weight round brilliants in platinum",
    fullDescription:
      "Forty-eight round brilliant diamonds, individually set in four-claw mounts of platinum, flow around the wrist in seamless continuity. The Cascade Tennis Bracelet is a masterclass in restraint — no decorative framing, no distracting metalwork, just diamond after diamond in perfect alignment. A box clasp with double safety catch ensures it never leaves the wrist uninvited.",
    image: "/jew6.jpg",
    featured: false,
    specs: {
      material: "Platinum 950",
      stone: "48 × Round Brilliant Diamonds — 4.0ct Total, SI1–VS2 Clarity, G–H Colour",
      weight: "14.2g",
      craftsmanshipNote:
        "Each diamond individually selected for matching brilliance. Setting completed over three days by a single craftsperson.",
    },
  },
  {
    id: 7,
    name: "Rivière Ear Cuff",
    category: "earrings",
    price: 890,
    shortDescription: "Diamond-set gold ear cuff — no piercing required",
    fullDescription:
      "The Rivière Ear Cuff wraps the upper cartilage in a continuous curve of channel-set diamonds, requiring no piercing. The tension of the 18-karat rose gold form holds it securely in place. Architectural yet effortless — it redefines the ear as a surface for fine jewellery.",
    image: "/jew7.jpg",
    featured: false,
    specs: {
      material: "18k Rose Gold",
      stone: "0.22ct Channel-Set Round Brilliants, VS Clarity, F–G Colour",
      weight: "2.8g",
      craftsmanshipNote:
        "Channel walls hand-filed to precise depth to prevent diamond movement. Tension calibrated to comfortably fit ear profiles 10–14mm.",
    },
  },
  {
    id: 8,
    name: "Meridian Chain Necklace",
    category: "necklaces",
    price: 1200,
    shortDescription: "Bold 22k gold chain, contemporary craftsmanship",
    fullDescription:
      "The Meridian is a study in proportion. Each hollow link is hand-formed in 22-karat gold, pressed into a slightly flattened oval, and soldered with invisible joints. The resulting chain has weight, sound, and presence without sacrificing wearability. Worn alone at 50cm or layered, it anchors any look it enters.",
    image: "/jew8.jpg",
    featured: false,
    specs: {
      material: "22k Yellow Gold",
      stone: "None",
      weight: "24.8g",
      craftsmanshipNote:
        "Each link individually hand-pressed and soldered. Chain assembled and tension-tested before final polishing.",
    },
  },
];
 console.log(products.filter(p => !p.image));
export default products;