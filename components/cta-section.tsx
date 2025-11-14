import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CtaSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Let's save the future together.
        </h2>
        <p className="text-xl sm:text-2xl text-teal-600 font-semibold mb-8">
          LEND A HELPING HAND
        </p>
        <p className="text-gray-700 text-lg mb-10 leading-relaxed">
          Help us in this race to save the future by sharing your ideas, expertise, or resources.
        </p>
        <Link href="/fuel-our-mission">
          <Button
            size="lg"
            className="bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
          >
            Fuel Our Mission
          </Button>
        </Link>
      </div>
    </section>
  )
}
