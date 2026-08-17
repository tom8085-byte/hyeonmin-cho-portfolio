/**
 * Central content source for Hyeonmin Cho's evidence-first academic portfolio.
 * Public components must render evidence links only when an item has a real href.
 */

export type EvidenceStatus = 'available' | 'private' | 'pending' | 'none';

export interface EvidenceItem {
  title: string;
  type: string;
  date?: string;
  description: string;
  href?: string;
  buttonLabel?: string;
  altText: string;
}

export interface ExternalResource {
  label: string;
  href: string;
  description: string;
}

export interface ResearchFigure {
  title: string;
  src: string;
  alt: string;
  caption: string;
  placement:
    | 'sample-preparation'
    | 'analysis'
    | 'supporting'
    | 'reference-context'
    | 'measurement-reliability';
  recordLabel?: string;
  layout?: 'wide' | 'standard';
}

export interface ExperienceActivity {
  title: string;
  date: string;
  duration: string;
  description: string;
}

export interface ExperienceGalleryImage {
  src: string;
  alt: string;
  caption: string;
  label: string;
  period?: string;
  width?: number;
  height?: number;
  clickToEnlarge?: boolean;
}

export interface ContentRecord {
  id: string;
  title: string;
  originalTitle?: string;
  organization?: string;
  role?: string;
  period?: string;
  location?: string;
  problem?: string;
  shortDescription?: string;
  detailedDescription?: string;
  individualContribution?: string;
  individualContributionNeedsConfirmation?: boolean;
  methods?: string[];
  technologies?: string[];
  outcomes?: string[];
  limitations?: string[];
  lessonsLearned?: string[];
  evidenceStatus: EvidenceStatus;
  evidenceItems: EvidenceItem[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageWidth?: number;
  imageHeight?: number;
  galleryImages?: ExperienceGalleryImage[];
  galleryDisplay?: 'stack' | 'compact-grid';
  activities?: ExperienceActivity[];
  externalLink?: string;
  route?: string;
  featured: boolean;
  visible: boolean;
}

export interface CaseStudySection {
  heading: string;
  paragraphs: string[];
}

export interface CaseStudy {
  recordId: string;
  sections: CaseStudySection[];
}

export const personal = {
  name: 'Hyeonmin Cho',
  koreanName: '조현민',
  location: 'Busan, Republic of Korea',
  email: 'tom8085@g.kmou.ac.kr',
  university: 'Korea Maritime & Ocean University',
  degree: 'B.S. in Electrical and Electronic Engineering',
  expectedGraduation: 'February 2027',
  gpa: '3.97 / 4.50',
  cvFile: null as string | null,
  githubUrl: null as string | null,
  linkedinUrl: null as string | null,
  researchInterests: [
    'Semiconductor Devices',
    'Robotics and Autonomous Systems',
    'Artificial Intelligence',
    'Underwater Vehicles and Marine Robotics',
    'Embedded Systems and Sensing',
    'Communication Systems',
    'Terahertz Spectroscopy',
  ],
};

export const hero = {
  eyebrow: 'ELECTRICAL & ELECTRONIC ENGINEERING',
  headline: 'Developing reliable technologies for complex environments.',
  researchLine: 'Terahertz Spectroscopy · Communication Systems · Underwater Vehicles',
  introduction:
    'I am an Electrical and Electronic Engineering student with experience in terahertz spectroscopy, communication systems, and underwater vehicles, and a strong interest in robotics and autonomous systems. I aim to apply curiosity, problem-solving, and innovation to develop practical technologies that improve safety and efficiency in complex environments.',
  metadata: 'B.S. Expected Feb. 2027 · GPA 3.97/4.50 · Busan, Republic of Korea',
};

export type ResearchPathwayPhase = 'experience' | 'training' | 'future' | 'goal';

export interface ResearchPathwayStep {
  title: string;
  phase: ResearchPathwayPhase;
}

export const about = {
  text:
    'My experience spans terahertz spectroscopy, embedded sensing, communication systems, underwater-vehicle operation, semiconductor training, and applied artificial intelligence. Across laboratory research, engineering projects, and field operations, I have learned to connect reliable measurement, communication, hardware, and analysis. I plan to build on this foundation through graduate study in robotics and autonomous systems.',
  pathwayLabel: 'RESEARCH PATHWAY',
  pathwaySupport:
    'Connecting completed research, project, training, and field experience with graduate research in robotics and autonomous systems.',
  pathway: [
    { title: 'THz Spectroscopy', phase: 'experience' },
    { title: 'Communication Systems', phase: 'experience' },
    { title: 'ROV Operation & Maintenance', phase: 'experience' },
    { title: 'Embedded Sensing & IoT', phase: 'experience' },
    { title: 'Semiconductor Technology', phase: 'training' },
    { title: 'AI and Intelligent Control', phase: 'future' },
    { title: 'Robotics & Autonomous Systems', phase: 'goal' },
  ] satisfies ResearchPathwayStep[],
  pathwayNote:
    'My goal is to develop reliable and practical autonomous technologies that improve safety and efficiency in marine and other complex environments.',
};

export type FoundationKind = 'future' | 'project' | 'research';

export interface ResearchDirectionData {
  id: string;
  title: string;
  statusLabel: string;
  kind: FoundationKind;
  topics: string[];
  description: string;
}

export const researchDirections: ResearchDirectionData[] = [
  {
    id: 'intelligent-robotics',
    title: 'Robotics & Autonomous Systems',
    statusLabel: 'Experience-Based Research Interest',
    kind: 'future',
    topics: [
      'Autonomous systems',
      'AUV and underwater robotics',
      'Marine robotics',
      'Navigation and control',
      'Robotics in complex environments',
    ],
    description:
      'A graduate research interest supported by hands-on ROV operation and maintenance, mobile-robot and robotic-arm prototyping, and technical input on safer AUV operation.',
  },
  {
    id: 'embedded-sensing-control',
    title: 'Embedded Sensing & Communication',
    statusLabel: 'Project & Field Experience',
    kind: 'project',
    topics: [
      'Sensor integration',
      'Embedded systems',
      'MQTT and IoT communication',
      'Radar and radio communication',
      'Real-time monitoring',
      'Control systems',
    ],
    description:
      'Project and field experience connecting sensors, embedded devices, communication equipment, monitoring logic, and practical troubleshooting.',
  },
  {
    id: 'thz-semiconductor',
    title: 'THz & Semiconductor Technologies',
    statusLabel: 'Research & Technical Training',
    kind: 'research',
    topics: [
      'Terahertz spectroscopy',
      'Optoelectronics',
      'Experimental data acquisition',
      'Semiconductor devices',
      'Power semiconductor processes',
    ],
    description:
      'Laboratory research in THz-TDS and hands-on semiconductor training developed a foundation in measurement, devices, simulation, processing, and packaging.',
  },
];

export const featuredResearch: ContentRecord = {
  id: 'terahertz-spectroscopy',
  title: 'Terahertz Spectroscopy of Cytidine and 2′-Deoxycytidine Using TPPWGs',
  organization: 'Ultrafast Terahertz Optoelectronics Laboratory · Korea Maritime & Ocean University',
  role: 'Undergraduate Researcher',
  period: 'January 2025 – January 2026',
  location: 'Busan, Republic of Korea',
  problem:
    'Characterize and compare the low-frequency spectral signatures of cytidine and 2′-deoxycytidine using THz time-domain spectroscopy and tapered parallel-plate waveguides.',
  shortDescription:
    'Conducted THz time-domain spectroscopy experiments, including optical alignment, sample preparation, data acquisition, and spectral analysis, to characterize and compare cytidine and 2′-deoxycytidine. Used tapered parallel-plate waveguides to improve THz coupling with small sample quantities and sensitivity to molecular resonance features.',
  detailedDescription:
    'Conducted undergraduate research under the supervision of Prof. Tae-In Jeon in the Ultrafast Terahertz Optoelectronics Laboratory. The work combined THz-TDS measurement, TPPWG-based sample analysis, LabVIEW-coordinated acquisition, spectral comparison, and an MSE-based review of environmental noise.',
  individualContribution:
    'Performed optical alignment, sample and waveguide preparation, LabVIEW-based instrument control and data acquisition, frequency-domain spectral analysis, and MSE-based noise quantification. Proposed airflow shielding, ferrite-core installation, and cable-management improvements to strengthen measurement stability and reliability.',
  methods: [
    'THz time-domain spectroscopy',
    'Optical alignment and sample preparation',
    'Tapered parallel-plate waveguides',
    'LabVIEW-based instrument control',
    'Frequency-domain spectral analysis',
    'MSE-based environmental-noise analysis',
  ],
  technologies: [
    'THz-TDS',
    'Tapered Parallel-Plate Waveguide',
    'Cytidine',
    '2′-Deoxycytidine',
    'Frequency-Domain Spectra',
    'LabVIEW-Based Measurement',
    'Electromagnetic Measurement',
    'Measurement Reliability',
    'Optoelectronics',
    'Experimental Research',
  ],
  outcomes: [
    'Completed a one-year undergraduate research experience in THz spectroscopy and proposed practical measures to improve measurement stability.',
  ],
  limitations: [
    'Measurements were sensitive to sample preparation, alignment, and environmental conditions.',
    'The environmental-condition comparisons were diagnostic: thermal timing, equipment state, and the selected fitting range were not fully matched across every scan.',
    'The work followed the laboratory’s established framework and did not produce publication authorship.',
  ],
  lessonsLearned: [
    'Reliable sensing depends on repeatable procedures, controlled environmental conditions, disciplined data acquisition, and careful interpretation of measured signals.',
  ],
  evidenceStatus: 'available',
  evidenceItems: [
    {
      title: 'Cytidine TPPWG Room-Temperature Experiment Summary',
      type: 'Experimental Slide',
      date: '2025',
      description:
        'Owner-supplied slide documenting the room-temperature TPPWG comparison, measurement configuration, and reported observations for cytidine and 2′-deoxycytidine.',
      href: '/research/cytidine-tppwg-room-temperature-results.png',
      buttonLabel: 'View Experiment Summary',
      altText:
        'Experimental slide with absorbance spectra, a terahertz waveguide schematic, and notes comparing cytidine and 2-prime-deoxycytidine at room temperature.',
    },
    {
      title: '2′-Deoxycytidine TPPWG Sample-Coating Record',
      type: 'Experimental Slide',
      date: 'November 3–5, 2025',
      description:
        'Owner-supplied slide documenting the coating and drying procedure and a visual comparison of laser-used and no-laser sample conditions.',
      href: '/research/deoxycytidine-tppwg-room-temperature-test.png',
      buttonLabel: 'View Sample-Coating Record',
      altText:
        'Experimental slide showing two photographs of a 2-prime-deoxycytidine-coated TPPWG, a terahertz waveguide schematic, coating steps, and measurement observations.',
    },
    {
      title: 'Representative THz Spectrum — Measurement Run 710',
      type: 'Experimental Figure',
      description:
        'Owner-supplied frequency-domain amplitude spectrum from the reported cytidine and 2′-deoxycytidine measurement series.',
      href: '/research/thz-spectrum-run-710.png',
      buttonLabel: 'View Experimental Figure',
      altText:
        'THz amplitude-versus-frequency spectrum for measurement run 710, plotted from 0 to 4 THz.',
    },
    {
      title: 'Representative THz Spectrum — Measurement Run 707',
      type: 'Experimental Figure',
      description:
        'Owner-supplied frequency-domain amplitude spectrum from the reported cytidine and 2′-deoxycytidine measurement series.',
      href: '/research/thz-spectrum-run-707.png',
      buttonLabel: 'View Experimental Figure',
      altText:
        'THz amplitude-versus-frequency spectrum for measurement run 707, plotted from 0 to 4 THz.',
    },
    {
      title: 'Laser-Power Stability Check under Air-Conditioner Operation',
      type: 'Experimental Figure',
      date: 'November 6, 2025',
      description:
        'Owner-supplied laser-power-meter record used during the laboratory investigation of environmental noise and air-conditioner operation.',
      href: '/research/thz-ac-laser-power.svg',
      buttonLabel: 'View Stability Check',
      altText:
        'Laser power meter traces comparing variation during different air-conditioner operating states.',
    },
    {
      title: 'Environmental-Condition Noise Comparison',
      type: 'Experimental Figure Set',
      date: 'November 11, 2025',
      description:
        'Owner-supplied time-domain trace comparison covering air-conditioner and lighting states, accompanied by an MSE-based diagnostic review.',
      href: '/research/thz-environmental-noise-comparison.svg',
      buttonLabel: 'View Noise Comparison',
      altText:
        'Four time-domain current trace groups used to compare environmental operating conditions in a terahertz measurement setup.',
    },
  ],
  route: '/research/terahertz-spectroscopy',
  featured: true,
  visible: true,
};

export const thzResearchContext: {
  supervisor: string;
  supervisionNote: string;
  resources: ExternalResource[];
  figures: ResearchFigure[];
} = {
  supervisor: 'Prof. Tae-In Jeon',
  supervisionNote:
    'I conducted this undergraduate research under the supervision of Prof. Tae-In Jeon in the Ultrafast Terahertz Optoelectronics Laboratory at Korea Maritime & Ocean University.',
  resources: [
    {
      label: 'Visit the THz Laboratory',
      href: 'https://sites.google.com/g.kmou.ac.kr/thzlab/home',
      description: 'Official laboratory website for the Ultrafast Terahertz Optoelectronics Laboratory.',
    },
  ],
  figures: [
    {
      title: 'Water-Vapor Effects in THz Time and Frequency Domains',
      src: '/research/thz-water-vapor-response.svg',
      alt: 'Comparison of terahertz time-domain current and frequency-domain amplitude with and without water vapor.',
      caption:
        'Supplied reference figure illustrating how water vapor can introduce ringing in the time domain and absorption features in the frequency domain. It is included as technical context and is not presented as a result from the nucleoside measurements.',
      placement: 'reference-context',
      recordLabel: 'REFERENCE FIGURE',
      layout: 'wide',
    },
    {
      title: 'Cytidine and 2′-Deoxycytidine Room-Temperature Experiment Summary',
      src: '/research/cytidine-tppwg-room-temperature-results.png',
      alt: 'Experimental slide with absorbance spectra, a terahertz waveguide schematic, and notes comparing cytidine and 2-prime-deoxycytidine at room temperature.',
      caption:
        'Owner-supplied experiment summary. The slide records the TPPWG measurement configuration and the reported room-temperature comparison that informed the sample-selection workflow.',
      placement: 'analysis',
      layout: 'wide',
    },
    {
      title: '2′-Deoxycytidine Sample Coating and Laser-Condition Check',
      src: '/research/deoxycytidine-tppwg-room-temperature-test.png',
      alt: 'Experimental slide showing two photographs of a 2-prime-deoxycytidine-coated TPPWG, a terahertz waveguide schematic, coating steps, and measurement observations.',
      caption:
        'Owner-supplied record dated November 3–5, 2025. It documents the coating and high-humidity drying procedure and compares visible sample conditions with and without laser use.',
      placement: 'sample-preparation',
      layout: 'wide',
    },
    {
      title: 'Representative Frequency-Domain Spectrum A',
      src: '/research/thz-spectrum-run-710.png',
      alt: 'THz amplitude-versus-frequency spectrum for measurement run 710, plotted from 0 to 4 THz.',
      caption:
        'Measurement run 710. The supplied plot shows the measured amplitude spectrum across the 0–4 THz frequency range.',
      placement: 'supporting',
      layout: 'standard',
    },
    {
      title: 'Representative Frequency-Domain Spectrum B',
      src: '/research/thz-spectrum-run-707.png',
      alt: 'THz amplitude-versus-frequency spectrum for measurement run 707, plotted from 0 to 4 THz.',
      caption:
        'Measurement run 707. The supplied plot shows the measured amplitude spectrum across the 0–4 THz frequency range.',
      placement: 'supporting',
      layout: 'standard',
    },
    {
      title: 'Laser-Power Stability under Air-Conditioner Operation',
      src: '/research/thz-ac-laser-power.svg',
      alt: 'Laser power meter traces comparing variation during different air-conditioner operating states.',
      caption:
        'Owner-supplied laboratory record dated November 6, 2025. The chart was used to inspect laser-power variation associated with the air-conditioner state; it is treated as a diagnostic observation rather than proof of a single causal mechanism.',
      placement: 'measurement-reliability',
      recordLabel: 'LAB RECORD',
      layout: 'standard',
    },
    {
      title: 'Repeated Time-Domain Response Traces',
      src: '/research/thz-repeated-time-domain-traces.svg',
      alt: 'Overlaid current-versus-time traces from repeated terahertz measurement scans.',
      caption:
        'Repeated current-versus-time traces from the environmental-condition review. The overlay was used to inspect scan-to-scan baseline variation and transient behavior.',
      placement: 'measurement-reliability',
      recordLabel: 'LAB RECORD',
      layout: 'standard',
    },
    {
      title: 'Environmental-Condition Trace Comparison',
      src: '/research/thz-environmental-noise-comparison.svg',
      alt: 'Four time-domain current trace groups comparing air-conditioner and lighting operating conditions.',
      caption:
        'Four trace groups from the November 11, 2025 laboratory record compare air-conditioner and lighting states with a prior reference measurement. MSE supplemented visual comparison, while thermal timing and end-of-scan fitting were documented as limitations.',
      placement: 'measurement-reliability',
      recordLabel: 'CONDITION COMPARISON',
      layout: 'wide',
    },
  ],
};

export const thzCaseStudy: { record: ContentRecord; sections: CaseStudySection[] } = {
  record: featuredResearch,
  sections: [
    {
      heading: 'Research Context',
      paragraphs: [
        'This undergraduate research was conducted in the Ultrafast Terahertz Optoelectronics Laboratory at Korea Maritime & Ocean University within the laboratory’s established experimental program and under the supervision of Prof. Tae-In Jeon.',
      ],
    },
    {
      heading: 'Experimental Objective',
      paragraphs: [
        'The work examined cytidine and 2′-deoxycytidine samples using terahertz time-domain spectroscopy and compared frequency-domain spectra across measurement conditions.',
      ],
    },
    {
      heading: 'Sample and Waveguide Information',
      paragraphs: [
        'The nucleoside samples were applied to 30 mm tapered parallel-plate waveguides. Consistent coating, drying, and positioning were important because the measured response could be affected by the sample layer and experimental alignment.',
      ],
    },
    {
      heading: 'THz Measurement Workflow',
      paragraphs: [
        'The restrained schematic below summarizes the workflow: THz source, tapered parallel-plate waveguide and sample, THz receiver, data acquisition, and frequency-domain comparison.',
      ],
    },
    {
      heading: 'Frequency-Domain Analysis',
      paragraphs: [
        'I examined frequency-domain spectra and compared measurement conditions and absorption characteristics while paying attention to signal quality and repeatability. The experiment-summary slide records the reported room-temperature comparison, while the two raw spectrum captures are representative amplitude spectra whose sample-to-run mapping remains intentionally unlabeled until confirmed.',
      ],
    },
    {
      heading: 'Measurement Reliability and Noise Investigation',
      paragraphs: [
        'Owner-supplied laboratory records dated November 6 and 11, 2025 document a focused investigation of environmental noise in the THz measurement setup. Laser-power-meter traces, repeated time-domain current scans, and air-conditioner and lighting operating states were compared to understand changes in baseline stability and repeatability.',
        'Mean squared error (MSE) after line fitting was used as a supplementary comparison metric because visual inspection alone was insufficient. The records also identify confounding factors—including outdoor-unit thermal state, the interval after switching the air conditioner off, and incomplete fitting near the end of a scan—so the observations are presented as a diagnostic study rather than a definitive causal result.',
      ],
    },
    {
      heading: 'Environmental Interference Mechanisms Considered',
      paragraphs: [
        'Potential mechanisms considered in the laboratory review included airflow-induced refractive-index and optical-path variation, cable microphonics, power-line or electromagnetic interference from high-power equipment, and thermal drift affecting the laser, detector, electronics, sample, or measured baseline.',
      ],
    },
    {
      heading: 'Mitigation and Process Improvements',
      paragraphs: [
        'Proposed controls included redirecting or shielding airflow, using an enclosure to reduce drafts, securing cables with strain relief, considering low-noise cables, adding ferrite cores and filtered power where appropriate, reducing suspended or crossing cable sections, and comparing repeated scans only after the system reached a stable thermal state under matched operating conditions.',
      ],
    },
    {
      heading: 'My Contribution',
      paragraphs: [featuredResearch.individualContribution ?? ''],
    },
    {
      heading: 'Tools and Methods',
      paragraphs: [
        'THz-TDS, tapered parallel-plate waveguides, LabVIEW-based measurement, electromagnetic measurement, frequency-domain spectrum examination, and experimental data handling.',
      ],
    },
    {
      heading: 'Challenges and Limitations',
      paragraphs: featuredResearch.limitations ?? [],
    },
    {
      heading: 'What I Learned',
      paragraphs: featuredResearch.lessonsLearned ?? [],
    },
  ],
};

export const projects: ContentRecord[] = [
  {
    id: 'smart-manhole-monitoring',
    title: 'Smart Manhole Monitoring System for Urban Flood Response',
    originalTitle: '도심 침수 대응을 위한 스마트 맨홀 모니터링 시스템',
    organization: '2026 ICT Undergraduate Paper Competition',
    role: 'Team Leader & Presenter',
    period: 'June 2026',
    problem:
      'Urban flooding can develop rapidly, while conventional inspection may not provide timely remote awareness of rising water levels.',
    shortDescription:
      'Developed and tested a low-cost urban flood monitoring system using Arduino Uno WiFi, ultrasonic sensors, Raspberry Pi 5, and MQTT communication. Implemented time-of-flight water-level measurement, temperature compensation, and a three-level flood warning system.',
    detailedDescription:
      'The system measures water level with an ultrasonic sensor, compensates for temperature-related changes, transmits readings through MQTT, and uses a Raspberry Pi 5 to process data and support three-level flood warnings.',
    individualContribution:
      'Led the team, coordinated system development and testing, and presented the project at the 2026 ICT Undergraduate Paper Competition.',
    methods: [
      'Time-of-flight water-level measurement',
      'Temperature compensation',
      'MQTT communication',
      'Raspberry Pi data processing',
      'Three-level flood warning logic',
    ],
    technologies: [
      'Arduino Uno WiFi',
      'Ultrasonic Sensor',
      'Raspberry Pi 5',
      'MQTT',
      'Python',
      'Embedded Systems',
      'IoT',
    ],
    outcomes: [
      'Developed a working low-cost monitoring prototype and presented it at the 2026 ICT Undergraduate Paper Competition.',
    ],
    limitations: [
      'Field reliability, environmental sealing, long-term calibration, network resilience, and larger-scale validation require further work.',
    ],
    lessonsLearned: [
      'A dependable monitoring system must coordinate sensing, compensation, communication, processing, and warnings as one integrated pipeline.',
    ],
    evidenceStatus: 'pending',
    evidenceItems: [],
    route: '/projects/smart-manhole-monitoring',
    featured: true,
    visible: true,
  },
  {
    id: 'inbody-meal-recommendation',
    title: 'Rule-Based Personalized Meal Recommendation System Using InBody Data',
    role: 'Team Leader & Presentation Awardee',
    period: '2025',
    problem:
      'General meal plans may not reflect a user’s body composition, nutritional requirements, food preferences, or allergy information.',
    shortDescription:
      'Developed a personalized meal recommendation system using InBody body-composition data, nutritional requirements, food preferences, and allergy information. Implemented calorie and macronutrient calculations and a rule-based recommendation algorithm for personalized diet planning.',
    detailedDescription:
      'The system combines InBody data with nutritional requirements, food preferences, and allergy information, calculates calorie and macronutrient targets, and applies transparent rules to generate personalized meal recommendations.',
    individualContribution:
      'Led the team, coordinated the system workflow and presentation, and contributed to the calculation and rule-based recommendation logic.',
    methods: [
      'Calorie requirement calculation',
      'Macronutrient calculation',
      'Preference and allergy filtering',
      'Rule-based recommendation',
      'Personalized diet planning',
    ],
    technologies: [
      'Python',
      'Data Processing',
      'Rule-Based Recommendation',
      'Nutrition Calculation',
      'InBody Data',
      'Digital Healthcare',
    ],
    outcomes: [
      'Completed the team project and received a presentation award.',
    ],
    limitations: [
      'The system used deterministic rules rather than a trained machine-learning model.',
      'Recommendation quality depends on the completeness of nutrition data and the validity of the calculation rules.',
    ],
    lessonsLearned: [
      'Personal data must be translated into transparent, testable rules before it becomes a useful recommendation.',
    ],
    evidenceStatus: 'pending',
    evidenceItems: [],
    route: '/projects/inbody-meal-recommendation',
    featured: true,
    visible: true,
  },
  {
    id: 'machine-learning-textbook-contribution',
    title: 'R and Python Code Development and Review for a Published Textbook',
    originalTitle: '『데이터 분석과 머신러닝 실전』 · Data Analysis and Machine Learning in Practice',
    organization: 'Parkyoungsa Publishing',
    role: 'Technical Contributor',
    period: 'June 2024 – January 2026',
    problem:
      'A textbook that teaches data analysis and machine learning in both R and Python requires runnable examples and careful consistency checks across code, figures, and explanations.',
    shortDescription:
      'Developed and tested R and Python examples covering neural networks, ensemble models, traditional machine-learning models, and data preprocessing methods, including outlier handling, missing-value treatment, and data scaling.',
    detailedDescription:
      'Developed and reviewed instructional R and Python code for the published textbook 『데이터 분석과 머신러닝 실전』. The work covered data preprocessing, regression, traditional machine learning, ensemble models, and neural networks, together with related-method research, figure preparation, and manuscript proofreading.',
    individualContribution:
      'Developed and tested instructional examples, reviewed code and outputs for consistency, researched related methods, supported figure preparation, and proofread technical explanations before publication.',
    methods: [
      'R and Python example development',
      'Data preprocessing and scaling',
      'Machine-learning model testing',
      'Related-method research',
      'Figure preparation',
      'Manuscript proofreading',
    ],
    technologies: [
      'R',
      'Python',
      'NumPy',
      'Pandas',
      'TensorFlow',
      'Traditional ML',
      'Ensemble Methods',
      'Neural Networks',
    ],
    outcomes: [
      'Contributed reviewed instructional code and technical materials to a textbook published by Parkyoungsa on January 5, 2026.',
    ],
    limitations: [
      'The contribution was technical and is not represented as book authorship.',
      'OpenCV image-processing and public-data API examples are not included in the contribution scope presented here.',
    ],
    lessonsLearned: [
      'Educational code must be runnable, reproducible, and aligned with the figures and explanations learners use to interpret it.',
    ],
    evidenceStatus: 'available',
    evidenceItems: [
      {
        title: '『데이터 분석과 머신러닝 실전』',
        type: 'Official Publisher Book Page',
        date: 'January 5, 2026',
        description:
          'Official Parkyoungsa page for the published textbook 『데이터 분석과 머신러닝 실전』.',
        href: 'https://www.pybook.co.kr/mall/book/pys?goodsno=9423',
        buttonLabel: 'View Published Book',
        altText:
          'Official Parkyoungsa book page for the published textbook Data Analysis and Machine Learning Practice.',
      },
    ],
    route: '/projects/machine-learning-textbook-contribution',
    featured: true,
    visible: true,
  },
  {
    id: 'deep-learning-code-development',
    title: 'Code Development and Technical Review for a Deep Learning Textbook Manuscript',
    organization: 'Textbook Manuscript in Preparation',
    role: 'Technical Contributor',
    period: 'June 2025 – Present',
    problem:
      'Clear educational comparisons of neural-network architectures require common datasets, reproducible settings, and technically consistent code, figures, and explanations.',
    shortDescription:
      'Develop and test Python and TensorFlow examples for DNN, CNN, RNN, and Transformer models. Compare model structures and performance using common datasets and review code, figures, and explanatory content.',
    detailedDescription:
      'The ongoing work develops educational examples for DNN, CNN, RNN, and Transformer architectures and compares them under common experimental conditions while preserving the structural characteristics of each model.',
    individualContribution:
      'Develop and test model examples, review architecture-comparison conditions, and check code, figures, and explanatory content for technical clarity and consistency.',
    methods: [
      'Reproducible experiments',
      'Common-dataset comparison',
      'Architecture-specific model design',
      'Code and figure review',
      'Technical content review',
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'DNN',
      'CNN',
      'RNN',
      'Transformer',
    ],
    outcomes: [
      'Developing and reviewing educational code and technical material for a deep-learning textbook manuscript in preparation.',
    ],
    limitations: [
      'The manuscript is in preparation and is not presented as a published book.',
      'The comparisons are educational experiments and do not establish universal superiority of one architecture.',
    ],
    lessonsLearned: [
      'Meaningful architecture comparison depends on controlled conditions, reproducibility, and careful interpretation of performance and efficiency.',
    ],
    evidenceStatus: 'pending',
    evidenceItems: [],
    route: '/projects/deep-learning-code-development',
    featured: true,
    visible: true,
  },
];

export const projectCaseStudies: Record<string, CaseStudy> = {
  'smart-manhole-monitoring': {
    recordId: 'smart-manhole-monitoring',
    sections: [
      {
        heading: 'Urban Flooding Problem',
        paragraphs: [projects[0].problem ?? ''],
      },
      {
        heading: 'Proposed Solution',
        paragraphs: [projects[0].detailedDescription ?? ''],
      },
      {
        heading: 'System Architecture',
        paragraphs: [
          'The architecture links ultrasonic and temperature sensors to an Arduino Uno WiFi, sends data through MQTT, and uses a Raspberry Pi 5 with Python analysis to support monitoring and LED alerts.',
        ],
      },
      {
        heading: 'Time-of-Flight Water-Level Measurement',
        paragraphs: [
          'The A02YYUW ultrasonic sensor estimates distance from pulse travel time. The system uses this distance to infer the water level relative to the installation geometry.',
        ],
      },
      {
        heading: 'Temperature Compensation',
        paragraphs: [
          'DHT22 temperature readings support compensation for changes in the speed of sound so that ultrasonic distance calculation can better reflect ambient conditions.',
        ],
      },
      {
        heading: 'MQTT Communication',
        paragraphs: [
          'The Arduino Uno WiFi publishes sensor data through MQTT, separating edge acquisition from downstream monitoring and processing.',
        ],
      },
      {
        heading: 'Raspberry Pi Processing',
        paragraphs: [
          'A Raspberry Pi 5 receives the measurements and uses Python-based processing to organize readings and apply monitoring logic.',
        ],
      },
      {
        heading: 'LED Warning Logic',
        paragraphs: [
          'A three-level LED warning scheme represents escalating risk states from the processed water-level information.',
        ],
      },
      {
        heading: 'My Role as Team Lead',
        paragraphs: [projects[0].individualContribution ?? ''],
      },
      {
        heading: 'Team Collaboration',
        paragraphs: [
          'The project required coordination across sensing, embedded devices, communication, processing, documentation, and presentation.',
        ],
      },
      {
        heading: 'Paper and Presentation',
        paragraphs: [projects[0].outcomes?.[0] ?? ''],
      },
      {
        heading: 'Limitations',
        paragraphs: projects[0].limitations ?? [],
      },
      {
        heading: 'Future Improvements',
        paragraphs: [
          'Future work could include waterproof packaging, field calibration, redundant communication, longer deployments, historical dashboards, and validation across multiple installation environments.',
        ],
      },
    ],
  },
  'inbody-meal-recommendation': {
    recordId: 'inbody-meal-recommendation',
    sections: [
      { heading: 'Health-Management Problem', paragraphs: [projects[1].problem ?? ''] },
      {
        heading: 'Input Data',
        paragraphs: [
          'The workflow uses body-composition information from InBody data together with nutrition-related inputs required by the rule set.',
        ],
      },
      {
        heading: 'Calculation Process',
        paragraphs: [
          'Python-based data processing estimates energy requirements and macronutrient ratios before recommendation rules are applied.',
        ],
      },
      {
        heading: 'Recommendation Logic',
        paragraphs: [
          'The system uses explicit rules rather than a trained model. This makes the recommendation path interpretable but limits adaptation beyond the predefined logic.',
        ],
      },
      {
        heading: 'Seven-Day Meal-Plan Structure',
        paragraphs: [
          'Calculated requirements are organized into a seven-day meal-plan structure intended to provide a consistent, personalized output.',
        ],
      },
      {
        heading: 'Team Project Workflow',
        paragraphs: [
          'The team connected data preparation, nutrition calculations, rule design, and output formatting into one digital-healthcare workflow.',
        ],
      },
      { heading: 'My Contribution', paragraphs: [projects[1].individualContribution ?? ''] },
      { heading: 'Limitations', paragraphs: projects[1].limitations ?? [] },
      {
        heading: 'Future Improvements',
        paragraphs: [
          'Future work could validate the calculation rules with domain experts, improve nutrition-data coverage, incorporate user feedback, and test usability with a broader set of profiles.',
        ],
      },
    ],
  },
  'machine-learning-textbook-contribution': {
    recordId: 'machine-learning-textbook-contribution',
    sections: [
      {
        heading: 'Publication Context',
        paragraphs: [
          '『데이터 분석과 머신러닝 실전』 was published by Parkyoungsa on January 5, 2026. My role in the project was technical contribution rather than authorship.',
        ],
      },
      {
        heading: 'Technical Contribution Scope',
        paragraphs: [
          'The contribution covered development and testing of instructional R/Python examples, consistency checks between code and outputs, figure preparation, and proofreading of technical explanations.',
        ],
      },
      {
        heading: 'Data Processing Foundations',
        paragraphs: [
          'Prepared and checked examples using NumPy arrays and Pandas Series and DataFrames, including data creation, transformation, indexing, calculation, descriptive statistics, selection, modification, sorting, and value-frequency inspection.',
        ],
      },
      {
        heading: 'Regression Examples',
        paragraphs: [
          'Developed and tested instructional examples covering least-squares simple linear regression, mean squared error, gradient-descent-based simple and multiple linear regression, and TensorFlow implementations of linear, multiple linear, and logistic regression.',
        ],
      },
      {
        heading: 'Machine-Learning Examples',
        paragraphs: [
          'Supported examples spanning data preprocessing, traditional machine-learning models, ensemble methods, and neural-network models in R and Python.',
        ],
      },
      {
        heading: 'Figures and Proofreading',
        paragraphs: [
          'Supported figure preparation and reviewed code, outputs, and explanatory text so that the instructional materials remained technically consistent and readable.',
        ],
      },
      { heading: 'My Contribution', paragraphs: [projects[2].individualContribution ?? ''] },
      {
        heading: 'Publication Status and Attribution',
        paragraphs: projects[2].limitations ?? [],
      },
    ],
  },
  'deep-learning-code-development': {
    recordId: 'deep-learning-code-development',
    sections: [
      {
        heading: 'Educational Objective',
        paragraphs: [
          'The objective is to explain DNN, CNN, RNN, and Transformer architectures with runnable examples and comparisons that remain clear to learners.',
        ],
      },
      {
        heading: 'Model Architectures',
        paragraphs: [
          'The examples cover dense, convolutional, recurrent, and attention-based architectures while distinguishing the type of structure each model is designed to use.',
        ],
      },
      {
        heading: 'Common Experimental Conditions',
        paragraphs: [
          'Common MNIST experiments use consistent preprocessing, optimizer, batch size, epochs or early stopping, and random seeds so that architecture-level differences can be interpreted more fairly.',
        ],
      },
      {
        heading: 'Reproducibility',
        paragraphs: [
          'The workflow fixes relevant random seeds, separates training, validation, and test data, and records experimental conditions.',
        ],
      },
      {
        heading: 'Evaluation Criteria',
        paragraphs: [
          'Evaluation considers test accuracy, test loss, training time, parameter count, convergence behavior, and the gap between training and validation performance.',
        ],
      },
      {
        heading: 'Code-Review Process',
        paragraphs: [
          'Example code is checked for consistent structure, explanatory comments, data-shape correctness, evaluation logic, and alignment between figures and written explanations.',
        ],
      },
      { heading: 'My Contribution', paragraphs: [projects[3].individualContribution ?? ''] },
      {
        heading: 'Example Code',
        paragraphs: [
          'Public code samples will be linked only when a reviewed file or repository is supplied. No placeholder repository is displayed.',
        ],
      },
      {
        heading: 'Results and Limitations',
        paragraphs: projects[3].limitations ?? [],
      },
    ],
  },
};

export interface SkillGroupData {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroupData[] = [
  {
    title: 'Programming & Engineering Software',
    items: [
      'Python, C, and R',
      'TensorFlow and Keras',
      'Verilog HDL',
      'MATLAB and Simulink',
      'LabVIEW',
      'Materials Studio',
    ],
  },
  {
    title: 'Embedded Systems, Robotics & Digital Design',
    items: [
      'ATmega128',
      'Arduino Uno WiFi',
      'Raspberry Pi 5',
      'MQTT and GPIO',
      'Interrupts and motor control',
      'Sensor interfacing',
      'Mobile robot and robotic arm prototyping',
      'Testbench and ModelSim verification',
    ],
  },
  {
    title: 'Experimental Methods',
    items: [
      'THz-TDS',
      'Optical alignment',
      'Sample preparation',
      'Spectral analysis',
      'Experimental noise analysis',
      'Equipment checks and troubleshooting',
    ],
  },
  {
    title: 'Power Electronics & Semiconductor Processes',
    items: [
      'Diode rectifiers',
      'Buck, Boost, and Buck–Boost converters',
      'CCM and DCM analysis',
      'MD and DFT simulation',
      'Plasma treatment',
      'Heavy wire bonding',
      'Bond testing',
    ],
  },
];

export const education = {
  degree: 'B.S. in Electrical and Electronic Engineering',
  institution: 'Korea Maritime & Ocean University',
  location: 'Busan, Republic of Korea',
  period: 'Expected February 2027',
  gpa: '3.97 / 4.50',
  researchInterests: personal.researchInterests,
};

export const experiences: ContentRecord[] = [
  {
    ...featuredResearch,
    id: 'undergraduate-researcher',
    title: 'Undergraduate Researcher',
    featured: false,
    route: '/research/terahertz-spectroscopy',
  },
  {
    id: 'mathematics-instructor',
    title: 'Mathematics Instructor',
    organization: 'Nambusan Children’s Center',
    role: 'Math Instructor',
    period: 'March 2026 – Present',
    location: 'Busan, Republic of Korea',
    route: '/experience/mathematics-instructor',
    shortDescription:
      'Teach mathematics to 30 elementary and middle school students, provide homework and exam support, and tailor instruction to individual learning levels.',
    detailedDescription:
      'Teach mathematics to 30 elementary and middle school students, providing homework support and exam preparation. Provide individualized instruction and monitor academic progress based on each student’s learning level. Over four months, 24 of 30 students (80%) improved their mathematics scores, while the group average increased by 9.7 points.',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'army-radar-communications',
    title: 'Radar and Communications Operator aboard a Patrol Boat',
    organization: 'Republic of Korea Army',
    role: 'Squad Leader, January 2023 – July 2023',
    period: 'January 2022 – July 2023',
    location: 'Pyeongtaek, Gyeonggi-do, Republic of Korea',
    route: '/experience/army-radar-communications',
    shortDescription:
      'Combined patrol-boat communications and squad leadership with field operation of military ROVs, translating tether-constrained deployment experience into practical AUV safety recommendations.',
    detailedDescription:
      'Served as a squad leader and radar and communications operator aboard a patrol boat, supporting coastal missions through coordinated personnel, communications, and equipment readiness. Operated PRC-999K radios, GPS, radar, and harbor communication systems; conducted link checks with coastal units; monitored communication quality; and inspected the vessel’s electrical distribution panel to maintain mission continuity. A central technical focus was the field operation and maintenance of military uncrewed underwater systems, particularly remotely operated vehicles (ROVs). Through hands-on operation, assessed how tether dependency constrained maneuverability and deployment flexibility, then translated these operator-level observations into practical technical input for autonomous underwater vehicle (AUV) development. Recommendations included fail-safe surfacing and other recovery-oriented measures intended to reduce operational risk under abnormal conditions. This experience connected marine-drone operation with shipboard power, communications, troubleshooting, and mission-readiness requirements in a real coastal environment.',
    galleryDisplay: 'compact-grid',
    galleryImages: [
      {
        src: '/experience/patrol-boat-squad-photo.svg',
        alt:
          'Hyeonmin Cho with fellow soldiers aboard a patrol boat at Pyeongtaek Naval Base; the other faces are obscured for privacy.',
        caption:
          'Service record aboard a patrol boat at Pyeongtaek Naval Base. Other individuals are obscured for privacy.',
        label: 'PATROL BOAT FIELD RECORD',
        period: 'January 2022 – July 2023',
        width: 1523,
        height: 1033,
        clickToEnlarge: true,
      },
      {
        src: '/experience/squad-leader-spring-2023.webp',
        alt:
          'Hyeonmin Cho in Republic of Korea Army uniform during his service as a squad leader, standing beneath cherry blossoms in spring 2023.',
        caption:
          'Squad leader service record during the January–July 2023 leadership period.',
        label: 'SQUAD LEADER RECORD',
        period: 'January 2023 – July 2023',
        width: 900,
        height: 1073,
        clickToEnlarge: true,
      },
    ],
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'beyond-busan-supporter',
    title: 'Beyond Busan Supporter, SNS Division',
    organization: 'Busan Digital Asset Exchange (Bdan)',
    role: 'Team Member',
    period: 'March 2026 – Present',
    location: 'Busan, Republic of Korea',
    route: '/experience/beyond-busan-supporter',
    shortDescription:
      'Create digital content that promotes public understanding of blockchain, artificial intelligence, and digital finance.',
    detailedDescription:
      'Collaborate with team members to manage the program’s Instagram account and create posts, thumbnails, and short-form videos on stocks, investments, blockchain, artificial intelligence, and digital finance. The work develops practical experience in visual content design, digital communication, and social media account management.',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'busan-un-week-supporter',
    title: '2025 Busan UN Week – UN Supporter',
    organization: 'Busan Global City Foundation',
    role: 'Supporter',
    period: 'April 2025 – November 2025',
    location: 'Busan, Republic of Korea',
    route: '/experience/busan-un-week-supporter',
    shortDescription:
      'Supported international and UN-related public events, collaborated with international participants, and created magazine content promoting volunteer programs.',
    detailedDescription:
      'Supported major international and UN-related events, including Global Gathering 2025, Walk, Peace in Busan, the 80th UN Day Ceremony, and the UN Peace Festival, by operating promotional booths and assisting participants. Collaborated with international participants and created magazine content to promote volunteer programs and event activities.',
    image: '/experience/busan-un-week-supporter-field-photo.jpg',
    imageAlt:
      'Hyeonmin Cho assisting an international participant at a 2025 Busan UN Week supporter booth.',
    imageCaption:
      'Public-engagement activity as a UN Supporter during the 2025 Busan UN Week program.',
    imageWidth: 2048,
    imageHeight: 1150,
    activities: [
      {
        title: 'Global Gathering 2025 Promotional Booth',
        date: 'May 24, 2025',
        duration: '4 hours',
        description:
          'Operated a promotional booth at the 20th Busan Global Gathering.',
      },
      {
        title: 'Walk, Peace in Busan',
        date: 'September 27, 2025',
        duration: '8 hours',
        description:
          'Participated as a supporter in the peace walk organized with Rotary International District 3661.',
      },
      {
        title: '80th United Nations Day Commemoration',
        date: 'October 24, 2025',
        duration: '6 hours',
        description:
          'Supported the commemorative program marking the 80th anniversary of United Nations Day.',
      },
      {
        title: 'UN Peace Festival Promotional Booth',
        date: 'October 25–26, 2025',
        duration: '6.5 hours',
        description:
          'Operated the UN Supporters promotional booth across two festival shifts.',
      },
    ],
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'makers-club-officer',
    title: 'Makers Club Officer',
    organization: 'Makers Club · Korea Maritime & Ocean University',
    role: 'Club Officer',
    period: 'March 2024 – December 2024',
    location: 'Busan, Republic of Korea',
    route: '/experience/makers-club-officer',
    shortDescription:
      'Coordinated and supported hands-on projects in embedded systems, digital logic, power electronics, and robotics.',
    detailedDescription:
      'Coordinated and supported hands-on projects in ATmega128-based embedded systems, Verilog digital logic design, MATLAB/Simulink power electronics, and robotics. Prepared electronic components, circuit diagrams, sample code, and instructional materials, and mentored new members in circuit assembly, microcontroller programming, simulation, debugging, hardware testing, system integration, and prototyping.',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'esl-program',
    title: 'International ESL Program',
    organization: 'Cebu International Academy',
    role: 'Program Participant',
    period: 'December 2023 – January 2024',
    location: 'Cebu, Philippines',
    route: '/experience/esl-program',
    shortDescription:
      'Completed an eight-week intensive English-language program in an international learning environment.',
    detailedDescription:
      'Completed an eight-week ESL course at Cebu International Academy from December 3, 2023, to January 27, 2024. Strengthened practical English communication through intensive study and daily interaction in an international learning environment in Cebu, Philippines.',
    galleryDisplay: 'compact-grid',
    galleryImages: [
      {
        src: '/experience/esl-certificate-enhanced.webp',
        alt: 'Certificate of Completion awarded to Cho Hyeonmin for completing the eight-week ESL course at Cebu International Academy.',
        caption:
          'Certificate of Completion for the eight-week ESL course at Cebu International Academy.',
        label: 'PROGRAM CERTIFICATE',
        period: 'January 26, 2024',
        width: 1434,
        height: 1097,
        clickToEnlarge: true,
      },
      {
        src: '/experience/esl-completion-photo-enhanced.webp',
        alt: 'Hyeonmin Cho holding his ESL course certificate with a Cebu International Academy instructor at the completion ceremony.',
        caption:
          'ESL course completion ceremony at Cebu International Academy in Cebu, Philippines.',
        label: 'COMPLETION CEREMONY',
        period: 'January 2024',
        width: 844,
        height: 1230,
        clickToEnlarge: true,
      },
    ],
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
];

export const training: ContentRecord[] = [
  {
    id: 'power-semiconductor-bootcamp',
    title: 'Semiconductor Bootcamp',
    organization: 'Korea Maritime & Ocean University',
    period: 'March 2026 – Present',
    location: 'Busan, Republic of Korea',
    route: '/experience/power-semiconductor-bootcamp',
    shortDescription:
      'Lecture-based and hands-on training in semiconductor devices, power semiconductors, simulation, wafer processing, characterization, and packaging.',
    detailedDescription:
      'Participate in lecture-based and hands-on training covering semiconductor devices, Si, SiC, and GaN power semiconductors, single-crystal growth, wafer processing, characterization, and semiconductor packaging. Completed Materials Studio exercises in molecular-dynamics and DFT simulation workflows and operated semiconductor back-end equipment, including plasma treatment, heavy wire bonding, and bond testing systems.',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'rov-training',
    title: 'Marine ROV Professional Operator Level 3 Training',
    organization: 'Underwater Solution Co., Ltd.',
    period: 'November 2025',
    location: 'Republic of Korea',
    route: '/experience/rov-training',
    shortDescription:
      'Completed hands-on training in ROV launch and recovery, maneuvering, tether management, underwater inspection, equipment checks, and basic maintenance.',
    detailedDescription:
      'Completed hands-on training in ROV launch and recovery, maneuvering, tether management, and camera-based underwater inspection. Practiced pre- and post-operation checks and basic maintenance, including inspection of thrusters, tether cables, watertight seals, power and communication connections, cameras, and control systems, as well as identification of common operational faults.',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
];

export const honors: ContentRecord[] = [
  {
    id: 'career-roadmap-outstanding-award',
    title: 'Outstanding Award, Career Roadmap Competition',
    organization: 'Korea Maritime & Ocean University',
    period: 'January 14, 2026',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'capstone-idea-third-place',
    title: 'Excellence Award – 3rd Place, 2025 Capstone Design & Idea Presentation Competition',
    organization: 'Department of Electrical and Electronic Engineering, Korea Maritime & Ocean University',
    period: 'December 22, 2025',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'job-analysis-outstanding-award',
    title: 'Outstanding Award, Job Analysis Competition',
    organization: 'Korea Maritime & Ocean University',
    period: 'December 16, 2025',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'capstone-encouragement-award',
    title: 'Encouragement Award, 2025 Fall Capstone Design Competition',
    organization: 'Korea Maritime & Ocean University RISE Program',
    period: 'December 9, 2025',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'video-excellence-award',
    title: 'Excellence Award, 2025 Fall Capstone Design Video Content Competition',
    organization: 'Korea Maritime & Ocean University RISE Program',
    period: 'December 9, 2025',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'industry-analysis-grand-prize',
    title: 'Grand Prize, Industry Analysis Competition',
    organization: 'Korea Maritime & Ocean University',
    period: 'December 1, 2025',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'exemplary-military-service',
    title: 'Commendation for Exemplary Military Service',
    organization: 'Republic of Korea Army',
    period: 'November 3, 2022',
    route: '/honors/exemplary-military-service',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'major-ranking-fourth',
    title: 'Fourth-place major ranking',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: false,
  },
];

export const militaryCommendationDetail = {
  honorId: 'exemplary-military-service',
  certificateNumber: 'No. 130',
  date: 'November 3, 2022',
  image: '/honors/military-commendation-2022.webp',
  imageAlt:
    'Republic of Korea Army certificate of commendation awarded to Corporal Hyeonmin Cho on November 3, 2022.',
  imageWidth: 1062,
  imageHeight: 1558,
  englishTranslation: [
    'Certificate of Commendation',
    'Corporal Hyeonmin Cho, Patrol Boat Unit',
    'While serving as a radar and communications operator aboard a patrol boat, he consistently upheld the values of devotion to country, mission accomplishment, and mutual respect.',
    'In particular, during coastal surveillance operations, he contributed across the full scope of coastal mission performance—including maintaining deployment readiness and improving barracks life—to support flawless operational execution.',
    'In recognition of these contributions, this commendation is awarded.',
    'November 3, 2022\nCommander, 2nd Battalion, 169th Infantry Brigade\nLieutenant Colonel Cha Dae-seong',
  ],
  translationNote:
    'This English translation is provided for portfolio context and is not a certified translation.',
};

export const certifications: ContentRecord[] = [
  {
    id: 'adsp',
    title: 'Advanced Data Analytics Semi-Professional (ADsP)',
    organization: 'Korea Data Agency',
    period: 'September 2025',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
];

export const contact = {
  heading: 'LET’S CONNECT',
  primaryButton: 'Email Hyeonmin',
  emailLink: 'mailto:tom8085@g.kmou.ac.kr',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Honors', href: '#honors' },
  { label: 'Contact', href: '#contact' },
];

export const ownerVerificationItems = [
  'Upload the reviewed Hyeonmin_Cho_CV.pdf before enabling Download CV.',
  'Confirm which sample and condition correspond to THz measurement runs 710 and 707 before adding sample-specific figure labels.',
  'Upload public-safe evidence files for each project before enabling project evidence buttons.',
  'Confirm official English translations for Korean award titles.',
  'Provide official documentation before displaying the fourth-place major ranking.',
  'Provide real GitHub or LinkedIn URLs before showing social profile buttons.',
  'Replace relative sitemap entries with the final public domain after deployment.',
  'Review every document for student numbers, phone numbers, addresses, signatures, and third-party personal information before publication.',
];
