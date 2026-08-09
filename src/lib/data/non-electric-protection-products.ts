export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductDetail {
  intro: string;
  specs?: ProductSpec[];
  features?: string[];
  advantages?: string[];
  applications?: string[];
  gallery?: string[];
}

export interface CatalogProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  slug?: string;
  detail?: ProductDetail;
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function productSlug(product: Pick<CatalogProduct, "id" | "title" | "slug">): string {
  if (product.slug) return product.slug;
  const base = slugify(product.title);
  return `${base}-${product.id}`;
}
export const nonElectricProtectionProducts: CatalogProduct[] = [
  {
    id: "01",
    title: "YSF20 Series Pressure Relief Device",
    description: "Pressure relief device for large oil-immersed power transformers, capacitors, and reactors, with optional dual electrical alarm signal output.",
    image: "/images/products/non-electric-protection/sudden-pressure-relay-oil-nozzle.png",
    slug: "ysf20-pressure-relief-device",
    detail: {
      intro:
        "YSF20-50T, 80T, 125T is mainly suitable for pressure relief inside the oil tank of large oil-immersed power transformers, power capacitors, reactors, and other equipment when the pressure exceeds the limit. In addition to the conventional electrical alarm signal, a computer electrical alarm signal function can also be added to achieve dual electrical signal output, with each independently led out.",
      specs: [
        { label: "Installation Position", value: "Oil tank cap / raised seat / upper side wall of the oil tank" },
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Protection Level", value: "IP56 (customizable) · Altitude 0–4000 m" },
        { label: "Power Frequency Withstand Voltage", value: "Normally open contact 2000V/min · Normally closed / SPDT contact: phase-to-phase 1000V/min, ground 2000V/min" },
        { label: "Insulation Performance", value: "Normally open contact 2500V, 1000 MΩ · Normally closed / SPDT: phase-to-phase 1000V, 500 MΩ, ground 2500V, 1000 MΩ" },
      ],
      applications: ["Large Oil-Immersed Power Transformers", "Power Capacitors", "Reactors"],
    },
  },
  {
    id: "02",
    title: "QYW Series Multi-function Protector",
    description: "Dedicated protective relay for fully sealed transformers, combining gas, oil level, and pressure protection with remote temperature display.",
    image: "/images/products/non-electric-protection/pressure-relief-valve-signal.png",
    slug: "qyw-multifunction-protector",
    detail: {
      intro:
        "The QYW series multi-function protector is a dedicated protective relay for fully sealed transformers, providing light gas protection, low oil level protection, heavy gas (pressure over-limit) protection, oil level display, oil injection, oil replenishment, pressure release, and remote temperature display. It greatly facilitates monitoring and fault diagnosis of fully sealed transformers.",
      specs: [
        { label: "Installation Position", value: "Top of the box cover" },
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Contact Capacity", value: "AC 220V/3A · DC 220V/0.5A" },
        { label: "Power Frequency Withstand Voltage", value: "Normally open contact 2000V/min · Normally closed / SPDT: phase-to-phase 1000V/min, ground 2000V/min" },
        { label: "Insulation Performance", value: "Normally open contact 2500V, 500 MΩ · Normally closed / SPDT: phase-to-phase 1000V, 500 MΩ, ground 2500V, 1000 MΩ" },
      ],
      applications: ["Oil-Immersed Transformers", "Oil-Immersed Reactors", "Power Capacitors", "Fully Sealed Transformers", "Box-Type Substations"],
    },
  },
  {
    id: "03",
    title: "QNJ Series Capsule Rupture Relay",
    description: "Protective relay for on-load tap changers, reactors, and oil-immersed power transformers fitted with capsule oil storage tanks.",
    image: "/images/products/non-electric-protection/gas-relay-buchholz-a.png",
    slug: "qnj-capsule-rupture-relay",
    detail: {
      intro:
        "The QNJ series capsule rupture relay is designed for on-load tap changers, reactors, and oil-immersed power transformers equipped with capsule oil storage tanks. If the capsule is damaged and leaks oil or gas, the gas migrates to the upper end of the capsule and enters the relay, replacing the insulating oil inside it. When the gas volume reaches a set level, an alarm or trip contact is triggered.",
      specs: [
        { label: "Mounting Position", value: "Top" },
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Insulation Performance", value: "Normally open contact 2500V, 500 MΩ · Normally closed / SPDT: phase-to-phase 1000V, 500 MΩ, ground 2500V, 1000 MΩ" },
        { label: "Power Frequency Withstand Voltage", value: "Normally open contact 2000V/min · Normally closed / SPDT: phase-to-phase 1000V/min, ground 2000V/min" },
      ],
      applications: ["On-Load Tap Changers", "Reactors", "Oil-Immersed Power Transformers with Capsule Oil Storage Tanks"],
    },
  },
  {
    id: "04",
    title: "YWZ Series Oil Level Gauge",
    description: "Combined oil level and oil temperature testing device for transformer oil tanks, with dial indication for both readings.",
    image: "/images/products/non-electric-protection/winding-temperature-indicator-panel.png",
    slug: "ywz-oil-level-gauge",
    detail: {
      intro:
        "The YWZ series oil level gauge combines the oil level testing device and oil temperature testing device of the transformer oil tank. The float part drives the oil level indicator through a transmission part and magnetic coupling; the bimetallic temperature sensing rod converts temperature changes into pointer rotation for on-site observation.",
      specs: [
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +120°C (customizable to -45°C to +120°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Max Oil Temperature", value: "120°C" },
        { label: "Indication Error", value: "< 2.5% of full scale" },
        { label: "Long-Term Stability", value: "≥ 10,000 cycles" },
        { label: "Sealing Performance", value: "245 kPa, no leakage for 20 minutes" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Oil Temperature Measurement Range", value: "0–120°C, ±0.5°C accuracy" },
      ],
      applications: ["Transformer Oil Tanks — Combined Oil Level & Temperature Monitoring"],
    },
  },
  {
    id: "05",
    title: "YSF9-80D/130D Series Pressure Relief Device",
    description: "Pressure relief device with transmission signal for large oil-immersed power transformers, capacitors, and reactors.",
    image: "/images/products/non-electric-protection/pressure-relief-valve-mesh.png",
    slug: "ysf9-80d-130d-pressure-relief-device",
    detail: {
      intro:
        "YSF9-80D, 130D series pressure relief device with transmission signal is mainly suitable for the pressure relief of large oil-immersed power transformers, power capacitors, reactors, and other equipment when the internal pressure of the oil tank is over pressured.",
      specs: [
        { label: "Installation Position", value: "Oil tank cap / raised seat / upper side wall of the oil tank" },
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Power Frequency Withstand Voltage", value: "Normally open contact 2000V/min · Normally closed / SPDT: phase-to-phase 1000V/min, ground 2000V/min" },
        { label: "Insulation Performance", value: "Normally open contact 2500V, 1000 MΩ · Normally closed / SPDT: phase-to-phase 1000V, 500 MΩ, ground 2500V, 1000 MΩ" },
      ],
      applications: ["Large Oil-Immersed Power Transformers", "Power Capacitors", "Reactors"],
    },
  },
  {
    id: "06",
    title: "YSF9-25K/50K Series Pressure Relief Device",
    description: "Compact pressure relief device (under Φ50mm) for protecting oil tanks of transformers, switches, capacitors, reactors, and tap changers.",
    image: "/images/products/non-electric-protection/pressure-relief-devices-pair.png",
    slug: "ysf9-25k-50k-pressure-relief-device",
    detail: {
      intro:
        "The YSF series pressure relief device with a diameter of less than 50mm is a new type of pressure relief device, used to protect oil tanks of oil-immersed electrical equipment such as transformers, high-voltage switches, power capacitors, reactors, and on-load tap changers.",
      specs: [
        { label: "Installation Position", value: "Oil tank cap / raised seat / upper side wall of the oil tank" },
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Power Frequency Withstand Voltage", value: "Normally open contact 2000V/min · Normally closed contact 1000V/min · Ground 2000V/min" },
        { label: "Insulation Performance", value: "Normally open contact 2500V, 1000 MΩ · Normally closed contact 1000V, 500 MΩ · Ground 2500V, 1000 MΩ" },
      ],
      applications: ["Transformers", "High-Voltage Switches", "Power Capacitors", "Reactors", "On-Load Tap Changers"],
    },
  },
  {
    id: "07",
    title: "YSF9-80K/130K Series Pressure Relief Device",
    description: "Φ80mm / Φ130mm pressure relief device for large oil-immersed transformers, capacitors, and reactors, with optional dual electrical signal output.",
    image: "/images/products/non-electric-protection/sudden-pressure-relay-metal-dome.png",
    slug: "ysf9-80k-130k-pressure-relief-device",
    detail: {
      intro:
        "Pressure relief devices with diameters of Φ80mm and Φ130mm are mainly suitable for releasing pressure inside oil tanks of large oil-immersed power transformers, power capacitors, reactors, and other equipment when the pressure exceeds the limit. A computer electrical alarm signal function can be added for dual, independently led-out electrical signal output.",
      specs: [
        { label: "Installation Position", value: "Oil tank cap / raised seat / upper side wall of the oil tank" },
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Power Frequency Withstand Voltage", value: "Normally open contact 2000V/min · Normally closed / SPDT: phase-to-phase 1000V/min, ground 2000V/min" },
        { label: "Insulation Performance", value: "Normally open contact 2500V, 1000 MΩ · Normally closed / SPDT: phase-to-phase 1000V, 500 MΩ, ground 2500V, 1000 MΩ" },
      ],
      applications: ["Large Oil-Immersed Power Transformers", "Power Capacitors", "Reactors"],
    },
  },
  {
    id: "08",
    title: "ZKYJ1-40 Series Vacuum Pressure Relay",
    description: "Dedicated pressure protection relay for fully sealed transformers, providing gas overpressure protection.",
    image: "/images/products/non-electric-protection/oil-level-sensors-pair.png",
    slug: "zkyj1-40-vacuum-pressure-relay",
    detail: {
      intro:
        "The ZKYJ1-40 series vacuum pressure relay is a dedicated pressure protection relay for fully sealed transformers, suitable for oil-immersed transformers, power capacitors, reactors, and other sealed oil-immersed electrical oil tanks. When the gas in the tank reaches the alarm (trip) value, the relay activates and sends out an alarm (trip) signal.",
      specs: [
        { label: "Installation Position", value: "Top or side wall of the box cover" },
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Contact Capacity", value: "AC 220V/3A · DC 220V/0.5A" },
        { label: "Power Frequency Withstand Voltage", value: "Normally open contact 2000V/min · Normally closed / SPDT: phase-to-phase 1000V/min, ground 2000V/min" },
        { label: "Insulation Performance", value: "Normally open contact 2500V, 500 MΩ · Normally closed / SPDT: phase-to-phase 1000V, 500 MΩ, ground 2500V, 1000 MΩ" },
      ],
      applications: ["Oil-Immersed Transformers", "Power Capacitors", "Reactors", "Sealed Oil-Immersed Electrical Equipment"],
    },
  },
  {
    id: "09",
    title: "R40 Series Gas Relay",
    description: "Gas relay for protecting oil-immersed hermetically sealed transformers, alarming or tripping when internal fault gas accumulates.",
    image: "/images/products/non-electric-protection/gas-relay-buchholz-b.png",
    slug: "r40-gas-relay",
    detail: {
      intro:
        "R40 series gas relay is mainly used to protect various types of oil-immersed hermetically sealed transformer. When the transformer is in operation, gas generated by an internal fault gathers in the gas collecting chamber of the relay. When the gas volume reaches a set degree, an alarm or tripping contact is triggered.",
      specs: [
        { label: "Mounting Position", value: "Top" },
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Insulation Performance", value: "Normally open contact 2500V, 500 MΩ · Normally closed / SPDT: phase-to-phase 1000V, 500 MΩ, ground 2500V, 1000 MΩ" },
        { label: "Power Frequency Withstand Voltage", value: "Normally open contact 2000V/min · Normally closed / SPDT: phase-to-phase 1000V/min, ground 2000V/min" },
      ],
      applications: ["Oil-Immersed Hermetically Sealed Transformers"],
    },
  },
  {
    id: "10",
    title: "QYW-DS Series Intelligent Multi-function Protector",
    description: "RS485-communication intelligent protector for fully sealed transformers, combining gas, pressure, oil level, and temperature protection with remote monitoring.",
    image: "/images/products/non-electric-protection/gas-relay-buchholz-c.png",
    slug: "qyw-ds-intelligent-multifunction-protector",
    detail: {
      intro:
        "QYW-DS series intelligent multi-function protector is a special protection device for fully sealed transformers with RS485 communication, providing heavy gas protection, pressure over-limit protection, light gas protection, low oil level protection, oil level display, oil surface temperature display with alarms, oil injection and replenishment, and pressure release. It greatly facilitates real-time monitoring and fault diagnosis of the hermetically sealed transformer.",
      specs: [
        { label: "Ambient Temperature", value: "-45°C to +70°C" },
        { label: "Working Temperature", value: "-45°C to +105°C" },
        { label: "Relative Humidity", value: "≤90% at +25°C" },
        { label: "Switch Contact Capacity (temp control)", value: "AC 250V 3A / DC 250V 0.3A" },
        { label: "Insulation Withstand Voltage", value: "2000V/min" },
        { label: "Installation Direction", value: "Top of the box cover, parallel to the cover" },
      ],
      features: [
        "Heavy gas, pressure over-limit, and light gas protection; low oil level protection.",
        "Oil level display and oil surface temperature display with high / ultra-high temperature alarms.",
        "Oil injection, oil replenishment, pressure release, and optional pressure release device.",
        "Live-contact output with RS485 and Modbus-RTU communication.",
      ],
      applications: ["Intelligent Hermetically Sealed Transformers", "Intelligent Box-Type Substations"],
    },
  },
  {
    id: "11",
    title: "QYW-CQ Series Intelligent Multi-function Protector",
    description: "RS485-communication intelligent protector for fully sealed transformers, providing continuous liquid level, pressure, and temperature monitoring.",
    image: "/images/products/non-electric-protection/pressure-relief-valve-remote-alarm.png",
    slug: "qyw-cq-intelligent-multifunction-protector",
    detail: {
      intro:
        "QYW-CQ series intelligent multi-function protector is a special protection device for fully sealed transformers with RS485 communication, providing continuous liquid level monitoring, continuous pressure monitoring, continuous oil surface temperature monitoring, and oil injection/replenishment functions. It greatly facilitates real-time monitoring and fault diagnosis of the hermetically sealed transformer.",
      specs: [
        { label: "Ambient Temperature", value: "-45°C to +70°C" },
        { label: "Working Temperature", value: "-45°C to +105°C" },
        { label: "Relative Humidity", value: "≤90% at +25°C" },
        { label: "Protection Grade", value: "IP65 · Applicable environments: TH and TA" },
        { label: "Contact Capacity", value: "4-channel relay output AC 250V 5A · Other switch contacts AC 250V 3A, DC 250V 0.3A" },
        { label: "Insulation Withstand Voltage (dry contact)", value: "2000V/min" },
        { label: "Installation Direction", value: "Top of the lid, parallel to the lid" },
      ],
      features: [
        "Continuous liquid level, pressure, and oil surface temperature monitoring.",
        "Oil injection, oil replenishment, pressure release, and optional pressure release device.",
        "Live-contact output with RS485 and Modbus-RTU communication.",
      ],
      applications: ["Intelligent Hermetically Sealed Transformers", "Intelligent Box-Type Substations"],
    },
  },
  {
    id: "12",
    title: "QJM-40 Series Gas Relay",
    description: "Special protection relay for fully sealed transformers, combining gas protection, low oil level, and pressure over-limit protection.",
    image: "/images/products/non-electric-protection/sudden-pressure-relay-l-shape.png",
    slug: "qjm-40-gas-relay",
    detail: {
      intro:
        "QJM-40 series gas relay is a special protection relay for full-seal transformers, providing gas protection, low oil level, heavy gas (pressure over-limit) protection, oil level display, oil injection, oil supplement, and pressure release. It is convenient for monitoring hermetically sealed transformer operation and diagnosing faults.",
      specs: [
        { label: "Installation Position", value: "Top of the box cover" },
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Contact Capacity", value: "AC 220V/3A · DC 220V/0.5A" },
        { label: "Power Frequency Withstand Voltage", value: "Normally open contact 2000V/min · Normally closed / SPDT: phase-to-phase 1000V/min, ground 2000V/min" },
        { label: "Insulation Performance", value: "Normally open contact 2500V, 500 MΩ · Normally closed / SPDT: phase-to-phase 1000V, 500 MΩ, ground 2500V, 1000 MΩ" },
      ],
      applications: ["Hermetically Sealed Transformers", "Box-Type Substations"],
    },
  },
  {
    id: "13",
    title: "QJ2-40 Series Gas Relay",
    description: "Gas relay for protecting oil-immersed hermetically sealed transformers, triggering alarm or removal signals on internal fault gas buildup.",
    image: "/images/products/non-electric-protection/pressure-relief-valve-assembly.png",
    slug: "qj2-40-gas-relay",
    detail: {
      intro:
        "QJ2-40 series gas relay is mainly used to protect various types of oil-immersed hermetically sealed transformer. Gas generated by an internal fault gathers in the gas collecting chamber; once it reaches a set volume, an alarm or removal contact is triggered.",
      specs: [
        { label: "Installation Position", value: "Top of the box cover" },
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Contact Capacity", value: "AC 220V/1A · DC 220V/0.5A" },
        { label: "Power Frequency Withstand Voltage", value: "2000V/min" },
        { label: "Insulation Performance", value: "2500V, 500 MΩ" },
      ],
      applications: ["Oil-Immersed Hermetically Sealed Transformers"],
    },
  },
  {
    id: "14",
    title: "YSF20-130 Series Pressure Relief Device",
    description: "Stainless-steel pressure relief device developed for offshore wind power and nacelle transformers, with high environmental and corrosion resistance.",
    image: "/images/products/non-electric-protection/gas-relay-buchholz-c.png",
    slug: "ysf20-130-pressure-relief-device",
    detail: {
      intro:
        "YSF20-130 series pressure relief device is specially developed for offshore wind power transformers or nacelle transformers, with stable performance, compact structure, high environmental resistance, and high corrosion resistance. It can also be applied to the pressure release of large oil-immersed power transformers, power capacitors, and reactors.",
      specs: [
        { label: "Installation Position", value: "Oil tank cap / raised seat / upper side wall of the oil tank" },
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +125°C (customizable to -45°C to +125°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Power Frequency Withstand Voltage", value: "Normally open contact 2000V/min · Normally closed / SPDT: phase-to-phase 1000V/min, ground 2000V/min" },
        { label: "Insulation Performance", value: "Normally open contact 2500V, 1000 MΩ · Normally closed / SPDT: phase-to-phase 1000V, 500 MΩ, ground 2500V, 1000 MΩ" },
      ],
      features: [
        "Valve body, valve cover, and standard parts made of 304 or 316 stainless steel.",
        "Compact structure with high environmental and corrosion resistance.",
      ],
      applications: ["Offshore Wind Power Transformers", "Nacelle Transformers", "Large Oil-Immersed Power Transformers", "Power Capacitors", "Reactors"],
    },
  },
  {
    id: "15",
    title: "American Standard Valve",
    description: "Stainless-steel American-standard valve for sampling, filling, or draining transformer oil, with or without an oil sampling valve.",
    image: "/images/products/non-electric-protection/oil-sampling-shutoff-valves.png",
    slug: "american-standard-valve",
    detail: {
      intro:
        "Transformers are designed with American standard valves for sampling, filling, or draining transformer oil from the oil tank of oil-immersed transformers. The valve body is made of stainless steel, with a compact design, easy operation, and reliable sealing performance.",
      specs: [
        { label: "Environmental Range", value: "-45°C to +70°C" },
        { label: "Working Environment", value: "-45°C to +110°C" },
        { label: "Pressure Test", value: "Withstands 0.4 MPa, no leakage within 20 minutes" },
        { label: "Pressure Rating", value: "300 lb. WOG" },
        { label: "Operation", value: "Turn handwheel right to close, left to open" },
      ],
      features: [
        "Two configurations available — with or without an oil sampling valve.",
        "Compact design, easy operation, reliable sealing performance.",
      ],
      applications: ["Oil-Immersed Transformers — Oil Sampling, Filling & Draining"],
    },
  },
  {
    id: "16",
    title: "Silica Gel Breather",
    description: "Transparent-cylinder silica gel breather that filters dust and moisture from the air entering the transformer oil conservator.",
    image: "/images/products/non-electric-protection/oil-level-sight-gauge-columns.png",
    slug: "silica-gel-breather",
    detail: {
      intro:
        "The main body of the silica gel breather is a transparent glass cylinder clamped to the upper and lower flanges with screws, filled with blue or orange silica gel. At the bottom is a fully transparent double-layer glass oil cup filled with transformer oil. It is installed at the end of the air inlet of the oil storage cabinet, filtering dust and moisture in the air to maintain the cleanliness and electrical performance of the transformer oil.",
      features: [
        "Fully transparent, lengthened tempered glass tube extends filtration time by over 30% compared to conventional silica gel breathers.",
        "Double-layer transparent tempered glass base allows direct observation of breather suction and exhale during operation.",
        "Red protective cap prevents silica gel contamination during transport (removed before filling the glass with oil).",
      ],
      applications: ["Transformer Oil Conservator — Air Purification & Moisture Filtering"],
    },
  },
  {
    id: "17",
    title: "MXS-3Kg Intelligent Maintenance-free Breather",
    description: "Intelligent maintenance-free breather for oil-filled transformers and tap changers, purifying and drying incoming air.",
    image: "/images/products/non-electric-protection/dehydrating-breather-control-box.png",
    slug: "mxs-3kg-intelligent-breather",
    detail: {
      intro:
        "The MXS-3Kg intelligent maintenance-free breather is installed in the pipelines of oil-filled transformers, on-load tap changers, or other electrical equipment's oil storage tanks. It purifies and removes moisture and dust from the air entering the oil storage tank, ensuring the cleanliness and insulation strength of the transformer oil.",
      specs: [
        { label: "Application Scope", value: "General areas and humid, hot regions" },
        { label: "Environmental Range", value: "-30°C to +70°C" },
        { label: "Absorbent Material", value: "Colorless silica gel" },
        { label: "Protection Level", value: "IP55" },
        { label: "Control System Power", value: "AC 220/230V, 50/60Hz" },
        { label: "Drying Agent Weight", value: "1.5 kg / 3 kg / 5 kg / 10 kg" },
        { label: "Communication", value: "RS485, 4–20 mA" },
        { label: "Breathing Force", value: "≤ 50 kPa" },
        { label: "Heater Power", value: "3 kg unit ≤ 500 W" },
        { label: "Ventilation Resistance", value: "≤ 0.005 MPa" },
      ],
      applications: ["Oil-Filled Transformers", "On-Load Tap Changers", "Other Electrical Equipment Oil Storage Tanks"],
    },
  },
  {
    id: "18",
    title: "YDSK Series Multi-function Tube-type Oil Level Gauge",
    description: "Threaded tube-type oil level gauge with 360° viewing window, for oil filling, replenishment, and level display.",
    image: "/images/products/non-electric-protection/temperature-sensor-probe.png",
    slug: "ydsk-tube-type-oil-level-gauge",
    detail: {
      intro:
        "YDSK series multi-function tube-type oil level gauge features threaded connection for easy installation and reliable sealing. The 360° viewing window allows observation from any direction, and it can be used for oil filling, replenishment, and oil level display, with optional single or double low oil level relay protection.",
      specs: [
        { label: "Connection", value: "Threaded connection, easy installation, reliable sealing" },
        { label: "Viewing Angle", value: "360° window for observation in any direction" },
        { label: "Protection Options", value: "Single or double low oil level relay protection" },
      ],
      features: [
        "Example: YDSK1.3 dual normally-open — dual low oil level relay protection, first alarm at 10 mm below the oil tank cap, second at 30 mm below the cap, both normally-open contacts.",
      ],
      applications: ["Oil Filling, Replenishment & Level Display"],
    },
  },
  {
    id: "19",
    title: "YDK-6 Series Oil Level Gauge",
    description: "Threaded oil level gauge that monitors sealed transformer oil level and triggers a switch contact at a set low-level threshold.",
    image: "/images/products/non-electric-protection/pressure-relief-valve-flanged.png",
    slug: "ydk-6-oil-level-gauge",
    detail: {
      intro:
        "YDK-6 series oil level gauge features threaded connection, convenient installation, and reliable sealing. Its main function is to monitor the oil level of the sealed transformer — when the oil level drops to a certain position, the switch contact of the level gauge is triggered. The float is made of oil-resistant, closed-cell foamed nitrile and oil-resistant rubber to prevent damage from oil penetration and ensure buoyancy and stability.",
      specs: [
        { label: "Installation Position", value: "Raised seat on top of the transformer tank" },
        { label: "Housing", value: "Aluminum alloy, optional C5 corrosion protection" },
        { label: "Float Material", value: "Oil-resistant closed-cell foamed nitrile and oil-resistant rubber" },
        { label: "Environmental Range", value: "-30°C to +80°C (customizable to -45°C to +80°C)" },
        { label: "Working Environment", value: "-30°C to +125°C (customizable to -45°C to +125°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Protection Level", value: "IP56 · Altitude 0–4000 m" },
        { label: "Switch Capacity", value: "AC 220V 3A, DC 220V 1A" },
      ],
      features: ["Vertical movement of the internal float, driven by a magnetic drive, actuates the switch mechanism."],
      applications: ["Sealed Transformers — Oil Level Monitoring"],
    },
  },
{
    id: "20",
    title: "SYJ Series Rapid Pressure Rise Relay",
    description: "Protective relay that uses the rate of internal pressure change as an electrical alarm signal to protect transformer, capacitor, and reactor oil tanks.",
    image: "/images/products/non-electric-protection/oil-level-indicator-box.png",
    slug: "syj-rapid-pressure-rise-relay",
    detail: {
      intro:
        "SYJ series rapid pressure rise relay is a protective relay that uses the speed of pressure changes inside the oil tank as an electrical alarm signal. It is used to protect the oil tank safety of equipment such as transformers, power capacitors, and reactors.",
      specs: [
        { label: "Suitable For", value: "Oil-immersed transformers, power capacitors, reactors, and other sealed oil-immersed electrical oil tanks" },
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Power Frequency Withstand Voltage", value: "2000V, 1 min" },
        { label: "Insulation Performance", value: "2500V, 1000 MΩ" },
      ],
      applications: ["Transformers", "Power Capacitors", "Reactors"],
    },
  },
  {
    id: "21",
    title: "YZF Series Pointer-type Oil Level Gauge With Transmission Signal",
    description: "Pointer-type oil level gauge with 4–20mA transmission signal for real-time monitoring of transformer, capacitor, and reactor oil storage tanks.",
    image: "/images/products/non-electric-protection/magnetic-oil-level-gauge.png",
    slug: "yzf-pointer-oil-level-gauge-transmission-signal",
    detail: {
      intro:
        "The YZF series pointer-type oil level gauge with transmission signal measures the oil level in oil storage tanks of power equipment such as transformers, monitoring oil level changes in real time. It has a high and low oil level alarm function with dual alarm signal output, and can be configured with a 4–20mA analog output and remote display for smart grid integration.",
      specs: [
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Max Oil Temperature", value: "115°C" },
        { label: "Indication Error", value: "< 2.5% of full scale" },
        { label: "Long-Term Stability", value: "≥ 10,000 cycles" },
        { label: "Sealing Performance", value: "245 kPa, no leakage for 20 minutes" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Switch Capacity", value: "AC 220V 5A, DC 220V 0.3A" },
      ],
      features: [
        "High and low oil level alarm function with dual alarm signal output.",
        "Optional real-time oil level monitoring, output as a 4–20mA analog signal.",
        "Optional remote display for smart grid integration.",
      ],
      applications: ["Oil Storage Tanks of Transformers, Power Capacitors & Reactors", "Small/Medium Power Equipment", "On-Load Switch Oil Storage Tanks"],
    },
  },
  {
    id: "22",
    title: "YZF Series Pointer-type Oil Level Gauge",
    description: "Pointer-type oil level gauge for transformer oil storage tanks, with alarm signals at highest and lowest oil levels.",
    image: "/images/products/non-electric-protection/oil-temperature-controller.png",
    slug: "yzf-pointer-oil-level-gauge",
    detail: {
      intro:
        "The YZF series pointer-type oil level gauge is an oil level testing device for transformer oil storage tanks, emitting alarm signals at the highest and lowest oil levels for remote monitoring.",
      specs: [
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Max Oil Temperature", value: "115°C" },
        { label: "Indication Error", value: "< 2.5% of full scale" },
        { label: "Long-Term Stability", value: "≥ 10,000 cycles" },
        { label: "Sealing Performance", value: "245 kPa, no leakage for 20 minutes" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Switch Capacity", value: "AC 220V 5A, DC 220V 0.3A" },
      ],
      features: [
        "Up-and-down swing or left-and-right swing connecting rod, for main oil storage tanks or on-load switch tanks respectively.",
        "Straight-rod floating ball or telescopic-rod type, for capsule-type or diaphragm-type oil storage tanks respectively.",
      ],
      applications: ["Transformer Oil Storage Tanks"],
    },
  },
  {
    id: "23",
    title: "BWY Series Oil Temperature Indicator",
    description: "Composite temperature-rise oil temperature indicator with adjustable switches for transformer cooling system control and alarm.",
    image: "/images/products/non-electric-protection/multifunction-protection-relay.png",
    slug: "bwy-oil-temperature-indicator",
    detail: {
      intro:
        "The BWY series oil temperature indicator is designed based on the principle of composite temperature rise, suitable for temperature detection and control under outdoor conditions. Equipped with four or six adjustable control switches, it can start transformer cooling systems and trigger signal alarms, while transmitting temperature signals to the control center for synchronous display and control.",
      specs: [
        { label: "Output Signal", value: "PT100 platinum resistance value, 4–20mA" },
        { label: "Working Conditions", value: "-40°C to +55°C, relative humidity ≤95%" },
        { label: "Measurement Range", value: "0–150°C (customizable)" },
        { label: "Accuracy", value: "Class 1.5" },
        { label: "Switching Performance", value: "4 or 6 sets of adjustable switches, individually settable across the full range" },
        { label: "Switching Action Error", value: "±4°C" },
        { label: "Rated Switch Power", value: "AC 220V 5A" },
        { label: "Temperature Bulb Size", value: "Φ14×150mm, M27×2mm thread" },
        { label: "Capillary Tube Length", value: "6 m standard (customizable)" },
        { label: "Protection Level", value: "IP55" },
      ],
      applications: ["Transformer Cooling System Control & Monitoring"],
    },
  },
  {
    id: "24",
    title: "QJ9-50/80 Double Float Series Gas Relay",
    description: "Double-float gas relay for 110kV and above oil-immersed transformers, with light gas, heavy gas, and oil-shortage signal outputs.",
    image: "/images/products/non-electric-protection/pressure-relief-valve-double-port.png",
    slug: "qj9-50-80-double-float-gas-relay",
    detail: {
      intro:
        "QJ9-50 and QJ9-80 series gas relays are used for oil-immersed transformers of 110kV and above, adopting a double-floating-ball structure with three signal outputs — light gas, heavy gas, and oil shortage — for safer, more reliable performance.",
      specs: [
        { label: "Installation", value: "Relay pipeline axis parallel to the transformer box cover, slightly higher end toward the oil storage tank, incline ≤4%" },
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Power Frequency Withstand Voltage", value: "Normally open contact 2000V, 1 min · Normally closed / SPDT: phase-to-phase 1000V, 1 min, ground 2000V, 1 min" },
        { label: "Insulation Performance", value: "Normally open contact 2500V, 1000 MΩ · Normally closed / SPDT: phase-to-phase 1000V, 500 MΩ, ground 2500V, 1000 MΩ" },
      ],
      features: ["Double-floating-ball structure with three signal outputs — light gas, heavy gas, and oil shortage."],
      applications: ["Oil-Immersed Transformers 110kV and Above"],
    },
  },
  {
    id: "25",
    title: "QJ9-50/80 Double Float Gas Relay With Transmission Signal",
    description: "Double-float gas relay for 110kV and above transformers, adding 4–20mA and RS485 remote transmission of light gas volume.",
    image: "/images/products/non-electric-protection/oil-level-indicators-pair.png",
    slug: "qj9-50-80-double-float-gas-relay-transmission-signal",
    detail: {
      intro:
        "QJ9-50 and QJ9-80 series gas relays are used for oil-immersed transformers of 110kV and above, adopting a double-floating-ball structure with three signal outputs — light gas, heavy gas, and oil shortage — plus 4–20mA and RS485 remote transmission of light gas volume for more safe and reliable performance.",
      specs: [
        { label: "Installation", value: "Relay pipeline axis parallel to the transformer box cover, slightly higher end toward the oil storage tank, incline ≤4%" },
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Power Frequency Withstand Voltage", value: "Normally open contact 2000V, 1 min · Normally closed / SPDT: phase-to-phase 1000V, 1 min, ground 2000V, 1 min" },
        { label: "Insulation Performance", value: "Normally open contact 2500V, 1000 MΩ · Normally closed / SPDT: phase-to-phase 1000V, 500 MΩ, ground 2500V, 1000 MΩ" },
      ],
      features: [
        "Double-floating-ball structure with three signal outputs — light gas, heavy gas, and oil shortage.",
        "4–20mA and RS485 remote transmission of light gas volume.",
      ],
      applications: ["Oil-Immersed Transformers 110kV and Above"],
    },
  },
  {
    id: "26",
    title: "YZF-90 Series Pointer-type Oil Level Gauge",
    description: "Pointer-type oil level gauge with floating ball, transmission, and magnetic coupling mechanism, alarming at lowest and highest oil levels.",
    image: "/images/products/non-electric-protection/winding-temperature-indicator-set.png",
    slug: "yzf-90-pointer-oil-level-gauge",
    detail: {
      intro:
        "The YZF-90 series pointer-type oil level gauge's main structure includes a floating ball part, transmission part, magnetic coupling, indication part, and alarm part. The float drives the indicator through the transmission and magnetic coupling to show the oil level on the dial, and sends an alarm signal at the lowest and highest oil levels for remote monitoring.",
      specs: [
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Max Oil Temperature", value: "115°C" },
        { label: "Indication Error", value: "< 2.5% of full scale" },
        { label: "Long-Term Stability", value: "≥ 10,000 cycles" },
        { label: "Sealing Performance", value: "245 kPa, no leakage for 20 minutes" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Switch Capacity", value: "AC 220V 5A, DC 220V 0.5A" },
      ],
      applications: ["Transformer Oil Storage Tanks"],
    },
  },
  {
    id: "27",
    title: "YZF-60K Series Pointer-type Oil Level Gauge",
    description: "Pointer-type oil level gauge for small-diameter oil storage tanks, pad-mounted transformers, and on-load switch tanks.",
    image: "/images/products/non-electric-protection/oil-level-indicators-round-pair.png",
    slug: "yzf-60k-pointer-oil-level-gauge",
    detail: {
      intro:
        "The YZF-60K type pointer-type oil level gauge is an oil level testing device for the transformer oil tank, emitting alarm signals at the highest and lowest oil levels for remote monitoring. It is suitable for small-diameter oil storage tanks, pad-mounted transformers, and on-load switch oil storage tanks.",
      specs: [
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C · Altitude 0–4000 m" },
        { label: "Max Oil Temperature", value: "115°C" },
        { label: "Indication Error", value: "< 2.5% of full scale" },
        { label: "Long-Term Stability", value: "≥ 10,000 cycles" },
        { label: "Switch Capacity", value: "AC 220V 5A, DC 220V 0.3A" },
      ],
      applications: ["Small-Diameter Oil Storage Tanks", "Pad-Mounted Transformers", "On-Load Switch Oil Storage Tanks"],
    },
  },
  {
    id: "28",
    title: "YZF3.2a-140 Series Pointer-type Oil Level Gauge",
    description: "Pointer-type oil level gauge with up-down or left-right swing connecting rod, for main and on-load switch oil storage tanks.",
    image: "/images/products/non-electric-protection/multipoint-temperature-monitoring.png",
    slug: "yzf3-2a-140-pointer-oil-level-gauge",
    detail: {
      intro:
        "The YZF3.2a-140 pointer-type oil level gauge is an oil level testing device for transformer oil storage tanks, emitting alarm signals at the highest and lowest oil levels. According to the swing form of the connecting rod, it is available in up-and-down swing and left-and-right swing types, respectively suitable for the main oil storage tank and the on-load switch oil storage tank.",
      specs: [
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Max Oil Temperature", value: "115°C" },
        { label: "Indication Error", value: "< 2.5% of full scale" },
        { label: "Long-Term Stability", value: "≥ 10,000 cycles" },
        { label: "Sealing Performance", value: "245 kPa, no leakage for 20 minutes" },
        { label: "Protection Level", value: "IP55 (customizable) · Altitude 0–4000 m" },
        { label: "Switch Capacity", value: "AC 220V 5A, DC 220V 0.3A" },
      ],
      applications: ["Main Oil Storage Tanks", "On-Load Switch Oil Storage Tanks"],
    },
  },
  {
    id: "29",
    title: "Iron-core Grounding Current Monitor",
    description: "Monitor for transformer iron-core and clamp grounding current, detecting circulating currents that can cause local overheating.",
    image: "/images/products/non-electric-protection/pressure-controller-gauge.png",
    slug: "iron-core-grounding-current-monitor",
    detail: {
      intro:
        "When a transformer is in operation, the electric and magnetic fields of the windings cause different potentials among the iron core's components. If the iron core has multiple grounding points, a closed circuit forms between them, inducing a circulating current that can cause local overheating and, in severe cases, local burnout — seriously threatening safe operation. This monitor tracks that current in real time.",
      specs: [
        { label: "Measurement Object", value: "Current of transformer core and clamping parts" },
        { label: "Measurement Range", value: "AC 0–10 A" },
        { label: "Working Power Supply", value: "AC 80–250V" },
        { label: "Withstand Voltage", value: "500V" },
        { label: "Overload Capacity", value: "10× maximum rated current" },
        { label: "Working Environment", value: "-30°C to +50°C, humidity < 80%" },
        { label: "Instrument Signal", value: "4–20mA" },
        { label: "Communication", value: "RTU (MODBUS protocol), RS485, 0–1000 m transmission distance" },
        { label: "Alarm Switch Output", value: "AC 220V/7A, DC 220V/1A" },
      ],
      applications: ["Transformer Iron Core & Clamp Grounding Current Monitoring"],
    },
  },
  {
    id: "30",
    title: "BWR Series Winding Temperature Indicator",
    description: "Dedicated winding temperature indicator combining a temperature sensor, converter, and stabilized power supply, outputting a 4–20mA signal.",
    image: "/images/products/non-electric-protection/double-float-gas-relay.png",
    slug: "bwr-winding-temperature-indicator",
    detail: {
      intro:
        "The BWR series transformer winding temperature indicator is designed based on the principle of additional temperature rise, integrating the BWR-04B type indicator, a BL-type converter, and a DFY-24V stabilized power supply. It outputs a 4–20mA current signal for computer systems and secondary instruments, enabling unmanned power station management.",
      specs: [
        { label: "Output Signal", value: "PT100 platinum resistance value, 4–20mA" },
        { label: "Working Conditions", value: "-40°C to +55°C, relative humidity ≤95%" },
        { label: "Measurement Range", value: "0–150°C (customizable)" },
        { label: "Accuracy", value: "Class 1.5" },
        { label: "Switching Performance", value: "4 or 6 sets of adjustable switches, individually settable across the full range" },
        { label: "Switching Action Error", value: "±4°C" },
        { label: "Rated Switch Power", value: "AC 220V 5A" },
        { label: "Temperature Bulb Size", value: "Φ14×150mm, M27×2mm thread" },
        { label: "Capillary Tube Length", value: "6 m standard (customizable)" },
        { label: "Protection Level", value: "IP55" },
      ],
      features: [
        "Small size, full functionality, easy installation, simple operation.",
        "Enables unmanned power station management.",
      ],
      applications: ["Transformer Winding Temperature Monitoring"],
    },
  },
{
    id: "31",
    title: "QJ9-25 Double Float Series Gas Relay",
    description: "Double-float gas relay for transformer switches and offshore wind power transformers, with light gas, heavy gas, and oil-shortage outputs.",
    image: "/images/products/non-electric-protection/ydk6-oil-level-gauge.png",
    slug: "qj9-25-double-float-gas-relay",
    detail: {
      intro:
        "The QJ9-25 series gas relay is used for transformer switches and offshore wind power transformers, adopting a double-floating-ball structure internally with three signal outputs — light gas, heavy gas, and oil shortage — for safer, more reliable performance.",
      specs: [
        { label: "Installation", value: "Relay pipeline axis parallel to the transformer tank cover, slightly higher end toward the oil conservator, incline ≤4%" },
        { label: "Environmental Range", value: "-30°C to +70°C (customizable to -45°C to +70°C)" },
        { label: "Working Environment", value: "-30°C to +115°C (customizable to -45°C to +115°C)" },
        { label: "Relative Humidity", value: "≤95% at +20°C" },
        { label: "Protection Level", value: "IP65 · Altitude 0–4000 m" },
        { label: "Power Frequency Withstand Voltage", value: "Normally open contact 2000V, 1 min · Normally closed / SPDT: phase-to-phase 1000V, 1 min, ground 2000V, 1 min" },
        { label: "Insulation Performance", value: "Normally open contact 2500V, 1000 MΩ · Normally closed / SPDT: phase-to-phase 1000V, 500 MΩ, ground 2500V, 1000 MΩ" },
      ],
      features: ["Double-floating-ball structure with three signal outputs — light gas, heavy gas, and oil shortage."],
      applications: ["Transformer Switches", "Offshore Wind Power Transformers"],
    },
  },
];