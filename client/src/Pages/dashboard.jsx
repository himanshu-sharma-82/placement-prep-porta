import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialTopics = [
  {
    category: 'Arrays',
    problems: [
      { id: 1, title: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/remove-duplicate-elements-from-sorted-array/1', leetcodeLink: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/', videoLink: 'https://www.youtube.com/watch?v=Fm_p9lJ4Z_8', completed: false },
      { id: 2, title: 'Merge Sorted Array', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1', leetcodeLink: 'https://leetcode.com/problems/merge-sorted-array/', videoLink: 'https://www.youtube.com/watch?v=P1Ic85RarKY', completed: false },
      { id: 3, title: 'Majority Element', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/majority-element-1587115620/1', leetcodeLink: 'https://leetcode.com/problems/majority-element/', videoLink: 'https://www.youtube.com/watch?v=np_y44Wf468', completed: false },
      { id: 4, title: 'Majority Element II', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/majority-vote/1', leetcodeLink: 'https://leetcode.com/problems/majority-element-ii/', videoLink: 'https://www.youtube.com/watch?v=vwZeChGO09Q', completed: false },
      { id: 5, title: 'Next Permutation', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/next-permutation5226/1', leetcodeLink: 'https://leetcode.com/problems/next-permutation/', videoLink: 'https://www.youtube.com/watch?v=JDOXKqF60RQ', completed: false },
      { id: 6, title: '4Sum', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers1732/1', leetcodeLink: 'https://leetcode.com/problems/4sum/', videoLink: 'https://www.youtube.com/watch?v=eD3691552z8', completed: false },
    ]
  },
  {
    category: 'Strings',
    problems: [
      { id: 7, title: 'Find the Index of the First Occurrence in a String', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/index-of-the-first-occurrence-of-pattern-in-a-string/1', leetcodeLink: 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/', videoLink: 'https://www.youtube.com/watch?v=JoF0Z7nVSbA', completed: false },
      { id: 8, title: 'Roman to Integer', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/roman-number-to-integer3201/1', leetcodeLink: 'https://leetcode.com/problems/roman-to-integer/', videoLink: 'https://www.youtube.com/watch?v=3jdxYj3DD98', completed: false },
      { id: 9, title: 'Reverse Words in a String', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/reverse-words-in-a-given-string5405/1', leetcodeLink: 'https://leetcode.com/problems/reverse-words-in-a-string/', videoLink: 'https://www.youtube.com/watch?v=vhnRAaJybpA', completed: false },
      { id: 10, title: 'String to Integer (atoi)', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/implement-atoi/1', leetcodeLink: 'https://leetcode.com/problems/string-to-integer-atoi/', videoLink: 'https://www.youtube.com/watch?v=ZwAAn2E0eLg', completed: false },
      { id: 11, title: 'Count and Say', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/decode-the-pattern1138/1', leetcodeLink: 'https://leetcode.com/problems/count-and-say/', videoLink: 'https://www.youtube.com/watch?v=1YUqtoT9YoE', completed: false },
      { id: 12, title: 'Repeated String Match', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/repeated-string-match--141631/1', leetcodeLink: 'https://leetcode.com/problems/repeated-string-match/', videoLink: 'https://www.youtube.com/watch?v=VTY3K_41pB0', completed: false },
    ]
  },
  {
    category: 'Linked Lists',
    problems: [
      { id: 13, title: 'Intersection of Two Linked Lists', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/intersection-of-two-linked-list/1', leetcodeLink: 'https://leetcode.com/problems/intersection-of-two-linked-lists/', videoLink: 'https://www.youtube.com/watch?v=u4FWXscCSzg', completed: false },
      { id: 14, title: 'Reverse Linked List', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1', leetcodeLink: 'https://leetcode.com/problems/reverse-linked-list/', videoLink: 'https://www.youtube.com/watch?v=iRtLEfY-ERU', completed: false },
      { id: 15, title: 'Middle of the Linked List', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1', leetcodeLink: 'https://leetcode.com/problems/middle-of-the-linked-list/', videoLink: 'https://www.youtube.com/watch?v=sGdwSH8j-71', completed: false },
      { id: 16, title: 'Palindrome Linked List', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1', leetcodeLink: 'https://leetcode.com/problems/palindrome-linked-list/', videoLink: 'https://www.youtube.com/watch?v=lRYDbC867l0', completed: false },
      { id: 17, title: 'Merge Two Sorted Lists', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/merge-two-sorted-linked-lists/1', leetcodeLink: 'https://leetcode.com/problems/merge-two-sorted-lists/', videoLink: 'https://www.youtube.com/watch?v=Xb4gKU2fO0g', completed: false },
      { id: 18, title: 'Delete Node in a Linked List', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/delete-a-node-in-single-linked-list/1', leetcodeLink: 'https://leetcode.com/problems/delete-node-in-a-linked-list/', videoLink: 'https://www.youtube.com/watch?v=icnp4FJdZ_U', completed: false },
      { id: 19, title: 'Remove Nth Node From End of List', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1', leetcodeLink: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', videoLink: 'https://www.youtube.com/watch?v=Lhu3bjgTM38', completed: false },
      { id: 20, title: 'Add Two Numbers', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1', leetcodeLink: 'https://leetcode.com/problems/add-two-numbers/', videoLink: 'https://www.youtube.com/watch?v=LBVsXSMOIk4', completed: false },
      { id: 21, title: 'Linked List Cycle', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1', leetcodeLink: 'https://leetcode.com/problems/linked-list-cycle/', videoLink: 'https://www.youtube.com/watch?v=354J83hXcIk', completed: false },
    ]
  },
  {
    category: 'Stacks',
    problems: [
      { id: 22, title: 'Implement stack using array', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/implement-stack-using-array/1', leetcodeLink: 'https://leetcode.com/problems/implement-stack-using-queues/', videoLink: 'https://www.youtube.com/watch?v=GYptUgnIM_I', completed: false },
      { id: 23, title: 'Implement Stack Using Queues', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1', leetcodeLink: 'https://leetcode.com/problems/implement-stack-using-queues/', videoLink: 'https://www.youtube.com/watch?v=rW4vhMG12hI', completed: false },
      { id: 24, title: 'Valid Parentheses', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/parenthesis-checker2744/1', leetcodeLink: 'https://leetcode.com/problems/valid-parentheses/', videoLink: 'https://www.youtube.com/watch?v=wkDfsOebC1c', completed: false },
      { id: 25, title: 'Next Greater Element I', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/1', leetcodeLink: 'https://leetcode.com/problems/next-greater-element-i/', videoLink: 'https://www.youtube.com/watch?v=Du881K7Jtk8', completed: false },
      { id: 26, title: 'Min Stack', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/get-minimum-element-from-stack/1', leetcodeLink: 'https://leetcode.com/problems/min-stack/', videoLink: 'https://www.youtube.com/watch?v=V09NfaGf2ao', completed: false },
      { id: 27, title: 'Sort a stack', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/sort-a-stack/1', leetcodeLink: 'https://leetcode.com/problems/sort-an-array/', videoLink: 'https://www.youtube.com/watch?v=AZ4jEY_JAVc', completed: false },
      { id: 28, title: 'Next Smaller Element', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/immediate-smaller-element1142/1', leetcodeLink: 'https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/', videoLink: 'https://www.youtube.com/watch?v=m4hvxzLoN_I', completed: false },
      { id: 29, title: 'Online Stock Span', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/stock-span-problem-1587115621/1', leetcodeLink: 'https://leetcode.com/problems/online-stock-span/', videoLink: 'https://www.youtube.com/watch?v=slY1hCUacCI', completed: false },
      { id: 30, title: 'Largest Rectangle In Histogram', difficulty: 'Hard', gfgLink: 'https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram-1587115620/1', leetcodeLink: 'https://leetcode.com/problems/largest-rectangle-in-histogram/', videoLink: 'https://www.youtube.com/watch?v=jC_UCBXYPGM', completed: false },
    ]
  },
  {
    category: 'Queues',
    problems: [
      { id: 31, title: 'Queue Using Array', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/implement-queue-using-array/1', leetcodeLink: 'https://leetcode.com/problems/implement-queue-using-stacks/', videoLink: 'https://www.youtube.com/watch?v=M6GnoUDpqEE', completed: false },
      { id: 32, title: 'Implement Queue using Stacks', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1', leetcodeLink: 'https://leetcode.com/problems/implement-queue-using-stacks/', videoLink: 'https://www.youtube.com/watch?v=3etSMAwk45g', completed: false },
    ]
  },
  {
    category: 'Binary Search',
    problems: [
      { id: 33, title: 'Find nth root of m', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/find-nth-root-of-m5843/1', leetcodeLink: 'https://leetcode.com/problems/sqrtx/', videoLink: 'https://www.youtube.com/watch?v=rjEJeYCasfU', completed: false },
      { id: 34, title: 'Search a 2D Matrix', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/search-in-a-matrix-1587115621/1', leetcodeLink: 'https://leetcode.com/problems/search-a-2d-matrix/', videoLink: 'https://www.youtube.com/watch?v=JXU4Akft7yk', completed: false },
      { id: 35, title: 'Single Element in a Sorted Array', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/find-the-element-that-appears-once-in-sorted-array0624/1', leetcodeLink: 'https://leetcode.com/problems/single-element-in-a-sorted-array/', videoLink: 'https://www.youtube.com/watch?v=AZOmHuHadxU', completed: false },
      { id: 36, title: 'Search In Rotated Sorted Array', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/search-in-a-rotated-array4618/1', leetcodeLink: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', videoLink: 'https://www.youtube.com/watch?v=r3pZU8C2DQ8', completed: false },
      { id: 37, title: 'Find the Duplicate Number', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/find-duplicates-in-an-array/1', leetcodeLink: 'https://leetcode.com/problems/find-the-duplicate-number/', videoLink: 'https://www.youtube.com/watch?v=32Ll35mhWg0', completed: false },
      { id: 38, title: 'K-th element of two Arrays', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1', leetcodeLink: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', videoLink: 'https://www.youtube.com/watch?v=nv7F4PiJYzo', completed: false },
      { id: 39, title: 'Allocate Minimum Pages', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1', leetcodeLink: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/', videoLink: 'https://www.youtube.com/watch?v=gYmWHvRHu-s', completed: false },
      { id: 40, title: 'Aggressive Cows', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/aggressive-cows/1', leetcodeLink: 'https://leetcode.com/problems/magnetic-force-between-two-balls/', videoLink: 'https://www.youtube.com/watch?v=R_Mfwurqk8Y', completed: false },
      { id: 41, title: 'Median of a Row Wise Sorted Matrix', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1', leetcodeLink: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/', videoLink: 'https://www.youtube.com/watch?v=63fPMKkJ828', completed: false },
      { id: 42, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', gfgLink: 'https://practice.geeksforgeeks.org/problems/median-of-2-sorted-arrays-of-different-sizes/1', leetcodeLink: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', videoLink: 'https://www.youtube.com/watch?v=NTop3VTjmxk', completed: false },
    ]
  },
  {
    category: 'Two Pointers',
    problems: [
      { id: 43, title: '3Sum', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/find-triplets-with-zero-sum/1', leetcodeLink: 'https://leetcode.com/problems/3sum/', videoLink: 'https://www.youtube.com/watch?v=dhfA_j_B78s', completed: false },
      { id: 44, title: 'Compare Version Numbers', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/compare-two-versions/1', leetcodeLink: 'https://leetcode.com/problems/compare-version-numbers/', videoLink: 'https://www.youtube.com/watch?v=3-M9X3D_G6g', completed: false },
      { id: 45, title: 'Trapping Rain Water', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1', leetcodeLink: 'https://leetcode.com/problems/trapping-rain-water/', videoLink: 'https://www.youtube.com/watch?v=m18Hntz4go8', completed: false },
    ]
  },
  {
    category: 'Sliding Window',
    problems: [
      { id: 46, title: 'Max Consecutive Ones', difficulty: 'Easy', gfgLink: 'https://practice.geeksforgeeks.org/problems/maximum-consecutive-ones/1', leetcodeLink: 'https://leetcode.com/problems/max-consecutive-ones/', videoLink: 'https://www.youtube.com/watch?v=Mo33MjjMlyA', completed: false },
      { id: 47, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/length-of-the-longest-substring1729/1', leetcodeLink: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', videoLink: 'https://www.youtube.com/watch?v=qtVh-xeC62A', completed: false },
      { id: 48, title: 'Count distinct elements in every window', difficulty: 'Medium', gfgLink: 'https://practice.geeksforgeeks.org/problems/count-distinct-elements-in-every-window/1', leetcodeLink: 'https://leetcode.com/problems/subarrays-with-k-different-integers/', videoLink: 'https://www.youtube.com/watch?v=j48e8ac7srA', completed: false },
      { id: 49, title: 'Sliding Window Maximum', difficulty: 'Hard', gfgLink: 'https://practice.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k3101/1', leetcodeLink: 'https://leetcode.com/problems/sliding-window-maximum/', videoLink: 'https://www.youtube.com/watch?v=CZQGRp93K4g', completed: false },
      { id: 50, title: 'Max of min for every window size', difficulty: 'Hard', gfgLink: 'https://practice.geeksforgeeks.org/problems/maximum-of-minimum-for-every-window-size3453/1', leetcodeLink: 'https://leetcode.com/problems/sliding-window-maximum/', videoLink: 'https://www.youtube.com/watch?v=CK8D3r07cWk', completed: false },
    ]
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState(null); // null | 'practice' | 'aptitude' | 'resume'
  const [viewDetail, setViewDetail] = useState(false);
  const [topics, setTopics] = useState(initialTopics);
  const [openCategory, setOpenCategory] = useState('Arrays');

  const user = JSON.parse(localStorage.getItem('user')) || { name: 'him', email: 'test1@gmail.com', role: 'student' };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Metrics Calculations
  const allProblems = topics.flatMap(t => t.problems);
  const totalQuestions = allProblems.length;
  const completedQuestions = allProblems.filter(p => p.completed).length;
  const progressPercent = Math.round((completedQuestions / totalQuestions) * 100) || 0;

  const easyDone = allProblems.filter(p => p.difficulty === 'Easy' && p.completed).length;
  const easyTotal = allProblems.filter(p => p.difficulty === 'Easy').length;

  const mediumDone = allProblems.filter(p => p.difficulty === 'Medium' && p.completed).length;
  const mediumTotal = allProblems.filter(p => p.difficulty === 'Medium').length;

  const hardDone = allProblems.filter(p => p.difficulty === 'Hard' && p.completed).length;
  const hardTotal = allProblems.filter(p => p.difficulty === 'Hard').length;

  const toggleCheck = (id) => {
    setTopics(prev => prev.map(topic => ({
      ...topic,
      problems: topic.problems.map(prob => 
        prob.id === id ? { ...prob, completed: !prob.completed } : prob
      )
    })));
  };

  return (
    <div style={styles.dashboardWrapper}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background-color: #0d1117; color: #f0f6fc; font-family: system-ui, -apple-system, sans-serif; }
        .action-btn { background: #5865f2; color: white; border: none; padding: 12px; border-radius: 8px; font-weight: 700; cursor: pointer; width: 100%; transition: all 0.2s ease; }
        .action-btn:hover { background: #4752c4; transform: translateY(-1px); }
        .back-btn { background: #21262d; color: #c9d1d9; border: 1px solid #30363d; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: 0.2s; }
        .back-btn:hover { background: #30363d; color: #ffffff; }
        .sheet-card { transition: all 0.3s ease; }
        .sheet-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.3); }
        .link-badge { padding: 4px 8px; border-radius: 6px; font-size: 12px; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 4px; }
        .gfg-btn { background-color: #1e3a29; color: #4ade80; border: 1px solid #22c55e; }
        .leetcode-btn { background-color: #3b2312; color: #fb923c; border: 1px solid #f97316; }
        .video-btn { background-color: #3b1219; color: #f87171; border: 1px solid #ef4444; }
      `}</style>

      {/* TOP HEADER */}
      <div style={styles.header}>
        <div style={styles.portalBadge}>MERN PLACEMENT PORTAL</div>
        <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
      </div>

      <div style={styles.mainContainer}>

        {/* CONDITION 1: DASHBOARD MAIN CARDS VIEW */}
        {!activeModule && (
          <>
            <h1 style={styles.mainHeading}>Student Dashboard</h1>

            {/* USER INFO CARD */}
            <div style={styles.userCard}>
              <div style={styles.avatar}>{user.name ? user.name[0].toUpperCase() : 'H'}</div>
              <div>
                <h2 style={styles.welcomeText}>
                  Welcome back, <span style={{ color: '#a855f7' }}>{user.name || 'him'}</span> 👋
                </h2>
                <p style={styles.userInfoText}>
                  Role: <span style={{ color: '#c084fc', fontWeight: '600' }}>{user.role || 'student'}</span> | Email: {user.email || 'test1@gmail.com'}
                </p>
              </div>
            </div>

            <h3 style={styles.sectionHeading}>Placement Resources</h3>

            {/* RESOURCE CARDS GRID */}
            <div style={styles.gridContainer}>
              
              {/* CARD 1: MOCK TECHNICAL INTERVIEWS */}
              <div style={styles.resourceCard}>
                <div style={styles.cardIcon}>💻</div>
                <h3 style={styles.cardTitle}>Mock Technical Interviews</h3>
                <p style={styles.cardDesc}>Practice standard DSA & system design questions with simulated technical rounds.</p>
                <button className="action-btn" onClick={() => setActiveModule('practice')}>
                  Start Practice
                </button>
              </div>

              {/* CARD 2: APTITUDE TEST SERIES */}
              <div style={styles.resourceCard}>
                <div style={styles.cardIcon}>🧠</div>
                <h3 style={styles.cardTitle}>Aptitude Test Series</h3>
                <p style={styles.cardDesc}>Timed test modules designed to clear company screening and speed assessment rounds.</p>
                <button className="action-btn" onClick={() => setActiveModule('aptitude')}>
                  Take Test
                </button>
              </div>

              {/* CARD 3: RESUME BUILDER */}
              <div style={styles.resourceCard}>
                <div style={styles.cardIcon}>📄</div>
                <h3 style={styles.cardTitle}>Resume Builder & Review</h3>
                <p style={styles.cardDesc}>Build ATS-friendly tech resumes and get automated formatting feedback.</p>
                <button className="action-btn" onClick={() => setActiveModule('resume')}>
                  Build Resume
                </button>
              </div>

            </div>
          </>
        )}

        {/* CONDITION 2: DSA SHEET PRACTICE VIEW */}
        {activeModule === 'practice' && (
          <div>
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="back-btn" onClick={() => { setActiveModule(null); setViewDetail(false); }}>
                ← Back to Dashboard
              </button>
              <span style={{ fontSize: '14px', color: '#8b949e' }}>Mock Technical Interviews / DSA Sheet</span>
            </div>

            {!viewDetail ? (
              /* SHEET LIBRARY CARD VIEW */
              <div style={styles.sheetSectionWrapper}>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#c084fc', margin: '0 0 6px 0' }}>Elite DSA Sheet Library</h2>
                <p style={{ fontSize: '14px', color: '#8b949e', margin: '0 0 24px 0' }}>Your one-stop library of the world’s most trusted interview problem sets.</p>

                <div style={styles.libraryCard}>
                  <div style={styles.cardBanner}>
                    <div>
                      <h2 style={{ margin: 0, fontSize: '22px', color: '#fff' }}>Striver’s SDE Sheet</h2>
                      <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#cbd5e1' }}>Top Coding Interview Problems</p>
                    </div>
                    <span>🔖</span>
                  </div>

                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '18px', margin: '0 0 6px 0', color: '#f0f6fc' }}>Striver’s SDE Sheet</h3>
                    <p style={{ fontSize: '12px', color: '#8b949e', margin: '0 0 12px 0' }}>
                      <span style={{ color: '#f97316', fontWeight: '700' }}>Intermediate</span> • 1.3k learners • <span style={{ color: '#22c55e', fontWeight: '700' }}>4.6 ratings</span>
                    </p>

                    <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
                      <span style={styles.tag}>Algorithms</span>
                      <span style={styles.tag}>Data Structures</span>
                    </div>

                    <p style={{ fontSize: '13px', color: '#8b949e', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                      Striver's SDE Sheet contains handily crafted top coding interview questions...
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #30363d' }}>
                      <span style={{ fontSize: '16px', fontWeight: '800', color: '#22c55e' }}>Free</span>
                      <button className="action-btn" style={{ width: 'auto', padding: '10px 24px' }} onClick={() => setViewDetail(true)}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* SHEET DETAILS & PRACTICE TABLE VIEW */
              <div>
                <div style={styles.detailHeader}>
                  <div>
                    <h1 style={{ fontSize: '28px', fontWeight: '800', margin: '0 0 8px 0' }}>Striver’s SDE Sheet</h1>
                    <p style={{ color: '#8b949e', fontSize: '14px', margin: 0, maxWidth: '600px', lineHeight: '1.5' }}>
                      Top coding interview questions from Data Structures & Algorithms asked by companies like Google, Amazon, and Microsoft.
                    </p>
                  </div>

                  <div style={styles.topProgressWidget}>
                    <div style={{ fontSize: '13px', color: '#8b949e' }}>Roadmap Progress</div>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: '#f0f6fc', margin: '4px 0' }}>{completedQuestions} / {totalQuestions}</div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#c084fc' }}>{progressPercent}% Solved</div>
                  </div>
                </div>

                {/* MODULE METRICS */}
                <div style={styles.statsRow}>
                  <div style={styles.statBox}>
                    <span style={{ fontSize: '12px', color: '#22c55e', fontWeight: '700' }}>Easy</span>
                    <span style={{ fontSize: '15px', fontWeight: '700' }}>{easyDone} / {easyTotal}</span>
                  </div>
                  <div style={styles.statBox}>
                    <span style={{ fontSize: '12px', color: '#eab308', fontWeight: '700' }}>Medium</span>
                    <span style={{ fontSize: '15px', fontWeight: '700' }}>{mediumDone} / {mediumTotal}</span>
                  </div>
                  <div style={styles.statBox}>
                    <span style={{ fontSize: '12px', color: '#ef4444', fontWeight: '700' }}>Hard</span>
                    <span style={{ fontSize: '15px', fontWeight: '700' }}>{hardDone} / {hardTotal}</span>
                  </div>
                </div>

                {/* ACCORDION TOPICS & PROBLEMS */}
                <div style={{ marginTop: '24px' }}>
                  {topics.map((topic) => {
                    const topicDone = topic.problems.filter(p => p.completed).length;
                    const isOpen = openCategory === topic.category;

                    return (
                      <div key={topic.category} style={styles.accordionContainer}>
                        <div style={styles.accordionHeader} onClick={() => setOpenCategory(isOpen ? '' : topic.category)}>
                          <span style={{ fontWeight: '700', fontSize: '16px' }}>{topic.category}</span>
                          <span style={{ fontSize: '13px', color: '#8b949e' }}>{topicDone}/{topic.problems.length} Completed {isOpen ? '▲' : '▼'}</span>
                        </div>

                        {isOpen && (
                          <div style={{ overflowX: 'auto' }}>
                            <table style={styles.table}>
                              <thead>
                                <tr style={styles.thRow}>
                                  <th style={styles.th}>Status</th>
                                  <th style={styles.th}>Problem Title</th>
                                  <th style={styles.th}>Difficulty</th>
                                  <th style={styles.th}>Practice Links</th>
                                  <th style={styles.th}>Solution Video</th>
                                </tr>
                              </thead>
                              <tbody>
                                {topic.problems.map((prob) => (
                                  <tr key={prob.id} style={{ ...styles.tr, backgroundColor: prob.completed ? '#0d2818' : 'transparent' }}>
                                    <td style={styles.td}>
                                      <input 
                                        type="checkbox" 
                                        checked={prob.completed} 
                                        onChange={() => toggleCheck(prob.id)}
                                        style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#a855f7' }}
                                      />
                                    </td>
                                    <td style={{ ...styles.td, fontWeight: '600', color: prob.completed ? '#4ade80' : '#f0f6fc' }}>
                                      {prob.title}
                                    </td>
                                    <td style={styles.td}>
                                      <span style={{
                                        padding: '2px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: '700',
                                        backgroundColor: prob.difficulty === 'Easy' ? '#14532d' : prob.difficulty === 'Medium' ? '#713f12' : '#7f1d1d',
                                        color: prob.difficulty === 'Easy' ? '#4ade80' : prob.difficulty === 'Medium' ? '#fde047' : '#f87171'
                                      }}>
                                        {prob.difficulty}
                                      </span>
                                    </td>
                                    <td style={styles.td}>
                                      <div style={{ display: 'flex', gap: '6px' }}>
                                        <a href={prob.leetcodeLink} target="_blank" rel="noreferrer" className="link-badge leetcode-btn">LeetCode ↗</a>
                                        <a href={prob.gfgLink} target="_blank" rel="noreferrer" className="link-badge gfg-btn">GFG ↗</a>
                                      </div>
                                    </td>
                                    <td style={styles.td}>
                                      <a href={prob.videoLink} target="_blank" rel="noreferrer" className="link-badge video-btn">▶ Watch Solution</a>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* OTHER MODULE PLACEHOLDERS */}
        {activeModule === 'aptitude' && (
          <div>
            <button className="back-btn" onClick={() => setActiveModule(null)}>← Back to Dashboard</button>
            <h2 style={{ marginTop: '20px' }}>🧠 Aptitude Test Series</h2>
            <p style={{ color: '#8b949e' }}>Test modules are loading...</p>
          </div>
        )}

        {activeModule === 'resume' && (
          <div>
            <button className="back-btn" onClick={() => setActiveModule(null)}>← Back to Dashboard</button>
            <h2 style={{ marginTop: '20px' }}>📄 Resume Builder & Review</h2>
            <p style={{ color: '#8b949e' }}>Resume builder initialized...</p>
          </div>
        )}

      </div>
    </div>
  );
};

const styles = {
  dashboardWrapper: { minHeight: '100vh', backgroundColor: '#090d16', color: '#f0f6fc', paddingBottom: '40px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px' },
  portalBadge: { backgroundColor: '#1e293b', color: '#c084fc', padding: '6px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px' },
  logoutBtn: { backgroundColor: '#3f1719', color: '#f87171', border: '1px solid #7f1d1d', padding: '8px 18px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', fontSize: '13px' },
  mainContainer: { maxWidth: '1100px', margin: '0 auto', padding: '0 20px' },
  mainHeading: { fontSize: '32px', fontWeight: '900', margin: '0 0 20px 0' },
  userCard: { backgroundColor: '#131927', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #1e293b', marginBottom: '32px' },
  avatar: { width: '54px', height: '54px', borderRadius: '14px', backgroundColor: '#a855f7', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '800' },
  welcomeText: { fontSize: '22px', fontWeight: '800', margin: '0 0 4px 0' },
  userInfoText: { margin: 0, fontSize: '13px', color: '#94a3b8' },
  sectionHeading: { fontSize: '18px', fontWeight: '700', color: '#f0f6fc', marginBottom: '16px' },
  gridContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
  resourceCard: { backgroundColor: '#131927', borderRadius: '16px', padding: '28px 24px', border: '1px solid #1e293b', display: 'flex', flexDirection: 'column', gap: '12px' },
  cardIcon: { fontSize: '28px' },
  cardTitle: { fontSize: '18px', fontWeight: '800', margin: 0 },
  cardDesc: { fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', flexGrow: 1, margin: 0 },
  sheetSectionWrapper: { backgroundColor: '#131927', padding: '28px', borderRadius: '16px', border: '1px solid #1e293b' },
  libraryCard: { backgroundColor: '#1a2234', borderRadius: '14px', border: '1px solid #30363d', overflow: 'hidden', maxWidth: '380px' },
  cardBanner: { backgroundColor: '#0f172a', padding: '20px', display: 'flex', justifyContent: 'space-between' },
  tag: { backgroundColor: '#3b0764', color: '#c084fc', fontSize: '11px', fontWeight: '700', padding: '4px 8px', borderRadius: '12px' },
  detailHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', backgroundColor: '#131927', padding: '24px', borderRadius: '16px', border: '1px solid #1e293b' },
  topProgressWidget: { backgroundColor: '#1a2234', padding: '16px 24px', borderRadius: '12px', border: '1px solid #30363d', textAlign: 'center' },
  statsRow: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' },
  statBox: { backgroundColor: '#131927', padding: '16px', borderRadius: '12px', border: '1px solid #1e293b', display: 'flex', flexDirection: 'column', gap: '4px' },
  accordionContainer: { backgroundColor: '#131927', borderRadius: '12px', border: '1px solid #1e293b', marginBottom: '12px', overflow: 'hidden' },
  accordionHeader: { padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', backgroundColor: '#1a2234' },
  table: { width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13.5px' },
  thRow: { backgroundColor: '#0f172a', borderBottom: '1px solid #1e293b' },
  th: { padding: '12px 16px', color: '#94a3b8', fontWeight: '700' },
  tr: { borderBottom: '1px solid #1e293b', transition: '0.2s' },
  td: { padding: '12px 16px' }
};

export default Dashboard;