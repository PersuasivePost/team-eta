import { Button } from '@/components/ui/button'

export default function CtaSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Let's save the future together.
        </h2>
        <p className="text-xl sm:text-2xl text-cyan-400 font-semibold mb-8">
          LEND A HELPING HAND
        </p>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          Help us in this race to save the future by sharing your ideas, expertise, or resources.
        </p>
        <Button
          size="lg"
          className="bg-cyan-400 text-gray-950 font-semibold hover:bg-cyan-300 transition-colors"
        >
          Join Our Mission
        </Button>
      </div>
    </section>
  )
}
