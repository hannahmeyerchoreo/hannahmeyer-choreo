import { Card, CardContent } from "lucide-react";
import { Button } from "lucide-react";
import { Mail, Phone } from "lucide-react";

export default function App() {
  return (
    <div className="p-6 space-y-16 bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 min-h-screen">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-purple-700 drop-shadow-md">Hannah Meyer</h1>
        <p className="text-2xl italic text-pink-600">Dancer & Choreographer</p>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Versatile and dedicated dancer with 18 years of training in contemporary, jazz, ballet,
          lyrical, tap, and hip hop. Known for a dynamic movement style blending power and fluidity
          with strong musicality and refined movement quality. Experienced choreographer, teacher,
          and performer in competitive and collegiate settings.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-semibold text-center text-purple-800 mb-6">Resume</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white shadow-lg border-l-4 border-pink-400 p-6 rounded-xl">
            <h3 className="font-bold text-pink-700 text-xl mb-2">Experience</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li><strong>Centre of Performing Arts, Graham, NC</strong> – Teacher & Choreographer (2024–Present)</li>
              <li><strong>Blank Canvas Dance Company, Chapel Hill, NC</strong> – Dancer & Choreographer (2022–2025)</li>
              <li><strong>Various Studios</strong> – Outside Choreographer</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg border-l-4 border-blue-400 p-6 rounded-xl">
            <h3 className="font-bold text-blue-700 text-xl mb-2">Training & Awards</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li><strong>UNC Chapel Hill</strong> – B.A. in Biology (2021–2025)</li>
              <li><strong>The Dance Shop, Archdale, NC</strong> – Competitive Dancer</li>
              <li>Star Talent Productions – Outstanding Choreography</li>
              <li>Encore DCS – Outstanding Choreography</li>
              <li>West Coast Dance Explosion – Elite Dancer</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-semibold text-center text-purple-800 mb-6">Choreography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-pink-200 to-purple-200 shadow-md p-6 rounded-xl">Choreography Piece 1</div>
          <div className="bg-gradient-to-r from-blue-200 to-purple-200 shadow-md p-6 rounded-xl">Choreography Piece 2</div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-semibold text-center text-purple-800 mb-6">Gallery</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-pink-200 aspect-square rounded-3xl shadow-inner"></div>
          <div className="bg-blue-200 aspect-square rounded-3xl shadow-inner"></div>
        </div>
      </section>
      <section className="text-center space-y-3">
        <h2 className="text-3xl font-semibold text-purple-800">Contact</h2>
        <p className="text-lg text-gray-700"><Mail className="inline mr-2 text-pink-600" /> hannahmeyer025@gmail.com</p>
        <p className="text-lg text-gray-700"><Phone className="inline mr-2 text-blue-600" /> (336) 847-1193</p>
        <Button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow-lg">
          Send a Message
        </Button>
      </section>
    </div>
  );
}