import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import { Button } from "@/components/ui/button";

export default function HeroHome() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-16 md:py-24 lg:py-32">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16 lg:pb-20">
            {/* Badge */}
            <div className="mb-6" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
                </span>
                Now with AI-powered automation
              </div>
            </div>

            <h1
              className="mb-6 font-nacelle text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Build AI workflows
              <br />
              <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-indigo-400),var(--color-purple-400),var(--color-pink-400),var(--color-indigo-400))] bg-[length:200%_auto] bg-clip-text text-transparent">
                without writing code
              </span>
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-10 text-lg text-gray-300 md:text-xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Transform your business with powerful AI automation. Connect your favorite tools,
                build sophisticated workflows, and automate repetitive tasks in minutes—no coding required.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row" data-aos="fade-up" data-aos-delay={300}>
                <Button
                  size="lg"
                  className="group w-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 text-base font-semibold hover:from-indigo-500 hover:to-purple-500 sm:w-auto"
                >
                  Start Building Free
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-gray-700 bg-gray-900/50 text-base font-semibold text-gray-100 hover:border-gray-600 hover:bg-gray-800/50 sm:w-auto"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Social proof */}
              <div className="mt-8 text-sm text-gray-400" data-aos="fade-up" data-aos-delay={400}>
                <p>Trusted by 10,000+ teams worldwide</p>
              </div>
            </div>
          </div>

          {/* Product demo/screenshot */}
          <div data-aos="fade-up" data-aos-delay={500}>
            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={1104}
              thumbHeight={576}
              thumbAlt="AI Automation Platform Demo"
              video="videos//video.mp4"
              videoWidth={1920}
              videoHeight={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
