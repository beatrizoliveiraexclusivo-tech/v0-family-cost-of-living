"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [slideDirection, setSlideDirection] = useState<"forward" | "backward">("forward")
  const totalSlides = 3

  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    setHasLoaded(true)
  }, [])

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1 && !isTransitioning) {
      setIsTransitioning(true)
      setSlideDirection("forward")
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1)
        setTimeout(() => setIsTransitioning(false), 100)
      }, 300)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true)
      setSlideDirection("backward")
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1)
        setTimeout(() => setIsTransitioning(false), 100)
      }, 300)
    }
  }

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true)
      setSlideDirection(index > currentSlide ? "forward" : "backward")
      setTimeout(() => {
        setCurrentSlide(index)
        setTimeout(() => setIsTransitioning(false), 100)
      }, 300)
    }
  }

  return (
    <div
      className={`min-h-screen bg-slate-900 flex flex-col transition-opacity duration-1000 ${hasLoaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* Slide Container */}
      <div className="flex-1 flex items-center justify-center p-2 sm:p-4 md:p-8">
        <div
          className={`w-full max-w-6xl aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-2xl overflow-hidden relative transition-all duration-500 ${
            hasLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"
          } ${isTransitioning ? (slideDirection === "forward" ? "translate-x-[-20px] opacity-90" : "translate-x-[20px] opacity-90") : "translate-x-0 opacity-100"}`}
        >
          {/* Slide 1 - Title */}
          {currentSlide === 0 && (
            <div
              className={`h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-16 text-center relative transition-all duration-700 ${
                isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern-subtle-dark.jpg')] opacity-5"></div>
              <div className="relative z-10 space-y-4 sm:space-y-6 md:space-y-8">
                <div className="space-y-2 animate-in slide-in-from-bottom-4 duration-700 delay-150">
                  <div className="text-amber-500 text-xs sm:text-sm md:text-base font-medium tracking-wider uppercase">
                    Geografia
                  </div>
                  <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance px-2">
                    Aumento do Custo de Vida Familiar
                  </h1>
                </div>
                <div className="h-1 w-16 sm:w-24 bg-amber-500 mx-auto animate-in zoom-in duration-500 delay-300"></div>
                <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-700 delay-500 px-2">
                  Trabalho sobre Custo de Vida
                </p>
              </div>
            </div>
          )}

          {/* Slide 2 - Introduction */}
          {currentSlide === 1 && (
            <div
              className={`h-full flex flex-col md:flex-row animate-in fade-in duration-700 ${
                isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              {/* Left side - Content */}
              <div className="flex-1 p-4 sm:p-6 md:p-12 flex flex-col justify-center space-y-4 sm:space-y-6 animate-in slide-in-from-left duration-700 overflow-y-auto">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-6 sm:h-8 w-1 bg-amber-500"></div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Introdução</h2>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed text-pretty">
                    O aumento do custo de vida familiar é caracterizado pela{" "}
                    <strong className="text-amber-400">elevação generalizada e persistente</strong> dos preços de bens e
                    serviços essenciais, resultando na{" "}
                    <strong className="text-amber-400">redução do poder de compra</strong> e afetando
                    desproporcionalmente as famílias de menor renda.
                  </p>
                  <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 border-l-4 border-amber-500 mt-3 sm:mt-4">
                    <p className="text-xs sm:text-sm text-slate-300">
                      <strong className="text-white">Impacto Global:</strong> Segundo dados do Banco Mundial, mais de
                      70% das famílias em países em desenvolvimento enfrentam dificuldades crescentes para manter seu
                      padrão de vida básico.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Visual with mountain/area chart */}
              <div className="flex-1 bg-slate-800/50 p-4 sm:p-6 md:p-12 flex items-center justify-center animate-in slide-in-from-right duration-700 delay-200">
                <div className="w-full max-w-md space-y-3 sm:space-y-4">
                  <div className="text-center">
                    <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      Evolução do Custo de Vida
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">Índice Base 100 (2020-2023)</p>
                  </div>

                  {/* Mountain Chart Container with proper structure */}
                  <div className="bg-slate-700/50 rounded-lg p-3 sm:p-6">
                    <div className="relative w-full h-48 sm:h-64">
                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 bottom-8 sm:bottom-12 w-6 sm:w-8 flex flex-col justify-between text-[10px] sm:text-xs text-slate-400">
                        <span>140</span>
                        <span>120</span>
                        <span>100</span>
                        <span>80</span>
                      </div>

                      {/* Chart area */}
                      <div className="absolute left-7 sm:left-10 right-0 top-0 bottom-8 sm:bottom-12">
                        {/* Grid lines */}
                        <div className="absolute inset-0 flex flex-col justify-between">
                          <div className="border-t border-slate-600/30"></div>
                          <div className="border-t border-slate-600/30"></div>
                          <div className="border-t border-slate-600/50"></div>
                          <div className="border-t border-slate-600/30"></div>
                        </div>

                        {/* Mountain/Area Chart using SVG */}
                        <svg
                          className="absolute inset-0 w-full h-full"
                          viewBox="0 0 400 240"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="rgb(251, 191, 36)" stopOpacity="0.6" />
                              <stop offset="100%" stopColor="rgb(251, 191, 36)" stopOpacity="0.05" />
                            </linearGradient>
                          </defs>

                          <path
                            d="M 0 144 L 133 108 L 266 90 L 400 48 L 400 240 L 0 240 Z"
                            fill="url(#areaGradient)"
                            className="animate-in fade-in duration-1000 delay-300"
                          />

                          <path
                            d="M 0 144 L 133 108 L 266 90 L 400 48"
                            fill="none"
                            stroke="rgb(251, 191, 36)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="animate-in fade-in duration-1000 delay-500"
                            style={{
                              strokeDasharray: "1000",
                              strokeDashoffset: "1000",
                              animation: "drawLine 1.5s ease-out 0.5s forwards",
                            }}
                          />

                          <circle
                            cx="0"
                            cy="144"
                            r="5"
                            fill="rgb(251, 191, 36)"
                            className="animate-in zoom-in duration-300 delay-700"
                          />
                          <circle
                            cx="133"
                            cy="108"
                            r="5"
                            fill="rgb(251, 191, 36)"
                            className="animate-in zoom-in duration-300 delay-900"
                          />
                          <circle
                            cx="266"
                            cy="90"
                            r="5"
                            fill="rgb(251, 191, 36)"
                            className="animate-in zoom-in duration-300 delay-1000"
                          />
                          <circle
                            cx="400"
                            cy="48"
                            r="6"
                            fill="rgb(251, 191, 36)"
                            className="animate-in zoom-in duration-300 delay-1100"
                          >
                            <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
                          </circle>

                          <text
                            x="0"
                            y="130"
                            fill="white"
                            fontSize="12"
                            fontWeight="bold"
                            textAnchor="middle"
                            className="animate-in fade-in duration-300 delay-700"
                          >
                            100
                          </text>
                          <text
                            x="133"
                            y="94"
                            fill="white"
                            fontSize="12"
                            fontWeight="bold"
                            textAnchor="middle"
                            className="animate-in fade-in duration-300 delay-900"
                          >
                            112
                          </text>
                          <text
                            x="266"
                            y="76"
                            fill="white"
                            fontSize="12"
                            fontWeight="bold"
                            textAnchor="middle"
                            className="animate-in fade-in duration-300 delay-1000"
                          >
                            125
                          </text>
                          <text
                            x="400"
                            y="34"
                            fill="white"
                            fontSize="12"
                            fontWeight="bold"
                            textAnchor="end"
                            className="animate-in fade-in duration-300 delay-1100"
                          >
                            138
                          </text>
                        </svg>
                      </div>

                      {/* X-axis labels */}
                      <div className="absolute left-7 sm:left-10 right-0 bottom-0 flex justify-between text-xs sm:text-sm font-bold text-white">
                        <span className="animate-in fade-in duration-300 delay-700">2020</span>
                        <span className="animate-in fade-in duration-300 delay-900">2021</span>
                        <span className="animate-in fade-in duration-300 delay-1000">2022</span>
                        <span className="animate-in fade-in duration-300 delay-1100">2023</span>
                      </div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-center gap-2 pt-2 border-t border-slate-600/30">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded bg-gradient-to-t from-amber-600 to-amber-400"></div>
                    <span className="text-[10px] sm:text-xs text-slate-400">Aumento acumulado: +38% no período</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slide 3 - Main Causes */}
          {currentSlide === 2 && (
            <div
              className={`h-full flex flex-col md:flex-row transition-all duration-700 overflow-y-auto ${
                isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <div className="flex-1 p-4 sm:p-6 md:p-12 flex flex-col justify-center space-y-4 sm:space-y-6">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-2 sm:gap-3 animate-in slide-in-from-left duration-700">
                    <div className="h-6 sm:h-8 w-1 bg-amber-500"></div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Causas Principais</h2>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex gap-3 sm:gap-4 animate-in slide-in-from-left duration-700 delay-150">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-500"></div>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1">Inflação</h3>
                        <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                          Aumento da demanda que não é acompanhada pela oferta, gerando pressão sobre os preços. A
                          inflação acumulada em muitos países ultrapassou 20% nos últimos 3 anos.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 sm:gap-4 animate-in slide-in-from-left duration-700 delay-300">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-500"></div>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1">
                          Preços de Itens Essenciais
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                          Aumento significativo dos preços de alimentos (até 30%), moradia (aluguel +25%) e transporte
                          (combustível +40%), comprometendo o orçamento familiar.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 sm:gap-4 animate-in slide-in-from-left duration-700 delay-450">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-500"></div>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1">
                          Variações Regionais
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                          Diferenças significativas de custo dependendo da localização geográfica. Grandes centros
                          urbanos apresentam custos até 60% maiores que áreas rurais.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Visual Icons */}
              <div className="flex-1 bg-slate-800/50 p-4 sm:p-6 md:p-12 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full max-w-md">
                  <div className="bg-slate-700/50 rounded-lg p-3 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 aspect-square animate-in zoom-in duration-500 delay-200 hover:bg-slate-700 transition-all hover:scale-105">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-xs text-slate-400 text-center font-medium">Alimentos</span>
                  </div>

                  <div className="bg-slate-700/50 rounded-lg p-3 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 aspect-square animate-in zoom-in duration-500 delay-300 hover:bg-slate-700 transition-all hover:scale-105">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-xs text-slate-400 text-center font-medium">Moradia</span>
                  </div>

                  <div className="bg-slate-700/50 rounded-lg p-3 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 aspect-square animate-in zoom-in duration-500 delay-400 hover:bg-slate-700 transition-all hover:scale-105">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-xs text-slate-400 text-center font-medium">Transporte</span>
                  </div>

                  <div className="bg-slate-700/50 rounded-lg p-3 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 aspect-square animate-in zoom-in duration-500 delay-500 hover:bg-slate-700 transition-all hover:scale-105">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-xs text-slate-400 text-center font-medium">Inflação</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slide Number Indicator */}
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-slate-400 text-xs sm:text-sm font-medium">
            {currentSlide + 1} / {totalSlides}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 p-3 sm:p-6">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0 || isTransitioning}
          variant="outline"
          size="default"
          className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:border-amber-500 disabled:opacity-50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/20 text-xs sm:text-sm px-3 sm:px-4 h-9 sm:h-10"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
          <span className="hidden sm:inline">Anterior</span>
        </Button>

        <div className="flex gap-1.5 sm:gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-amber-500 w-6 sm:w-8 shadow-lg shadow-amber-500/50"
                  : "bg-slate-600 hover:bg-amber-400 w-1.5 sm:w-2 hover:w-3 sm:hover:w-4"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1 || isTransitioning}
          variant="outline"
          size="default"
          className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:border-amber-500 disabled:opacity-50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/20 text-xs sm:text-sm px-3 sm:px-4 h-9 sm:h-10"
        >
          <span className="hidden sm:inline">Próximo</span>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 sm:ml-2" />
        </Button>
      </div>
    </div>
  )
}
