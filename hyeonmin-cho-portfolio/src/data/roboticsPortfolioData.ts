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
    'Intelligent Robotics',
    'AUV and Underwater Robotics',
    'Navigation and Control',
    'Embedded Sensing',
    'Semiconductor Devices',
    'Terahertz Technologies',
    'Artificial Intelligence',
  ],
};

export const hero = {
  eyebrow: 'ELECTRICAL & ELECTRONICS ENGINEERING',
  headline: 'Building from sensing toward intelligent autonomous systems.',
  researchLine: 'THz Research · Embedded Sensing · Intelligent Robotics',
  introduction:
    'I am an Electrical and Electronics Engineering student at Korea Maritime & Ocean University with undergraduate research experience in terahertz optoelectronics and hands-on project experience in embedded sensing, IoT, and data-driven systems. My goal is to integrate sensing hardware, control, and artificial intelligence to develop intelligent robotic systems, particularly for marine and unstructured environments.',
  metadata: 'B.S. Expected Feb. 2027 · GPA 3.97/4.50 · Busan, Republic of Korea',
};

export const about = {
  text:
    'My engineering foundation has developed through experimental research in terahertz optoelectronics, sensor-based embedded systems, IoT communication, and data-oriented programming. These experiences taught me how reliable sensing, measurement, communication, and analysis work together within an engineering system. I now hope to extend this foundation toward intelligent robotics, including autonomous underwater vehicles, marine robots, navigation, and control.',
  pathwayLabel: 'RESEARCH PATHWAY',
  pathwaySupport: 'A future direction grounded in completed research, projects, and coursework',
  pathway: [
    'THz Measurement',
    'Sensor and Data Acquisition',
    'Embedded and IoT Systems',
    'Control and Intelligence',
    'Autonomous and Marine Robotics',
  ],
  pathwayNote:
    'Autonomous and marine robotics is the next research direction, not a claim of completed AUV research.',
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
    title: 'Intelligent Robotics',
    statusLabel: 'Future Research Direction',
    kind: 'future',
    topics: [
      'Autonomous systems',
      'AUV and underwater robotics',
      'Marine robotics',
      'Navigation',
      'Control',
      'Robotics in unstructured environments',
    ],
    description:
      'A graduate research direction focused on integrating sensing, control, and intelligence for autonomous systems in complex environments.',
  },
  {
    id: 'embedded-sensing-control',
    title: 'Embedded Sensing & Control',
    statusLabel: 'Project Foundation',
    kind: 'project',
    topics: [
      'Sensor integration',
      'Embedded systems',
      'IoT communication',
      'Real-time monitoring',
      'Microprocessor applications',
      'Control systems',
    ],
    description:
      'Project and coursework experience connecting physical sensors, embedded devices, communication, monitoring, and control concepts.',
  },
  {
    id: 'thz-semiconductor',
    title: 'THz & Semiconductor Technologies',
    statusLabel: 'Research Foundation',
    kind: 'research',
    topics: [
      'Terahertz spectroscopy',
      'Optoelectronics',
      'Electromagnetic measurement',
      'Semiconductor devices',
      'Experimental data acquisition',
    ],
    description:
      'Completed laboratory research and training that developed a foundation in measurement, devices, and hardware-oriented engineering.',
  },
];

