import { motion } from "motion/react"
import {
ArrowLeft,
ArrowRight,
BedDouble,
BriefcaseBusiness,
ChefHat,
Coffee,
Layers3,
Sofa,
Sparkles,
Utensils,
Warehouse,
} from "lucide-react"
import { Link, useParams } from "react-router-dom"

const categories = {
"Living Room Furniture": {
title: "Living Room Furniture",
description:
"Explore custom living room furniture designed around your space, style and everyday comfort.",
icon: Sofa,
subcategories: [
{
name: "Sofa Sets",
description: "Complete sofa combinations for stylish living spaces.",
},
{
name: "TV Units",
description: "Modern TV units designed to organize and elevate your entertainment area.",
},
{
name: "TV Cabinets",
description: "Functional storage and display solutions for your TV area.",
},
{
name: "Coffee Tables",
description: "Stylish coffee tables made to complement your living room.",
},
{
name: "Console Tables",
description: "Elegant console designs for entryways and living spaces.",
},
{
name: "Side Tables",
description: "Compact and practical tables for everyday use.",
},
],
},

"Bedroom Furniture": {
title: "Bedroom Furniture",
description:
"Discover bedroom furniture crafted to make your space comfortable, practical and beautifully finished.",
icon: BedDouble,
subcategories: [
{
name: "Beds",
description: "Custom beds designed around your preferred style and size.",
},
{
name: "Wardrobes",
description: "Fitted and freestanding wardrobes built around your storage needs.",
},
{
name: "Bedside Tables",
description: "Practical bedside storage designed to complement your bedroom.",
},
{
name: "Dressing Tables",
description: "Beautiful dressing tables with functional storage solutions.",
},
],
},

"Dining Furniture": {
title: "Dining Furniture",
description:
"Create a welcoming dining space with furniture designed for comfort, durability and style.",
icon: Utensils,
subcategories: [
{
name: "Dining Tables",
description: "Custom dining tables made to fit your space.",
},
{
name: "Dining Sets",
description: "Complete dining combinations designed for your home.",
},
{
name: "Dining Chairs",
description: "Comfortable dining chairs crafted to complement your table.",
},
],
},

"Office Furniture": {
title: "Office Furniture",
description:
"Practical and refined furniture designed for productive and professional workspaces.",
icon: BriefcaseBusiness,
subcategories: [
{
name: "Office Desks",
description: "Functional desks designed for modern workspaces.",
},
{
name: "Office Chairs",
description: "Comfortable seating solutions for your workspace.",
},
{
name: "Office Cabinets",
description: "Smart storage solutions for organized offices.",
},
{
name: "Reception Furniture",
description: "Professional furniture designed for welcoming reception areas.",
},
],
},

"Storage Furniture": {
title: "Storage Furniture",
description:
"Smart storage solutions designed to keep your home organized without sacrificing style.",
icon: Warehouse,
subcategories: [
{
name: "Shoe Cabinets",
description: "Clean and practical storage for your footwear.",
},
{
name: "Shoe Racks",
description: "Simple and functional shoe storage solutions.",
},
{
name: "Shelves",
description: "Custom shelving designed for display and storage.",
},
{
name: "Storage Cabinets",
description: "Versatile cabinets made around your storage requirements.",
},
],
},

"Kitchen Cabinets": {
title: "Kitchen",
description:
"Modern kitchen solutions designed around your space, lifestyle and storage requirements.",
icon: ChefHat,
subcategories: [
{
name: "Kitchen Cabinets",
description: "Custom cabinets designed around your kitchen layout.",
},
{
name: "Pantry Cabinets",
description: "Organized pantry storage designed to maximize your space.",
},
{
name: "Kitchen Storage",
description: "Practical storage solutions for modern kitchens.",
},
],
},

"Home & Décor": {
title: "Home & Décor",
description:
"Finishing touches and functional pieces that give your home its own character.",
icon: Sparkles,
subcategories: [
{
name: "Mirrors",
description: "Stylish mirror designs for different spaces.",
},
{
name: "Wall Décor",
description: "Custom pieces designed to enhance your walls and interiors.",
},
{
name: "Shelves",
description: "Decorative and functional shelving solutions.",
},
{
name: "Home Accessories",
description: "Unique pieces that add personality to your home.",
},
],
},

"Custom Furniture": {
title: "Custom Furniture",
description:
"Unique furniture pieces made specifically around your ideas, measurements and requirements.",
icon: Layers3,
subcategories: [
{
name: "Custom Pieces",
description: "Unique furniture created from your own idea or inspiration.",
},
{
name: "Made-to-Measure Furniture",
description: "Furniture designed and built specifically for your available space.",
},
],
},
}

