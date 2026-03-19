const doctors = [
  {
    id: "dr-satish-mundada",
    name: "Dr. Satish Lalchand Mundada",
    speciality: "Paediatrician & Neonatologist",
    registration: "MMC 89900",
    qualifications: "MBBS, DCH",
    experience:
      "Over 22 years of experience in treating paediatric and neonatal patients, with a strong focus on ethical, evidence-based care.",
    interests: [
      "Care of New born",
      "Child nutrition and Preventive Health",
      "Adolescent Mental Health"
    ],
    image: "/assets/doctors/dr-satish-mundada.png",
  },

  {
    id: "dr-sachin-dhule",
    name: "Dr. Sachin Subhash Dhule",
    speciality: "Paediatrician (Allergy & Asthma Specialist)",
    registration: "MMC 2014-08-3476",
    qualifications:
      "MD (Paediatrics), DNB (Paediatrics), FIAP (Neonatology), DPAA",
    experience:
      "Founder and specialist in managing paediatric allergy and asthma patients.",
    interests: [
      "Paediatric allergy management",
      "Childhood asthma care",
      "Long-term respiratory health in children",
    ],
    image: "/assets/doctors/dr-sachin-dhule.png",
  },

  {
    id: "dr-suyog-nagre",
    name: "Dr. Suyog Nagre",
    speciality: "Pediatric Hematologist & Oncologist",
    registration: "MMC 2014083917",
    qualifications: "FNB (Pediatric Hematology-Oncology)",
    experience:
      "Specialist in diagnosis and treatment of childhood blood disorders and cancers.",
    interests: [
      "Pediatric hematological disorders",
      "Childhood cancers",
      "Long-term survivorship care",
    ],
    image: "/assets/doctors/dr-suyog-nagre.png",
  },

  {
    id: "dr-dipak-marakwad",
    name: "Dr. Dipak Marakwad",
    speciality: "Pediatric Cardiologist",
    registration: "MMC 2015/04/1966",
    qualifications: "DM / Fellowship in Pediatric Cardiology",
    experience:
      "Experienced in diagnosis and management of congenital and acquired heart diseases in children.",
    interests: [
      "Congenital heart disease",
      "Pediatric cardiac evaluation",
      "Long-term cardiac follow-up",
    ],
    image: "/assets/doctors/dr-dipak-marakwad.png",
  },

  {
    id: "dr-kiran-kudlikar",
    name: "Dr. Kiran N. Kudlikar",
    speciality: "Pediatric & Adolescent Endocrinologist",
    registration: "MMC 2003/06/2328",
    qualifications:
      "MBBS, DCH, PGDAP, Fellowship in Pediatric & Adolescent Endocrinology",
    experience:
      "Specialist in growth, hormonal, and metabolic disorders in children and adolescents.",
    interests: [
      "Childhood growth disorders",
      "Obesity and metabolic health",
      "Adolescent hormonal issues",
    ],
    image: "/assets/doctors/dr-kiran-kudlikar.png",
  },

  {
    id: "dr-aboli-hukeri",
    name: "Dr. Aboli Raghuvir Hukeri",
    speciality: "Pediatric Surgeon",
    registration: "MMC 2013/06/2367",
    qualifications: "MBBS, MS (General Surgery), MCh (Pediatric Surgery)",
    experience:
      "Experienced pediatric surgeon managing surgical conditions in infants and children.",
    interests: [
      "Neonatal surgery",
      "Congenital anomalies",
      "Minimally invasive pediatric procedures",
    ],
    image: "/assets/doctors/dr-aboli-hukeri.png",
  },

  {
    id: "dr-neeti-soni",
    name: "Dr. Neeti Atul Soni",
    speciality: "Adolescent Pediatrician",
    registration: "MMC 73321",
    qualifications:
      "MBBS, DCH, PGDAP, PGDAND (Applied Nutrition & Dietetics)",
    experience:
      "Focused on comprehensive adolescent health including nutrition, growth, and mental well-being.",
    interests: [
      "Adolescent health",
      "Nutrition and lifestyle counseling",
      "Puberty and growth-related concerns",
    ],
    image: "/assets/doctors/dr-neeti-soni.png",
  },

  {
    id: "dr-girija-sachdev",
    name: "Dr. Girija Sachdev",
    speciality: "Pediatric Rheumatology Specialist",
    registration: "MMC 2016114608",
    qualifications: "Fellowship in Pediatric Rheumatology",
    experience:
      "Specialist in diagnosis and long-term management of pediatric rheumatological conditions.",
    interests: [
      "Juvenile arthritis",
      "Autoimmune conditions in children",
      "Chronic pain and inflammatory disorders",
    ],
    image: "/assets/doctors/dr-girija-sachdev.png",
  },
  {
    id: "vishakha-davidasrao-ambhure",
    name: "Vishakha Davidasrao Ambhure",
    speciality: "Nutritionist & Weight Management Specialist",
    registration: "",
    qualifications: "Diploma in Nutrition and Dietetics",
    experience:
      "Provides personalized nutritional guidance with a focus on healthy weight management, balanced diets, and lifestyle-based nutrition planning.",
    interests: [
      "Weight management",
      "Child and family nutrition",
      "Healthy lifestyle counseling",
    ],
    image: "/assets/doctors/vishakha-ambhure.png",
  },
  {
    id: "dr-archana-manikrao-patil",
    name: "Dr. Archana Manikrao Patil",
    speciality: "Fetal Medicine Consultant",
    registration: "MMC 2002/09/3405",
    qualifications: "Fetal Medicine Consultant",
    experience:
      "Experienced consultant in fetal medicine, specializing in prenatal diagnosis, fetal well-being assessment, and high-risk pregnancy evaluation.",
    interests: [
      "Prenatal screening",
      "Fetal anomaly detection",
      "High-risk pregnancy care",
    ],
    image: "/assets/doctors/dr-archana-manikrao-patil.png",
  },
  {
    id: "dr-avinash-sanap",
    name: "Dr. Avinash Sanap",
    speciality: "Pediatric Neurologist",
    registration: "MMC 2017115317",
    qualifications: "MBBS, MD (Pediatrics)",
    experience:
      "Specialist in evaluation and management of neurological disorders in children, including developmental delays, seizures, and neurodevelopmental conditions.",
    interests: [
      "Pediatric epilepsy",
      "Neurodevelopmental disorders",
      "Childhood neurological conditions",
    ],
    image: "/assets/doctors/dr-avinash-sanap.png",
  },
  {
    id: "dr-prakash-ambekar",
    name: "Dr. Prakash Ambekar",
    speciality: "Psychiatrist",
    registration: "MMC 2007/05/1593",
    qualifications: "MBBS, MD (Psychiatry)",
    experience:
      "Experienced psychiatrist specializing in the assessment and management of mental and emotional health conditions, with a patient-centered and compassionate approach.",
    interests: [
      "Child and adolescent mental health",
      "Behavioral and emotional disorders",
      "Stress, anxiety, and mood disorders",
    ],
    image: "/assets/doctors/dr-prakash-ambekar.png",
  },
  {
    id: "mayuri-zanwar",
    name: "Mayuri Zanwar",
    speciality: "Child Psychologist",
    //registration: "", // add registration number if available
    qualifications:
      "MA (Psychology)",
    experience:
      "Child psychologist specializing in emotional, behavioral, and developmental concerns in children and adolescents, with expertise in Autism Spectrum Disorder (ASD). Focused on school-related challenges, social skills development, and overall psychological well-being.",
    interests: [
      "ABA (Applied Behavior Analysis)",
      "Child and adolescent psychology",
      "Emotional and behavioral issues in children",
      "School psychology and learning difficulties",
      "Parental guidance and counseling",
    ],
    image: "/assets/doctors/mayuri-zanwar.png",
  }, {
    id: "pankaj-shinde",
    name: "Pankaj Shinde",
    speciality: "Audiologist & Speech Language Pathologist",
    registration: "A37603",
    qualifications: "BASLP",
    experience:
      "Experienced audiologist and speech language pathologist specializing in the assessment and treatment of speech, language, and hearing disorders in children.",
    interests: [
      "Speech and language delay",
      "Hearing assessment and rehabilitation",
      "Communication disorders in children",
    ],
    image: "/assets/doctors/dr-pankaj-shinde.png",
  },
  {
    id: "dr-sheetal-sanap-munde",
    name: "Dr. Sheetal Sanap (Munde)",
    speciality:
      "Pediatric Ophthalmology, Squint & Neuro-ophthalmology",
    registration: "MMC 2017073332",
    qualifications:
      "MBBS, MS (Ophthalmology), Fellowship in Pediatric Ophthalmology, Squint & Neuro-ophthalmology",
    experience:
      "Specialist in pediatric ophthalmology with expertise in diagnosing and managing vision problems, squint, and neuro-ophthalmic conditions in children.",
    interests: [
      "Pediatric vision disorders",
      "Squint (strabismus) management",
      "Neuro-ophthalmology",
    ],
    image: "/assets/doctors/dr-sheetal-sanap-munde.png",
  },
];

export default doctors;
