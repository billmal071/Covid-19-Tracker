import React, { useEffect } from 'react';
import Covid3 from "../img/covid-3.jpg"

const Home = () => {

  useEffect(()=> {
    document.getElementById('menu-content').classList.remove('flex');
    document.getElementById('menu-content').classList.add('hidden');
  }, [])

  return (
    <div className="py-6" id="bg-img" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${Covid3})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      height: '100%',
      width: '100%'
    }}>
      <main className="container mx-auto px-4 text-white">
        <div>
          <p className="text-lg py-2">
            COVID-19 is the disease caused by a new coronavirus called SARS-CoV-2. WHO first learned of this new virus
            on 31 December 2019, following a report of a cluster of cases of ‘viral pneumonia’ in Wuhan, People’s
            Republic of China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          <div className="card">
            <h3 className="text-xl font-bold mb-2">Symptoms</h3>
            <h4>The most common symptoms of COVID-19 are</h4>

            <ul className="list-disc px-4">
              <li>Fever</li>
              <li>Dry cough</li>
              <li>Fatigue</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-2">Other symptoms that are less common and may affect some patients
              include:</h3>

            <ul className="list-disc px-4">
              <li>Loss of taste or smell,</li>
              <li>Nasal congestion,</li>
              <li>Conjunctivitis (also known as red eyes)</li>
              <li>Sore throat,</li>
              <li>Headache,</li>
              <li>Muscle or joint pain,</li>
              <li>Different types of skin rash,</li>
              <li>Nausea or vomiting,</li>
              <li>Diarrhea,</li>
              <li>Chills or dizziness.</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-2">Symptoms of severe COVID‐19 disease include:</h3>
            <ul className="list-disc px-4">
              <li>Shortness of breath,</li>
              <li>Loss of appetite,</li>
              <li>Confusion,</li>
              <li>Persistent pain or pressure in the chest,</li>
              <li>High temperature (above 38 °C).</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-2">Other less common symptoms are:</h3>
            <ul className="list-disc px-4">
              <li>Irritability,</li>
              <li>Confusion,</li>
              <li>Reduced consciousness (sometimes associated with seizures),</li>
              <li>Anxiety,</li>
              <li>Depression,</li>
              <li>Sleep disorders,</li>
              <li>More severe and rare neurological complications such as strokes, brain inflammation, delirium and
                nerve
                damage.
              </li>
            </ul>
          </div>
        </div>
        <br/>
        <div className="my-3">
          <p>
            People of all ages who experience fever and/or cough associated with difficulty breathing or shortness of
            breath, chest pain or pressure, or loss of speech or movement should seek medical care immediately. If
            possible, call your health care provider, hotline or health facility first, so you can be directed to the
            right clinic.
          </p>
          <br/>
          <p>
            Among those who develop symptoms, most (about 80%) recover from the disease without needing hospital
            treatment. About 15% become seriously ill and require oxygen and 5% become critically ill and need intensive
            care.

            Complications leading to death may include respiratory failure, acute respiratory distress syndrome (ARDS),
            sepsis and septic shock, thromboembolism, and/or multiorgan failure, including injury of the heart, liver or
            kidneys.

            In rare situations, children can develop a severe inflammatory syndrome a few weeks after infection.
          </p>
          <br/>
          <p>
            People aged 60 years and over, and those with underlying medical problems like high blood pressure, heart
            and lung problems, diabetes, obesity or cancer, are at higher risk of developing serious illness.

            However, anyone can get sick with COVID-19 and become seriously ill or die at any age.
          </p>
          <br/>

          <div>
            <h3 className="text-2xl font-bold mb-2">Protection</h3>
            <p>
              Stay safe by taking some simple precautions, such as physical distancing, wearing a mask, especially when
              distancing cannot be maintained, keeping rooms well ventilated, avoiding crowds and close contact,
              regularly cleaning your hands, and coughing into a bent elbow or tissue. Check local advice where you live
              and work. Do it all!
            </p>
          </div>
          <br/>
          <div>
            <h3 className="text-2xl font-bold mb-2"> What test should I get to see if I have COVID-19?</h3>
            <p>In most situations, a molecular test is used to detect SARS-CoV-2 and confirm infection. Polymerase chain
              reaction (PCR) is the most commonly used molecular test. Samples are collected from the nose and/or throat
              with a swab. Molecular tests detect virus in the sample by amplifying viral genetic material to detectable
              levels. For this reason, a molecular test is used to confirm an active infection, usually within a few
              days of exposure and around the time that symptoms may begin.</p>
          </div>
          <br/>
          <div className="text-center">
            Source:
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19#:~:text=symptoms"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 underline text-blue-500 text-xl"
            >
              WHO
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;
