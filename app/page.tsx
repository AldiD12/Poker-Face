"use client"

import { useState, useEffect, useRef } from "react"
import {
  Play,
  Plus,
  Minus,
  Instagram,
  Facebook,
  Twitter,
  Search,
  ArrowRight,
  Check,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"

export default function PokerFaceAesthetics() {
  const [openFaq, setOpenFaq] = useState<number | null>(2)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentBeforeAfter, setCurrentBeforeAfter] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // References for scroll animations
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const beforeAfterRef = useRef(null)
  const treatmentsRef = useRef(null)
  const testimonialsRef = useRef(null)
  const faqRef = useRef(null)

  // Check if sections are in view
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 })
  const aboutInView = useInView(aboutRef, { once: false, amount: 0.3 })
  const servicesInView = useInView(servicesRef, { once: false, amount: 0.3 })
  const beforeAfterInView = useInView(beforeAfterRef, { once: false, amount: 0.3 })
  const treatmentsInView = useInView(treatmentsRef, { once: false, amount: 0.3 })
  const testimonialsInView = useInView(testimonialsRef, { once: false, amount: 0.3 })
  const faqInView = useInView(faqRef, { once: false, amount: 0.3 })

  // Parallax effect for hero section
  const { scrollYProgress } = useScroll()
  const heroImageY = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const heroTextY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  // Update scroll position for various effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const faqItems = [
    {
      question: "What services do you offer at Poker Face Aesthetics?",
      answer:
        "We offer a comprehensive range of aesthetic treatments including facial massages, advanced skincare treatments, injectables, and personalized beauty consultations.",
    },
    {
      question: "How can I schedule an appointment?",
      answer:
        "You can schedule an appointment through our online booking system, by calling our clinic directly, or by visiting us in person during business hours.",
    },
    {
      question: "Do you offer consultations before treatments?",
      answer:
        "Yes, we offer consultations to assess your specific needs and recommend personalized treatments and skincare routines.",
    },
    {
      question: "Are your services safe and suitable for all skin types?",
      answer:
        "Our treatments are performed by licensed professionals and are suitable for most skin types. We conduct thorough consultations to ensure safety and effectiveness.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We require 24-hour notice for cancellations. Late cancellations may be subject to a fee. Please refer to our booking terms for complete details.",
    },
  ]

  const services = [
    {
      title: "Skin Boosters",
      image: "/images/s1.jpg",
    },
    {
      title: "Anti-Wrinkle",
      image: "/images/s2.jpg",
    },
    {
      title: "Dermal Fillers",
      image: "/images/s3.jpg",
    },
    {
      title: "Facial Treatments",
      image: "/images/ba1.jpg",
    },
  ]

  const treatmentCategories = [
    {
      category: "Skin Boosters",
      treatments: [
        { name: "Profhilo", price: "$450" },
        { name: "Skinvive", price: "$380" },
        { name: "Redensity 1", price: "$420" },
      ],
    },
    {
      category: "Anti-Wrinkle",
      treatments: [
        { name: "Forehead Lines", price: "$280" },
        { name: "Crow's Feet", price: "$260" },
        { name: "Frown Lines", price: "$300" },
        { name: "Full Face", price: "$650" },
      ],
    },
    {
      category: "Dermal Fillers",
      treatments: [
        { name: "Lip Enhancement", price: "$520" },
        { name: "Cheek Augmentation", price: "$680" },
        { name: "Nasolabial Folds", price: "$580" },
        { name: "Jawline Contouring", price: "$750" },
      ],
    },
    {
      category: "Facial Treatments",
      treatments: [
        { name: "HydraFacial", price: "$180" },
        { name: "Chemical Peel", price: "$150" },
        { name: "Microneedling", price: "$220" },
        { name: "LED Light Therapy", price: "$120" },
      ],
    },
    {
      category: "Body Treatments",
      treatments: [
        { name: "Body Contouring", price: "$350" },
        { name: "Cellulite Treatment", price: "$280" },
        { name: "Skin Tightening", price: "$320" },
        { name: "Stretch Mark Treatment", price: "$250" },
      ],
    },
    {
      category: "Advanced Skincare",
      treatments: [
        { name: "Laser Resurfacing", price: "$450" },
        { name: "IPL Photofacial", price: "$320" },
        { name: "Radiofrequency", price: "$380" },
        { name: "Plasma Pen", price: "$420" },
      ],
    },
  ]

  const testimonials = [
    {
      name: "Sarah K",
      role: "Facial Massage",
      text: "I've been a loyal client of Poker Face Aesthetics for years, and their skincare and makeup services are top-notch. It's my go-to place for beauty!",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michaela R",
      role: "Facial Massage",
      text: "The team at Poker Face Aesthetics is exceptional. Their expertise shows in every service. I trust them completely with my skincare needs.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Jessica M",
      role: "Facial Massage",
      text: "Poker Face Aesthetics is my beauty haven. From massages to makeup, they never disappoint. I leave feeling rejuvenated and confident every time.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Amanda L",
      role: "Skincare Treatment",
      text: "The personalized approach at Poker Face Aesthetics is amazing. They really understand my skin and create treatments that work perfectly for me.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emma T",
      role: "Beauty Package",
      text: "Professional, clean, and results-driven. I always leave feeling more confident and beautiful. Highly recommend their services!",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const beforeAfterImages = [
    {
      id: 1,
      title: "Facial Rejuvenation",
      description: "3-month skincare transformation",
      image: "/images/baa1.jpg",
    },
    {
      id: 2,
      title: "Anti-Aging Treatment",
      description: "6-week intensive care results",
      image: "/images/baa2.jpg",
    },
    {
      id: 3,
      title: "Acne Treatment",
      description: "4-month clear skin journey",
      image: "/images/baa3.jpg",
    },
    {
      id: 4,
      title: "Skin Brightening",
      description: "2-month glow enhancement",
      image: "/images/baa4.jpg",
    },
    {
      id: 5,
      title: "Under Eye Treatment",
      description: "8-week dark circle reduction",
      image: "/images/baa5.jpg",
    },
  ]

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  // Auto-advance before/after images every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBeforeAfter((prev) => (prev + 1) % beforeAfterImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [beforeAfterImages.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  const nextBeforeAfter = () => {
    setCurrentBeforeAfter((prev) => (prev + 1) % beforeAfterImages.length)
  }

  const prevBeforeAfter = () => {
    setCurrentBeforeAfter((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length)
  }

  const goToBeforeAfter = (index: number) => {
    setCurrentBeforeAfter(index)
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="min-h-screen bg-[#f8f6f3] overflow-x-hidden">
      {/* Floating Elements Animation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-[#d4c4a8]/10 top-[20%] left-[10%]"
          animate={{
            y: [0, 30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-[#d4c4a8]/10 top-[60%] right-[15%]"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-[#d4c4a8]/10 bottom-[10%] left-[20%]"
          animate={{
            y: [0, 50, 0],
            x: [0, 25, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
      </div>

      {/* Header */}
      <motion.header
        className="bg-[#d4c4a8] px-4 sm:px-6 py-4 sticky top-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            className="text-lg sm:text-2xl font-light tracking-wide text-gray-800"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Poker Face Aesthetics
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-gray-700">
            {["Services", "Blog", "Contact Us", "About Us"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-gray-900 transition-colors relative"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" className="text-gray-700">
                <Search className="h-5 w-5" />
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="lg:hidden mt-4 pb-4 border-t border-gray-600 pt-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex flex-col space-y-4 text-gray-700"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {["Services", "Blog", "Contact Us", "About Us"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-gray-900 transition-colors"
                    variants={staggerItem}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-[#f8f6f3] overflow-hidden">
        <motion.div
          className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[70vh] lg:min-h-[80vh]"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          {/* Left Column */}
          <motion.div
            className="flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 lg:px-12 order-2 lg:order-1"
            style={{ y: heroTextY }}
            variants={staggerContainer}
          >
            <div className="space-y-6 sm:space-y-8">
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-6xl font-extralight tracking-tight text-gray-800 leading-tight"
                variants={slideFromLeft}
              >
                Window to
                <br />
                Radiant Beauty and
                <br />
                Confidence
              </motion.h1>

              <motion.div className="relative" variants={scaleIn}>
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-gray-400 flex items-center justify-center mb-6"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Play className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600 ml-1" />
                </motion.div>
                <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text className="text-xs fill-gray-600">
                      <textPath href="#circle" startOffset="0%">
                        Beauty • Confidence • Glow • Skin Care •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </motion.div>

              <motion.blockquote className="text-base sm:text-lg text-gray-700 italic max-w-md" variants={fadeIn}>
                "Skin care isn't a luxury; it's your daily commitment to nurturing your unique beauty."
              </motion.blockquote>

              <motion.div variants={fadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#d4c4a8] text-gray-800 hover:bg-[#c9b896] px-6 sm:px-8 py-3 rounded-none w-fit">
                  Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div className="flex items-center space-x-2" variants={fadeIn}>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.2 }}
                    >
                      <Image src="/placeholder.svg?height=24&width=24" alt="Client" width={24} height={24} />
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-4">5000+ Happy Clients</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="relative order-1 lg:order-2 h-64 sm:h-80 lg:h-auto"
            style={{ y: heroImageY }}
            variants={slideFromRight}
          >
            <Image
              src="/images/h.jpg"
              alt="Beautiful woman with skincare"
              fill
              className="object-cover"
            />
            <motion.div
              className="absolute top-4 right-4 sm:top-8 sm:right-8 space-y-2 sm:space-y-4"
              animate={{
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-800 transform rotate-45"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-800 transform rotate-45"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scrolling Text */}
        <div className="bg-white py-3 sm:py-4 overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="text-base sm:text-lg text-gray-600 mx-4 sm:mx-8">
                Enhance Beauty • Elevate Confidence •
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div className="relative order-2 lg:order-1" variants={scaleIn}>
            <motion.div
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/a1.jpg"
                alt="Skincare treatment"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div className="space-y-6 sm:space-y-8 order-1 lg:order-2" variants={staggerContainer}>
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-gray-800"
              variants={fadeIn}
            >
              Our Journey at Poker Face Aesthetics
            </motion.h2>
            <motion.p className="text-gray-600 leading-relaxed" variants={fadeIn}>
              At Poker Face Aesthetics, we're dedicated to enhancing your natural beauty and boosting self-confidence.
              Founded by experienced professionals, our commitment to excellence has made us a trusted destination for
              skincare, makeup, and wellness.
            </motion.p>
            <motion.div className="space-y-4" variants={staggerContainer}>
              {[
                {
                  title: "Years of Experience:",
                  desc: "Benefit from our years of industry experience.",
                },
                {
                  title: "Commitment to Excellence:",
                  desc: "We provide top-quality services.",
                },
                {
                  title: "Personalized Beauty Experiences:",
                  desc: "Empowering beauty tailored just for you.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  variants={staggerItem}
                  whileHover={{ x: 5 }}
                >
                  <Check className="h-5 w-5 text-[#d4c4a8] mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">{item.title}</span>
                    <span className="text-gray-600 ml-2">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#d4c4a8] text-gray-800 hover:bg-[#c9b896] px-6 sm:px-8 py-3 rounded-none w-fit">
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white"
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16" variants={fadeIn}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-gray-800 mb-4">
              Our Special Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unlock exclusive beauty experiences with our limited-time promotions. Discover your path to radiant
              confidence. Explore now.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={{ y: -10 }}>
                <Card className="border-2 border-gray-800 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h3 className="text-base sm:text-lg font-light tracking-wide text-gray-800">{service.title}</h3>
                    <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Before/After Section with Carousel */}
      <motion.section
        ref={beforeAfterRef}
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
        initial="hidden"
        animate={beforeAfterInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Carousel */}
          <motion.div className="relative order-2 lg:order-1" variants={scaleIn}>
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                className="aspect-square rounded-3xl overflow-hidden border-4 border-gray-800 max-w-sm mx-auto lg:max-w-md"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-full h-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentBeforeAfter}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={beforeAfterImages[currentBeforeAfter].image || "/placeholder.svg"}
                        alt={beforeAfterImages[currentBeforeAfter].title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                  {/* Before/After Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="flex space-x-1">
                        <ArrowRight className="h-4 w-4 text-gray-800" />
                        <ArrowRight className="h-4 w-4 text-gray-800 -ml-2" />
                      </div>
                    </div>
                  </motion.div>
                  {/* Image Info Overlay */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="font-semibold text-sm">{beforeAfterImages[currentBeforeAfter].title}</h4>
                    <p className="text-xs opacity-90">{beforeAfterImages[currentBeforeAfter].description}</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <div className="relative w-full h-full">
                <motion.div 
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10"
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/90 shadow-lg rounded-full hover:bg-white"
                    onClick={prevBeforeAfter}
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </Button>
                </motion.div>
                <motion.div 
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/90 shadow-lg rounded-full hover:bg-white"
                    onClick={nextBeforeAfter}
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <motion.div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2" variants={staggerContainer}>
              {beforeAfterImages.map((image, index) => (
                <motion.button
                  key={image.id}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentBeforeAfter ? "border-gray-800 scale-110" : "border-gray-300 opacity-70"
                  }`}
                  onClick={() => goToBeforeAfter(index)}
                  variants={staggerItem}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src={image.image || "/placeholder.svg"}
                    alt={image.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </motion.div>

            {/* Dots Indicator */}
            <motion.div className="flex justify-center mt-4 space-x-2" variants={fadeIn}>
              {beforeAfterImages.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentBeforeAfter ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  onClick={() => goToBeforeAfter(index)}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div className="space-y-6 sm:space-y-8 order-1 lg:order-2" variants={staggerContainer}>
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-gray-800"
              variants={slideFromRight}
            >
              Before and After Transformations
            </motion.h2>
            <motion.p className="text-gray-600 leading-relaxed" variants={fadeIn}>
              At Poker Face Aesthetics, we believe in the power of transformation. Our commitment to enhancing natural
              beauty and confidence is exemplified through the remarkable before and after results achieved by our
              clients.
            </motion.p>
            <motion.p className="text-gray-600 leading-relaxed" variants={fadeIn}>
              Browse through our gallery of stunning transformations showcasing the expertise and dedication of our
              team. Each image tells a story of renewed confidence and radiant beauty.
            </motion.p>
            <motion.p className="text-gray-600 leading-relaxed" variants={fadeIn}>
              These transformations serve as a testament to our personalized approach and commitment to helping our
              clients achieve their beauty goals and unlock their true radiance.
            </motion.p>
            <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4" variants={staggerContainer}>
              {[
                { number: "10+", text: "Years Of Experience" },
                { number: "200+", text: "Expert Doctors" },
                { number: "5000+", text: "Happy Customers" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 border border-gray-300 rounded-lg"
                  variants={staggerItem}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <motion.div
                    className="text-xl sm:text-2xl font-bold text-gray-800"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {item.number}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-600">{item.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Treatment Pricing Section */}
      <motion.section
        ref={treatmentsRef}
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f5f2ed]"
        initial="hidden"
        animate={treatmentsInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16" variants={fadeIn}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-gray-800 mb-4">
              Treatment Menu & Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of aesthetic treatments designed to enhance your natural beauty and boost
              your confidence. All treatments are performed by certified professionals.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
          >
            {treatmentCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={staggerItem}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <Card className="bg-white rounded-3xl border-2 border-gray-300 overflow-hidden h-full">
                  <CardContent className="p-6 sm:p-8">
                    <motion.h3
                      className="text-xl sm:text-2xl font-light tracking-wide text-gray-800 mb-6 text-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {category.category}
                    </motion.h3>
                    <motion.div className="space-y-4" variants={staggerContainer}>
                      {category.treatments.map((treatment, treatmentIndex) => (
                        <motion.div
                          key={treatmentIndex}
                          className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                          variants={staggerItem}
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-gray-700 font-medium">{treatment.name}</span>
                          <span className="text-gray-800 font-semibold">{treatment.price}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div
                      className="mt-6 pt-4 border-t border-gray-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="w-full bg-[#d4c4a8] text-gray-800 hover:bg-[#c9b896] rounded-none">
                        Book Consultation
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-12" variants={fadeIn}>
            <p className="text-gray-600 mb-6">
              All prices include consultation. Package deals and payment plans available.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#d4c4a8] text-gray-800 hover:bg-[#c9b896] px-8 py-3 rounded-none">
                View Full Treatment Guide
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section with Slider */}
      <motion.section
        ref={testimonialsRef}
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0ebe5]"
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex items-center mb-12 sm:mb-16" variants={fadeIn}>
            <motion.div
              className="text-4xl sm:text-6xl text-gray-400 mr-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              "
            </motion.div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-gray-800">Testimonial</h2>
            <div className="flex-1 h-px bg-gray-400 ml-4 sm:ml-8"></div>
          </motion.div>

          {/* Desktop View - Show 3 cards */}
          <motion.div className="hidden lg:grid lg:grid-cols-3 gap-8" variants={staggerContainer}>
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <Card className="border-4 border-gray-800 rounded-3xl p-8 bg-white h-full">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm">{testimonial.text}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile/Tablet View - Slider */}
          <div className="lg:hidden">
            <motion.div className="relative" variants={fadeIn}>
              {/* Slider Container */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <Card className="border-4 border-gray-800 rounded-3xl p-6 bg-white mx-auto max-w-md">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed text-sm">{testimonial.text}</p>
                        <div className="border-t border-gray-200 pt-4">
                          <div className="font-semibold text-gray-800">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Navigation Arrows */}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full hover:bg-gray-50"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full hover:bg-gray-50"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Dots Indicator */}
            <motion.div className="flex justify-center mt-8 space-x-2" variants={fadeIn}>
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  onClick={() => goToTestimonial(index)}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white"
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16" variants={fadeIn}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-gray-800 mb-4">
              Questions? We Have Answers.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our FAQ section for quick answers to common inquiries about our services, appointments, and more.
              Your beauty journey begins here.
            </p>
          </motion.div>
          <motion.div className="space-y-4" variants={staggerContainer}>
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Collapsible open={openFaq === index} onOpenChange={() => setOpenFaq(openFaq === index ? null : index)}>
                  <CollapsibleTrigger className="w-full p-4 sm:p-6 border-2 border-gray-300 rounded-2xl flex items-center justify-between text-left hover:border-gray-400 transition-colors">
                    <span className="font-medium text-gray-800 text-sm sm:text-base pr-4">{item.question}</span>
                    <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      {openFaq === index ? (
                        <Minus className="h-5 w-5 text-gray-600 flex-shrink-0" />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-600 flex-shrink-0" />
                      )}
                    </motion.div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <motion.p
                      className="text-gray-600 leading-relaxed text-sm sm:text-base"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.answer}
                    </motion.p>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-[#f8f6f3] border-t border-gray-300 py-6 sm:py-8 px-4 sm:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="text-gray-600 text-sm text-center sm:text-left">
            © 2025 Poker Face Aesthetics. All rights reserved.
          </div>
          <motion.div
            className="flex items-center space-x-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: <Instagram className="h-5 w-5" />, delay: 0 },
              { icon: <Facebook className="h-5 w-5" />, delay: 0.1 },
              { icon: <Twitter className="h-5 w-5" />, delay: 0.2 },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800">
                  {item.icon}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}
