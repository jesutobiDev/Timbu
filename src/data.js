import chair1 from './assets/products/chair-1.svg';
import chair2 from './assets/products/chair-2.svg';
import chair3 from './assets/products/chair-3.svg';
import star from "./assets/icons/star.svg"
import warranty from "./assets/icons/warranty.svg"
import globe from "./assets/icons/globe.svg"
import award from "./assets/icons/award.svg"

const products = [
    {
        id: 1,
        image: chair1,
        name: "Living Room Chair",
        price: 100,
        category: "Living Room",
        description: "Bring the warmth and radiance of the summer solstice into your home with our stunning Summer Solstice Dining Stools. These exquisitely crafted stools feature a sun-inspired circular seat and gently curved backrest, evoking the sun's path across the summer sky.",
        colorVariants: [
            { color: "Terracotta", code: "#C66E4E" },
            { color: "Night", code: "#2C3E50" },
            { color: "Wheat", code: "#E6BE8A" },
            { color: "Grove", code : "#556B2F"}
        ],
        availability : "Available in a range of warm, sunlit hues with a subtle shimmer effect, these 24-inch high stools are perfect for kitchen islands and bar-height tables. Crafted from sustainable hardwood, they offer both durability and eco-conscious appeal, while their ergonomic design ensures comfort during long, leisurely summer meals.",
        characteristics : [
            {icon : star, icon_text : "10,000 five-star reviews"},
            {icon : warranty, icon_text : "Lifetime warranty included"},
            {icon : globe , icon_text : "Sustainably sourced materials"},
            {icon : award, icon_text : "Award winning Design"}
        ]
    },
    {
        id: 2,
        image: chair2,
        name: "Bedroom Chair",
        price: 100,
        category: "Bedroom",
        description: "Bring the warmth and radiance of the summer solstice into your home with our stunning Summer Solstice Dining Stools. These exquisitely crafted stools feature a sun-inspired circular seat and gently curved backrest, evoking the sun's path across the summer sky.",
        colorVariants: [
            { color: "Terracotta", code: "#C66E4E" },
            { color: "Night", code: "#2C3E50" },
            { color: "Wheat", code: "#E6BE8A" },
            { color: "Grove", code : "#556B2F"}
        ],
        availability : "Available in a range of warm, sunlit hues with a subtle shimmer effect, these 24-inch high stools are perfect for kitchen islands and bar-height tables. Crafted from sustainable hardwood, they offer both durability and eco-conscious appeal, while their ergonomic design ensures comfort during long, leisurely summer meals.",
        characteristics : [
            {icon : star, icon_text : "10,000 five-star reviews"},
            {icon : warranty, icon_text : "Lifetime warranty included"},
            {icon : globe , icon_text : "Sustainably sourced materials"},
            {icon : award, icon_text : "Award winning Design"}
        ]
    },
    {
        id: 3,
        image: chair3,
        name: "Outdoor Chair",
        price: 100,
        category: "Outdoor",
        description: "Bring the warmth and radiance of the summer solstice into your home with our stunning Summer Solstice Dining Stools. These exquisitely crafted stools feature a sun-inspired circular seat and gently curved backrest, evoking the sun's path across the summer sky.",
        colorVariants: [
            { color: "Terracotta", code: "#C66E4E" },
            { color: "Night", code: "#2C3E50" },
            { color: "Wheat", code: "#E6BE8A" },
            { color: "Grove", code : "#556B2F"}
        ],
        availability : "Available in a range of warm, sunlit hues with a subtle shimmer effect, these 24-inch high stools are perfect for kitchen islands and bar-height tables. Crafted from sustainable hardwood, they offer both durability and eco-conscious appeal, while their ergonomic design ensures comfort during long, leisurely summer meals.",
        characteristics : [
            {icon : star, icon_text : "10,000 five-star reviews"},
            {icon : warranty, icon_text : "Lifetime warranty included"},
            {icon : globe , icon_text : "Sustainably sourced materials"},
            {icon : award, icon_text : "Award winning Design"}
        ]
    },
    {
        id: 4,
        image: chair1,
        name: "Living Room Chair",
        price: 100,
        category: "Living Room",
        description: "Bring the warmth and radiance of the summer solstice into your home with our stunning Summer Solstice Dining Stools. These exquisitely crafted stools feature a sun-inspired circular seat and gently curved backrest, evoking the sun's path across the summer sky.",
        colorVariants: [
            { color: "Terracotta", code: "#C66E4E" },
            { color: "Night", code: "#2C3E50" },
            { color: "Wheat", code: "#E6BE8A" },
            { color: "Grove", code : "#556B2F"}
        ],
        availability : "Available in a range of warm, sunlit hues with a subtle shimmer effect, these 24-inch high stools are perfect for kitchen islands and bar-height tables. Crafted from sustainable hardwood, they offer both durability and eco-conscious appeal, while their ergonomic design ensures comfort during long, leisurely summer meals.",
        characteristics : [
            {icon : star, icon_text : "10,000 five-star reviews"},
            {icon : warranty, icon_text : "Lifetime warranty included"},
            {icon : globe , icon_text : "Sustainably sourced materials"},
            {icon : award, icon_text : "Award winning Design"}
        ]
    },
    {
        id: 5,
        image: chair2,
        name: "Bedroom Chair",
        price: 100,
        category: "Bedroom",
        description: "Bring the warmth and radiance of the summer solstice into your home with our stunning Summer Solstice Dining Stools. These exquisitely crafted stools feature a sun-inspired circular seat and gently curved backrest, evoking the sun's path across the summer sky.",
        colorVariants: [
            { color: "Terracotta", code: "#C66E4E" },
            { color: "Night", code: "#2C3E50" },
            { color: "Wheat", code: "#E6BE8A" },
            { color: "Grove", code : "#556B2F"}
        ],
        availability : "Available in a range of warm, sunlit hues with a subtle shimmer effect, these 24-inch high stools are perfect for kitchen islands and bar-height tables. Crafted from sustainable hardwood, they offer both durability and eco-conscious appeal, while their ergonomic design ensures comfort during long, leisurely summer meals.",
        characteristics : [
            {icon : star, icon_text : "10,000 five-star reviews"},
            {icon : warranty, icon_text : "Lifetime warranty included"},
            {icon : globe , icon_text : "Sustainably sourced materials"},
            {icon : award, icon_text : "Award winning Design"}
        ]
    },
    {
        id: 6,
        image: chair3,
        name: "Outdoor Chair",
        price: 100,
        category: "Outdoor",
        description: "Bring the warmth and radiance of the summer solstice into your home with our stunning Summer Solstice Dining Stools. These exquisitely crafted stools feature a sun-inspired circular seat and gently curved backrest, evoking the sun's path across the summer sky.",
        colorVariants: [
            { color: "Terracotta", code: "#C66E4E" },
            { color: "Night", code: "#2C3E50" },
            { color: "Wheat", code: "#E6BE8A" },
            { color: "Grove", code : "#556B2F"}
        ],
    },
    {
        id: 7,
        image: chair1,
        name: "Living Room Chair",
        price: 100,
        category: "Living Room",
        description: "Bring the warmth and radiance of the summer solstice into your home with our stunning Summer Solstice Dining Stools. These exquisitely crafted stools feature a sun-inspired circular seat and gently curved backrest, evoking the sun's path across the summer sky.",
        colorVariants: [
            { color: "Terracotta", code: "#C66E4E" },
            { color: "Night", code: "#2C3E50" },
            { color: "Wheat", code: "#E6BE8A" },
            { color: "Grove", code : "#556B2F"}
        ],
        availability : "Available in a range of warm, sunlit hues with a subtle shimmer effect, these 24-inch high stools are perfect for kitchen islands and bar-height tables. Crafted from sustainable hardwood, they offer both durability and eco-conscious appeal, while their ergonomic design ensures comfort during long, leisurely summer meals.",
        characteristics : [
            {icon : star, icon_text : "10,000 five-star reviews"},
            {icon : warranty, icon_text : "Lifetime warranty included"},
            {icon : globe , icon_text : "Sustainably sourced materials"},
            {icon : award, icon_text : "Award winning Design"}
        ]
    },
    {
        id: 8,
        image: chair2,
        name: "Bedroom Chair",
        price: 100,
        category: "Bedroom",
        description: "Bring the warmth and radiance of the summer solstice into your home with our stunning Summer Solstice Dining Stools. These exquisitely crafted stools feature a sun-inspired circular seat and gently curved backrest, evoking the sun's path across the summer sky.",
        colorVariants: [
            { color: "Terracotta", code: "#C66E4E" },
            { color: "Night", code: "#2C3E50" },
            { color: "Wheat", code: "#E6BE8A" },
            { color: "Grove", code : "#556B2F"}
        ],
        availability : "Available in a range of warm, sunlit hues with a subtle shimmer effect, these 24-inch high stools are perfect for kitchen islands and bar-height tables. Crafted from sustainable hardwood, they offer both durability and eco-conscious appeal, while their ergonomic design ensures comfort during long, leisurely summer meals.",
        characteristics : [
            {icon : star, icon_text : "10,000 five-star reviews"},
            {icon : warranty, icon_text : "Lifetime warranty included"},
            {icon : globe , icon_text : "Sustainably sourced materials"},
            {icon : award, icon_text : "Award winning Design"}
        ]
    },
    {
        id: 9,
        image: chair3,
        name: "Outdoor Chair",
        price: 100,
        category: "Outdoor",
        description: "Bring the warmth and radiance of the summer solstice into your home with our stunning Summer Solstice Dining Stools. These exquisitely crafted stools feature a sun-inspired circular seat and gently curved backrest, evoking the sun's path across the summer sky.",
        colorVariants: [
            { color: "Terracotta", code: "#C66E4E" },
            { color: "Night", code: "#2C3E50" },
            { color: "Wheat", code: "#E6BE8A" },
            { color: "Grove", code : "#556B2F"}
        ],
        availability : "Available in a range of warm, sunlit hues with a subtle shimmer effect, these 24-inch high stools are perfect for kitchen islands and bar-height tables. Crafted from sustainable hardwood, they offer both durability and eco-conscious appeal, while their ergonomic design ensures comfort during long, leisurely summer meals.",
        characteristics : [
            {icon : star, icon_text : "10,000 five-star reviews"},
            {icon : warranty, icon_text : "Lifetime warranty included"},
            {icon : globe , icon_text : "Sustainably sourced materials"},
            {icon : award, icon_text : "Award winning Design"}
        ]
    },
    {
        id: 10,
        image: chair1,
        name: "Living Room Chair",
        price: 100,
        category: "Living Room",
        description: "Bring the warmth and radiance of the summer solstice into your home with our stunning Summer Solstice Dining Stools. These exquisitely crafted stools feature a sun-inspired circular seat and gently curved backrest, evoking the sun's path across the summer sky.",
        colorVariants: [
            { color: "Terracotta", code: "#C66E4E" },
            { color: "Night", code: "#2C3E50" },
            { color: "Wheat", code: "#E6BE8A" },
            { color: "Grove", code : "#556B2F"}
        ],
        availability : "Available in a range of warm, sunlit hues with a subtle shimmer effect, these 24-inch high stools are perfect for kitchen islands and bar-height tables. Crafted from sustainable hardwood, they offer both durability and eco-conscious appeal, while their ergonomic design ensures comfort during long, leisurely summer meals.",
        characteristics : [
            {icon : star, icon_text : "10,000 five-star reviews"},
            {icon : warranty, icon_text : "Lifetime warranty included"},
            {icon : globe , icon_text : "Sustainably sourced materials"},
            {icon : award, icon_text : "Award winning Design"}
        ]
    },
    {
        id: 11,
        image: chair2,
        name: "Bedroom Chair",
        price: 100,
        category: "Bedroom",
        description: "Bring the warmth and radiance of the summer solstice into your home with our stunning Summer Solstice Dining Stools. These exquisitely crafted stools feature a sun-inspired circular seat and gently curved backrest, evoking the sun's path across the summer sky.",
        colorVariants: [
            { color: "Terracotta", code: "#C66E4E" },
            { color: "Night", code: "#2C3E50" },
            { color: "Wheat", code: "#E6BE8A" },
            { color: "Grove", code : "#556B2F"}
        ],
        availability : "Available in a range of warm, sunlit hues with a subtle shimmer effect, these 24-inch high stools are perfect for kitchen islands and bar-height tables. Crafted from sustainable hardwood, they offer both durability and eco-conscious appeal, while their ergonomic design ensures comfort during long, leisurely summer meals.",
        characteristics : [
            {icon : star, icon_text : "10,000 five-star reviews"},
            {icon : warranty, icon_text : "Lifetime warranty included"},
            {icon : globe , icon_text : "Sustainably sourced materials"},
            {icon : award, icon_text : "Award winning Design"}
        ]
    },
    {
        id: 12,
        image: chair3,
        name: "Outdoor Chair",
        price: 100,
        category: "Outdoor",
        description: "Bring the warmth and radiance of the summer solstice into your home with our stunning Summer Solstice Dining Stools. These exquisitely crafted stools feature a sun-inspired circular seat and gently curved backrest, evoking the sun's path across the summer sky.",
        colorVariants: [
            { color: "Terracotta", code: "#C66E4E" },
            { color: "Night", code: "#2C3E50" },
            { color: "Wheat", code: "#E6BE8A" },
            { color: "Grove", code : "#556B2F"}
        ],
        availability : "Available in a range of warm, sunlit hues with a subtle shimmer effect, these 24-inch high stools are perfect for kitchen islands and bar-height tables. Crafted from sustainable hardwood, they offer both durability and eco-conscious appeal, while their ergonomic design ensures comfort during long, leisurely summer meals.",
        characteristics : [
            {icon : star, icon_text : "10,000 five-star reviews"},
            {icon : warranty, icon_text : "Lifetime warranty included"},
            {icon : globe , icon_text : "Sustainably sourced materials"},
            {icon : award, icon_text : "Award winning Design"}
        ]
    },
    {
        id: 13,
        image: chair1,
        name: "Living Room Chair",
        price: 100,
        category: "Living Room",
        description: "Bring the warmth and radiance of the summer solstice into your home with our stunning Summer Solstice Dining Stools. These exquisitely crafted stools feature a sun-inspired circular seat and gently curved backrest, evoking the sun's path across the summer sky.",
        colorVariants: [
            { color: "Terracotta", code: "#C66E4E" },
            { color: "Night", code: "#2C3E50" },
            { color: "Wheat", code: "#E6BE8A" },
            { color: "Grove", code : "#556B2F"}
        ],
        availability : "Available in a range of warm, sunlit hues with a subtle shimmer effect, these 24-inch high stools are perfect for kitchen islands and bar-height tables. Crafted from sustainable hardwood, they offer both durability and eco-conscious appeal, while their ergonomic design ensures comfort during long, leisurely summer meals.",
        characteristics : [
            {icon : star, icon_text : "10,000 five-star reviews"},
            {icon : warranty, icon_text : "Lifetime warranty included"},
            {icon : globe , icon_text : "Sustainably sourced materials"},
            {icon : award, icon_text : "Award winning Design"}
        ]
    },
    {
        id: 14,
        image: chair2,
        name: "Bedroom Chair",
        price: 100,
        category: "Bedroom",
        description: "Bring the warmth and radiance of the summer solstice into your home with our stunning Summer Solstice Dining Stools. These exquisitely crafted stools feature a sun-inspired circular seat and gently curved backrest, evoking the sun's path across the summer sky.",
        colorVariants: [
            { color: "Terracotta", code: "#C66E4E" },
            { color: "Night", code: "#2C3E50" },
            { color: "Wheat", code: "#E6BE8A" },
            { color: "Grove", code : "#556B2F"}
        ],
        availability : "Available in a range of warm, sunlit hues with a subtle shimmer effect, these 24-inch high stools are perfect for kitchen islands and bar-height tables. Crafted from sustainable hardwood, they offer both durability and eco-conscious appeal, while their ergonomic design ensures comfort during long, leisurely summer meals.",
        characteristics : [
            {icon : star, icon_text : "10,000 five-star reviews"},
            {icon : warranty, icon_text : "Lifetime warranty included"},
            {icon : globe , icon_text : "Sustainably sourced materials"},
            {icon : award, icon_text : "Award winning Design"}
        ]
    },
    {
        id: 15,
        image: chair3,
        name: "Outdoor Chair",
        price: 100,
        category: "Outdoor",
        description: "Bring the warmth and radiance of the summer solstice into your home with our stunning Summer Solstice Dining Stools. These exquisitely crafted stools feature a sun-inspired circular seat and gently curved backrest, evoking the sun's path across the summer sky.",
        colorVariants: [
            { color: "Terracotta", code: "#C66E4E" },
            { color: "Night", code: "#2C3E50" },
            { color: "Wheat", code: "#E6BE8A" },
            { color: "Grove", code : "#556B2F"}
        ],
        availability : "Available in a range of warm, sunlit hues with a subtle shimmer effect, these 24-inch high stools are perfect for kitchen islands and bar-height tables. Crafted from sustainable hardwood, they offer both durability and eco-conscious appeal, while their ergonomic design ensures comfort during long, leisurely summer meals.",
        characteristics : [
            {icon : star, icon_text : "10,000 five-star reviews"},
            {icon : warranty, icon_text : "Lifetime warranty included"},
            {icon : globe , icon_text : "Sustainably sourced materials"},
            {icon : award, icon_text : "Award winning Design"}
        ]
    },
];

export default products;
