export interface Course {
  slug: string
  title: string
  description: string
  fullDescription: string
  price: string
  duration: string
  level: string
  step?: string
  category: string
  features: string[]
  benefits: string[]
  requirements: string
  schedule: string
  faqs: Array<{
    question: string
    answer: string
  }>
}

export const courseData: Course[] = [
  // Quran Courses
  {
    slug: 'nouraniyyah',
    title: 'Nouraniyyah',
    description: 'Learn correct reading of Quranic words starting from letters using the typical Nouraniyyah spelling method, up to complete verses. Basic Tajweed rules are also taught.',
    fullDescription: 'The Nouraniyyah method is a proven, systematic approach to learning Quranic reading that has been used worldwide for decades. This comprehensive course takes students from absolute beginners to proficient readers through a structured, step-by-step methodology. Students will master letter recognition, word building, basic Tajweed rules, and verse reading, building a solid foundation for their Quranic journey.',
    price: '30€',
    duration: 'Monthly',
    level: 'Beginner',
    step: 'Step 1 - Learn to Read Quran',
    category: 'quran',
    features: ['Letter recognition', 'Word building', 'Basic Tajweed', 'Verse reading'],
    benefits: ['Proven method used worldwide', 'Step-by-step progression', 'Interactive learning', 'Regular assessments'],
    requirements: 'No prior knowledge required',
    schedule: '2 sessions per week, 45 minutes each',
    faqs: [
      {
        question: 'What age is this course suitable for?',
        answer: 'This course is suitable for all ages, from young children (4+) to adults who want to learn Quranic reading from scratch.'
      },
      {
        question: 'How long does it take to complete?',
        answer: 'The duration varies by individual progress, but most students complete the basic level in 3-6 months with regular practice.'
      },
      {
        question: 'Do I need to know Arabic?',
        answer: 'No prior Arabic knowledge is required. We start from the very beginning with letter recognition and pronunciation.'
      }
    ]
  },
  {
    slug: 'noorul-bayaan',
    title: 'Noorul-Bayaan',
    description: 'A very popular method for learning Quran reading. From letters to reciting Quranic verses. Through spelling words and naming Tajweed rules.',
    fullDescription: 'Noorul-Bayaan is one of the most popular and effective methods for learning Quranic reading. This intermediate course builds upon basic letter knowledge and focuses on advanced spelling techniques, proper Tajweed rules, and fluent verse recitation. Students will develop confidence in their reading abilities while mastering the essential rules of proper Quranic recitation.',
    price: '30€',
    duration: 'Monthly',
    level: 'Intermediate',
    step: 'Step 1 - Learn to Read Quran',
    category: 'quran',
    features: ['Advanced spelling', 'Tajweed rules', 'Verse recitation', 'Pronunciation'],
    benefits: ['Advanced reading skills', 'Tajweed mastery', 'Fluency improvement', 'Confidence building'],
    requirements: 'Basic Arabic letter knowledge',
    schedule: '2 sessions per week, 45 minutes each',
    faqs: [
      {
        question: 'What is the difference between Nouraniyyah and Noorul-Bayaan?',
        answer: 'Nouraniyyah is for complete beginners, while Noorul-Bayaan is for those who already know Arabic letters and want to advance their reading skills.'
      },
      {
        question: 'Will I learn proper Tajweed in this course?',
        answer: 'Yes, this course includes comprehensive Tajweed rules and their practical application in Quranic recitation.'
      }
    ]
  },
  {
    slug: 'tajweed-intensive-live',
    title: 'Tajweed Intensive (LIVE)',
    description: 'A comprehensive course covering all areas of Tajweed science. Learn different reading styles with focus on Hafs-an-Asim.',
    fullDescription: 'This advanced course provides comprehensive coverage of all aspects of Tajweed science. Students will master different reading styles with special focus on Hafs-an-Asim, learn articulation points, and develop a scientific understanding of proper Quranic recitation. This course is designed for those seeking professional-level recitation skills.',
    price: '30€',
    duration: 'Monthly',
    level: 'Advanced',
    step: 'Step 1 - Learn to Read Quran',
    category: 'quran',
    features: ['Complete Tajweed', 'Reading styles', 'Articulation points', 'Scientific approach'],
    benefits: ['Professional recitation', 'Multiple reading styles', 'Scientific understanding', 'Certification ready'],
    requirements: 'Intermediate Quran reading skills',
    schedule: '3 sessions per week, 60 minutes each',
    faqs: [
      {
        question: 'Is this course suitable for becoming a Quran teacher?',
        answer: 'Yes, this course provides the comprehensive knowledge and skills needed to teach Quranic recitation professionally.'
      },
      {
        question: 'What reading styles will I learn?',
        answer: 'You will learn various authentic reading styles with special focus on Hafs-an-Asim, the most widely used style worldwide.'
      }
    ]
  },
  {
    slug: 'reading-correction',
    title: 'Reading Correction',
    description: 'For students who can recite Quran slowly and need help with Tajweed rules. Uses the Taqliid (imitation) method.',
    fullDescription: 'This specialized course is designed for students who can recite the Quran but need improvement in their pronunciation, fluency, and application of Tajweed rules. Using the proven Taqliid (imitation) method, students will work closely with experienced teachers to correct their recitation and develop proper habits.',
    price: '25€',
    duration: 'Monthly',
    level: 'All Levels',
    step: 'Step 1 - Learn to Read Quran',
    category: 'quran',
    features: ['Pronunciation correction', 'Tajweed application', 'Fluency improvement', 'Personal feedback'],
    benefits: ['Improved pronunciation', 'Better fluency', 'Tajweed application', 'Personal attention'],
    requirements: 'Basic recitation ability',
    schedule: '2 sessions per week, 45 minutes each',
    faqs: [
      {
        question: 'How does the Taqliid method work?',
        answer: 'The Taqliid method involves students imitating the teacher\'s recitation, allowing them to learn proper pronunciation and rhythm through direct observation and practice.'
      },
      {
        question: 'Can I join this course if I have pronunciation issues?',
        answer: 'Yes, this course is specifically designed to help students improve their pronunciation and correct common mistakes.'
      }
    ]
  },
  {
    slug: 'hifz-al-quran',
    title: 'Hifz Al-Quran',
    description: 'For memorizing the Quran. Learn 1-2 verses per week with regular reviews and checks of previously learned material.',
    fullDescription: 'This comprehensive memorization course is designed for students who want to memorize the Holy Quran. With a structured approach of learning 1-2 verses per week, regular reviews, and continuous progress tracking, students will build a strong foundation for long-term retention. Our experienced teachers provide personal guidance and motivation throughout the journey.',
    price: '25€',
    duration: 'Monthly',
    level: 'All Levels',
    step: 'Step 2 - Memorization & Mastery',
    category: 'quran',
    features: ['Verse memorization', 'Regular reviews', 'Progress tracking', 'Personal guidance'],
    benefits: ['Structured memorization', 'Long-term retention', 'Personal mentor', 'Progress monitoring'],
    requirements: 'Basic Quran reading ability',
    schedule: '3 sessions per week, 45 minutes each',
    faqs: [
      {
        question: 'How long does it take to memorize the entire Quran?',
        answer: 'The duration varies by individual capacity and dedication, but typically takes 2-4 years with consistent practice and regular attendance.'
      },
      {
        question: 'What if I forget previously memorized verses?',
        answer: 'Our course includes regular review sessions and revision techniques to ensure long-term retention of memorized material.'
      }
    ]
  },
  {
    slug: 'tarjuma-al-quran',
    title: 'Tarjuma Al-Quran',
    description: 'Word-for-word and overall translation of Quran. Focus on meaning while maintaining Tajweed in recitation.',
    fullDescription: 'This course provides comprehensive understanding of the Quran through detailed word-for-word translation and overall meaning. Students will learn to connect with the divine message while maintaining proper Tajweed in their recitation. The course emphasizes practical application of Quranic teachings in daily life.',
    price: '30€',
    duration: 'Monthly',
    level: 'Intermediate & above',
    step: 'Step 3 - Understanding the Quran',
    category: 'quran',
    features: ['Word-for-word translation', 'Overall meaning', 'Tajweed maintenance', 'Contextual understanding'],
    benefits: ['Deep understanding', 'Meaningful recitation', 'Spiritual connection', 'Practical application'],
    requirements: 'Intermediate Quran reading skills',
    schedule: '2 sessions per week, 60 minutes each',
    faqs: [
      {
        question: 'Do I need to know Arabic grammar for this course?',
        answer: 'Basic Arabic grammar knowledge is helpful but not required. We explain grammatical concepts as needed during the course.'
      },
      {
        question: 'Will this help me understand the Quran better?',
        answer: 'Absolutely! This course is specifically designed to deepen your understanding of the Quran\'s message and meaning.'
      }
    ]
  },
  {
    slug: 'tafseer-al-quran',
    title: 'Tafseer Al-Quran',
    description: 'In-depth explanation of verses (Asbab al-Nuzul, rulings, wisdom, and connections with daily life).',
    fullDescription: 'This advanced course provides in-depth explanation and interpretation of Quranic verses. Students will explore the historical context (Asbab al-Nuzul), understand Islamic rulings, extract wisdom, and learn how to apply Quranic teachings in modern daily life. This course is designed for serious students seeking deep spiritual and intellectual understanding.',
    price: '35€',
    duration: 'Monthly',
    level: 'Advanced learners, adults',
    step: 'Step 3 - Understanding the Quran',
    category: 'quran',
    features: ['Asbab al-Nuzul', 'Rulings explanation', 'Wisdom extraction', 'Daily life connections'],
    benefits: ['Deep spiritual insight', 'Practical wisdom', 'Advanced understanding', 'Life guidance'],
    requirements: 'Advanced Quran knowledge',
    schedule: '2 sessions per week, 90 minutes each',
    faqs: [
      {
        question: 'Is this course suitable for Islamic scholars?',
        answer: 'Yes, this course provides scholarly-level understanding and is suitable for those pursuing advanced Islamic studies.'
      },
      {
        question: 'What sources are used for Tafseer?',
        answer: 'We use authentic classical and contemporary Tafseer sources, including works by renowned scholars throughout Islamic history.'
      }
    ]
  },
  // Arabic Courses
  {
    slug: 'madina-arabic',
    title: 'Madina Arabic',
    description: 'Focus on grammar and analyzing individual sentence parts. Build vocabulary through everyday and religious dialogues.',
    fullDescription: 'This comprehensive Arabic course focuses on building a strong grammatical foundation while developing practical vocabulary through everyday and religious contexts. Students will learn to analyze sentence structures, understand grammatical rules, and apply them in real-life conversations and religious contexts.',
    price: '35€',
    duration: 'Monthly',
    level: 'Beginner to Advanced',
    category: 'arabic',
    features: ['Grammar focus', 'Sentence analysis', 'Vocabulary building', 'Religious context'],
    benefits: ['Strong grammar foundation', 'Practical vocabulary', 'Religious context', 'Progressive levels'],
    requirements: 'No prior Arabic knowledge needed',
    schedule: '2 sessions per week, 60 minutes each',
    faqs: [
      {
        question: 'Will I be able to speak Arabic after this course?',
        answer: 'Yes, this course includes conversational practice and will help you develop speaking skills alongside grammar knowledge.'
      },
      {
        question: 'Is this course suitable for understanding Islamic texts?',
        answer: 'Absolutely! The course includes religious vocabulary and contexts that will help you understand Islamic literature.'
      }
    ]
  },
  {
    slug: 'bayna-yadaik',
    title: 'Bayna Yadaik',
    description: 'Uses "Al Arabiya bayna Yadayk" book series with many dialogues on everyday topics that promote free speaking.',
    fullDescription: 'This advanced Arabic course uses the renowned "Al Arabiya bayna Yadayk" book series to develop conversational fluency. Through extensive dialogues on everyday topics, students will practice free speaking, improve their communication skills, and gain cultural understanding. The course emphasizes practical communication in real-world situations.',
    price: '35€',
    duration: 'Monthly',
    level: 'Intermediate to Advanced',
    category: 'arabic',
    features: ['Conversational Arabic', 'Everyday dialogues', 'Free speaking', 'Hadith & Quran'],
    benefits: ['Conversational fluency', 'Practical communication', 'Cultural understanding', 'Advanced skills'],
    requirements: 'Basic Arabic knowledge',
    schedule: '2 sessions per week, 60 minutes each',
    faqs: [
      {
        question: 'What level of Arabic do I need to start this course?',
        answer: 'You should have basic Arabic knowledge including familiarity with Arabic letters and simple vocabulary.'
      },
      {
        question: 'Will I learn about Arabic culture?',
        answer: 'Yes, the course includes cultural context and helps you understand Arabic-speaking cultures through language learning.'
      }
    ]
  },
  // Children's Courses
  {
    slug: 'alif-ba-for-children',
    title: 'Alif Ba for Children (4+)',
    description: 'Children are introduced to letters playfully through various tasks and learn to recognize, pronounce, and name them safely.',
    fullDescription: 'This specially designed course introduces young children to Arabic letters through fun, interactive activities and games. Our patient teachers use age-appropriate methods to help children recognize, pronounce, and name Arabic letters in a safe, encouraging environment. The course builds a strong foundation for future Arabic and Quranic learning.',
    price: '20€',
    duration: 'Monthly',
    level: '4+ years',
    category: 'children',
    features: ['Letter recognition', 'Pronunciation', 'Interactive learning', '30 min sessions'],
    benefits: ['Early Arabic foundation', 'Fun learning approach', 'Age-appropriate content', 'Patient teachers'],
    requirements: 'No prior knowledge needed',
    schedule: '2 sessions per week, 30 minutes each',
    faqs: [
      {
        question: 'Is this course suitable for very young children?',
        answer: 'Yes, this course is specifically designed for children aged 4 and above, with age-appropriate teaching methods.'
      },
      {
        question: 'What if my child is shy or hesitant?',
        answer: 'Our teachers are experienced with young children and use gentle, encouraging methods to help shy children participate comfortably.'
      }
    ]
  },
  {
    slug: 'tajweed-poems-reading',
    title: 'Tajweed Poems & Reading',
    description: 'Children learn Tajweed rules through easily understandable poems and recite Quranic verses together.',
    fullDescription: 'This engaging course teaches children Tajweed rules through memorable poems and group recitation activities. Children will learn proper pronunciation and recitation techniques while having fun with their peers. The course combines learning with enjoyment, making it easy for children to remember and apply Tajweed rules.',
    price: '25€',
    duration: 'Monthly',
    level: '6+ years',
    category: 'children',
    features: ['Tajweed poems', 'Verse recitation', 'Rule application', '45 min sessions'],
    benefits: ['Memorable learning', 'Group participation', 'Rule understanding', 'Confidence building'],
    requirements: 'Basic letter recognition',
    schedule: '2 sessions per week, 45 minutes each',
    faqs: [
      {
        question: 'How do poems help children learn Tajweed?',
        answer: 'Poems make Tajweed rules memorable and fun for children, helping them remember complex rules through rhythm and repetition.'
      },
      {
        question: 'Will my child learn to recite Quran properly?',
        answer: 'Yes, this course focuses on proper Quranic recitation techniques suitable for children\'s learning pace.'
      }
    ]
  },
  {
    slug: 'hifz-for-children',
    title: 'Hifz for Children',
    description: 'For children who want to memorize Quran in a motivating way. Our loving teachers support your child patiently.',
    fullDescription: 'This specialized memorization course is designed specifically for children, using motivational techniques and patient guidance. Our loving teachers understand children\'s learning patterns and provide encouragement and support throughout their memorization journey. The course focuses on making memorization enjoyable and rewarding for young learners.',
    price: '20€',
    duration: 'Monthly',
    level: '7+ years',
    category: 'children',
    features: ['Motivational approach', 'Patient guidance', 'Regular practice', 'Progress tracking'],
    benefits: ['Motivated learning', 'Patient teachers', 'Regular progress', 'Achievement celebration'],
    requirements: 'Basic reading ability',
    schedule: '3 sessions per week, 30 minutes each',
    faqs: [
      {
        question: 'How do you motivate children to memorize?',
        answer: 'We use positive reinforcement, games, rewards, and celebration of achievements to keep children motivated and engaged.'
      },
      {
        question: 'What if my child struggles with memorization?',
        answer: 'Our teachers are patient and experienced with different learning styles. They will adapt their approach to suit your child\'s needs.'
      }
    ]
  },
  {
    slug: 'learn-prayer-with-batut',
    title: 'Learn Prayer with BaTut',
    description: 'Our most popular course. No child leaves without being able to perform the 5 daily prayers independently.',
    fullDescription: 'This is our most popular and successful children\'s course. Using the beloved BaTut character and interactive methods, children learn to perform the five daily prayers independently. The course covers all aspects of prayer including ablution, prayer positions, recitations, and the spiritual meaning behind each prayer. No child leaves this course without mastering the prayers.',
    price: '25€',
    duration: 'Monthly',
    level: '5+ years',
    category: 'children',
    features: ['Prayer teaching', 'Daily practice', 'Motivation', '45 min sessions'],
    benefits: ['Independent prayer', 'Daily practice', 'Motivation', 'Life-long skill'],
    requirements: 'Basic Arabic knowledge',
    schedule: '2 sessions per week, 45 minutes each',
    faqs: [
      {
        question: 'What makes this course so popular?',
        answer: 'The BaTut character makes learning fun and memorable, and our proven method ensures every child succeeds in learning prayers.'
      },
      {
        question: 'Will my child learn the spiritual aspects of prayer?',
        answer: 'Yes, we teach both the practical performance and the spiritual meaning and importance of prayer in Islam.'
      }
    ]
  }
]
