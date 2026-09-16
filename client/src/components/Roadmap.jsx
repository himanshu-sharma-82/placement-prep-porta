import React, { useState } from 'react';

const roadmapsData = [
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    category: 'DSA',
    tagline: 'Build problem-solving muscle with arrays, trees, graphs, DP, and heaps.',
    level: 'Intermediate',
    learners: '3.2k learners',
    rating: '4.9 ★',
    tags: ['DSA', 'Interview Prep', 'FAANG'],
    bgBanner: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)',
    months: [
      { month: 'Month 1', title: 'Basics & Time Complexity', detail: 'C++/Java/Python syntax, Time & Space Complexity, Analysis, Math for DSA.' },
      { month: 'Month 2', title: 'Arrays, Strings & Recursion', detail: 'Two Pointers, Sliding Window, Matrix, Recursion fundamentals, Backtracking.' },
      { month: 'Month 3', title: 'Linear Data Structures', detail: 'Linked Lists, Stacks, Queues, HashMaps, HashSets, and Bit Manipulation.' },
      { month: 'Month 4', title: 'Trees & Heaps', detail: 'Binary Trees, BST, Binary Heap, Priority Queues, Trie data structures.' },
      { month: 'Month 5', title: 'Graphs & Advanced Algo', detail: 'BFS, DFS, Dijkstra, Topological Sort, Disjoint Set Union (DSU), Segment Trees.' },
      { month: 'Month 6', title: 'Dynamic Programming & Mock Prep', detail: '1D/2D DP, DP on Trees, DP on Grids, Top 150 LeetCode Medium/Hard Questions.' }
    ]
  },
  {
    id: 'mern',
    title: 'MERN Stack Web Development',
    category: 'MERN STACK',
    tagline: 'MongoDB, Express, React, Node - APIs, Auth, State Management & Deployments.',
    level: 'Beginner to Advanced',
    learners: '4.1k learners',
    rating: '4.8 ★',
    tags: ['MERN', 'Full Stack', 'Projects'],
    bgBanner: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
    months: [
      { month: 'Month 1', title: 'Frontend Basics (HTML/CSS/JS)', detail: 'HTML5, Modern CSS Flexbox/Grid, ES6+ JavaScript, DOM Manipulation, Async/Await.' },
      { month: 'Month 2', title: 'React.js Mastery', detail: 'React Components, Props, State, React Hooks, Router v6, Tailwind CSS.' },
      { month: 'Month 3', title: 'Advanced React & Redux', detail: 'Redux Toolkit, Context API, Performance Optimization, Custom Hooks, Form Handling.' },
      { month: 'Month 4', title: 'Backend with Node.js & Express', detail: 'Node environment, RESTful APIs, Express Middleware, JWT Authentication & Security.' },
      { month: 'Month 5', title: 'Database (MongoDB & Mongoose)', detail: 'NoSQL Schemas, Mongoose ORM, Aggregation Framework, Database Indexing.' },
      { month: 'Month 6', title: 'Full Stack Projects & Deployment', detail: 'Building Production Apps (E-commerce / LMS), Docker basics, CI/CD, Vercel/Render Deploy.' }
    ]
  },
  {
    id: 'system-design',
    title: 'System Design (HLD + LLD)',
    category: 'SYSTEM DESIGN',
    tagline: 'Master High-Level Architecture, Microservices, Low-Level Design & Design Patterns.',
    level: 'Advanced',
    learners: '2.5k learners',
    rating: '4.9 ★',
    tags: ['HLD', 'LLD', 'Scalability'],
    bgBanner: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
    months: [
      { month: 'Month 1', title: 'OOPs & Solid Principles', detail: 'Object-Oriented Design, SOLID Principles, Clean Code Architecture.' },
      { month: 'Month 2', title: 'Design Patterns (LLD)', detail: 'Creational, Structural, and Behavioral Design Patterns with Java/C++ implementations.' },
      { month: 'Month 3', title: 'High-Level Design Fundamentals', detail: 'Load Balancers, Caching (Redis), CDN, Proxies, API Gateways, Rate Limiters.' },
      { month: 'Month 4', title: 'Databases & Distributed Systems', detail: 'SQL vs NoSQL, Sharding, Replication, CAP Theorem, Message Queues (Kafka/RabbitMQ).' },
      { month: 'Month 5', title: 'Real World Systems Case Studies', detail: 'Designing Uber, WhatsApp, Netflix, URL Shortener, and E-commerce Checkout.' },
      { month: 'Month 6', title: 'Fault Tolerance & Performance', detail: 'Observability, Logging, Metrics, Chaos Engineering, High Availability System Design.' }
    ]
  },
  {
    id: 'aptitude',
    title: 'Aptitude, Reasoning & Soft Skills',
    category: 'APTITUDE',
    tagline: 'Quantitative Ability, Logical Reasoning, Verbal & Interview Communication.',
    level: 'All Levels',
    learners: '5.0k learners',
    rating: '4.7 ★',
    tags: ['Aptitude', 'Campus Prep', 'Screening'],
    bgBanner: 'linear-gradient(135deg, #fef08a 0%, #fde047 100%)',
    months: [
      { month: 'Month 1', title: 'Quantitative Aptitude - Part 1', detail: 'Percentages, Profit & Loss, Ratio & Proportion, Averages, Number Systems.' },
      { month: 'Month 2', title: 'Quantitative Aptitude - Part 2', detail: 'Time & Work, Speed Distance & Time, Permutation & Combination, Probability.' },
      { month: 'Month 3', title: 'Logical Reasoning', detail: 'Blood Relations, Seating Arrangements, Coding-Decoding, Syllogisms, Puzzles.' },
      { month: 'Month 4', title: 'Data Interpretation & Verbal', detail: 'Pie Charts, Bar Graphs, Reading Comprehension, Grammar Rules, Vocabulary.' },
      { month: 'Month 5', title: 'Soft Skills & HR Round Prep', detail: 'Resume Building, Self Introduction, GD (Group Discussion) Techniques, Body Language.' },
      { month: 'Month 6', title: 'Mock Aptitude Tests & Speed Drills', detail: 'Company Specific Screening Test Series (TCS, Infosys, Wipro, Product Companies).' }
    ]
  },
  {
    id: 'oops',
    title: 'Object-Oriented Programming (OOPS)',
    category: 'OOPS',
    tagline: 'Core Concepts, Encapsulation, Abstraction, Inheritance, Polymorphism & Real Usage.',
    level: 'Beginner to Intermediate',
    learners: '2.8k learners',
    rating: '4.8 ★',
    tags: ['Core CS', 'Interview Prep', 'Java/C++'],
    bgBanner: 'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)',
    months: [
      { month: 'Month 1', title: 'Classes & Objects Fundamentals', detail: 'Classes, Objects, Constructors, Destructors, Memory Allocation in C++/Java.' },
      { month: 'Month 2', title: 'Four Pillars of OOPS', detail: 'Encapsulation, Data Hiding, Abstraction, Access Modifiers.' },
      { month: 'Month 3', title: 'Inheritance & Code Reusability', detail: 'Single, Multiple, Multilevel, Hierarchical, Diamond Problem & Interfaces.' },
      { month: 'Month 4', title: 'Polymorphism & Dynamic Binding', detail: 'Function Overloading, Operator Overloading, Method Overriding, Virtual Functions.' },
      { month: 'Month 5', title: 'Memory Management & Exception Handling', detail: 'Pointers, References, Garbage Collection, Custom Exceptions, Try-Catch Blocks.' },
      { month: 'Month 6', title: 'OOPS Design Problems & Questions', detail: 'Designing Parking Lot, Elevator System, Library Management using pure OOPS.' }
    ]
  }
];

