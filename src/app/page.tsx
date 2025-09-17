export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-[#ff8a00] to-[#ff4d00]">
      {/* TICKET */}
      <section className="relative w-[980px] max-w-[94vw] rounded-[22px] shadow-2xl overflow-hidden bg-white">
        <div className="relative">
          {/* GRID: [QR 300px] [Contenido] [Banda 84px] */}
          <div className="grid grid-cols-[300px_1fr_84px]">
            {/* === IZQUIERDA: QR centrado y grande === */}
            <div className="p-8 flex items-center justify-center">
              <div className="relative w-56 h-56 bg-white rounded-xl shadow-[0_10px_24px_-8px_rgba(0,0,0,.25)] flex items-center justify-center">
                {/* Marco navy grueso */}
                <div className="absolute inset-0 flex items-center justify-center border-[14px] border-[#0f1b3a] rounded-md bg-white">
                  <img
                    src="https://tse2.mm.bing.net/th/id/OIP.k5ATDSoWhncJZqtTPEt9xQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="QR"
                    className="w-[85%] h-[85%] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* === CENTRO === */}
            <div className="px-10 py-8">
              {/* Cabeceras y códigos */}
              <div className="grid grid-cols-2">
                <div>
                  <p className="text-[12px] uppercase tracking-wide text-slate-600 leading-4">
                    Mumbai,<br />India
                  </p>
                  <p className="mt-2 text-[72px] leading-none font-extrabold text-[#152143]">
                    BOM
                  </p>
                  <p className="mt-2 text-[12px] text-slate-500">
                    Wed, July 27<sup>th</sup>
                  </p>
                  <p className="text-[12px] text-slate-500">1:00 AM</p>
                </div>

                <div className="text-right">
                  <p className="text-[12px] uppercase tracking-wide text-slate-600 leading-4">
                    Amsterdam,<br />Netherlands
                  </p>
                  <p className="mt-2 text-[72px] leading-none font-extrabold text-[#152143]">
                    AMS
                  </p>
                  <p className="mt-2 text-[12px] text-slate-500">
                    Thu, July 27<sup>th</sup>
                  </p>
                  <p className="text-[12px] text-slate-500">8:30 AM</p>
                </div>
              </div>

              {/* Línea punteada centrada */}
              <div className="mt-6 flex items-center justify-center">
                <div className="h-px border-t border-dashed border-slate-300 w-28 sm:w-36 md:w-44 lg:w-52" />
                <svg
                  viewBox="0 0 24 24"
                  className="mx-2 w-5 h-5 text-[#152143]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2 12l8.5 1.5L20 20l1-1-6.5-9L22 5l-1-1-9.5 9.5L10 4H8l1.5 8.5L2 12z" />
                </svg>
                <div className="h-px border-t border-dashed border-slate-300 w-28 sm:w-36 md:w-44 lg:w-52" />
              </div>

              {/* Footer */}
              <div className="mt-8 grid grid-cols-5 gap-6 text-[13px]">
                <div>
                  <p className="text-slate-500">Passenger</p>
                  <p className="font-semibold text-[#152143]">Nikita Sharma</p>
                </div>
                <div>
                  <p className="text-slate-500">Seat</p>
                  <p className="font-semibold">4A</p>
                </div>
                <div>
                  <p className="text-slate-500">Terminal</p>
                  <p className="font-semibold">D</p>
                </div>
                <div>
                  <p className="text-slate-500">Gate</p>
                  <p className="font-semibold">32</p>
                </div>
                <div>
                  <p className="text-slate-500">Boarding</p>
                  <p className="font-semibold">12:40 PM</p>
                </div>
              </div>
            </div>

            {/* === DERECHA: Banda azul === */}
            <aside className="bg-[#152143] text-white flex flex-col items-center justify-between py-6 px-3">
              <div className="-rotate-90 tracking-wider text-[12px] font-medium opacity-90">
                Boarding Pass
              </div>
              <div className="-rotate-90 flex items-center gap-2">
                <span className="text-[12px] opacity-90">JET AIRWAYS</span>
                <span className="inline-block w-2 h-2 rounded-full bg-yellow-400" />
              </div>
            </aside>
          </div>

          {/* === Perforaciones === */}
          <div className="pointer-events-none absolute left-[300px] top-6 bottom-6 border-r border-dashed border-slate-300/80" />
          <div className="pointer-events-none absolute left-[300px] -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-gradient-to-br from-[#ff8a00] to-[#ff4d00]" />
          <div className="pointer-events-none absolute left-[300px] -translate-x-1/2 -bottom-3 w-6 h-6 rounded-full bg-gradient-to-br from-[#ff8a00] to-[#ff4d00]" />
        </div>
      </section>
    </main>
  );
}
