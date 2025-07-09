const jobs = [
  {
    title: "Marketing Intern",
    location: "US, NY, New York",
  },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  {
    title: "Bill Review Manager",
    location: "US, FL, Fort Worth",
  },
  {
    title: "Accounting Clerk",
    location: "US, MD,",
  },
  {
    title: "Head of Content (m/f)",
    location: "DE, BE, Berlin",
  },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  {
    title: "HP BSM SME",
    location: "US, FL, Pensacola",
  },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  {
    title: "Installers",
    location: "US, FL, Orlando",
  },
  {
    title: "Account Executive - Sydney",
    location: "AU, NSW, Sydney",
  },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  {
    title: "Hands-On QA Leader",
    location: "IL, Tel Aviv, Israel",
  },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  {
    title: "Visual Designer",
    location: "US, NY, New York",
  },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  {
    title: "Marketing Assistant",
    location: "US, TX, Austin",
  },
  {
    title: "Front End Developer",
    location: "NZ, N, Auckland",
  },
  {
    title: "Engagement Manager",
    location: "AE,",
  },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  {
    title: "Customer Service",
    location: "GB, LND, London",
  },
  {
    title: "H1B SPONSOR FOR L1/L2/OPT",
    location: "US, NY, New York",
  },
  {
    title: "Marketing Exec",
    location: "SG,",
  },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  {
    title: "Customer Service Associate",
    location: "CA, ON, Toronto",
  },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  {
    title: "Software Applications Specialist",
    location: "US, KS,",
  },
  {
    title: "Craftsman Associate",
    location: "US, WA, Everett",
  },
  {
    title: "Completion Engineer",
    location: "US, CA, San Ramon",
  },
  {
    title: "I Want To Work At Karmarama",
    location: "GB, LND,",
  },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

const result = document.getElementById("result");
const workPositionValue = document.getElementById("inputTitle");
const geoPositionValue = document.getElementById("inputLocation");
const submit = document.getElementById("submit");
const resultBox = document.getElementById("resultBox");
const resultTitleSpan = document.querySelector("#resultBox h2 span");
const resultCountSpan = document.querySelector("#resultBox p span");

function jobResearch(workPosition, geoPosition) {
  let searchResult = [];
  let searchCounter = 0;
  let jobResearchResult = {};

  // Itero l'array fornito "jobs" per verificare se al suo interno sono presenti i valori di "workPosition" e "geoPosition" che successivamente verranno recuperati dai valori di input
  for (let job of jobs) {
    if (
      job.title.toLowerCase().includes(workPosition) &&
      job.location.toLowerCase().includes(geoPosition)
    ) {
      searchResult.push({ title: job.title, location: job.location });
      searchCounter++;
    }
  }
  // Creo un oggetto con i valori ottenuti dal ciclo di iterazione
  jobResearchResult = {
    result: searchResult,
    count: searchCounter,
  };

  // Stampo in console i risultati della ricerca
  console.log(jobResearchResult);
  return jobResearchResult;
}

function createResultBox(searchResult, searchCounter, workPosition) {
  resultBox.classList.remove("hidden");

  // Inserisco il valore di input per la ricerca effettuata ed il numero di match riscontrati come risultato di ricerca visualizzato dall'utente
  resultTitleSpan.innerText = workPosition;
  resultCountSpan.innerText = searchCounter;

  // Ripulisco il contenuto di una eventuale ricerca precedente
  result.innerHTML = "";

  for (let i = 0; i < searchResult.result.length; i++) {
    // Creo un titolo per ciascun elemento trovato indicante la posizione lavorativa
    const titleResult = document.createElement("h2");
    titleResult.innerText = searchResult.result[i].title;

    // Creo un sottotitolo per ciascun elemento trovato indicante la locazione
    const locationResult = document.createElement("p");
    locationResult.innerText = searchResult.result[i].location;
    locationResult.classList.add("resultList");

    // Inserisco tutti gli elementi precedentemente trovati all'interno del div predisposto in HTML
    result.append(titleResult, locationResult);
  }
}

submit.addEventListener("click", function () {
  // Al click su "Cerca" assegno i value dei due input di ricerca ai parametri passati alla funzione
  let workPosition = workPositionValue.value.toLowerCase().trim();
  let geoPosition = geoPositionValue.value.toLowerCase().trim();
  // Mostro un alert se non sono stati inseriti valori per la ricerca
  if (!workPosition && !geoPosition) {
    alert("Inserisci almeno un criterio di ricerca");
    return;
  }
  // Al click richiamo la funzione di ricerca
  let searchResult = jobResearch(workPosition, geoPosition);
  let searchCounter = searchResult.count;
  // Al click richiamo la funzione di creazione del box con i risultati ottenuti
  createResultBox(searchResult, searchCounter, workPosition);
});
