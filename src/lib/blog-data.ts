export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  images: string[];
  content: string;
  link?: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "icpc-journey-2023-2024",
    title: "My ICPC Journey: Lessons from Asia Dhaka Regional 2023 & 2024",
    excerpt:
      "Reflecting on our intense 5-hour competitive programming battles at the ICPC Asia Dhaka Regional Contests — from Bauet_Twiested_Minds in 2023 to leading BAUET_Alphacentauri in 2024.",
    date: "Dec 2024",
    readTime: "6 min read",
    tags: ["ICPC", "Competitive Programming", "Leadership", "Teamwork"],
    images: ["/asset/icpc/icpc2023.jpg", "/asset/icpc/icpc2024.jpg"],
    link: "https://icpc.global/ICPCID/992DOU25IVCQ",
    content: `Participating in the International Collegiate Programming Contest (ICPC) Asia Dhaka Regional has been one of the defining experiences of my undergraduate life at BAUET. The 5-hour intense contest environment tests not only algorithmic problem-solving ability but also endurance, strategic thinking, and team dynamics.

## ICPC Asia Dhaka Regional 2023-24: Bauet_Twiested_Minds

In the 2023-2024 ICPC Asia Dhaka Regional Contest, I represented BAUET with my team **Bauet_Twiested_Minds**. It was our first major regional arena exposure, facing off against top competitive programmers from across the nation.

- **Team Name**: Bauet_Twiested_Minds
- **Rank Achieved**: 139
- **Problems Solved**: 3 Problems

**Key Takeaways & Experience:**
The 5-hour long contest was an extraordinary learning curve. Managing pressure during freeze time, allocating time effectively between fast solves and tough algorithmic problems, and communicating clearly under strict time constraints were key challenges. We learned how essential back-solving and edge-case checking on paper before hitting the editor really are.

## ICPC Asia Dhaka Regional 2024-25: BAUET_Alphacentauri

Returning for the 2024-2025 season, I stepped up into the role of **Team Leader** for our team **BAUET_Alphacentauri**. Armed with lessons from the previous year, we aimed for better strategy, problem distribution, and team leadership.

- **Team Name**: BAUET_Alphacentauri
- **Rank Achieved**: 217
- **Problems Solved**: 3 Problems
- **Role**: Team Leader

**Leadership & Growth:**
As team leader, my responsibility expanded beyond code to guiding overall strategy—deciding when to pivot from a stuck submission, managing morale during long dry spells in the contest, and maintaining calm focus. Leading a team in a high-stakes 5-hour regional contest taught me lessons in decision-making and collaboration that carry over directly into real-world software engineering projects.

## Final Reflection

Across both years, ICPC instilled in me a deep passion for algorithmic optimization, structured problem breakdown, and working seamlessly within a technical team. The camaraderie, late-night mock contests, and adrenaline of getting an Accepted (AC) verdict make every moment unforgettable.`,
  },
  {
    id: 2,
    slug: "offline-signature-verification-siamese-networks",
    title:
      "Offline Signature Verification System Using Siamese Networks with Four Distinct Backbone Architectures",
    excerpt:
      "Our research paper published in IEEE ICECTE 2026 presenting an offline signature forgery detection system evaluated on the CEDAR dataset using MobileNetV2, VGG16, InceptionV3, and Custom CNN backbones.",
    date: "Jan 31, 2026",
    readTime: "5 min read",
    tags: [
      "Research",
      "IEEE",
      "Deep Learning",
      "Siamese Networks",
      "Biometrics",
    ],
    images: [
      "/asset/publication-day/img1.jpg",
      "/asset/publication-day/img2.jpg",
      "/asset/publication-day/img3.jpg",
      "/asset/publication-day/img4.jpg",
      "/asset/publication-day/img5.jpg",
    ],
    link: "https://doi.org/10.1109/ICECTE69292.2026.11429465",
    content: `I am proud to share our latest research work published in the **2026 5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE), IEEE** on January 31, 2026.

## Paper Overview

**Title**: Offline Signature Verification System Using Siamese Networks with Four Distinct Backbone Architectures: MobileNetV2, VGG16, InceptionV3 and a Custom CNN  
**Conference**: IEEE | 2026 5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE)  
**Publication Date**: January 31, 2026  
**DOI**: 10.1109/ICECTE69292.2026.11429465  
**Keywords**: Signature Verification, Siamese Networks, Deep Learning, Biometric Authentication, CNN, MobileNetV2, VGG16, InceptionV3

## Abstract & Research Summary

This research presents an offline signature verification system based on **Siamese Neural Networks** using four distinct backbone architectures: **MobileNetV2, VGG16, InceptionV3, and a Custom CNN**. The study evaluates the effectiveness of deep learning techniques for biometric authentication and signature forgery detection using the standard **CEDAR signature dataset**.

Key aspects of the study include:
- **Architecture**: Comparative evaluation of feature extraction capabilities across standard pre-trained architectures vs. custom lightweight CNN designs.
- **Verification Metric**: Contrastive loss evaluation to measure similarity distance between genuine and forged signature pairs.
- **Application**: Enhanced security solutions for banking, legal document processing, and automated verification workflows.

## Publication Day & Presentation Experience

Presenting our paper at ICECTE 2026 was a rewarding milestone. Engaging with domain experts, discussing neural network optimization techniques, and receiving positive feedback from the computer vision research community reinforced my commitment to pursuing practical AI & deep learning research.`,
  },
  {
    id: 3,
    slug: "bauet-tech-fair-2025",
    title: "Double Victory & Leadership at BAUET Tech Fair 2025",
    excerpt:
      "Securing 1st Place in the Intra-University Programming Contest as Team Leader, serving on the Event Management Team, and receiving honors as Vice President of BAUET Computer Society.",
    date: "Feb 2025",
    readTime: "4 min read",
    tags: ["Programming Contest", "Tech Fair", "BAUET", "Leadership", "Awards"],
    images: [
      "/asset/tech-fair/img1.jpg",
      "/asset/tech-fair/img2.jpg",
      "/asset/tech-fair/img3.jpg",
    ],
    content: `BAUET Tech Fair 2025 was an unforgettable event filled with intense competition, student innovation, and organizational leadership. I had the privilege of contributing to the event in multiple roles — as a contestant, team leader, organizer, and executive member.

## 1st Place — Intra University Programming Contest

Our team achieved **1st Place** in the flagship Intra-University Programming Contest by solving **4 problems**.

- **Role**: Team Leader (Md. Kawsar Ali, CSE-14)
- **Teammates**: HM Jubayed (CSE-16), Rifath Sarker (CSE-16)
- **Problems Solved**: 4 Problems

Leading the team to victory required fast tactical planning, distributing problems based on member strengths, and maintaining speed without accumulating penalty points.

## Leadership & Event Management

Beyond competing, I contributed actively behind the scenes:
- **Event Management Team**: Worked on organizing the contest environment, logistics, dynamic problem distribution, and smooth execution throughout Tech Fair 2025.
- **Vice President Prize & Recognition**: Honored with a special prize and recognition for my leadership contributions as **Vice President of the BAUET Computer Society**.

It was a rewarding experience balancing operational execution for a campus-wide tech festival while competing at the highest level!`,
  },
  {
    id: 4,
    slug: "precise-energy-2025-rosatom",
    title:
      "Precise Energy 2025: Volunteering & Practical Contest by Rosatom Russia",
    excerpt:
      "Conducting the campus quiz competition and participating in the practical engineering contest organized by Rosatom Russia state atomic energy corporation.",
    date: "Oct 26, 2025",
    readTime: "4 min read",
    tags: [
      "Rosatom",
      "Precise Energy",
      "Volunteering",
      "Quiz Contest",
      "Event",
    ],
    images: [
      "/asset/precise-energy/img1.jpg",
      "/asset/precise-energy/img2.jpg",
      "/asset/precise-energy/img3.jpg",
      "/asset/precise-energy/img4.jpg",
    ],
    content: `On **October 26, 2025**, BAUET hosted the **Precise Energy 2025** event, organized by **Rosatom Russia** (State Atomic Energy Corporation Rosatom). The event brought together university teams to engage in nuclear energy awareness, science quizzes, and practical engineering challenges.

## My Role & Volunteering Experience

As a student volunteer for Rosatom Russia:
- I worked directly with the Rosatom event team to conduct a campus-wide **quiz contest** for students.
- Facilitated team registrations, question coordination, and stage management.
- Coordinated with participating university teams invited to join the **practical engineering contest**.

## Key Highlights & Reflection

Collaborating with an international organization like Rosatom provided great insights into technical event management, public speaking, and organizing large-scale academic competitions. It was a thrilling experience seeing university students engage enthusiastically with complex energy concepts and practical problem solving!`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostById(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}
