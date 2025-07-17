import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Statistics from '@/components/Statistics'
import BlogGrid from '@/components/BlogGrid'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <Hero />
        <About />
        <Statistics />
        <BlogGrid />
        <Footer />
      </div>
    </main>
  )
}
