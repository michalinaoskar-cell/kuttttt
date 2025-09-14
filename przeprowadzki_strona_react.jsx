import React, { useState } from "react";

// Single-file React component for a moving company landing page.
// Tailwind CSS classes assumed available in project.
// Usage: place this component in your app and render <MovingLanding/>.

export default function MovingLanding() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    from: "",
    to: "",
    size: "small",
    notes: "",
  });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    {
      title: "Przeprowadzki lokalne",
      desc: "Szybkie i bezstresowe przeprowadzki w obrębie miasta — od pojedynczych mieszkań po całe domy.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7h13v10H3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 12v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 17a1 1 0 100-2 1 1 0 000 2zM16 17a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: "Przeprowadzki międzymiastowe",
      desc: "Bezpieczny transport na dłuższe dystanse, ubezpieczenie ładunku i terminowość.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 6l5-3 5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 18l5 3 5-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Pakowanie & materiały",
      desc: "Profesjonalne pakowanie delikatnych przedmiotów oraz dostawa skrzyń i folii stretch.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="7" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M3 7l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Imię i nazwisko są wymagane";
    if (!form.phone.trim()) e.phone = "Telefon jest wymagany";
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) e.email = "Podaj poprawny e-mail";
    if (!form.from.trim() || !form.to.trim()) e.address = "Podaj miejsce odbioru i dostawy";
    if (!form.date) e.date = "Wybierz datę";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    // Simulate submission (replace with real API call)
    setTimeout(() => setSent(true), 600);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-xl font-bold">PZ</div>
          <div>
            <h1 className="text-xl font-semibold">Przeprowadzki Zabiegane</h1>
            <p className="text-sm text-gray-500">Sprawnie — bezpiecznie — na czas</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#services" className="hover:text-blue-600">Usługi</a>
          <a href="#pricing" className="hover:text-blue-600">Cennik</a>
          <a href="#booking" className="hover:text-blue-600">Rezerwacja</a>
          <a href="#contact" className="hover:text-blue-600">Kontakt</a>
        </nav>
        <a href="#booking" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Zamów wycenę</a>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">Twoja przeprowadzka bez stresu</h2>
            <p className="mt-4 text-gray-600">Kompleksowa obsługa: pakowanie, transport, montaż mebli i ubezpieczenie — wszystko w jednej usłudze.</p>
            <ul className="mt-6 grid gap-3">
              <li className="flex items-start gap-3"><span className="text-blue-600 font-semibold">✓</span> Ekipa z doświadczeniem</li>
              <li className="flex items-start gap-3"><span className="text-blue-600 font-semibold">✓</span> Ubezpieczenie ładunku</li>
              <li className="flex items-start gap-3"><span className="text-blue-600 font-semibold">✓</span> Atrakcyjne ceny i szybka wycena</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#booking" className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium">Zamów wycenę</a>
              <a href="#contact" className="px-5 py-3 rounded-lg border border-gray-200">Zadzwoń: 600 000 000</a>
            </div>
            <div className="mt-6 text-sm text-gray-500">Dostępność: pon-pt 8:00–20:00, sob 9:00–14:00</div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <img src="https://images.unsplash.com/photo-1600267164212-6c2f9b2f4d9b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="Przeprowadzka" className="w-full rounded-lg object-cover h-64" />
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-8">
          <h3 className="text-2xl font-bold">Nasze usługi</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600">{s.icon}</div>
                  <div>
                    <h4 className="font-semibold">{s.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-8">
          <h3 className="text-2xl font-bold">Proste ceny — przejrzyste warunki</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-sm font-medium text-gray-500">Mikro</div>
              <div className="mt-4 text-3xl font-extrabold">199 zł</div>
              <div className="mt-2 text-sm text-gray-500">Małe przesunięcia, dostawa mebla, 1 osoba bez auta</div>
              <ul className="mt-4 text-sm space-y-2 text-gray-600">
                <li>do 1h pracy</li>
                <li>brak kosztów dojazdu w obrębie miasta</li>
              </ul>
              <a href="#booking" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg">Wybierz</a>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-xl border-2 border-blue-50">
              <div className="text-sm font-medium text-gray-500">Standard</div>
              <div className="mt-4 text-3xl font-extrabold">499 zł</div>
              <div className="mt-2 text-sm text-gray-500">Typowe przeprowadzki mieszkań 1-2 pokojowych</div>
              <ul className="mt-4 text-sm space-y-2 text-gray-600">
                <li>2-3 osoby + samochód dostawczy</li>
                <li>pakowanie podstawowe</li>
              </ul>
              <a href="#booking" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg">Wybierz</a>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-sm font-medium text-gray-500">Premium</div>
              <div className="mt-4 text-3xl font-extrabold">od 999 zł</div>
              <div className="mt-2 text-sm text-gray-500">Pełne pakowanie, demontaż/montaż mebli, transport daleki</div>
              <ul className="mt-4 text-sm space-y-2 text-gray-600">
                <li>ubezpieczenie ładunku</li>
                <li>koordynowany plan przeprowadzki</li>
              </ul>
              <a href="#booking" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg">Wybierz</a>
            </div>
          </div>
        </section>

        {/* BOOKING FORM */}
        <section id="booking" className="py-10">
          <h3 className="text-2xl font-bold">Bezpłatna wycena — zarezerwuj termin</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium">Imię i nazwisko</span>
                  <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="mt-2 p-3 rounded-lg border" placeholder="Jan Kowalski" />
                  {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium">Telefon</span>
                  <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="mt-2 p-3 rounded-lg border" placeholder="600000000" />
                  {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium">E-mail</span>
                  <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="mt-2 p-3 rounded-lg border" placeholder="kontakt@firma.pl" />
                  {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium">Data przeprowadzki</span>
                  <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="mt-2 p-3 rounded-lg border" />
                  {errors.date && <span className="text-red-500 text-sm mt-1">{errors.date}</span>}
                </label>

                <label className="flex flex-col sm:col-span-2">
                  <span className="text-sm font-medium">Adres - skąd</span>
                  <input value={form.from} onChange={e => setForm({...form, from: e.target.value})} className="mt-2 p-3 rounded-lg border" placeholder="ul. Przykładowa 1, Warszawa" />
                </label>

                <label className="flex flex-col sm:col-span-2">
                  <span className="text-sm font-medium">Adres - dokąd</span>
                  <input value={form.to} onChange={e => setForm({...form, to: e.target.value})} className="mt-2 p-3 rounded-lg border" placeholder="ul. Docelowa 2, Gdańsk" />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium">Wielkość przeprowadzki</span>
                  <select value={form.size} onChange={e => setForm({...form, size: e.target.value})} className="mt-2 p-3 rounded-lg border">
                    <option value="small">Mała (1 pokój)</option>
                    <option value="medium">Średnia (2-3 pokoje)</option>
                    <option value="large">Duża (dom/4+ pokoi)</option>
                  </select>
                </label>

                <label className="flex flex-col sm:col-span-2">
                  <span className="text-sm font-medium">Dodatkowe uwagi</span>
                  <textarea value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} className="mt-2 p-3 rounded-lg border" rows={4} placeholder="np. dużo szkła, schody, windy niedostępne..."></textarea>
                </label>
              </div>

              {errors.address && <div className="text-red-500 text-sm mt-3">{errors.address}</div>}

              <div className="mt-4 flex items-center gap-3">
                <button type="submit" className="bg-blue-600 text-white px-5 py-3 rounded-lg">Wyślij zapytanie</button>
                <span className="text-sm text-gray-500">Odpowiedź w ciągu 2 godzin roboczych</span>
              </div>

              {sent && <div className="mt-4 text-green-600 font-medium">Dziękujemy — Twoje zapytanie zostało wysłane. Skontaktujemy się wkrótce.</div>}
            </form>

            <aside className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold">Dlaczego my?</h4>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li>Doświadczone ekipy i profesjonalny sprzęt</li>
                <li>Ubezpieczenie wszystkich przesyłek</li>
                <li>Transparentne warunki i brak ukrytych opłat</li>
              </ul>

              <div className="mt-6">
                <h5 className="text-sm font-medium">Szybka wycena online</h5>
                <p className="text-sm text-gray-500 mt-2">Podaj podstawowe dane powyżej — przygotujemy ofertę dopasowaną do Twoich potrzeb.</p>
              </div>

              <div className="mt-6">
                <h5 className="text-sm font-medium">Opinie klientów</h5>
                <blockquote className="mt-3 text-sm text-gray-700 italic">„Ekipa szybka i uważna — wszystko w terminie. Polecam!” — Anna K.</blockquote>
              </div>
            </aside>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-8">
          <h3 className="text-2xl font-bold">FAQ — najczęściej zadawane pytania</h3>
          <div className="mt-6 space-y-3">
            <details className="bg-white p-4 rounded-lg shadow-sm">
              <summary className="font-medium">Czy oferujecie ubezpieczenie przeprowadzki?</summary>
              <p className="mt-2 text-sm text-gray-600">Tak — wszystkie nasze usługi obejmują podstawowe ubezpieczenie, a na życzenie organizujemy rozszerzoną polisę.</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-sm">
              <summary className="font-medium">Jak przygotować rzeczy do transportu?</summary>
              <p className="mt-2 text-sm text-gray-600">Zalecamy spakowanie drobnych przedmiotów w pudła, oznaczenie ich i zostawienie rzeczy wartościowych do osobnej opieki.</p>
            </details>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-8">
          <h3 className="text-2xl font-bold">Kontakt</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold">Dane firmy</h4>
              <p className="mt-2 text-sm text-gray-600">Przeprowadzki Zabiegane Sp. z o.o.</p>
              <p className="text-sm text-gray-600">ul. Przykładowa 12, 00-001 Warszawa</p>
              <p className="text-sm text-gray-600 mt-2">Telefon: 600 000 000</p>
              <p className="text-sm text-gray-600">E-mail: kontakt@przeprowadzki.pl</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold">Godziny pracy</h4>
              <p className="text-sm text-gray-600 mt-2">Pon–Pt: 08:00–20:00</p>
              <p className="text-sm text-gray-600">Sob: 09:00–14:00</p>

              <div className="mt-4">
                <h5 className="font-medium">Szybki chat</h5>
                <p className="text-sm text-gray-600 mt-2">Kliknij ikonę czatu (użyj integracji typu LiveChat/WhatsApp) aby porozmawiać z konsultantem.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t bg-white border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Przeprowadzki Zabiegane — Wszelkie prawa zastrzeżone</div>
          <div className="text-sm text-gray-500">Polityka prywatności · Regulamin</div>
        </div>
      </footer>
    </div>
  );
}

/*
NOTES & NEXT STEPS (wbudowane wskazówki):
- Zamień placeholderowy obrazek na własne fotografie lub Unsplash / Cloudinary.
- Podłącz endpoint API do handleSubmit (fetch/axios) aby zapisywać zapytania w CRM.
- Dodaj Google Maps / OpenStreetMap dla precyzyjnej lokalizacji.
- Zaimplementuj płatności lub formularz zamówienia z kalkulatorem w zależności od rozmiaru zlecenia.
- SEO: umieść meta tagi w <head> strony, dodaj schema.org LocalBusiness.
- Accessibility: upewnij się, że kontrasty kolorów i aria-* są dopracowane przy integracji.
*/
