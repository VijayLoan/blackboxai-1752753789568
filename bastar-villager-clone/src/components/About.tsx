export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 font-poppins">
            छत्तीसगढ़- बस्तर का वह रूप जिससे दुनिया है अनजान
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-6 font-poppins">
              Bastar - The Cultural Capital
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              बस्तर अपनी ख़ूबसूरत जंगलों और आदिवासी संस्कृति में रंगा प्रदेश की सांस्कृतिक राजधानी के तौर पर जाना जाता है। बस्तर छत्तीसगढ़ प्रदेश के कोंडागांव, दन्तेवाड़ा, सुकमा, बीजापुर जिलों से घिरा हुआ है।
            </p>
            <p className="text-gray-700 leading-relaxed">
              पर्यटन के लिहाज से यह एक खास स्थल है। यहां हर साल हजारों की संख्या में पर्यटक घूमने के लिए आते हैं।
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-black mb-6 font-poppins">
              A Hidden Gem of Chhattisgarh
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bastar is known as the cultural capital of Chhattisgarh, wrapped in beautiful forests and tribal culture. It is surrounded by the districts of Kondagaon, Dantewada, Sukma, and Bijapur in Chhattisgarh state.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From a tourism perspective, this is a special destination. Thousands of tourists come here every year to explore its rich heritage and natural beauty.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