const subcategoryIcons = {
"Sofa Sets": Sofa,
"TV Units": Layers3,
"TV Cabinets": Layers3,
"Coffee Tables": Coffee,
"Console Tables": Layers3,
"Side Tables": Coffee,
Beds: BedDouble,
Wardrobes: Warehouse,
"Bedside Tables": Coffee,
"Dressing Tables": Sparkles,
"Dining Tables": Utensils,
"Dining Sets": Utensils,
"Dining Chairs": Utensils,
"Office Desks": BriefcaseBusiness,
"Office Chairs": BriefcaseBusiness,
"Office Cabinets": Warehouse,
"Reception Furniture": BriefcaseBusiness,
"Shoe Cabinets": Warehouse,
"Shoe Racks": Warehouse,
Shelves: Layers3,
"Storage Cabinets": Warehouse,
"Kitchen Cabinets": ChefHat,
"Pantry Cabinets": ChefHat,
"Kitchen Storage": ChefHat,
Mirrors: Sparkles,
"Wall Décor": Sparkles,
"Home Accessories": Sparkles,
"Custom Pieces": Sparkles,
"Made-to-Measure Furniture": Layers3,
}

function CategoryPage() {
const { category } = useParams()

const categoryName = decodeURIComponent(category || "")
const categoryData = categories[categoryName]

// ================= CATEGORY NOT FOUND =================
if (!categoryData) {
return ( <section className="min-h-screen bg-stone-50 px-5 py-20 sm:px-8 lg:px-12"> <div className="mx-auto max-w-4xl text-center"> <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
Collection </p>


      <h1 className="mt-4 text-4xl font-semibold text-stone-900">
        Category not found
      </h1>

      <p className="mt-4 text-stone-600">
        The furniture category you're looking for could not be found.
      </p>

      <Link
        to="/portfolio"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-amber-500 hover:text-stone-950"
      >
        <ArrowLeft size={18} />
        Back to Collection
      </Link>
    </div>
  </section>
)


}

const CategoryIcon = categoryData.icon

return ( <section className="min-h-screen bg-stone-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"> <div className="mx-auto max-w-7xl">


    {/* ================= BACK ================= */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to="/portfolio"
        className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition-colors hover:text-amber-600"
      >
        <ArrowLeft size={18} />
        Back to Collection
      </Link>
    </motion.div>

    {/* ================= HEADER ================= */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mt-10 max-w-3xl"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-stone-950">
        <CategoryIcon size={27} />
      </div>

      <p className="mt-7 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
        Pazuri Homes Collection
      </p>

      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
        {categoryData.title}
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
        {categoryData.description}
      </p>

      <p className="mt-5 text-sm font-medium text-stone-500">
        Choose what you'd like to explore.
      </p>
    </motion.div>

    {/* ================= SUBCATEGORIES ================= */}
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {categoryData.subcategories.map((subcategory, index) => {
        const Icon = subcategoryIcons[subcategory.name] || Layers3

        return (
          <motion.div
            key={subcategory.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: index * 0.07,
            }}
            whileHover={{ y: -5 }}
            className="group rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-800 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-stone-950">
                <Icon size={22} />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                Custom
              </span>
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-stone-900">
              {subcategory.name}
            </h2>

            <p className="mt-3 min-h-[48px] text-sm leading-6 text-stone-600">
              {subcategory.description}
            </p>

            <Link
              to={`/portfolio/category/${encodeURIComponent(
                categoryName
              )}/${encodeURIComponent(subcategory.name)}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-stone-800 transition-colors hover:text-amber-600"
            >
              Explore {subcategory.name}
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        )
      })}
    </div>

    {/* ================= CUSTOM CTA ================= */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-16 rounded-3xl bg-stone-900 px-6 py-12 text-center sm:px-10 sm:py-14"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
        Have something different in mind?
      </p>

      <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
        We can create it for you.
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-400 sm:text-base">
        Don't see exactly what you're looking for? Pazuri Homes creates
        custom furniture around your space, measurements, style and
        requirements.
      </p>

      <Link
        to="/contact"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 font-semibold text-stone-950 transition-all duration-300 hover:bg-amber-300 hover:shadow-lg"
      >
        Start a Project
        <ArrowRight size={18} />
      </Link>
    </motion.div>

  </div>
</section>


)
}

export default CategoryPage