const Roadmaps = () => {
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);

  return (
    <div style={styles.container}>
      <style>{`
        * { box-sizing: border-box; }
        
        .roadmap-card {
          transition: all 0.3s ease;
        }
        .roadmap-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 28px rgba(124, 58, 237, 0.12);
        }

        .view-btn {
          background-color: #7c3aed;
          color: white;
          transition: background-color 0.2s ease;
        }
        .view-btn:hover {
          background-color: #6d28d9;
        }
      `}</style>

      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Explore Structured 6-Month Roadmaps</h2>
        <p style={styles.subtitle}>Select a core subject to view its complete 6-month placement roadmap</p>
      </div>

      {/* Roadmaps Grid */}
      <div style={styles.grid}>
        {roadmapsData.map((item) => (
          <div key={item.id} className="roadmap-card" style={styles.card}>
            {/* Top Graphic Banner */}
            <div style={{ ...styles.cardBanner, background: item.bgBanner }}>
              <span style={styles.categoryBadge}>{item.category}</span>
              <div style={styles.bannerIcon}>🗺️</div>
            </div>

            {/* Card Content */}
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.metaInfo}>
                <span style={{ color: '#6b21a8', fontWeight: '600' }}>{item.level}</span> • {item.learners} • <span style={{ color: '#16a34a', fontWeight: '700' }}>{item.rating}</span>
              </p>

              {/* Tags */}
              <div style={styles.tagGroup}>
                {item.tags.map((tag, idx) => (
                  <span key={idx} style={styles.tag}>{tag}</span>
                ))}
              </div>

              <p style={styles.description}>{item.tagline}</p>

              {/* Company Badges Mock */}
              <div style={styles.companyRow}>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Target Top Companies</span>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#334155' }}>G • M • A • N</span>
              </div>

              {/* Action Button */}
              <button 
                className="view-btn" 
                style={styles.actionButton}
                onClick={() => setSelectedRoadmap(item)}
              >
                View 6-Month Roadmap
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 6-MONTH ROADMAP MODAL POPUP */}
      {selectedRoadmap && (
        <div style={styles.modalOverlay} onClick={() => setSelectedRoadmap(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <div>
                <span style={styles.modalBadge}>6-MONTH DETAILED ROADMAP</span>
                <h3 style={styles.modalTitle}>{selectedRoadmap.title}</h3>
              </div>
              <button style={styles.closeBtn} onClick={() => setSelectedRoadmap(null)}>✕</button>
            </div>

            <div style={styles.timeline}>
              {selectedRoadmap.months.map((m, index) => (
                <div key={index} style={styles.timelineStep}>
                  <div style={styles.monthBadge}>{m.month}</div>
                  <div style={styles.stepContent}>
                    <h4 style={styles.stepTitle}>{m.title}</h4>
                    <p style={styles.stepDetail}>{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.modalFooter}>
              <button className="view-btn" style={styles.modalCloseAction} onClick={() => setSelectedRoadmap(null)}>
                Got it, Start Preparing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1240px',
    margin: '0 auto',
    padding: '30px 20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '36px',
  },
  title: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#0f172a',
    margin: '0 0 8px 0',
  },
  subtitle: {
    fontSize: '15px',
    color: '#64748b',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  cardBanner: {
    padding: '20px',
    height: '110px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  categoryBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    color: '#0f172a',
    fontSize: '11px',
    fontWeight: '800',
    padding: '4px 10px',
    borderRadius: '8px',
    letterSpacing: '0.5px',
  },
  bannerIcon: {
    fontSize: '32px',
  },
  cardBody: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '800',
    color: '#0f172a',
    margin: '0 0 6px 0',
  },
  metaInfo: {
    fontSize: '12px',
    color: '#64748b',
    margin: '0 0 12px 0',
  },
  tagGroup: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
    marginBottom: '12px',
  },
  tag: {
    backgroundColor: '#f3e8ff',
    color: '#7c3aed',
    fontSize: '11px',
    fontWeight: '600',
    padding: '3px 8px',
    borderRadius: '12px',
  },
  description: {
    fontSize: '13px',
    color: '#475569',
    lineHeight: '1.5',
    margin: '0 0 16px 0',
    flex: 1,
  },
  companyRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '12px',
    borderTop: '1px dashed #e2e8f0',
    marginBottom: '16px',
  },
  actionButton: {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '10px',
    fontWeight: '700',
    fontSize: '13.5px',
    cursor: 'pointer',
  },

  /* MODAL STYLES */
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '650px',
    maxHeight: '85vh',
    borderRadius: '20px',
    padding: '28px',
    overflowY: 'auto',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px',
    borderBottom: '1px solid #f1f5f9',
    paddingBottom: '14px',
  },
  modalBadge: {
    fontSize: '11px',
    fontWeight: '800',
    color: '#7c3aed',
    backgroundColor: '#f5f3ff',
    padding: '4px 10px',
    borderRadius: '8px',
  },
  modalTitle: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#0f172a',
    margin: '6px 0 0 0',
  },
  closeBtn: {
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#64748b',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  timelineStep: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
    backgroundColor: '#f8fafc',
    padding: '14px 16px',
    borderRadius: '12px',
    borderLeft: '4px solid #7c3aed',
  },
  monthBadge: {
    backgroundColor: '#7c3aed',
    color: '#ffffff',
    fontSize: '11px',
    fontWeight: '700',
    padding: '4px 8px',
    borderRadius: '6px',
    whiteSpace: 'nowrap',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#1e293b',
    margin: '0 0 4px 0',
  },
  stepDetail: {
    fontSize: '13px',
    color: '#64748b',
    margin: 0,
    lineHeight: '1.4',
  },
  modalFooter: {
    marginTop: '24px',
    textAlign: 'right',
  },
  modalCloseAction: {
    padding: '10px 20px',
    borderRadius: '10px',
    border: 'none',
    fontWeight: '700',
    fontSize: '13px',
    cursor: 'pointer',
  }
};

export default Roadmaps;