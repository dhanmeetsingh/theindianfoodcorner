import { Filter } from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";

const menuItems = [
  // STARTERS
  {
    id: 1,
    name: "Papadam",
    nameGerman: "Knusprige Linsenwaffeln",
    category: "Starters",
    price: 2.0,
    spiceLevel: 0,
    veg: true,
    pieces: "2 Stück",
    image: "/Papadam.png",
  },
  {
    id: 2,
    name: "Frühlingsrollen Vegetarisch",
    nameGerman: "Frühlingsrollen gefüllt mit verschiedenen Gemüsearten",
    category: "Starters",
    price: 4.5,
    spiceLevel: 1,
    veg: true,
    pieces: "8 Stück",
    image: "/Frühlingsrollen-Vegetarisch.png",
  },
  {
    id: 3,
    name: "Samosas",
    nameGerman: "Gefüllte Teigtaschen mit Kartoffeln und Erbsen",
    category: "Starters",
    price: 5.5,
    spiceLevel: 1,
    veg: true,
    pieces: "2 Stück",
    image: "/samosa.jpeg",
  },
  {
    id: 4,
    name: "Vegetarische Pakoras",
    nameGerman: "Verschiedene Gemüse mit indischen Gewürzen, frittiert",
    category: "Starters",
    price: 5.5,
    spiceLevel: 1,
    veg: true,
    image: "/Vegetarische-Pakoras.png",
  },
  {
    id: 5,
    name: "Kartoffel-Pakoras",
    nameGerman: "Kartoffeln, Zwiebeln mit Linsenmehl frittiert",
    category: "Starters",
    price: 5.5,
    spiceLevel: 1,
    veg: true,
    pieces: "5 Stück",
    image: "/Vegetarische-Pakoras.png",
  },
  {
    id: 6,
    name: "Gemüsesuppe nach indischer Art",
    nameGerman: "Mit fein geschnittenem frischen Gemüse, würzig zubereitet",
    category: "Starters",
    price: 5.5,
    spiceLevel: 1,
    veg: true,
    image: "/Indian-style-vegetable-soup.png",
  },
  {
    id: 7,
    name: "Hühnersuppe nach nordindischer Art",
    nameGerman: "Mit Knoblauch, Ingwer und indischen Gewürzen",
    category: "Starters",
    price: 5.5,
    spiceLevel: 2,
    veg: false,
    image: "/Hühnersuppe-nach-nordindischer-Art.png",
  },
  {
    id: 8,
    name: "Paneer Pakora",
    nameGerman: "Hausgemachter frischer Rahmkäse, frittiert",
    category: "Starters",
    price: 6.9,
    spiceLevel: 1,
    veg: true,
    image: "/paneer-pakoda.png",
  },
  {
    id: 9,
    name: "Chicken Pakora",
    nameGerman:
      "Hühnerfilet umhüllt mit knusprigem Kichererbsenmehl mit Joghurt und Minz-Chutney",
    category: "Starters",
    price: 6.9,
    spiceLevel: 2,
    veg: false,
    image: "/Vegetarische-Pakoras.png",
  },
  {
    id: 10,
    name: "Samosa Chat",
    nameGerman: "Kichererbsen mit Koriander Minz Chutney und Zwiebelstücken",
    category: "Starters",
    price: 8.0,
    spiceLevel: 1,
    veg: true,
    image: "/samosa-chat.png",
  },
  {
    id: 11,
    name: "Tandoori Chicken Salat",
    nameGerman: "Tandoori Hähnchenfilet mariniert nach nordindischer Art",
    category: "Starters",
    price: 9.9,
    spiceLevel: 2,
    veg: false,
    popular: true,
    image: "/Tandoori-Chicken-Salat.png",
  },

  // VEGETARISCHE GERICHTE (Serviert mit Reis)
  {
    id: 12,
    name: "Chana Masala",
    nameGerman: "Kichererbsen in Curry, frischen Tomaten und Ingwer",
    category: "Vegetarische Gerichte",
    price: 11.5,
    mittagessenPrice: 7.9,
    spiceLevel: 2,
    veg: true,
    veganOnRequest: true,
    mittagessen: true,
    image: "/chana-masala.png",
  },
  {
    id: 13,
    name: "Dal Makhani",
    nameGerman:
      "Schwarze Linsen mit einer besonderen Gewürzmischung in Buttersoße gebraten",
    category: "Vegetarische Gerichte",
    price: 11.5,
    mittagessenPrice: 7.9,
    spiceLevel: 1,
    veg: true,
    popular: true,
    veganOnRequest: true,
    mittagessen: true,
    image: "/dal-makhani.png",
  },
  {
    id: 14,
    name: "Mixed Vegetables",
    nameGerman: "Gemischtes frisches Gemüse, pikant gewürzt",
    category: "Vegetarische Gerichte",
    price: 11.5,
    mittagessenPrice: 8.9,
    spiceLevel: 2,
    veg: true,
    veganOnRequest: true,
    mittagessen: true,
    image: "/mixed-veg.jpg",
  },
  {
    id: 15,
    name: "Palak Paneer",
    nameGerman:
      "Hausgemachter Frischkäse mit Spinat und frisch gemahlenen Gewürzen gebraten",
    category: "Vegetarische Gerichte",
    price: 12.9,
    spiceLevel: 1,
    veg: true,
    chefPick: true,
    image: "/palak-paneer.png",
  },
  {
    id: 16,
    name: "Bhindi Masala",
    nameGerman:
      "Frisches Okragemüse mit Zwiebeln, Tomaten, Knoblauch, Ingwer und speziellen indischen Gewürzen gebraten",
    category: "Vegetarische Gerichte",
    price: 12.9,
    spiceLevel: 2,
    veg: true,
    veganOnRequest: true,
    image: "/bhindi-masala.png",
  },
  {
    id: 17,
    name: "Karahi Paneer",
    nameGerman:
      "Hausgemachter Frischkäse mit Tomaten, Zwiebeln, Paprika und fein abgestimmten Kräutern in Karahi zubereitet",
    category: "Vegetarische Gerichte",
    price: 12.9,
    spiceLevel: 2,
    veg: true,
    image: "/karahi-paneer.png",
  },
  {
    id: 18,
    name: "Matar Paneer",
    nameGerman:
      "Hausgemachter Frischkäse mit grünen Erbsen, Zwiebeln, frischen Tomaten und Gewürzen gebraten",
    category: "Vegetarische Gerichte",
    price: 12.9,
    spiceLevel: 2,
    veg: true,
    image: "/matar-paneer.png",
  },
  {
    id: 19,
    name: "Paneer Butter Masala",
    nameGerman: "Hausgemachter Frischkäse in Butter-Tomaten-Soße",
    category: "Vegetarische Gerichte",
    price: 12.9,
    spiceLevel: 1,
    veg: true,
    popular: true,
    image: "/paneer-butter-masala.png",
  },
  {
    id: 20,
    name: "Navratan Sabji Korma",
    nameGerman:
      "Verschiedene Gemüsearten der Saison mit Gewürzen in Cashewnuss-Soße gekocht",
    category: "Vegetarische Gerichte",
    price: 12.9,
    spiceLevel: 1,
    veg: true,
    image: "/navratan-korma.jpg",
  },
  {
    id: 21,
    name: "Malai Kofta",
    nameGerman: "Hausgemachte Käsebällchen, Kartoffeln in feiner Soße",
    category: "Vegetarische Gerichte",
    price: 12.9,
    spiceLevel: 1,
    veg: true,
    chefPick: true,
    image: "/malai-kofta.png",
  },
  {
    id: 22,
    name: "Mango Gemüse Curry",
    nameGerman: "Gemischtes frisches Gemüse mit Mango-Curry Soße",
    category: "Vegetarische Gerichte",
    price: 12.9,
    spiceLevel: 1,
    veg: true,
    image: "/mango-gemuse.png",
  },
  {
    id: 23,
    name: "Shahi Paneer",
    nameGerman: "Hausgemachter Käse mit cremiger Tomaten-Sahnesoße",
    category: "Vegetarische Gerichte",
    price: 12.9,
    spiceLevel: 1,
    veg: true,
    image: "/shahi-paneer.png",
  },
  {
    id: 24,
    name: "Cheese Chili",
    nameGerman: "Hausgemachter panierter Käse mit Paprika und Zwiebeln",
    category: "Vegetarische Gerichte",
    price: 12.9,
    spiceLevel: 3,
    veg: true,
    image: "/cheese-chilli.png",
  },
  {
    id: 25,
    name: "Chole Bhatura",
    nameGerman: "Kichererbsen, frittiertes Brot",
    category: "Vegetarische Gerichte",
    price: 13.9,
    spiceLevel: 2,
    veg: true,
    image: "/chole-bhature.png",
  },

  // FLEISCHGERICHTE MIT HUHN (Serviert mit Reis)
  {
    id: 26,
    name: "Chicken Curry",
    nameGerman:
      "Hähnchenbrustfilet zubereitet in pikanter Tomaten-Currysoße, mit frischem Koriander und Ingwer garniert",
    category: "Chicken",
    price: 12.5,
    mittagessenPrice: 8.5,
    spiceLevel: 2,
    veg: false,
    popular: true,
    mittagessen: true,
    image: "/Coconut-Curry-Chicken-New-4.jpg",
  },
  {
    id: 27,
    name: "Chicken Sabzi",
    nameGerman:
      "Hähnchenbrustfilet mit frischen Gemüse nach traditioneller indischer Art",
    category: "Chicken",
    price: 12.5,
    mittagessenPrice: 8.9,
    spiceLevel: 2,
    veg: false,
    mittagessen: true,
    image: "/chicken-sabzi.jpg",
  },
  {
    id: 28,
    name: "Chicken Korma",
    nameGerman:
      "Hähnchenbrustfilet in Cashew-Creme, mild gekocht, garniert mit Cashewnüssen und Rosinen",
    category: "Chicken",
    price: 13.0,
    spiceLevel: 1,
    veg: false,
    image: "/chicken-korma-12.jpg",
  },
  {
    id: 29,
    name: "Chicken Tikka Masala",
    nameGerman:
      "Hähnchenfiletstücke in Joghurt und Gewürzen eingelegt und nach indischer Art im Tandoor-Ofen gegrillt",
    category: "Chicken",
    price: 13.0,
    spiceLevel: 2,
    veg: false,
    chefPick: true,
    image: "/chicken-tikka-masala.jpg",
  },
  {
    id: 30,
    name: "Butter Chicken",
    nameGerman: "Im Tandoor gegrilltes Hühnerfleisch in Butter-Tomaten-Soße",
    category: "Chicken",
    price: 13.0,
    spiceLevel: 1,
    veg: false,
    popular: true,
    image: "/butter-chicken.png",
  },
  {
    id: 31,
    name: "Chicken mit Spinat",
    nameGerman:
      "Hähnchenfleischstücke mit Spinat nach indischer Art zubereitet",
    category: "Chicken",
    price: 13.0,
    spiceLevel: 2,
    veg: false,
    image: "/chicken-spinat.jpg",
  },
  {
    id: 32,
    name: "Chicken Mango",
    nameGerman: "Zartes Hühnerfleisch in frischer Mango-Safran-Cashewnuss-Soße",
    category: "Chicken",
    price: 13.0,
    spiceLevel: 1,
    veg: false,
    image: "/Mild-Mango-Chicken-Curry.jpg",
  },
  {
    id: 33,
    name: "Chili Chicken",
    nameGerman: "Zartes Hühnerfleisch nach berühmter nordindischer Art",
    category: "Chicken",
    price: 13.0,
    spiceLevel: 3,
    veg: false,
    image: "/chilli-chicken.png",
  },
  {
    id: 34,
    name: "Chicken Madras",
    nameGerman:
      "Hähnchenbrustfilet in Kokos-Currysoße mit Tomaten, nach südindischer Art zubereitet",
    category: "Chicken",
    price: 13.0,
    spiceLevel: 3,
    veg: false,
    image: "/chicken-madras.jpg",
  },
  {
    id: 35,
    name: "Karahi Chicken",
    nameGerman:
      "Hähnchenbrustfilet mit Zwiebeln, Knoblauch, Ingwer, frischen Tomaten und Kräuter in einem Karahi zubereitet",
    category: "Chicken",
    price: 13.0,
    spiceLevel: 2,
    veg: false,
    image: "/Chicken-Karahi-Featured-1.jpg",
  },
  {
    id: 36,
    name: "Chicken Vindaloo",
    nameGerman: "Hähnchenfleisch mit Kartoffeln",
    category: "Chicken",
    price: 13.0,
    spiceLevel: 3,
    veg: false,
    image: "/chicken-vindolla.jpg",
  },

  // FLEISCHGERICHTE MIT LAMM (Serviert mit Reis)
  {
    id: 37,
    name: "Lamm Curry",
    nameGerman:
      "Lammfleisch in würziger Tomaten-Currysoße, zubereitet mit frischem Koriander und Ingwer garniert",
    category: "Lamb",
    price: 13.5,
    mittagessenPrice: 8.9,
    spiceLevel: 2,
    veg: false,
    mittagessen: true,
    image: "/lamp-curry.png",
  },
  {
    id: 38,
    name: "Lamm Sabzi",
    nameGerman: "Lammfleisch ohne Knochen mit verschiedenen Gemüse",
    category: "Lamb",
    price: 13.5,
    mittagessenPrice: 9.5,
    spiceLevel: 2,
    veg: false,
    mittagessen: true,
    image: "/lamm-sabzi.png",
  },
  {
    id: 39,
    name: "Lamm Korma",
    nameGerman:
      "Saftiges Lammfleisch in einer milden Soße aus Cashewnüssen und Sahne mit Cashewnüssen und Rosinen garniert",
    category: "Lamb",
    price: 13.9,
    spiceLevel: 1,
    veg: false,
    image: "/lamm-korma.png",
  },
  {
    id: 40,
    name: "Lamm Gosht mit Spinat",
    nameGerman:
      "Lammfleisch mit Spinat und einer würzigen Tomaten-Currysoße zubereitet, mit frischem Ingwer garniert",
    category: "Lamb",
    price: 13.9,
    spiceLevel: 2,
    veg: false,
    image: "/lamm-spinat.png",
  },
  {
    id: 41,
    name: "Lamm Tikka Masala",
    nameGerman:
      "Im Tandoor gegrillte Lammfilet Stücke in spezieller Masala-Soße",
    category: "Lamb",
    price: 13.9,
    spiceLevel: 2,
    veg: false,
    chefPick: true,
    image: "/lamm-tikka-masala.png",
  },
  {
    id: 42,
    name: "Lamm Mango",
    nameGerman: "Zartes Lammfleisch in Mango-Safran-Cashewnuss-Soße",
    category: "Lamb",
    price: 13.9,
    spiceLevel: 1,
    veg: false,
    image: "/lamm-mango.png",
  },
  {
    id: 43,
    name: "Lamm Karahi",
    nameGerman:
      "Lammstücke ohne Knochen, geschmort im Karahi nach einem Spezialrezept des Hauses",
    category: "Lamb",
    price: 13.9,
    spiceLevel: 2,
    veg: false,
    image: "/lamm-karahi.png",
  },
  {
    id: 44,
    name: "Lamm Madras",
    nameGerman: "Lammstücke mit Curry zubereitet nach orientalischer Art",
    category: "Lamb",
    price: 13.9,
    spiceLevel: 3,
    veg: false,
    image: "/Lamb-Madras.png",
  },
  {
    id: 45,
    name: "Lamm Vindaloo",
    nameGerman:
      "Zartes Lammfleisch mit Kartoffeln in Tomaten-Currysoße, nach südindischer Art scharf zubereitet, garniert mit Kokosraspeln",
    category: "Lamb",
    price: 13.9,
    spiceLevel: 4,
    veg: false,
    image: "/lamm-vindalu.png",
  },
  {
    id: 46,
    name: "Rogan Josh",
    nameGerman:
      "Lammfleisch mit Zwiebeln, Tomaten, Knoblauch und Gewürzen nach indischer Art",
    category: "Lamb",
    price: 13.9,
    spiceLevel: 2,
    veg: false,
    popular: true,
    image: "/rogan-josh.png",
  },

  // FISCH SPEZIALITÄTEN (Serviert mit Reis)
  {
    id: 47,
    name: "Prawn Curry",
    nameGerman:
      "Garnelen in einer Curry Zubereitung mit Zwiebeln, Knoblauch, Tomaten-Soße",
    category: "Seafood",
    price: 14.5,
    spiceLevel: 2,
    veg: false,
    image: "/prawn-curry.png",
  },
  {
    id: 48,
    name: "Fisch Curry",
    nameGerman: "Fisch in Masala-Soße nach indischer Art",
    category: "Seafood",
    price: 14.5,
    spiceLevel: 2,
    veg: false,
    image: "/fish-curry.png",
  },
  {
    id: 49,
    name: "Prawn Palak",
    nameGerman: "Garnelen mit Spinat nach nordindischer Art",
    category: "Seafood",
    price: 14.5,
    spiceLevel: 2,
    veg: false,
    image: "/prawn-palak.png",
  },
  {
    id: 50,
    name: "Prawn Madras",
    nameGerman: "Mit würziger Kokos-Curry-Soße, nach südindischer Art",
    category: "Seafood",
    price: 14.5,
    spiceLevel: 3,
    veg: false,
    chefPick: true,
    image: "/prawn-madras.png",
  },

  // REISSPEZIALITÄTEN - BIRYANI MIT JOGHURT
  {
    id: 51,
    name: "Vegetable Biryani",
    nameGerman:
      "Typisch indischer Langkorn Reis, gebraten mit Gemüse, Kaschmir Gewürzen, Mandeln, Rosinen und Cashewnüssen",
    category: "Biryani",
    price: 12.5,
    spiceLevel: 2,
    veg: true,
    veganOnRequest: true,
    image: "/vegitable-biryani.png",
  },
  {
    id: 52,
    name: "Chicken Biryani",
    nameGerman:
      "Ein typisches Gericht aus der Mughlai Küche: Gebratener Safranreis mit Kashmirgewürzen und gewürzten Hühnerfleischstücken nach Moghlai Art",
    category: "Biryani",
    price: 13.5,
    spiceLevel: 2,
    veg: false,
    popular: true,
    image: "/chicken-biryani.png",
  },
  {
    id: 53,
    name: "Lamm Biryani",
    nameGerman:
      "Gebratenes und gewürztes Lammfleisch in Safranreis nach indischer Art, serviert mit Nüssen",
    category: "Biryani",
    price: 14.5,
    spiceLevel: 2,
    veg: false,
    chefPick: true,
    image: "/lamm-biryani.png",
  },
  {
    id: 54,
    name: "Prawn Biryani",
    nameGerman:
      "Krabben mit Kaschmir Gewürzen nach indischer Art, gegart in Safranreis mit Mandeln",
    category: "Biryani",
    price: 15.5,
    spiceLevel: 2,
    veg: false,
    image: "/prawn-biryani.png",
  },

  // TANDOORI GRILLSPEZIALITÄTEN (Serviert mit Reis)
  {
    id: 55,
    name: "Tandoori Chicken",
    nameGerman:
      "Gegrillte Hähnchenschenkel, 24 Stunden lang in Joghurt mit Safran und indischen Gewürzen mariniert",
    category: "Tandoor",
    price: 14.9,
    spiceLevel: 2,
    veg: false,
    popular: true,
    image: "/tandoori-chicken.png",
  },
  {
    id: 56,
    name: "Paneer Tikka",
    nameGerman:
      "Hausgemachter, gegrillter Frischkäse mariniert in Joghurt und Gewürzen. Dazu Tomaten, Paprika und Zwiebeln",
    category: "Tandoor",
    price: 14.9,
    spiceLevel: 2,
    veg: true,
    chefPick: true,
    image: "/paneer-tikka.png",
  },
  {
    id: 57,
    name: "Chicken Tikka",
    nameGerman:
      "Zarte, gegrillte Hähnchenbrustfilets, 24 Stunden lang in Joghurt mit Safran und indischen Gewürzen mariniert",
    category: "Tandoor",
    price: 14.9,
    spiceLevel: 2,
    veg: false,
    chefPick: true,
    image: "/chicken-tikka.png",
  },
  {
    id: 58,
    name: "Lamm Tikka",
    nameGerman:
      "Gegrillte Lammkoteletts, serviert am Spieß und mariniert in einer speziellen Gewürzmischung",
    category: "Tandoor",
    price: 16.5,
    spiceLevel: 2,
    veg: false,
    image: "/lamm-tikka-prawn-tikka.png",
  },
  {
    id: 59,
    name: "Prawn Tikka",
    nameGerman: "Mit Knoblauch, Joghurt und marinierten Riesengarnelen",
    category: "Tandoor",
    price: 16.5,
    spiceLevel: 2,
    veg: false,
    image: "/lamm-tikka-prawn-tikka.png",
  },

  // FLADENBROTE UND BEILAGEN
  {
    id: 60,
    name: "Tandoori Roti",
    nameGerman: "Indisches Vollkornbrot ganz frisch im Tandoor-Ofen gebacken",
    category: "Breads",
    price: 2.0,
    spiceLevel: 0,
    veg: true,
    image: "/tandoori-roti.png",
  },
  {
    id: 61,
    name: "Naan",
    nameGerman: "Ein herzförmiges Fladenbrot aus feinstem Mehl",
    category: "Breads",
    price: 2.5,
    spiceLevel: 0,
    veg: true,
    popular: true,
    image: "/naan.png",
  },
  {
    id: 62,
    name: "Bhatura",
    nameGerman: "Ausgebackenes Brot frittiert",
    category: "Breads",
    price: 3.0,
    spiceLevel: 0,
    veg: true,
    image: "/bhatura.png",
  },
  {
    id: 63,
    name: "Butter Naan",
    nameGerman: "Ein herzförmiges Fladenbrot aus feinstem Mehl und Butter",
    category: "Breads",
    price: 3.5,
    spiceLevel: 0,
    veg: true,
    image: "/naan.png",
  },
  {
    id: 64,
    name: "Reis",
    nameGerman: "Basmati Reis",
    category: "Breads",
    price: 3.0,
    spiceLevel: 0,
    veg: true,
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400",
  },
  {
    id: 65,
    name: "Raita",
    nameGerman:
      "Typisch indischer Joghurt-Dip mit frischer Gewürzen und Gurken",
    category: "Breads",
    price: 3.0,
    spiceLevel: 0,
    veg: true,
    image: "/raita.png",
  },

  // DESSERTS
  {
    id: 66,
    name: "Gulab Jamun",
    nameGerman: "Bällchen aus Milch und Quark in Zuckersirup",
    category: "Desserts",
    price: 4.5,
    spiceLevel: 0,
    veg: true,
    pieces: "2 Stück",
    popular: true,
    image: "/gulab-jamun.png",
  },
  {
    id: 67,
    name: "Rasgulla",
    nameGerman: "Gebackener Bällchen aus Paneer in Zuckersirup",
    category: "Desserts",
    price: 4.5,
    spiceLevel: 0,
    veg: true,
    pieces: "2 Stück",
    image: "/rasogulla.png",
  },
  {
    id: 68,
    name: "Mango Cream",
    nameGerman: "Mango-Sahne-Cream",
    category: "Desserts",
    price: 4.9,
    spiceLevel: 0,
    veg: true,
    image: "/mango-lassi.png",
  },
];