export const featuredResearch: ContentRecord = {
  id: 'terahertz-spectroscopy',
  title: 'Terahertz Spectroscopy Research',
  organization: 'Ultrafast Terahertz Optoelectronics Laboratory · Korea Maritime & Ocean University',
  role: 'Undergraduate Researcher',
  period: 'January 2025 – January 2026',
  location: 'Busan, Republic of Korea',
  problem:
    'Examine and compare terahertz spectral responses of nucleoside samples under controlled laboratory measurement conditions.',
  shortDescription:
    'My undergraduate research involved terahertz spectroscopy experiments using cytidine and 2′-deoxycytidine samples applied to tapered parallel-plate waveguides. I participated in THz measurement workflows, examined frequency-domain spectra, and compared measurement conditions and absorption characteristics. This experience strengthened my understanding of electromagnetic measurement, experimental procedures, data acquisition, and the importance of reliable and repeatable research workflows.',
  detailedDescription:
    'The work was completed within an established laboratory research workflow under faculty and laboratory guidance. It did not result in a publication claim or an independently owned scientific discovery.',
  individualContribution:
    'Participated in THz measurement sessions, sample and waveguide preparation, LabVIEW-based data acquisition, frequency-domain spectrum examination, comparison of measurement conditions, and review of environmental-noise sources affecting repeatability.',
  methods: [
    'THz time-domain spectroscopy',
    'Tapered parallel-plate waveguides',
    'Frequency-domain comparison',
    'MSE-based noise comparison',
    'Environmental interference review',
    'Structured experimental data handling',
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
    'Completed undergraduate research participation in THz spectroscopy measurement and data-examination workflows.',
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
    organization: '2026 ICT Undergraduate Paper Competition · 대한임베디드공학회',
    role: 'Team Lead',
    period: 'June 29, 2026',
    location: 'Pukyong National University',
    problem:
      'Urban flooding can develop quickly, while conventional inspection may not provide timely remote awareness of rising water levels.',
    shortDescription:
      'Led a team project that developed a smart manhole monitoring system for urban flood response. The proposed system combines ultrasonic water-level sensing, temperature-based measurement compensation, embedded edge devices, MQTT communication, Python-based processing, and LED risk alerts to support remote monitoring and earlier situational awareness during heavy rainfall.',
    detailedDescription:
      'The system connects an A02YYUW ultrasonic sensor and DHT22 temperature sensor to an Arduino Uno WiFi, transmits measurements through MQTT, and uses a Raspberry Pi 5 with Python processing to support monitoring and LED risk alerts.',
    individualContribution:
      'Led the team project and coordinated development and presentation of the proposed monitoring system.',
    methods: [
      'Time-of-flight water-level measurement',
      'Temperature compensation',
      'MQTT communication',
      'Python-based processing',
      'Three-level LED warning logic',
    ],
    technologies: [
      'Arduino Uno WiFi',
      'A02YYUW Ultrasonic Sensor',
      'DHT22 Temperature Sensor',
      'Raspberry Pi 5',
      'MQTT',
      'Python',
      'Embedded Systems',
      'IoT',
      'LED Risk Alerts',
    ],
    outcomes: [
      'Prepared and presented the project for the 2026 ICT Undergraduate Paper Competition.',
    ],
    limitations: [
      'Field reliability, environmental sealing, long-term calibration, network resilience, and larger-scale validation require further work.',
    ],
    lessonsLearned: [
      'A monitoring system must coordinate sensing, compensation, communication, processing, and alerts as one dependable pipeline.',
    ],
    evidenceStatus: 'pending',
    evidenceItems: [],
    route: '/projects/smart-manhole-monitoring',
    featured: true,
    visible: true,
  },
  {
    id: 'inbody-meal-recommendation',
    title: 'InBody-Based Personalized Meal Recommendation System',
    organization: 'Supervised by Prof. Tae-In Jeon',
    role: 'Team Member',
    period: '2025',
    problem:
      'General meal plans may not reflect a user’s body-composition information, estimated energy needs, or macronutrient requirements.',
    shortDescription:
      'Participated in the development of a rule-based digital healthcare system that uses body-composition information to estimate energy requirements and macronutrient ratios and generate personalized meal recommendations.',
    detailedDescription:
      'The project used InBody body-composition data and nutrition calculations to produce a structured seven-day meal plan through rule-based recommendation logic.',
    individualContributionNeedsConfirmation: true,
    methods: [
      'Energy-requirement estimation',
      'Macronutrient-ratio calculation',
      'Rule-based recommendation',
      'Seven-day meal-plan generation',
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
      'Produced a team-project prototype for rule-based personalized meal planning.',
    ],
    limitations: [
      'The system used deterministic rules rather than a trained machine-learning model.',
      'The recommendation quality depends on the completeness of nutrition data and the validity of the calculation rules.',
    ],
    lessonsLearned: [
      'Measured data must be translated into transparent, testable rules before it becomes a useful system output.',
    ],
    evidenceStatus: 'pending',
    evidenceItems: [],
    route: '/projects/inbody-meal-recommendation',
    featured: true,
    visible: true,
  },
  {
    id: 'deep-learning-code-development',
    title: 'Deep Learning Manuscript and Code Development',
    organization: 'Manuscript in Preparation',
    role: 'Code Development and Technical Review',
    period: 'June 2025 – Present',
    problem:
      'Educational comparisons of neural-network architectures require consistent data, reproducible settings, and technically clear examples.',
    shortDescription:
      'Developed and reviewed educational code examples for DNN, CNN, RNN, and Transformer architectures in support of a deep-learning manuscript and R/Python-based instructional materials.',
    detailedDescription:
      'The work organizes model examples and comparisons around common experimental conditions while retaining architecture-specific examples for educational clarity.',
    individualContribution:
      'Developed and tested example code, reviewed model-comparison conditions, and checked figures and explanatory content for technical clarity.',
    methods: [
      'Reproducible experiments',
      'Consistent model comparison',
      'Code review',
      'Educational clarity',
      'Common-data evaluation',
      'Architecture-specific examples',
    ],
    technologies: [
      'Python',
      'R',
      'TensorFlow',
      'Keras',
      'DNN',
      'CNN',
      'RNN',
      'Transformer',
      'MNIST',
      'Technical Review',
    ],
    outcomes: [
      'Developed and reviewed instructional code and technical material for a manuscript in preparation.',
    ],
    limitations: [
      'The manuscript is in preparation and should not be represented as a published book.',
      'Comparisons are educational experiments and do not establish universal superiority of one architecture.',
    ],
    lessonsLearned: [
      'Meaningful architecture comparison depends on controlled conditions, reproducibility, and careful interpretation of accuracy, loss, efficiency, convergence, and overfitting.',
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
      { heading: 'My Contribution', paragraphs: [projects[2].individualContribution ?? ''] },
      {
        heading: 'Example Code',
        paragraphs: [
          'Public code samples will be linked only when a reviewed file or repository is supplied. No placeholder repository is displayed.',
        ],
      },
      {
        heading: 'Results and Limitations',
        paragraphs: projects[2].limitations ?? [],
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
    title: 'Research and Measurement',
    items: [
      'THz-TDS',
      'LabVIEW-based measurement systems',
      'Frequency-domain data examination',
      'Electromagnetic measurement',
      'Experimental data handling',
    ],
  },
  {
    title: 'Embedded and IoT',
    items: [
      'Arduino Uno WiFi',
      'Raspberry Pi 5',
      'A02YYUW ultrasonic sensors',
      'DHT22 sensors',
      'MQTT',
      'Microprocessor applications',
      'Sensor integration',
    ],
  },
  {
    title: 'Programming and Data',
    items: [
      'Python',
      'C/C++',
      'R',
      'TensorFlow/Keras',
      'Data processing',
      'Technical code review',
    ],
  },
  {
    title: 'Engineering Foundation',
    items: [
      'Circuit theory',
      'Electromagnetics',
      'Signals and systems',
      'Digital logic design',
      'Microprocessor applications',
      'Automatic control',
      'Power electronics',
      'IoT systems',
    ],
  },
];

export const education = {
  degree: 'B.S. in Electrical and Electronic Engineering',
  institution: 'Korea Maritime & Ocean University',
  period: '2021 – Expected February 2027',
  gpa: '3.97 / 4.50',
  academicHighlights: [] as string[],
  coursework: [
    'Circuit Theory',
    'Electromagnetics',
    'Signals and Systems',
    'Digital Logic Design',
    'Microprocessor Applications',
    'Automatic Control',
    'Power Electronics',
    'IoT Systems',
  ],
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
    organization: 'Nambusan Community Child Center',
    role: 'Instructor',
    period: 'March 2026 – Present',
    location: 'Busan, Republic of Korea',
    route: '/experience/mathematics-instructor',
    shortDescription:
      'Teach mathematics to children and provide individualized academic support through structured problem-solving activities. Adapt explanations and learning activities to students’ different learning levels and needs.',
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
    location: 'Pyeongtaek, Gyeonggi-do, Republic of Korea (Pyeongtaek Naval Base)',
    route: '/experience/army-radar-communications',
    shortDescription:
      'Operated PRC-999K radios, GPS, radar, harbor communication equipment, and ROVs; conducted communication checks; inspected the vessel’s electrical distribution panel; and performed basic troubleshooting and minor repairs.',
    image: '/experience/patrol-boat-squad-photo.svg',
    imageAlt:
      'Hyeonmin Cho with fellow soldiers aboard a patrol boat at Pyeongtaek Naval Base; the other faces are obscured for privacy.',
    imageCaption:
      'Service record aboard a patrol boat at Pyeongtaek Naval Base. Other individuals are obscured for privacy.',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'beyond-busan-supporter',
    title: 'Beyond Busan Supporter, SNS Division',
    organization: 'Bdan',
    period: 'March 2026 – Present',
    location: 'Busan, Republic of Korea',
    route: '/experience/beyond-busan-supporter',
    shortDescription: 'Produce and edit social media videos and update website content.',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'busan-un-week-supporter',
    title: 'UNs Supporter, 2025 Busan UN Week',
    organization: 'Busan Global City Foundation',
    role: 'Supporter',
    period: 'April 2025 – November 2025',
    location: 'Busan, Republic of Korea',
    route: '/experience/busan-un-week-supporter',
    shortDescription:
      'Collaborated with international participants on festival projects and volunteer activities, produced magazine content, and edited program videos.',
    detailedDescription:
      'Collaborated with international participants through the 2025 Busan UN Week supporter program. Contributed to public-engagement events, operated promotional booths, supported peace-themed community programs, produced magazine content, and edited program videos.',
    image: '/experience/busan-un-week-supporter-field-photo.svg',
    imageAlt:
      'Hyeonmin Cho assisting an international participant at a 2025 Busan UN Week supporter booth.',
    imageCaption:
      'Public-engagement activity as a UNs Supporter during the 2025 Busan UN Week program.',
    imageWidth: 2048,
    imageHeight: 1150,
    activities: [
      {
        title: 'Global Gathering 2025 Promotional Booth',
        date: 'May 24, 2025',
        duration: '4 hours',
        description:
          'Operated a promotional booth at the 20th Busan Global Gathering (Global Gathering 2025).',
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
          'Operated the UNs Supporters promotional booth across two festival shifts: October 25 from 13:30 to 16:00 and October 26 from 10:00 to 14:00.',
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
    organization: 'Korea Maritime & Ocean University',
    period: 'March 2024 – December 2024',
    location: 'Busan, Republic of Korea',
    route: '/experience/makers-club-officer',
    shortDescription:
      'Prepared materials, assisted with hands-on sessions, and worked in teams to build an autonomous mobile robot and a robotic arm.',
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
      'Lecture-based and hands-on training covering semiconductor devices, Si/SiC/GaN power semiconductors, simulation workflows, wafer processing, characterization, packaging, plasma treatment, heavy wire bonding, and bond testing.',
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
    shortDescription: 'Completed hands-on training in ROV operation and inspection.',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
];

export const honors: ContentRecord[] = [
  {
    id: 'industry-analysis-grand-prize',
    title: 'Grand Prize (대상), Industry Analysis Competition',
    organization: 'Korea Maritime & Ocean University',
    period: 'December 1, 2025',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'job-analysis-outstanding-award',
    title: 'Outstanding Award (최우수상), Job Analysis Competition',
    organization: 'Korea Maritime & Ocean University',
    period: 'December 16, 2025',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'capstone-encouragement-award',
    title: 'Encouragement Award (장려상), 2025 Fall Capstone Design Competition',
    organization: 'Korea Maritime & Ocean University RISE Program',
    period: 'December 9, 2025',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'video-excellence-award',
    title: 'Excellence Award (우수상), 2025 Fall Capstone Design Video Content Competition',
    organization: 'Korea Maritime & Ocean University RISE Program',
    period: 'December 9, 2025',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'career-roadmap-outstanding-award',
    title: 'Outstanding Award (최우수상), Career Roadmap Competition',
    organization: 'Korea Maritime & Ocean University',
    period: 'January 14, 2026',
    evidenceStatus: 'pending',
    evidenceItems: [],
    featured: false,
    visible: true,
  },
  {
    id: 'capstone-idea-third-place',
    title: 'Excellence Award – 3rd Place (우수상 3등), 2025 Capstone Design & Idea Presentation Competition',
    organization: 'Department of Electrical and Electronic Engineering, Korea Maritime & Ocean University',
    period: 'December 22, 2025',
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
  { label: 'Honors', href: '#honors' },
  { label: 'Contact', href: '#contact' },
];

export const ownerVerificationItems = [
  'Upload the reviewed Hyeonmin_Cho_CV.pdf before enabling Download CV.',
  'Confirm the specific individual contribution to the InBody project.',
  'Confirm which sample and condition correspond to THz measurement runs 710 and 707 before adding sample-specific figure labels.',
  'Upload public-safe evidence files for each project before enabling project evidence buttons.',
  'Confirm official English translations for Korean award titles.',
  'Provide official documentation before displaying the fourth-place major ranking.',
  'Provide real GitHub or LinkedIn URLs before showing social profile buttons.',
  'Replace relative sitemap entries with the final public domain after deployment.',
  'Review every document for student numbers, phone numbers, addresses, signatures, and third-party personal information before publication.',
];
