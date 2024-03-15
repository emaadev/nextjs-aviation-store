import lapicera from "@/public/products/lapicera.jpeg";
import libreta from "@/public/products/libreta.jpeg";
import llaveroBoeing from "@/public/products/llavero-boeing.jpeg";
import llaveroBoeing2 from "@/public/products/llavero-boeing-2.jpeg";
import llaveroPiloto from "@/public/products/llavero-piloto.jpeg";
import llaveroTripulacion from "@/public/products/llavero-tripulacion.jpeg";
import maquetaAvion from "@/public/products/maqueta-avion.jpeg";
import portaCredencial from "@/public/products/porta-credencial.jpeg";
import tarjetero from "@/public/products/tarjetero.jpeg";
import tarjetero2 from "@/public/products/tarjetero-2.jpeg";
import vasoTermico from "@/public/products/vaso-termico.jpeg";

export const allProducts = [
  {
    id: "hdh328dhqwiond3nd13",
    name: "Lapicera ISEAP",
    description: "Lapicera con sellado de ISEAP",
    category: "Accesorios",
    price: 1499,
    isFeatured: true,
    stock: 1,
    colors: ["#1F3B77", "#000"],
    images: [lapicera],
  },
  {
    id: "libr328dhqwiond3nd14",
    name: "Libreta de Vuelo",
    description: "Modelo eco-cuero. Excelente terminación y calidad",
    category: "Libretas",
    price: 44999,
    isFeatured: true,
    stock: 1,
    colors: ["#AC9B7C", "#343a40"],
    images: [libreta],
  },
  {
    id: "llbv328dhqwiond3nd15",
    name: "Llavero Bordado de Excelente Calidad",
    description: "Llavero metálico Boeing",
    category: "Llaveros",
    price: 6500,
    isFeatured: false,
    stock: 1,
    colors: ["#c0c0c0", "#007bff"],
    images: [llaveroBoeing],
  },
  {
    id: "llbv2328dhqwiond3nd16",
    name: "Lanyard Boeing - Modelo Reflectivo",
    description: "Llavero Original de Boeing. Resistente de alta calidad.",
    category: "Llaveros",
    price: 25000,
    isFeatured: false,
    stock: 1,
    colors: ["#888888", "#343a40", "#EAEF27"],
    images: [llaveroBoeing2],
  },
  {
    id: "llvp328dhqwiond3nd17",
    name: "Llavero Pilot",
    description:
      "Llavero con insignia de piloto de avión, de excelente calidad",
    category: "Llaveros",
    price: 6500,
    isFeatured: false,
    stock: 1,
    colors: ["#ffd700", "#343a40", "#fff"],
    images: [llaveroPiloto],
  },
  {
    id: "llvt328dhqwiond3nd18",
    name: "Llavero Crew - TCP",
    description: "Llavero con emblema de Tripulación de Vuelo",
    category: "Llaveros",
    price: 6500,
    isFeatured: false,
    stock: 1,
    colors: ["#BC210F", "#fff"],
    images: [llaveroTripulacion],
  },
  {
    id: "maqv328dhqwiond3nd19",
    name: "Maqueta Airbus A380-800",
    description:
      "Maqueta de Avión modelo ISEAP. Excelente terminación y calidad.",
    category: "Maquetas de Avión",
    price: 74999,
    isFeatured: true,
    stock: 1,
    colors: ["#ffffff", "#1F3B77"],
    images: [maquetaAvion],
  },
  {
    id: "port328dhqwiond3nd20",
    name: "Lanyard Boeing",
    description:
      "Material Original de Boeing. Resistente y delicado. Correa extensible.",
    category: "Accesorios",
    price: 29900,
    isFeatured: false,
    stock: 1,
    colors: ["#1F3B77", "#A0A6B3", "#fff"],
    images: [portaCredencial],
  },
  {
    id: "tarj328dhqwiond3nd21",
    name: "Porta Credencial y Tarjetero",
    description: "Material Original de Boeing. Resistente y delicado.",
    category: "Accesorios",
    price: 1999,
    isFeatured: false,
    stock: 1,
    colors: ["#000000", "#343a40"],
    images: [tarjetero, tarjetero2],
  },
  {
    id: "vasot328dhqwiond3nd23",
    name: "Vaso Térmico ISEAP",
    description:
      "Vaso térmico con logo de ISEAP. Ideal para bebidas calientes.",
    category: "Accesorios",
    price: 22000,
    isFeatured: false,
    stock: 1,
    colors: ["#c0c0c0", "#1F3B77", "#000"],
    images: [vasoTermico],
  },
];