const categories = [
  "All",
  "Mittagessen",
  "Starters",
  "Vegetarische Gerichte",
  "Chicken",
  "Lamb",
  "Seafood",
  "Biryani",
  "Tandoor",
  "Breads",
  "Desserts",
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showVegOnly, setShowVegOnly] = useState(false);

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      (selectedCategory === "Mittagessen"
        ? item.mittagessen
        : item.category === selectedCategory);
    const matchesVeg = !showVegOnly || item.veg;
    return matchesCategory && matchesVeg;
  });

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="h-96 relative flex items-center justify-center grain-texture">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1651959653830-5c8cb576e134?w=1920)",
          }}
        >
          <div className="absolute inset-0 bg-bg-dark/70"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">
            Our <span className="text-secondary-gold">Menu</span>
          </h1>
          <p className="text-xl text-text-muted">Authentic Indian Cuisine</p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-20 z-40 bg-bg-dark/95 backdrop-blur-md border-b border-secondary-gold/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-secondary-gold text-bg-dark font-semibold"
                      : "bg-bg-medium text-text-light hover:bg-bg-medium/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowVegOnly(!showVegOnly)}
              className={`px-6 py-2 rounded-full flex items-center gap-2 transition-all ${
                showVegOnly
                  ? "bg-green-600 text-white"
                  : "bg-bg-medium text-text-light hover:bg-bg-medium/80"
              }`}
            >
              <Filter size={20} />
              <span>Veg Only</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mittagessen Info Banner */}
      {selectedCategory === "Mittagessen" && (
        <div className="container mx-auto px-4 mt-8">
          <div className="bg-secondary-gold/10 border border-secondary-gold/30 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-accent text-secondary-gold mb-2">
              Mittagessen Menü
            </h3>
            <p className="text-text-light text-lg">
              <span className="font-semibold">Dienstag - Freitag</span> |{" "}
              <span className="font-semibold">11:30 - 14:00 Uhr</span>
            </p>
            <p className="text-text-muted text-sm mt-2">Außer an Feiertagen</p>
            <p className="text-secondary-gold text-sm mt-2 font-semibold">
              ✨ Spezielle Mittagspreise ✨
            </p>
          </div>
        </div>
      )}

      {/* Menu Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const displayPrice = selectedCategory === "Mittagessen" && item.mittagessenPrice
              ? item.mittagessenPrice
              : item.price;
            const hasDiscount = selectedCategory === "Mittagessen" && item.mittagessenPrice;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-bg-medium rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden bg-bg-dark">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60"></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {item.veg && (
                      <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full font-semibold">
                        🌱 Veg
                      </span>
                    )}
                    {item.veganOnRequest && (
                      <span className="px-3 py-1 bg-emerald-500 text-white text-xs rounded-full font-semibold">
                        🌿 Vegan auf Anfrage
                      </span>
                    )}
                    {item.mittagessen && (
                      <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full font-semibold">
                        🍽️ Mittagessen
                      </span>
                    )}
                    {item.chefPick && (
                      <span className="px-3 py-1 bg-secondary-gold text-bg-dark text-xs rounded-full font-semibold">
                        Chef's Pick
                      </span>
                    )}
                    {item.popular && (
                      <span className="px-3 py-1 bg-primary-burgundy text-text-light text-xs rounded-full font-semibold">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-1 bg-bg-dark/80 text-secondary-gold text-sm rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-accent text-xl text-text-light">
                      {item.name}
                    </h3>
                    {item.pieces && (
                      <span className="text-xs text-text-muted bg-bg-dark px-2 py-1 rounded">
                        {item.pieces}
                      </span>
                    )}
                  </div>
                  <p className="text-text-muted text-sm mb-4 line-clamp-2">
                    {item.nameGerman}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-secondary-gold font-bold text-2xl">
                        €{displayPrice.toFixed(2)}
                      </span>
                      {hasDiscount && (
                        <span className="text-text-muted text-sm line-through">
                          €{item.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      {item.spiceLevel > 0 && (
                        <>
                          {[...Array(item.spiceLevel)].map((_, i) => (
                            <span key={i} className="text-red-500 text-lg">
                              🌶
                            </span>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted text-xl">
              No dishes found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}