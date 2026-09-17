import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Aptitude from '../components/apptitude.jsx';

// ==========================================
// 1. DATASETS: DSA (150 PROBLEMS: 80E / 50M / 20H)
// ==========================================
const dsa150Data = [
  {
    category: 'Arrays & Math (25 Problems)',
    problems: [
      { id: 'dsa_1', title: 'Set Matrix Zeroes', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/set-matrix-zeroes/', gfgLink: 'https://practice.geeksforgeeks.org/problems/set-matrix-zeros/1', videoLink: 'https://www.youtube.com/watch?v=N0MgLvLSXbg', completed: false },
      { id: 'dsa_2', title: "Pascal's Triangle", difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/pascals-triangle/', gfgLink: 'https://practice.geeksforgeeks.org/problems/pascal-triangle0652/1', videoLink: 'https://www.youtube.com/watch?v=6FLvhQjZqv8', completed: false },
      { id: 'dsa_3', title: 'Next Permutation', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/next-permutation/', gfgLink: 'https://practice.geeksforgeeks.org/problems/next-permutation5226/1', videoLink: 'https://www.youtube.com/watch?v=JDOXKqF60RQ', completed: false },
      { id: 'dsa_4', title: "Kadane's Algorithm (Max Subarray Sum)", difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/maximum-subarray/', gfgLink: 'https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=AHZpyENo7k4', completed: false },
      { id: 'dsa_5', title: 'Sort Colors (0s, 1s and 2s)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/sort-colors/', gfgLink: 'https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1', videoLink: 'https://www.youtube.com/watch?v=tp8JIuCXBaU', completed: false },
      { id: 'dsa_6', title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', gfgLink: 'https://practice.geeksforgeeks.org/problems/stock-buy-and-sell2615/1', videoLink: 'https://www.youtube.com/watch?v=excAOvwF_Wk', completed: false },
      { id: 'dsa_7', title: 'Rotate Image / Matrix', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/rotate-image/', gfgLink: 'https://practice.geeksforgeeks.org/problems/rotate-by-90-degree-1587115621/1', videoLink: 'https://www.youtube.com/watch?v=Z0w2pnL3I88', completed: false },
      { id: 'dsa_8', title: 'Merge Overlapping Subintervals', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/merge-intervals/', gfgLink: 'https://practice.geeksforgeeks.org/problems/overlapping-intervals--170633/1', videoLink: 'https://www.youtube.com/watch?v=2JzRBPFYbKE', completed: false },
      { id: 'dsa_9', title: 'Merge Two Sorted Arrays Without Extra Space', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/merge-sorted-array/', gfgLink: 'https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=n7uwj04E0I4', completed: false },
      { id: 'dsa_10', title: 'Find the Duplicate Number', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/find-the-duplicate-number/', gfgLink: 'https://practice.geeksforgeeks.org/problems/find-duplicates-in-an-array/1', videoLink: 'https://www.youtube.com/watch?v=32Ll35mhWg0', completed: false },
      { id: 'dsa_11', title: 'Repeat and Missing Number Array', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/set-mismatch/', gfgLink: 'https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1', videoLink: 'https://www.youtube.com/watch?v=5nMGY4VUoRY', completed: false },
      { id: 'dsa_12', title: 'Inversion of Array', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/global-and-local-inversions/', gfgLink: 'https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=kQ1mJlwW-c0', completed: false },
      { id: 'dsa_13', title: 'Search in a 2D Matrix', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/search-a-2d-matrix/', gfgLink: 'https://practice.geeksforgeeks.org/problems/search-in-a-matrix-1587115621/1', videoLink: 'https://www.youtube.com/watch?v=JXU4Akft7yk', completed: false },
      { id: 'dsa_14', title: 'Pow(x, n)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/powx-n/', gfgLink: 'https://practice.geeksforgeeks.org/problems/power-of-numbers-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=l0YC3876qub', completed: false },
      { id: 'dsa_15', title: 'Majority Element (> N/2 times)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/majority-element/', gfgLink: 'https://practice.geeksforgeeks.org/problems/majority-element-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=nP_y44Wf468', completed: false },
      { id: 'dsa_16', title: 'Majority Element II (> N/3 times)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/majority-element-ii/', gfgLink: 'https://practice.geeksforgeeks.org/problems/majority-vote/1', videoLink: 'https://www.youtube.com/watch?v=vwZeChGO09Q', completed: false },
      { id: 'dsa_17', title: 'Grid Unique Paths', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/unique-paths/', gfgLink: 'https://practice.geeksforgeeks.org/problems/number-of-unique-paths5339/1', videoLink: 'https://www.youtube.com/watch?v=t_f0nwwdg5c', completed: false },
      { id: 'dsa_18', title: 'Reverse Pairs', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/reverse-pairs/', gfgLink: 'https://practice.geeksforgeeks.org/problems/count-pairs-in-an-array4145/1', videoLink: 'https://www.youtube.com/watch?v=0e4bZaP3MDI', completed: false },
      { id: 'dsa_19', title: 'Two Sum Problem', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/two-sum/', gfgLink: 'https://practice.geeksforgeeks.org/problems/key-pair5516/1', videoLink: 'https://www.youtube.com/watch?v=UXDSeD9mN-k', completed: false },
      { id: 'dsa_20', title: '4-Sum Problem', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/4sum/', gfgLink: 'https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers1732/1', videoLink: 'https://www.youtube.com/watch?v=eD3691552z8', completed: false },
      { id: 'dsa_21', title: 'Longest Consecutive Sequence', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/longest-consecutive-sequence/', gfgLink: 'https://practice.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/1', videoLink: 'https://www.youtube.com/watch?v=oO5uLE7EUlM', completed: false },
      { id: 'dsa_22', title: 'Largest Subarray with 0 Sum', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/contiguous-array/', gfgLink: 'https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1', videoLink: 'https://www.youtube.com/watch?v=xmguZ6GbatA', completed: false },
      { id: 'dsa_23', title: 'Count Subarrays with Given XOR K', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/subarray-sums-divisible-by-k/', gfgLink: 'https://practice.geeksforgeeks.org/problems/count-subarray-with-given-xor/1', videoLink: 'https://www.youtube.com/watch?v=eZr-6p0B7ME', completed: false },
      { id: 'dsa_24', title: 'Max Consecutive Ones', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/max-consecutive-ones/', gfgLink: 'https://practice.geeksforgeeks.org/problems/maximum-consecutive-ones/1', videoLink: 'https://www.youtube.com/watch?v=Mo33MjjMlyA', completed: false },
      { id: 'dsa_25', title: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/', gfgLink: 'https://practice.geeksforgeeks.org/problems/remove-duplicate-elements-from-sorted-array/1', videoLink: 'https://www.youtube.com/watch?v=Fm_p9lJ4Z_8', completed: false }
    ]
  },
  {
    category: 'Two Pointers & Greedy (20 Problems)',
    problems: [
      { id: 'dsa_26', title: '3-Sum Problem', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/3sum/', gfgLink: 'https://practice.geeksforgeeks.org/problems/find-triplets-with-zero-sum/1', videoLink: 'https://www.youtube.com/watch?v=dhfA_j_B78s', completed: false },
      { id: 'dsa_27', title: 'Trapping Rain Water', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/trapping-rain-water/', gfgLink: 'https://practice.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1', videoLink: 'https://www.youtube.com/watch?v=m18Hntz4go8', completed: false },
      { id: 'dsa_28', title: 'N Meetings in One Room', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/meeting-rooms/', gfgLink: 'https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=II6ziNnub1Q', completed: false },
      { id: 'dsa_29', title: 'Minimum Platforms for Trains', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/meeting-rooms-ii/', gfgLink: 'https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=AsGZwR_FWok', completed: false },
      { id: 'dsa_30', title: 'Job Sequencing Problem', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/maximum-profit-in-job-scheduling/', gfgLink: 'https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=LjPx4wQaRIs', completed: false },
      { id: 'dsa_31', title: 'Fractional Knapsack Problem', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/maximum-units-on-a-truck/', gfgLink: 'https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=F_DDzYnxO14', completed: false },
      { id: 'dsa_32', title: 'Greedy Minimum Coins', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/coin-change/', gfgLink: 'https://practice.geeksforgeeks.org/problems/min-coin5549/1', videoLink: 'https://www.youtube.com/watch?v=mVg9DaFdnV8', completed: false },
      { id: 'dsa_33', title: 'Assign Cookies', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/assign-cookies/', gfgLink: 'https://practice.geeksforgeeks.org/problems/assign-cookies/1', videoLink: 'https://www.youtube.com/watch?v=DIX2p7PflhY', completed: false },
      { id: 'dsa_34', title: 'Lemonade Change', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/lemonade-change/', gfgLink: 'https://practice.geeksforgeeks.org/problems/lemonade-change/1', videoLink: 'https://www.youtube.com/watch?v=n_tmibEhO6Q', completed: false },
      { id: 'dsa_35', title: 'Valid Parenthesis String with Wildcard', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/valid-parenthesis-string/', gfgLink: 'https://practice.geeksforgeeks.org/problems/valid-parenthesis-string/1', videoLink: 'https://www.youtube.com/watch?v=cHT6sG_hUZI', completed: false },
      { id: 'dsa_36', title: 'Candy Distribution Problem', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/candy/', gfgLink: 'https://practice.geeksforgeeks.org/problems/candy/1', videoLink: 'https://www.youtube.com/watch?v=IIqVFvKE6RY', completed: false },
      { id: 'dsa_37', title: 'Move Zeroes to End', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/move-zeroes/', gfgLink: 'https://practice.geeksforgeeks.org/problems/move-all-zeroes-to-end-of-array0751/1', videoLink: 'https://www.youtube.com/watch?v=ea3CTN3_5Xg', completed: false },
      { id: 'dsa_38', title: 'Check if Array is Sorted and Rotated', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/', gfgLink: 'https://practice.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1', videoLink: 'https://www.youtube.com/watch?v=Yp94c1gUq3M', completed: false },
      { id: 'dsa_39', title: 'Linear Search in Unsorted Array', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/find-target-indices-after-sorting-array/', gfgLink: 'https://practice.geeksforgeeks.org/problems/who-will-win-1587115621/1', videoLink: 'https://www.youtube.com/watch?v=246V51AWwZ0', completed: false },
      { id: 'dsa_40', title: 'Find Missing Number in Array', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/missing-number/', gfgLink: 'https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/1', videoLink: 'https://www.youtube.com/watch?v=bYWLJb3vCWY', completed: false },
      { id: 'dsa_41', title: 'Single Number in Pairs Array', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/single-number/', gfgLink: 'https://practice.geeksforgeeks.org/problems/element-appearing-once2552/1', videoLink: 'https://www.youtube.com/watch?v=bYWLJb3vCWY', completed: false },
      { id: 'dsa_42', title: 'Union of Two Sorted Arrays', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/intersection-of-two-arrays/', gfgLink: 'https://practice.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1', videoLink: 'https://www.youtube.com/watch?v=wvcQg43_V8U', completed: false },
      { id: 'dsa_43', title: 'Rearrange Array Elements by Sign', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/rearrange-array-elements-by-sign/', gfgLink: 'https://practice.geeksforgeeks.org/problems/array-of-alternate-ve-and-ve-nos1401/1', videoLink: 'https://www.youtube.com/watch?v=h4aBagy4Uok', completed: false },
      { id: 'dsa_44', title: 'Subarray Sum Equals K', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/subarray-sum-equals-k/', gfgLink: 'https://practice.geeksforgeeks.org/problems/subarrays-with-sum-k/1', videoLink: 'https://www.youtube.com/watch?v=xvNwoz-ufKA', completed: false },
      { id: 'dsa_45', title: 'Spiral Matrix Traversal', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/spiral-matrix/', gfgLink: 'https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1', videoLink: 'https://www.youtube.com/watch?v=3Zv-s9UUrFM', completed: false }
    ]
  },
  {
    category: 'Linked Lists (20 Problems)',
    problems: [
      { id: 'dsa_46', title: 'Reverse a Singly Linked List', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/reverse-linked-list/', gfgLink: 'https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1', videoLink: 'https://www.youtube.com/watch?v=iRtLEfY-ERU', completed: false },
      { id: 'dsa_47', title: 'Find the Middle Node of Linked List', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/middle-of-the-linked-list/', gfgLink: 'https://practice.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1', videoLink: 'https://www.youtube.com/watch?v=sGdwSH8j-71', completed: false },
      { id: 'dsa_48', title: 'Merge Two Sorted Linked Lists', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/merge-two-sorted-lists/', gfgLink: 'https://practice.geeksforgeeks.org/problems/merge-two-sorted-linked-lists/1', videoLink: 'https://www.youtube.com/watch?v=Xb4gKU2fO0g', completed: false },
      { id: 'dsa_49', title: 'Remove N-th Node From End of List', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', gfgLink: 'https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1', videoLink: 'https://www.youtube.com/watch?v=Lhu3bjgTM38', completed: false },
      { id: 'dsa_50', title: 'Add Two Numbers Represented as LL', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/add-two-numbers/', gfgLink: 'https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1', videoLink: 'https://www.youtube.com/watch?v=LBVsXSMOIk4', completed: false },
      { id: 'dsa_51', title: 'Delete Node in a Linked List in O(1)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/delete-node-in-a-linked-list/', gfgLink: 'https://practice.geeksforgeeks.org/problems/delete-a-node-in-single-linked-list/1', videoLink: 'https://www.youtube.com/watch?v=icnp4FJdZ_U', completed: false },
      { id: 'dsa_52', title: 'Intersection Point of Two Linked Lists', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/intersection-of-two-linked-lists/', gfgLink: 'https://practice.geeksforgeeks.org/problems/intersection-of-two-linked-list/1', videoLink: 'https://www.youtube.com/watch?v=u4FWXscCSzg', completed: false },
      { id: 'dsa_53', title: 'Detect Cycle in a Linked List', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/linked-list-cycle/', gfgLink: 'https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1', videoLink: 'https://www.youtube.com/watch?v=354J83hXcIk', completed: false },
      { id: 'dsa_54', title: 'Find the Starting Point of Loop in LL', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/linked-list-cycle-ii/', gfgLink: 'https://practice.geeksforgeeks.org/problems/find-first-node-of-loop-in-a-linked-list/1', videoLink: 'https://www.youtube.com/watch?v=2Kd0KKmmHFc', completed: false },
      { id: 'dsa_55', title: 'Check if Linked List is Palindrome', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/palindrome-linked-list/', gfgLink: 'https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1', videoLink: 'https://www.youtube.com/watch?v=lRYDbC867l0', completed: false },
      { id: 'dsa_56', title: 'Reverse Nodes in k-Group', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/reverse-nodes-in-k-group/', gfgLink: 'https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1', videoLink: 'https://www.youtube.com/watch?v=Of0HPkk3JgI', completed: false },
      { id: 'dsa_57', title: 'Rotate a Linked List by K nodes', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/rotate-list/', gfgLink: 'https://practice.geeksforgeeks.org/problems/rotate-a-linked-list/1', videoLink: 'https://www.youtube.com/watch?v=uT7YI7XbTY8', completed: false },
      { id: 'dsa_58', title: 'Flattening a Linked List', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/', gfgLink: 'https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1', videoLink: 'https://www.youtube.com/watch?v=ysytSSXpAI0', completed: false },
      { id: 'dsa_59', title: 'Copy List with Random Pointer', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/copy-list-with-random-pointer/', gfgLink: 'https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1', videoLink: 'https://www.youtube.com/watch?v=q570bKdrnlw', completed: false },
      { id: 'dsa_60', title: 'Design a Doubly Linked List', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/design-linked-list/', gfgLink: 'https://practice.geeksforgeeks.org/problems/introduction-to-doubly-linked-list/1', videoLink: 'https://www.youtube.com/watch?v=0kFhQvB_gW0', completed: false },
      { id: 'dsa_61', title: 'Delete all occurrences of a key in DLL', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/remove-linked-list-elements/', gfgLink: 'https://practice.geeksforgeeks.org/problems/delete-all-occurrences-of-a-given-key-in-a-doubly-linked-list/1', videoLink: 'https://www.youtube.com/watch?v=Mh0NH_PKAOo', completed: false },
      { id: 'dsa_62', title: 'Find pairs with given sum in DLL', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/', gfgLink: 'https://practice.geeksforgeeks.org/problems/find-pairs-with-given-sum-in-doubly-linked-list/1', videoLink: 'https://www.youtube.com/watch?v=YitR4dQuddE', completed: false },
      { id: 'dsa_63', title: 'Remove Duplicates from Sorted DLL', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list/', gfgLink: 'https://practice.geeksforgeeks.org/problems/remove-duplicates-from-a-sorted-doubly-linked-list/1', videoLink: 'https://www.youtube.com/watch?v=YJKVTnOJXSY', completed: false },
      { id: 'dsa_64', title: 'Odd Even Linked List', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/odd-even-linked-list/', gfgLink: 'https://practice.geeksforgeeks.org/problems/rearrange-a-linked-list/1', videoLink: 'https://www.youtube.com/watch?v=qf6hmPQU5HQ', completed: false },
      { id: 'dsa_65', title: 'Sort a Linked List of 0s, 1s and 2s', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/sort-list/', gfgLink: 'https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1', videoLink: 'https://www.youtube.com/watch?v=gRII7LhdJWc', completed: false }
    ]
  },
  {
    category: 'Binary Search (20 Problems)',
    problems: [
      { id: 'dsa_66', title: 'Binary Search in Sorted Array', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/binary-search/', gfgLink: 'https://practice.geeksforgeeks.org/problems/binary-search-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=MHf6a42LK1w', completed: false },
      { id: 'dsa_67', title: 'Implement Lower Bound', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/search-insert-position/', gfgLink: 'https://practice.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=6zhGS79oQ4k', completed: false },
      { id: 'dsa_68', title: 'Implement Upper Bound', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/', gfgLink: 'https://practice.geeksforgeeks.org/problems/ceil-the-floor2802/1', videoLink: 'https://www.youtube.com/watch?v=6zhGS79oQ4k', completed: false },
      { id: 'dsa_69', title: 'Search Insert Position', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/search-insert-position/', gfgLink: 'https://practice.geeksforgeeks.org/problems/search-insert-position-of-k-in-a-sorted-array/1', videoLink: 'https://www.youtube.com/watch?v=6zhGS79oQ4k', completed: false },
      { id: 'dsa_70', title: 'Check Floor and Ceil in Array', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/search-insert-position/', gfgLink: 'https://practice.geeksforgeeks.org/problems/ceil-the-floor2802/1', videoLink: 'https://www.youtube.com/watch?v=6zhGS79oQ4k', completed: false },
      { id: 'dsa_71', title: 'Search in Rotated Sorted Array', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', gfgLink: 'https://practice.geeksforgeeks.org/problems/search-in-a-rotated-array4618/1', videoLink: 'https://www.youtube.com/watch?v=r3pZU8C2DQ8', completed: false },
      { id: 'dsa_72', title: 'Search in Rotated Sorted Array II (Duplicates)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/search-in-rotated-sorted-array-ii/', gfgLink: 'https://practice.geeksforgeeks.org/problems/search-in-a-rotated-array0959/1', videoLink: 'https://www.youtube.com/watch?v=w2G2W8l__pc', completed: false },
      { id: 'dsa_73', title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', gfgLink: 'https://practice.geeksforgeeks.org/problems/minimum-element-in-a-sorted-and-rotated-array3611/1', videoLink: 'https://www.youtube.com/watch?v=nhEMDKV442g', completed: false },
      { id: 'dsa_74', title: 'Find Single Element in Sorted Array', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/single-element-in-a-sorted-array/', gfgLink: 'https://practice.geeksforgeeks.org/problems/find-the-element-that-appears-once-in-sorted-array0624/1', videoLink: 'https://www.youtube.com/watch?v=AZOmHuHadxU', completed: false },
      { id: 'dsa_75', title: 'Find Peak Element', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/find-peak-element/', gfgLink: 'https://practice.geeksforgeeks.org/problems/peak-element/1', videoLink: 'https://www.youtube.com/watch?v=cXxmbemS6XM', completed: false },
      { id: 'dsa_76', title: 'Find Square Root of an Integer (Binary Search)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/sqrtx/', gfgLink: 'https://practice.geeksforgeeks.org/problems/square-root/1', videoLink: 'https://www.youtube.com/watch?v=Bsv3FPUX_BA', completed: false },
      { id: 'dsa_77', title: 'Find Nth Root of Integer M', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/powx-n/', gfgLink: 'https://practice.geeksforgeeks.org/problems/find-nth-root-of-m5843/1', videoLink: 'https://www.youtube.com/watch?v=rjEJeYCasfU', completed: false },
      { id: 'dsa_78', title: 'Koko Eating Bananas', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/koko-eating-bananas/', gfgLink: 'https://practice.geeksforgeeks.org/problems/koko-eating-bananas/1', videoLink: 'https://www.youtube.com/watch?v=qyfekrNni90', completed: false },
      { id: 'dsa_79', title: 'Minimum Days to Make M Bouquets', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/', gfgLink: 'https://practice.geeksforgeeks.org/problems/minimum-days-to-make-m-bouquets/1', videoLink: 'https://www.youtube.com/watch?v=TXAuxeYBTdg', completed: false },
      { id: 'dsa_80', title: 'Find the Smallest Divisor Given a Threshold', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/', gfgLink: 'https://practice.geeksforgeeks.org/problems/smallest-divisor/1', videoLink: 'https://www.youtube.com/watch?v=UvBKTVaG6U8', completed: false },
      { id: 'dsa_81', title: 'Capacity To Ship Packages Within D Days', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/', gfgLink: 'https://practice.geeksforgeeks.org/problems/capacity-to-ship-packages-within-d-days/1', videoLink: 'https://www.youtube.com/watch?v=MG-Ac4TAvTY', completed: false },
      { id: 'dsa_82', title: 'Aggressive Cows (Spoj Problem)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/magnetic-force-between-two-balls/', gfgLink: 'https://practice.geeksforgeeks.org/problems/aggressive-cows/1', videoLink: 'https://www.youtube.com/watch?v=R_Mfwurqk8Y', completed: false },
      { id: 'dsa_83', title: 'Allocate Minimum Number of Pages', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/split-array-largest-sum/', gfgLink: 'https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1', videoLink: 'https://www.youtube.com/watch?v=gYmWHvRHu-s', completed: false },
      { id: 'dsa_84', title: 'Median of Two Sorted Arrays of Different Sizes', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', gfgLink: 'https://practice.geeksforgeeks.org/problems/median-of-2-sorted-arrays-of-different-sizes/1', videoLink: 'https://www.youtube.com/watch?v=NTop3VTjmxk', completed: false },
      { id: 'dsa_85', title: 'K-th Element of Two Sorted Arrays', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/', gfgLink: 'https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1', videoLink: 'https://www.youtube.com/watch?v=nv7F4PiJYzo', completed: false }
    ]
  },
  {
    category: 'Strings (15 Problems)',
    problems: [
      { id: 'dsa_86', title: 'Reverse Words in a Given String', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/reverse-words-in-a-string/', gfgLink: 'https://practice.geeksforgeeks.org/problems/reverse-words-in-a-given-string5405/1', videoLink: 'https://www.youtube.com/watch?v=vhnRAaJybpA', completed: false },
      { id: 'dsa_87', title: 'Longest Common Prefix in String Array', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/longest-common-prefix/', gfgLink: 'https://practice.geeksforgeeks.org/problems/longest-common-prefix-in-an-array5129/1', videoLink: 'https://www.youtube.com/watch?v=wtOQaovlW4Y', completed: false },
      { id: 'dsa_88', title: 'Check for Isomorphic Strings', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/isomorphic-strings/', gfgLink: 'https://practice.geeksforgeeks.org/problems/isomorphic-strings-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=7yF-U1hLEqQ', completed: false },
      { id: 'dsa_89', title: 'Check if One String is Rotation of Other', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/rotate-string/', gfgLink: 'https://practice.geeksforgeeks.org/problems/check-if-strings-are-rotations-of-each-other-or-not-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=I_W_070h8rY', completed: false },
      { id: 'dsa_90', title: 'Valid Anagram Check', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/valid-anagram/', gfgLink: 'https://practice.geeksforgeeks.org/problems/anagram-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=3Pv4T9kGZcE', completed: false },
      { id: 'dsa_91', title: 'Sort Characters By Frequency', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/sort-characters-by-frequency/', gfgLink: 'https://practice.geeksforgeeks.org/problems/sorting-elements-of-an-array-by-frequency/0', videoLink: 'https://www.youtube.com/watch?v=hGzXkLgX_kM', completed: false },
      { id: 'dsa_92', title: 'Maximum Nesting Depth of Parentheses', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/', gfgLink: 'https://practice.geeksforgeeks.org/problems/maximum-nesting-depth-of-the-parentheses/1', videoLink: 'https://www.youtube.com/watch?v=b0V-L1NvZg8', completed: false },
      { id: 'dsa_93', title: 'Roman to Integer Conversion', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/roman-to-integer/', gfgLink: 'https://practice.geeksforgeeks.org/problems/roman-number-to-integer3201/1', videoLink: 'https://www.youtube.com/watch?v=3jdxYj3DD98', completed: false },
      { id: 'dsa_94', title: 'Integer to Roman Conversion', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/integer-to-roman/', gfgLink: 'https://practice.geeksforgeeks.org/problems/convert-to-roman-no/1', videoLink: 'https://www.youtube.com/watch?v=ohBNdSJyLh8', completed: false },
      { id: 'dsa_95', title: 'Implement Atoi (String to Integer)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/string-to-integer-atoi/', gfgLink: 'https://practice.geeksforgeeks.org/problems/implement-atoi/1', videoLink: 'https://www.youtube.com/watch?v=ZwAAn2E0eLg', completed: false },
      { id: 'dsa_96', title: 'Count and Say Sequence', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/count-and-say/', gfgLink: 'https://practice.geeksforgeeks.org/problems/decode-the-pattern1138/1', videoLink: 'https://www.youtube.com/watch?v=1YUqtoT9YoE', completed: false },
      { id: 'dsa_97', title: 'Repeated String Match (Rabin Karp)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/repeated-string-match/', gfgLink: 'https://practice.geeksforgeeks.org/problems/repeated-string-match--141631/1', videoLink: 'https://www.youtube.com/watch?v=VTY3K_41pB0', completed: false },
      { id: 'dsa_98', title: 'Longest Palindromic Substring', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/longest-palindromic-substring/', gfgLink: 'https://practice.geeksforgeeks.org/problems/longest-palindrome-in-a-string3411/1', videoLink: 'https://www.youtube.com/watch?v=XYQecbcd6_c', completed: false },
      { id: 'dsa_99', title: 'Minimum Characters to Make Palindrome', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/shortest-palindrome/', gfgLink: 'https://practice.geeksforgeeks.org/problems/minimum-characters-to-be-added-at-front-to-make-string-palindrome/1', videoLink: 'https://www.youtube.com/watch?v=1hUv9NmgWbI', completed: false },
      { id: 'dsa_100', title: 'Z-Function Algorithm / KMP Search', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/', gfgLink: 'https://practice.geeksforgeeks.org/problems/longest-prefix-suffix2527/1', videoLink: 'https://www.youtube.com/watch?v=V5-7GzOfADQ', completed: false }
    ]
  },
  {
    category: 'Trees, BST & Heaps (25 Problems)',
    problems: [
      { id: 'dsa_101', title: 'Binary Tree Inorder Traversal', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/binary-tree-inorder-traversal/', gfgLink: 'https://practice.geeksforgeeks.org/problems/inorder-traversal/1', videoLink: 'https://www.youtube.com/watch?v=Z_Hk_GZCUg8', completed: false },
      { id: 'dsa_102', title: 'Binary Tree Preorder Traversal', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/binary-tree-preorder-traversal/', gfgLink: 'https://practice.geeksforgeeks.org/problems/preorder-traversal/1', videoLink: 'https://www.youtube.com/watch?v=RlUhorGQ3Qs', completed: false },
      { id: 'dsa_103', title: 'Binary Tree Postorder Traversal', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/binary-tree-postorder-traversal/', gfgLink: 'https://practice.geeksforgeeks.org/problems/postorder-traversal/1', videoLink: 'https://www.youtube.com/watch?v=2YBhNLODD8Q', completed: false },
      { id: 'dsa_104', title: 'Level Order Traversal / BFS', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', gfgLink: 'https://practice.geeksforgeeks.org/problems/level-order-traversal/1', videoLink: 'https://www.youtube.com/watch?v=EoAsWbO7sqg', completed: false },
      { id: 'dsa_105', title: 'Maximum Depth / Height of Binary Tree', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', gfgLink: 'https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1', videoLink: 'https://www.youtube.com/watch?v=eD3tm245goI', completed: false },
      { id: 'dsa_106', title: 'Check for Balanced Binary Tree', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/balanced-binary-tree/', gfgLink: 'https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1', videoLink: 'https://www.youtube.com/watch?v=Yt50cFyi8Wo', completed: false },
      { id: 'dsa_107', title: 'Diameter of Binary Tree', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/diameter-of-binary-tree/', gfgLink: 'https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1', videoLink: 'https://www.youtube.com/watch?v=Rezetez59Nk', completed: false },
      { id: 'dsa_108', title: 'Maximum Path Sum in Binary Tree', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/', gfgLink: 'https://practice.geeksforgeeks.org/problems/maximum-path-sum-from-any-node/1', videoLink: 'https://www.youtube.com/watch?v=WszrfSwMz58', completed: false },
      { id: 'dsa_109', title: 'Check if Two Trees are Identical', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/same-tree/', gfgLink: 'https://practice.geeksforgeeks.org/problems/determine-if-two-trees-are-identical/1', videoLink: 'https://www.youtube.com/watch?v=BhuvF_-PWS0', completed: false },
      { id: 'dsa_110', title: 'Zig-Zag / Spiral Level Order Traversal', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/', gfgLink: 'https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1', videoLink: 'https://www.youtube.com/watch?v=3OXWEdlIGl4', completed: false },
      { id: 'dsa_111', title: 'Boundary Traversal of Binary Tree', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/boundary-of-binary-tree/', gfgLink: 'https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1', videoLink: 'https://www.youtube.com/watch?v=0ca1nvR0be4', completed: false },
      { id: 'dsa_112', title: 'Vertical Order Traversal of Binary Tree', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/', gfgLink: 'https://practice.geeksforgeeks.org/problems/print-a-binary-tree-in-vertical-order/1', videoLink: 'https://www.youtube.com/watch?v=q_a6lpbVu10', completed: false },
      { id: 'dsa_113', title: 'Top View of Binary Tree', difficulty: 'Medium', leetcodeLink: 'https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1', gfgLink: 'https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1', videoLink: 'https://www.youtube.com/watch?v=Et9OCDNvW78', completed: false },
      { id: 'dsa_114', title: 'Bottom View of Binary Tree', difficulty: 'Medium', leetcodeLink: 'https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1', gfgLink: 'https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1', videoLink: 'https://www.youtube.com/watch?v=0FtVY6I4pB8', completed: false },
      { id: 'dsa_115', title: 'Right/Left View of Binary Tree', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/binary-tree-right-side-view/', gfgLink: 'https://practice.geeksforgeeks.org/problems/right-view-of-binary-tree/1', videoLink: 'https://www.youtube.com/watch?v=KV4mRzTjlAk', completed: false },
      { id: 'dsa_116', title: 'Check for Symmetrical Binary Tree', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/symmetric-tree/', gfgLink: 'https://practice.geeksforgeeks.org/problems/symmetric-tree/1', videoLink: 'https://www.youtube.com/watch?v=nKggNAiEpFM', completed: false },
      { id: 'dsa_117', title: 'Lowest Common Ancestor for Two Nodes (LCA)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/', gfgLink: 'https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1', videoLink: 'https://www.youtube.com/watch?v=_-QHfMDde90', completed: false },
      { id: 'dsa_118', title: 'Search in a Binary Search Tree (BST)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/search-in-a-binary-search-tree/', gfgLink: 'https://practice.geeksforgeeks.org/problems/search-a-node-in-bst/1', videoLink: 'https://www.youtube.com/watch?v=KcNt6v_56cc', completed: false },
      { id: 'dsa_119', title: 'Find Min and Max in BST', difficulty: 'Easy', leetcodeLink: 'https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1', gfgLink: 'https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1', videoLink: 'https://www.youtube.com/watch?v=KcNt6v_56cc', completed: false },
      { id: 'dsa_120', title: 'Validate Binary Search Tree (BST)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/validate-binary-search-tree/', gfgLink: 'https://practice.geeksforgeeks.org/problems/check-for-bst/1', videoLink: 'https://www.youtube.com/watch?v=f-sj7I5gbhy', completed: false },
      { id: 'dsa_121', title: 'LCA in Binary Search Tree', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/', gfgLink: 'https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1', videoLink: 'https://www.youtube.com/watch?v=cX_kPV_foZc', completed: false },
      { id: 'dsa_122', title: 'Construct BST from Preorder Traversal', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/', gfgLink: 'https://practice.geeksforgeeks.org/problems/preorder-to-postorder4423/1', videoLink: 'https://www.youtube.com/watch?v=UmJT3j26t1I', completed: false },
      { id: 'dsa_123', title: 'K-th Smallest / Largest Element in BST', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/', gfgLink: 'https://practice.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1', videoLink: 'https://www.youtube.com/watch?v=9TJYWh0srv8', completed: false },
      { id: 'dsa_124', title: 'Kth Largest Element in an Array (Min-Heap)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', gfgLink: 'https://practice.geeksforgeeks.org/problems/k-largest-elements4206/1', videoLink: 'https://www.youtube.com/watch?v=yAs3tONaf3s', completed: false },
      { id: 'dsa_125', title: 'Top K Frequent Elements (PriorityQueue)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/top-k-frequent-elements/', gfgLink: 'https://practice.geeksforgeeks.org/problems/top-k-frequent-elements-in-array/1', videoLink: 'https://www.youtube.com/watch?v=7VoJn544QrM', completed: false }
    ]
  },
  {
    category: 'Dynamic Programming & Graphs (25 Problems)',
    problems: [
      { id: 'dsa_126', title: 'Climbing Stairs (Fibonacci DP)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/climbing-stairs/', gfgLink: 'https://practice.geeksforgeeks.org/problems/count-ways-to-reach-the-nth-stair-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=mLfjzJsN8us', completed: false },
      { id: 'dsa_127', title: 'Frog Jump with K distances', difficulty: 'Easy', leetcodeLink: 'https://practice.geeksforgeeks.org/problems/minimal-moves-to-form-a-string/1', gfgLink: 'https://practice.geeksforgeeks.org/problems/geek-jump/1', videoLink: 'https://www.youtube.com/watch?v=Kmh3rhyETB8', completed: false },
      { id: 'dsa_128', title: 'House Robber / Maximum Non-Adjacent Sum', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/house-robber/', gfgLink: 'https://practice.geeksforgeeks.org/problems/stickler-theif-1587115621/1', videoLink: 'https://www.youtube.com/watch?v=GrMBfJNk_NY', completed: false },
      { id: 'dsa_129', title: 'Ninja Training (2D Grid DP)', difficulty: 'Medium', leetcodeLink: 'https://practice.geeksforgeeks.org/problems/geeks-training/1', gfgLink: 'https://practice.geeksforgeeks.org/problems/geeks-training/1', videoLink: 'https://www.youtube.com/watch?v=AE39gJ9j54o', completed: false },
      { id: 'dsa_130', title: 'Grid Unique Paths with Obstacles', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/unique-paths-ii/', gfgLink: 'https://practice.geeksforgeeks.org/problems/unique-paths-in-a-grid--170647/1', videoLink: 'https://www.youtube.com/watch?v=TmhpgXScLyY', completed: false },
      { id: 'dsa_131', title: 'Minimum Path Sum in Grid', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/minimum-path-sum/', gfgLink: 'https://practice.geeksforgeeks.org/problems/minimum-cost-path3833/1', videoLink: 'https://www.youtube.com/watch?v=_rgTlyky1uQ', completed: false },
      { id: 'dsa_132', title: 'Subset Sum Problem', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/partition-equal-subset-sum/', gfgLink: 'https://practice.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1', videoLink: 'https://www.youtube.com/watch?v=fWX9xDmIzRI', completed: false },
      { id: 'dsa_133', title: '0/1 Knapsack Problem', difficulty: 'Medium', leetcodeLink: 'https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1', gfgLink: 'https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1', videoLink: 'https://www.youtube.com/watch?v=GqOmJHQvIvA', completed: false },
      { id: 'dsa_134', title: 'Coin Change Minimum Coins', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/coin-change/', gfgLink: 'https://practice.geeksforgeeks.org/problems/number-of-coins1824/1', videoLink: 'https://www.youtube.com/watch?v=myPeWb3Y68A', completed: false },
      { id: 'dsa_135', title: 'Target Sum Problem', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/target-sum/', gfgLink: 'https://practice.geeksforgeeks.org/problems/target-sum-1626326450/1', videoLink: 'https://www.youtube.com/watch?v=b3GD8263-PQ', completed: false },
      { id: 'dsa_136', title: 'Longest Common Subsequence (LCS)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/longest-common-subsequence/', gfgLink: 'https://practice.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=NPZn9jBrX8U', completed: false },
      { id: 'dsa_137', title: 'Edit Distance (Insert, Delete, Replace)', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/edit-distance/', gfgLink: 'https://practice.geeksforgeeks.org/problems/edit-distance3853/1', videoLink: 'https://www.youtube.com/watch?v=fJaKO8FbDdo', completed: false },
      { id: 'dsa_138', title: 'Longest Increasing Subsequence (LIS)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/longest-increasing-subsequence/', gfgLink: 'https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence-1587115620/1', videoLink: 'https://www.youtube.com/watch?v=ekcwMsSIzVc', completed: false },
      { id: 'dsa_139', title: 'Matrix Chain Multiplication (MCM)', difficulty: 'Hard', leetcodeLink: 'https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1', gfgLink: 'https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1', videoLink: 'https://www.youtube.com/watch?v=vRVfmbCFW7Y', completed: false },
      { id: 'dsa_140', title: 'Palindrome Partitioning II (Min Cuts)', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/palindrome-partitioning-ii/', gfgLink: 'https://practice.geeksforgeeks.org/problems/palindromic-patitioning4845/1', videoLink: 'https://www.youtube.com/watch?v=_gPcZXjnb9c', completed: false },
      { id: 'dsa_141', title: 'BFS of Graph', difficulty: 'Easy', leetcodeLink: 'https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1', gfgLink: 'https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1', videoLink: 'https://www.youtube.com/watch?v=-tgVpUgsQ5A', completed: false },
      { id: 'dsa_142', title: 'DFS of Graph', difficulty: 'Easy', leetcodeLink: 'https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1', gfgLink: 'https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1', videoLink: 'https://www.youtube.com/watch?v=Qzf1aNv2uE4', completed: false },
      { id: 'dsa_143', title: 'Number of Provinces (Connected Components)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/number-of-provinces/', gfgLink: 'https://practice.geeksforgeeks.org/problems/number-of-provinces/1', videoLink: 'https://www.youtube.com/watch?v=ACzkVtewUYA', completed: false },
      { id: 'dsa_144', title: 'Rotting Oranges (Multi-source BFS)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/rotting-oranges/', gfgLink: 'https://practice.geeksforgeeks.org/problems/rotten-oranges2536/1', videoLink: 'https://www.youtube.com/watch?v=yf3oUhkvqA0', completed: false },
      { id: 'dsa_145', title: 'Detect Cycle in an Undirected Graph', difficulty: 'Medium', leetcodeLink: 'https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1', gfgLink: 'https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1', videoLink: 'https://www.youtube.com/watch?v=BPlrALf1LDU', completed: false },
      { id: 'dsa_146', title: 'Topological Sort (Kahn’s BFS / DFS)', difficulty: 'Medium', leetcodeLink: 'https://practice.geeksforgeeks.org/problems/topological-sort/1', gfgLink: 'https://practice.geeksforgeeks.org/problems/topological-sort/1', videoLink: 'https://www.youtube.com/watch?v=5lZ0iJMrUMk', completed: false },
      { id: 'dsa_147', title: 'Course Schedule I & II', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/course-schedule/', gfgLink: 'https://practice.geeksforgeeks.org/problems/course-schedule/1', videoLink: 'https://www.youtube.com/watch?v=WAOfKQKx-6g', completed: false },
      { id: 'dsa_148', title: "Dijkstra's Algorithm for Shortest Path", difficulty: 'Medium', leetcodeLink: 'https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjoining-matrix/1', gfgLink: 'https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjoining-matrix/1', videoLink: 'https://www.youtube.com/watch?v=V6H1qAeB-l4', completed: false },
      { id: 'dsa_149', title: 'Bellman Ford Algorithm (Negative Cycles)', difficulty: 'Medium', leetcodeLink: 'https://practice.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1', gfgLink: 'https://practice.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1', videoLink: 'https://www.youtube.com/watch?v=0vVofAhAYjc', completed: false },
      { id: 'dsa_150', title: 'Floyd Warshall Algorithm (All Pairs Shortest Path)', difficulty: 'Medium', leetcodeLink: 'https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1', gfgLink: 'https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1', videoLink: 'https://www.youtube.com/watch?v=YbY8npwG70c', completed: false }
    ]
  }
];

// ==========================================
// 2. DATASETS: SQL 75+ QUERIES TO MASTER
// ==========================================
const sqlMasterData = [
  {
    category: 'DDL, DML & Basic Select (15 Queries)',
    problems: [
      { id: 'sql_1', title: 'Recyclable and Low Fat Products', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/recyclable-and-low-fat-products/', gfgLink: 'https://www.geeksforgeeks.org/sql-select-query/', videoLink: 'https://www.youtube.com/watch?v=ER9m_7F6Vv4', completed: false },
      { id: 'sql_2', title: 'Find Customer Referee (IS NULL / != 2)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/find-customer-referee/', gfgLink: 'https://www.geeksforgeeks.org/sql-null-values/', videoLink: 'https://www.youtube.com/watch?v=ER9m_7F6Vv4', completed: false },
      { id: 'sql_3', title: 'Big Countries (Area > 3M or Pop > 25M)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/big-countries/', gfgLink: 'https://www.geeksforgeeks.org/sql-where-clause/', videoLink: 'https://www.youtube.com/watch?v=ER9m_7F6Vv4', completed: false },
      { id: 'sql_4', title: 'Article Views I (DISTINCT viewer_id)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/article-views-i/', gfgLink: 'https://www.geeksforgeeks.org/sql-distinct-clause/', videoLink: 'https://www.youtube.com/watch?v=ER9m_7F6Vv4', completed: false },
      { id: 'sql_5', title: 'Invalid Tweets (LENGTH / CHAR_LENGTH > 15)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/invalid-tweets/', gfgLink: 'https://www.geeksforgeeks.org/sql-string-functions/', videoLink: 'https://www.youtube.com/watch?v=ER9m_7F6Vv4', completed: false },
      { id: 'sql_6', title: 'Create Table with Primary & Foreign Key constraints', difficulty: 'Easy', leetcodeLink: 'https://www.hackerrank.com/domains/sql', gfgLink: 'https://www.geeksforgeeks.org/sql-ddl-dql-dml-dcl-tcl-commands/', videoLink: 'https://www.youtube.com/watch?v=hlGoQC332VM', completed: false },
      { id: 'sql_7', title: 'Alter Table (Add, Modify and Drop columns)', difficulty: 'Easy', leetcodeLink: 'https://www.hackerrank.com/domains/sql', gfgLink: 'https://www.geeksforgeeks.org/sql-alter-command/', videoLink: 'https://www.youtube.com/watch?v=hlGoQC332VM', completed: false },
      { id: 'sql_8', title: 'Truncate vs Drop vs Delete operations', difficulty: 'Easy', leetcodeLink: 'https://www.hackerrank.com/domains/sql', gfgLink: 'https://www.geeksforgeeks.org/difference-between-drop-and-truncate-in-sql/', videoLink: 'https://www.youtube.com/watch?v=hlGoQC332VM', completed: false },
      { id: 'sql_9', title: 'Revising the Select Query I (HackerRank)', difficulty: 'Easy', leetcodeLink: 'https://www.hackerrank.com/challenges/revising-the-select-query/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-select-query/', videoLink: 'https://www.youtube.com/watch?v=hlGoQC332VM', completed: false },
      { id: 'sql_10', title: 'Select By ID (HackerRank City Query)', difficulty: 'Easy', leetcodeLink: 'https://www.hackerrank.com/challenges/select-by-id/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-where-clause/', videoLink: 'https://www.youtube.com/watch?v=hlGoQC332VM', completed: false },
      { id: 'sql_11', title: 'Japanese Cities Names (WHERE countrycode = "JPN")', difficulty: 'Easy', leetcodeLink: 'https://www.hackerrank.com/challenges/japanese-cities-name/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-where-clause/', videoLink: 'https://www.youtube.com/watch?v=hlGoQC332VM', completed: false },
      { id: 'sql_12', title: 'Weather Observation Station 1 (CITY and STATE)', difficulty: 'Easy', leetcodeLink: 'https://www.hackerrank.com/challenges/weather-observation-station-1/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-select-query/', videoLink: 'https://www.youtube.com/watch?v=hlGoQC332VM', completed: false },
      { id: 'sql_13', title: 'Weather Observation Station 3 (Even ID Filtering)', difficulty: 'Easy', leetcodeLink: 'https://www.hackerrank.com/challenges/weather-observation-station-3/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-operators/', videoLink: 'https://www.youtube.com/watch?v=hlGoQC332VM', completed: false },
      { id: 'sql_14', title: 'Weather Observation Station 4 (Count - Count Distinct)', difficulty: 'Easy', leetcodeLink: 'https://www.hackerrank.com/challenges/weather-observation-station-4/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-count-function/', videoLink: 'https://www.youtube.com/watch?v=hlGoQC332VM', completed: false },
      { id: 'sql_15', title: 'Weather Observation Station 5 (Shortest and Longest Name)', difficulty: 'Medium', leetcodeLink: 'https://www.hackerrank.com/challenges/weather-observation-station-5/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-order-by/', videoLink: 'https://www.youtube.com/watch?v=hlGoQC332VM', completed: false }
    ]
  },
  {
    category: 'Joins & Subqueries (20 Queries)',
    problems: [
      { id: 'sql_16', title: 'Replace Employee ID With Unique Identifier', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/', gfgLink: 'https://www.geeksforgeeks.org/sql-left-join/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_17', title: 'Product Sales Analysis I (Sales INNER JOIN Product)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/product-sales-analysis-i/', gfgLink: 'https://www.geeksforgeeks.org/sql-inner-join/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_18', title: 'Customer Who Visited but Did Not Transact', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/', gfgLink: 'https://www.geeksforgeeks.org/sql-left-join/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_19', title: 'Rising Temperature (Cross Join with DATEDIFF = 1)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/rising-temperature/', gfgLink: 'https://www.geeksforgeeks.org/sql-self-join/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_20', title: 'Average Time of Process per Machine', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/average-time-of-process-per-machine/', gfgLink: 'https://www.geeksforgeeks.org/aggregate-functions-in-sql/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_21', title: 'Employee Bonus (LEFT JOIN + Bonus < 1000 or IS NULL)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/employee-bonus/', gfgLink: 'https://www.geeksforgeeks.org/sql-left-join/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_22', title: 'Students and Examinations (CROSS JOIN + LEFT JOIN)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/students-and-examinations/', gfgLink: 'https://www.geeksforgeeks.org/sql-cross-join/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_23', title: 'Managers with at Least 5 Direct Reports (Self Join)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/managers-with-at-least-5-direct-reports/', gfgLink: 'https://www.geeksforgeeks.org/sql-group-by/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_24', title: 'Confirmation Rate (LEFT JOIN + AVG CASE WHEN)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/confirmation-rate/', gfgLink: 'https://www.geeksforgeeks.org/sql-case-statement/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_25', title: 'African Cities Names (Continent = "Africa")', difficulty: 'Easy', leetcodeLink: 'https://www.hackerrank.com/challenges/african-cities/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-inner-join/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_26', title: 'Asian Population Average', difficulty: 'Easy', leetcodeLink: 'https://www.hackerrank.com/challenges/asian-population/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-avg-function/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_27', title: 'The Report (Students Marks and Grades mapping)', difficulty: 'Medium', leetcodeLink: 'https://www.hackerrank.com/challenges/the-report/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_28', title: 'Top Competitors (Full score in challenges)', difficulty: 'Medium', leetcodeLink: 'https://www.hackerrank.com/challenges/full-score/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-group-by/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_29', title: 'Ollivander’s Inventory (Min gold coins per power)', difficulty: 'Medium', leetcodeLink: 'https://www.hackerrank.com/challenges/harry-potter-and-wands/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-nested-subqueries/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_30', title: 'Challenges Counter (Equal challenge count edge case)', difficulty: 'Medium', leetcodeLink: 'https://www.hackerrank.com/challenges/challenges/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-having-clause/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_31', title: 'Contest Leaderboard (Total score across challenges)', difficulty: 'Medium', leetcodeLink: 'https://www.hackerrank.com/challenges/contest-leaderboard/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-subquery/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_32', title: 'Department Highest Salary', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/department-highest-salary/', gfgLink: 'https://www.geeksforgeeks.org/sql-subquery/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_33', title: 'Employees Earning More Than Their Managers', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/employees-earning-more-than-their-managers/', gfgLink: 'https://www.geeksforgeeks.org/sql-self-join/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_34', title: 'Duplicate Emails in Person Table', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/duplicate-emails/', gfgLink: 'https://www.geeksforgeeks.org/sql-having-clause/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false },
      { id: 'sql_35', title: 'Customers Who Never Order', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/customers-who-never-order/', gfgLink: 'https://www.geeksforgeeks.org/sql-not-in-operator/', videoLink: 'https://www.youtube.com/watch?v=0rnGCtP9kQY', completed: false }
    ]
  },
  {
    category: 'Aggregations & Grouping (20 Queries)',
    problems: [
      { id: 'sql_36', title: 'Not Boring Movies (id % 2 != 0 AND description)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/not-boring-movies/', gfgLink: 'https://www.geeksforgeeks.org/sql-where-clause/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_37', title: 'Average Selling Price (SUM(price * units) / SUM(units))', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/average-selling-price/', gfgLink: 'https://www.geeksforgeeks.org/sql-avg-function/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_38', title: 'Project Employees I (AVG(exp_years) rounded to 2)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/project-employees-i/', gfgLink: 'https://www.geeksforgeeks.org/sql-group-by/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_39', title: 'Percentage of Users Attended a Contest', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/percentage-of-users-attended-a-contest/', gfgLink: 'https://www.geeksforgeeks.org/sql-subquery/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_40', title: 'Queries Quality and Percentage', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/queries-quality-and-percentage/', gfgLink: 'https://www.geeksforgeeks.org/sql-case-statement/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_41', title: 'Monthly Transactions I (DATE_FORMAT + SUM CASE)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/monthly-transactions-i/', gfgLink: 'https://www.geeksforgeeks.org/sql-date-functions/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_42', title: 'Immediate Food Delivery II (First order percentage)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/immediate-food-delivery-ii/', gfgLink: 'https://www.geeksforgeeks.org/sql-subquery/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_43', title: 'Game Play Analysis IV (Next Day Retention)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/game-play-analysis-iv/', gfgLink: 'https://www.geeksforgeeks.org/sql-date-functions/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_44', title: 'Number of Unique Subjects Taught by Each Teacher', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/', gfgLink: 'https://www.geeksforgeeks.org/sql-distinct-clause/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_45', title: 'User Activity for the Past 30 Days I', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/user-activity-for-the-past-30-days-i/', gfgLink: 'https://www.geeksforgeeks.org/sql-date-functions/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_46', title: 'Classes More Than 5 Students (HAVING count >= 5)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/classes-more-than-5-students/', gfgLink: 'https://www.geeksforgeeks.org/sql-having-clause/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_47', title: 'Find Followers Count in Social Network', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/find-followers-count/', gfgLink: 'https://www.geeksforgeeks.org/sql-group-by/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_48', title: 'Biggest Single Number (Unique Max Number)', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/problems/biggest-single-number/', gfgLink: 'https://www.geeksforgeeks.org/sql-max-function/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_49', title: 'Customers Who Bought All Products', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/customers-who-bought-all-products/', gfgLink: 'https://www.geeksforgeeks.org/sql-having-clause/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_50', title: 'The Blunder (Miscalculated Salary Ceiling)', difficulty: 'Easy', leetcodeLink: 'https://www.hackerrank.com/challenges/the-blunder/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-string-functions/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_51', title: 'Top Earners (Salary * Months Max and Count)', difficulty: 'Easy', leetcodeLink: 'https://www.hackerrank.com/challenges/earnings-of-employees/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-group-by/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_52', title: 'Weather Observation Station 13 (Truncated Latitudes)', difficulty: 'Easy', leetcodeLink: 'https://www.hackerrank.com/challenges/weather-observation-station-13/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-sum-function/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_53', title: 'Weather Observation Station 15 (Max Latitude Longitude)', difficulty: 'Easy', leetcodeLink: 'https://www.hackerrank.com/challenges/weather-observation-station-15/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-order-by/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_54', title: 'Weather Observation Station 18 (Manhattan Distance)', difficulty: 'Medium', leetcodeLink: 'https://www.hackerrank.com/challenges/weather-observation-station-18/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-aggregate-functions/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false },
      { id: 'sql_55', title: 'Weather Observation Station 19 (Euclidean Distance)', difficulty: 'Medium', leetcodeLink: 'https://www.hackerrank.com/challenges/weather-observation-station-19/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-power-function/', videoLink: 'https://www.youtube.com/watch?v=Z_c4h4p9x44', completed: false }
    ]
  },
  {
    category: 'Window Functions & CTEs (20 Queries)',
    problems: [
      { id: 'sql_56', title: 'Second Highest Salary (DENSE_RANK / LIMIT 1 OFFSET 1)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/second-highest-salary/', gfgLink: 'https://www.geeksforgeeks.org/sql-query-to-find-second-highest-salary-of-an-employee/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_57', title: 'Nth Highest Salary (User Defined Function in MySQL)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/nth-highest-salary/', gfgLink: 'https://www.geeksforgeeks.org/how-to-find-nth-highest-salary-in-sql/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_58', title: 'Rank Scores (DENSE_RANK() OVER(ORDER BY score DESC))', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/rank-scores/', gfgLink: 'https://www.geeksforgeeks.org/sql-dense_rank-function/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_59', title: 'Consecutive Numbers (LEAD / LAG appearing 3+ times)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/consecutive-numbers/', gfgLink: 'https://www.geeksforgeeks.org/sql-lead-and-lag-functions/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_60', title: 'Department Top Three Salaries (DENSE_RANK <= 3)', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/department-top-three-salaries/', gfgLink: 'https://www.geeksforgeeks.org/window-functions-in-sql/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_61', title: 'Trips and Users (Unbanned cancellation rate calculation)', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/trips-and-users/', gfgLink: 'https://www.geeksforgeeks.org/sql-nested-subqueries/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_62', title: 'Exchange Seats (SWAP id using CASE & MOD)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/exchange-seats/', gfgLink: 'https://www.geeksforgeeks.org/sql-case-statement/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_63', title: 'Movie Rating (UNION ALL + Top Reviewer & Highest Avg)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/movie-rating/', gfgLink: 'https://www.geeksforgeeks.org/sql-union-all-operator/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_64', title: 'Restaurant Growth (7-Day Moving Average & Window)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/restaurant-growth/', gfgLink: 'https://www.geeksforgeeks.org/window-functions-in-sql/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_65', title: 'Friend Requests II: Who Has the Most Friends', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/', gfgLink: 'https://www.geeksforgeeks.org/sql-union-all-operator/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_66', title: 'Investments in 2016 (Criteria with COUNT OVER)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/investments-in-2016/', gfgLink: 'https://www.geeksforgeeks.org/window-functions-in-sql/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_67', title: 'Last Person to Fit in the Bus (Running Total <= 1000)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/last-person-to-fit-in-the-bus/', gfgLink: 'https://www.geeksforgeeks.org/window-functions-in-sql/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_68', title: 'Count Salary Categories (Low, Average, High Union)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/count-salary-categories/', gfgLink: 'https://www.geeksforgeeks.org/sql-union-all-operator/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_69', title: 'Print Prime Numbers (Hierarchical CTE in MySQL / PL-SQL)', difficulty: 'Hard', leetcodeLink: 'https://www.hackerrank.com/challenges/print-prime-numbers/problem', gfgLink: 'https://www.geeksforgeeks.org/cte-in-sql/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_70', title: '15 Days of Learning SQL (HackerRank Submissions)', difficulty: 'Hard', leetcodeLink: 'https://www.hackerrank.com/challenges/15-days-of-learning-sql/problem', gfgLink: 'https://www.geeksforgeeks.org/cte-in-sql/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_71', title: 'Interviews Leaderboard Challenge (Complex Group By)', difficulty: 'Hard', leetcodeLink: 'https://www.hackerrank.com/challenges/interviews/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-left-join/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_72', title: 'Occupations Pivot Table (CASE WHEN & Row_Number)', difficulty: 'Medium', leetcodeLink: 'https://www.hackerrank.com/challenges/occupations/problem', gfgLink: 'https://www.geeksforgeeks.org/pivot-and-unpivot-in-sql/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_73', title: 'Binary Tree Nodes (Root, Leaf, Inner Type Classification)', difficulty: 'Medium', leetcodeLink: 'https://www.hackerrank.com/challenges/binary-search-tree-1/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-case-statement/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_74', title: 'New Companies Count Hierarchy', difficulty: 'Medium', leetcodeLink: 'https://www.hackerrank.com/challenges/the-company/problem', gfgLink: 'https://www.geeksforgeeks.org/sql-group-by/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false },
      { id: 'sql_75', title: 'Human Traffic of Stadium (3+ rows with people >= 100)', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/problems/human-traffic-of-stadium/', gfgLink: 'https://www.geeksforgeeks.org/window-functions-in-sql/', videoLink: 'https://www.youtube.com/watch?v=Ww71knvhQ-s', completed: false }
    ]
  }
];

// ==========================================
// 3. DATASETS: SYSTEM DESIGN (HLD + LLD)
// ==========================================
const systemDesignData = [
  {
    category: 'High-Level Design (HLD) Architectures',
    problems: [
      { id: 'sd_1', title: 'Client-Server Architecture, DNS & Reverse Proxy', difficulty: 'Easy', leetcodeLink: 'https://github.com/donnemartin/system-design-primer', gfgLink: 'https://www.geeksforgeeks.org/basics-of-system-design/', videoLink: 'https://www.youtube.com/watch?v=SqcXvc3ZmRU', completed: false },
      { id: 'sd_2', title: 'Load Balancers (Layer 4 vs Layer 7, Nginx/HAProxy)', difficulty: 'Easy', leetcodeLink: 'https://github.com/donnemartin/system-design-primer#load-balancer', gfgLink: 'https://www.geeksforgeeks.org/load-balancing-in-system-design/', videoLink: 'https://www.youtube.com/watch?v=K0Ta65OqQkY', completed: false },
      { id: 'sd_3', title: 'Caching Strategies & Eviction Policies (Redis, LRU/LFU)', difficulty: 'Medium', leetcodeLink: 'https://github.com/donnemartin/system-design-primer#cache', gfgLink: 'https://www.geeksforgeeks.org/caching-system-design-concept-for-beginners/', videoLink: 'https://www.youtube.com/watch?v=U3RkDLtS7uY', completed: false },
      { id: 'sd_4', title: 'Database Sharding, Replication & CAP Theorem', difficulty: 'Medium', leetcodeLink: 'https://github.com/donnemartin/system-design-primer#sharding', gfgLink: 'https://www.geeksforgeeks.org/the-cap-theorem-in-dbms/', videoLink: 'https://www.youtube.com/watch?v=kG-fLp9B-uo', completed: false },
      { id: 'sd_5', title: 'Message Queues & Event Streaming (Kafka & RabbitMQ)', difficulty: 'Medium', leetcodeLink: 'https://github.com/donnemartin/system-design-primer#asynchronism', gfgLink: 'https://www.geeksforgeeks.org/what-is-a-message-queue-in-system-design/', videoLink: 'https://www.youtube.com/watch?v=oUJbuFMyBDk', completed: false },
      { id: 'sd_6', title: 'Design URL Shortener (TinyURL / Bitly Key-Generation Service)', difficulty: 'Easy', leetcodeLink: 'https://github.com/donnemartin/system-design-primer', gfgLink: 'https://www.geeksforgeeks.org/system-design-url-shortening-service/', videoLink: 'https://www.youtube.com/watch?v=fMZMm_0ZhK4', completed: false },
      { id: 'sd_7', title: 'Design an API Rate Limiter (Token Bucket & Sliding Log)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/discuss/interview-question/system-design/124657/Design-an-API-Rate-Limiter', gfgLink: 'https://www.geeksforgeeks.org/design-an-api-rate-limiter/', videoLink: 'https://www.youtube.com/watch?v=FU4Wisl4544', completed: false },
      { id: 'sd_8', title: 'Design WhatsApp / Chat Messaging (WebSockets & Long Polling)', difficulty: 'Medium', leetcodeLink: 'https://github.com/donnemartin/system-design-primer', gfgLink: 'https://www.geeksforgeeks.org/design-whatsapp-system-design/', videoLink: 'https://www.youtube.com/watch?v=vvhC64hQZMk', completed: false },
      { id: 'sd_9', title: 'Design Netflix Video Streaming (CDN & Chunk Transcoding)', difficulty: 'Hard', leetcodeLink: 'https://github.com/donnemartin/system-design-primer', gfgLink: 'https://www.geeksforgeeks.org/system-design-netflix-a-complete-architecture/', videoLink: 'https://www.youtube.com/watch?v=psQzyFfsUGU', completed: false },
      { id: 'sd_10', title: 'Design Uber / Ride Sharing (GeoHash & QuadTree Spatial Search)', difficulty: 'Hard', leetcodeLink: 'https://github.com/donnemartin/system-design-primer', gfgLink: 'https://www.geeksforgeeks.org/system-design-uber-a-complete-architecture/', videoLink: 'https://www.youtube.com/watch?v=lsK7mUblb8I', completed: false }
    ]
  },
  {
    category: 'Low-Level Design (LLD) & Patterns',
    problems: [
      { id: 'sd_11', title: 'SOLID Design Principles with Live Code Analysis', difficulty: 'Easy', leetcodeLink: 'https://github.com/donnemartin/system-design-primer', gfgLink: 'https://www.geeksforgeeks.org/solid-principles-in-programming/', videoLink: 'https://www.youtube.com/watch?v=y6wZJbL1P3w', completed: false },
      { id: 'sd_12', title: 'Design an LRU Cache (Hashmap + Doubly Linked List)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/lru-cache/', gfgLink: 'https://www.geeksforgeeks.org/lru-cache-implementation-using-double-linked-list/', videoLink: 'https://www.youtube.com/watch?v=z9bJUPxzFOw', completed: false },
      { id: 'sd_13', title: 'Design Parking Lot System (OOP Class Diagram & States)', difficulty: 'Medium', leetcodeLink: 'https://github.com/donnemartin/system-design-primer', gfgLink: 'https://www.geeksforgeeks.org/design-parking-lot-system-using-object-oriented-principles/', videoLink: 'https://www.youtube.com/watch?v=tVRyb4HaHgw', completed: false },
      { id: 'sd_14', title: 'Design Tic-Tac-Toe Game with Scalable Grid', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/problems/design-tic-tac-toe/', gfgLink: 'https://www.geeksforgeeks.org/design-tic-tac-toe-game/', videoLink: 'https://www.youtube.com/watch?v=gktZsX9Z_4M', completed: false },
      { id: 'sd_15', title: 'Design Snake and Ladder Game (Dice & Modular Players)', difficulty: 'Medium', leetcodeLink: 'https://github.com/donnemartin/system-design-primer', gfgLink: 'https://www.geeksforgeeks.org/snake-ladder-problem-using-bfs/', videoLink: 'https://www.youtube.com/watch?v=WdKhmYQsh1U', completed: false }
    ]
  }
];

// ==========================================
// 4. DATASETS: OOPS MASTERY
// ==========================================
const oopsMasterData = [
  {
    category: 'Core OOP Principles (The 4 Pillars)',
    problems: [
      { id: 'oop_1', title: 'Encapsulation & Data Hiding with Private Access Modifiers', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/discuss/general-discussion/1298391/oops-concepts-cheatsheet-for-interviews', gfgLink: 'https://www.geeksforgeeks.org/encapsulation-in-cpp/', videoLink: 'https://www.youtube.com/watch?v=wN0x9eZLix4', completed: false },
      { id: 'oop_2', title: 'Abstraction using Abstract Classes vs Interfaces', difficulty: 'Easy', leetcodeLink: 'https://leetcode.com/discuss/general-discussion/1298391/oops-concepts-cheatsheet-for-interviews', gfgLink: 'https://www.geeksforgeeks.org/abstraction-in-cpp/', videoLink: 'https://www.youtube.com/watch?v=wN0x9eZLix4', completed: false },
      { id: 'oop_3', title: 'Inheritance Types (Single, Multiple, Multi-level, Diamond Problem)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/discuss/general-discussion/1298391/oops-concepts-cheatsheet-for-interviews', gfgLink: 'https://www.geeksforgeeks.org/inheritance-in-c/', videoLink: 'https://www.youtube.com/watch?v=wN0x9eZLix4', completed: false },
      { id: 'oop_4', title: 'Polymorphism: Compile-Time (Overloading) vs Run-Time (Overriding)', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/discuss/general-discussion/1298391/oops-concepts-cheatsheet-for-interviews', gfgLink: 'https://www.geeksforgeeks.org/polymorphism-in-c/', videoLink: 'https://www.youtube.com/watch?v=wN0x9eZLix4', completed: false },
      { id: 'oop_5', title: 'Virtual Functions, Pure Virtual Functions & VTABLE Mechanism', difficulty: 'Hard', leetcodeLink: 'https://leetcode.com/discuss/general-discussion/1298391/oops-concepts-cheatsheet-for-interviews', gfgLink: 'https://www.geeksforgeeks.org/virtual-function-cpp/', videoLink: 'https://www.youtube.com/watch?v=wN0x9eZLix4', completed: false }
    ]
  },
  {
    category: 'Design Patterns & Memory Management',
    problems: [
      { id: 'oop_6', title: 'Constructors, Destructors & Shallow vs Deep Copy', difficulty: 'Medium', leetcodeLink: 'https://leetcode.com/discuss/general-discussion/1298391/oops-concepts-cheatsheet-for-interviews', gfgLink: 'https://www.geeksforgeeks.org/shallow-copy-and-deep-copy-in-c/', videoLink: 'https://www.youtube.com/watch?v=bSrm9RXwBaI', completed: false },
      { id: 'oop_7', title: 'Singleton Pattern (Thread-Safe Implementation)', difficulty: 'Medium', leetcodeLink: 'https://refactoring.guru/design-patterns/singleton', gfgLink: 'https://www.geeksforgeeks.org/singleton-design-pattern/', videoLink: 'https://www.youtube.com/watch?v=tSZn4wkBIu8', completed: false },
      { id: 'oop_8', title: 'Factory Method & Abstract Factory Pattern', difficulty: 'Medium', leetcodeLink: 'https://refactoring.guru/design-patterns/factory-method', gfgLink: 'https://www.geeksforgeeks.org/factory-method-pattern-c-design-patterns/', videoLink: 'https://www.youtube.com/watch?v=EcFVTgRHJLM', completed: false },
      { id: 'oop_9', title: 'Observer Pattern (Publish-Subscribe Model)', difficulty: 'Medium', leetcodeLink: 'https://refactoring.guru/design-patterns/observer', gfgLink: 'https://www.geeksforgeeks.org/observer-pattern-set-1-introduction/', videoLink: 'https://www.youtube.com/watch?v=_BpmfnqjgzQ', completed: false },
      { id: 'oop_10', title: 'Strategy Design Pattern in Payment Gateways', difficulty: 'Medium', leetcodeLink: 'https://refactoring.guru/design-patterns/strategy', gfgLink: 'https://www.geeksforgeeks.org/strategy-pattern-set-1/', videoLink: 'https://www.youtube.com/watch?v=v9ejT8FO-7I', completed: false }
    ]
  }
];

// ==========================================
// 5. DATASETS: OPERATING SYSTEMS (OS)
// ==========================================
const osMasterData = [
  {
    category: 'Process Management & CPU Scheduling',
    problems: [
      { id: 'os_1', title: 'Process vs Thread & Process State Transitions', difficulty: 'Easy', leetcodeLink: 'https://github.com/geekxh/hello-algorithm', gfgLink: 'https://www.geeksforgeeks.org/difference-between-process-and-thread/', videoLink: 'https://www.youtube.com/watch?v=2i2N_Qo_PhM', completed: false },
      { id: 'os_2', title: 'CPU Scheduling Algorithms (FCFS, SJF, Round Robin, Priority)', difficulty: 'Medium', leetcodeLink: 'https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/', gfgLink: 'https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/', videoLink: 'https://www.youtube.com/watch?v=EWkQlL8v8E4', completed: false },
      { id: 'os_3', title: 'Inter-Process Communication (IPC): Pipes, Sockets & Shared Memory', difficulty: 'Medium', leetcodeLink: 'https://www.geeksforgeeks.org/inter-process-communication-ipc/', gfgLink: 'https://www.geeksforgeeks.org/inter-process-communication-ipc/', videoLink: 'https://www.youtube.com/watch?v=dBM_gWf_8qE', completed: false }
    ]
  },
  {
    category: 'Concurrency, Deadlocks & Memory',
    problems: [
      { id: 'os_4', title: 'Critical Section Problem, Mutex vs Semaphores', difficulty: 'Medium', leetcodeLink: 'https://www.geeksforgeeks.org/mutex-vs-semaphore/', gfgLink: 'https://www.geeksforgeeks.org/mutex-vs-semaphore/', videoLink: 'https://www.youtube.com/watch?v=YnNmS-kK2s4', completed: false },
      { id: 'os_5', title: 'Deadlock: 4 Necessary Conditions & Handling Techniques', difficulty: 'Medium', leetcodeLink: 'https://www.geeksforgeeks.org/introduction-of-deadlock-in-operating-system/', gfgLink: 'https://www.geeksforgeeks.org/introduction-of-deadlock-in-operating-system/', videoLink: 'https://www.youtube.com/watch?v=rWFH6kn_n2E', completed: false },
      { id: 'os_6', title: "Banker's Algorithm for Deadlock Avoidance", difficulty: 'Hard', leetcodeLink: 'https://www.geeksforgeeks.org/bankers-algorithm-in-operating-system-2/', gfgLink: 'https://www.geeksforgeeks.org/bankers-algorithm-in-operating-system-2/', videoLink: 'https://www.youtube.com/watch?v=T0FXvTHcYi4', completed: false },
      { id: 'os_7', title: 'Virtual Memory, Paging, Segmentation & TLB', difficulty: 'Medium', leetcodeLink: 'https://www.geeksforgeeks.org/virtual-memory-in-operating-system/', gfgLink: 'https://www.geeksforgeeks.org/virtual-memory-in-operating-system/', videoLink: 'https://www.youtube.com/watch?v=pUO4A9uO9eI', completed: false },
      { id: 'os_8', title: 'Page Replacement Algorithms (FIFO, LRU, Optimal)', difficulty: 'Medium', leetcodeLink: 'https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/', gfgLink: 'https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/', videoLink: 'https://www.youtube.com/watch?v=7p5q0bFkUjg', completed: false },
      { id: 'os_9', title: 'Thrashing & Working Set Model in Memory Allocation', difficulty: 'Easy', leetcodeLink: 'https://www.geeksforgeeks.org/thrashing-in-operating-system/', gfgLink: 'https://www.geeksforgeeks.org/thrashing-in-operating-system/', videoLink: 'https://www.youtube.com/watch?v=pUO4A9uO9eI', completed: false },
      { id: 'os_10', title: 'Disk Scheduling Algorithms (FCFS, SSTF, SCAN, C-SCAN)', difficulty: 'Easy', leetcodeLink: 'https://www.geeksforgeeks.org/disk-scheduling-algorithms/', gfgLink: 'https://www.geeksforgeeks.org/disk-scheduling-algorithms/', videoLink: 'https://www.youtube.com/watch?v=9jC9M8Z1w6c', completed: false }
    ]
  }
];

// ==========================================
// 6. DATASETS: 6-MONTH ROADMAPS
// ==========================================
const roadmapData = [
  {
    id: 'mern',
    title: 'Full Stack MERN Development',
    duration: '6 Months',
    icon: '💻',
    tag: 'Web Development',
    schedule: [
      { month: 'Month 1', topic: 'HTML5, Modern CSS, Responsive Design & Tailwind', details: 'Semantic tags, Flexbox, Grid, CSS animations, Tailwind config.' },
      { month: 'Month 2', topic: 'JavaScript (ES6+) & Asynchronous Programming', details: 'DOM manipulation, Closures, Promises, Async/Await, Fetch API.' },
      { month: 'Month 3', topic: 'React.js & State Management', details: 'Components, Hooks, React Router, Redux Toolkit.' },
      { month: 'Month 4', topic: 'Node.js & Express.js Backend', details: 'RESTful APIs, Middleware, JWT Authentication, Error Handling.' },
      { month: 'Month 5', topic: 'MongoDB, Mongoose & Database Modeling', details: 'Schema design, CRUD operations, Aggregations, Indexing.' },
      { month: 'Month 6', topic: 'Full Stack Capstone Project & Deployment', details: 'Payment gateway integration, AWS/Render/Vercel deployment.' }
    ]
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    duration: '6 Months',
    icon: '⚡',
    tag: 'Interview Prep',
    schedule: [
      { month: 'Month 1', topic: 'Programming Language Mastery & Complexity Analysis', details: 'C++ STL / Java Collections, Time & Space Complexity (Big-O).' },
      { month: 'Month 2', topic: 'Arrays, Strings, Two Pointers & Sliding Window', details: 'Kadane algorithm, prefix sums, binary search.' },
      { month: 'Month 3', topic: 'Recursion, Backtracking & Linked Lists', details: 'Subsets, permutations, N-Queens, cycle detection.' },
      { month: 'Month 4', topic: 'Stacks, Queues, Heaps & HashMaps', details: 'Monotonic stack, priority queues, LRU Cache.' },
      { month: 'Month 5', topic: 'Trees, Binary Search Trees & Tries', details: 'Traversals, LCA, diameter, prefix trees.' },
      { month: 'Month 6', topic: 'Dynamic Programming & Graphs', details: '1D/2D DP, Knapsack, BFS/DFS, Dijkstra, Topo Sort.' }
    ]
  },
  {
    id: 'system-design',
    title: 'System Design & Core CS Subjects',
    duration: '6 Months',
    icon: '🏗️',
    tag: 'Advanced Tech',
    schedule: [
      { month: 'Month 1', topic: 'Operating Systems & Concurrency', details: 'Processes vs Threads, CPU Scheduling, Deadlocks, Memory.' },
      { month: 'Month 2', topic: 'Computer Networks (CN)', details: 'OSI Model, TCP/IP, HTTP/HTTPS, DNS, WebSockets.' },
      { month: 'Month 3', topic: 'DBMS & SQL Mastery', details: 'Relational algebra, ACID properties, Normalization, Indexing.' },
      { month: 'Month 4', topic: 'Low-Level Design (LLD) & Design Patterns', details: 'SOLID Principles, Factory, Singleton, Observer.' },
      { month: 'Month 5', topic: 'High-Level Design (HLD) Fundamentals', details: 'Scalability, Caching (Redis), Message Queues, Sharding.' },
      { month: 'Month 6', topic: 'Real-World Architectural Case Studies', details: 'URL Shortener, Chat system, Netflix architecture.' }
    ]
  }
];

// ==========================================
// 7. RESUME BUILDER COMPONENT WITH LIVE ATS SCORE
// ==========================================
const ResumeBuilderSection = ({ onBack }) => {
  const [resumeData, setResumeData] = useState({
    fullName: 'Himanshu Sharma',
    email: 'himanshu@example.com',
    phone: '+91 9876543210',
    linkedin: 'linkedin.com/in/himanshu',
    github: 'github.com/himanshu-sharma-82',
    summary: 'Aspiring Full-Stack Software Developer proficient in the MERN stack with a solid foundation in Data Structures and Algorithms.',
    education: 'B.Tech in Computer Science & Engineering | 2024 - 2028 | CGPA: 7.9',
    skills: 'JavaScript, React.js, Node.js, Express.js, MongoDB, C++, Git/GitHub, REST APIs',
    projectTitle: 'College Placement Preparation Portal (MERN)',
    projectDesc: 'Developed a comprehensive placement dashboard featuring 150+ curated DSA problems, 6-month domain roadmaps, and IndiaBix aptitude practice module.',
    experience: 'Fresher'
  });

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  const calculateATS = () => {
    let score = 0;
    if (resumeData.fullName.trim()) score += 5;
    if (resumeData.email.includes('@')) score += 5;
    if (resumeData.phone.trim().length >= 10) score += 5;
    if (resumeData.linkedin.trim().length > 5) score += 5;
    if (resumeData.github.trim().length > 5) score += 5;

    if (resumeData.summary.trim().length > 50) score += 15;
    else if (resumeData.summary.trim().length > 20) score += 8;

    if (resumeData.education.trim().length > 15) score += 15;
    else if (resumeData.education.trim()) score += 5;

    const skillsCount = resumeData.skills.split(',').filter(s => s.trim().length > 1).length;
    if (skillsCount >= 5) score += 20;
    else if (skillsCount >= 2) score += 10;

    if (resumeData.projectTitle.trim() && resumeData.projectDesc.trim().length > 40) score += 15;
    else if (resumeData.projectTitle.trim()) score += 7;

    const exp = resumeData.experience.trim().toLowerCase();
    if (exp.length > 20 && exp !== 'fresher') score += 10;
    else if (exp === 'fresher' || exp.length > 5) score += 5;

    return Math.min(100, score);
  };

  const atsScore = calculateATS();
  const scoreColor = atsScore >= 80 ? '#4ade80' : atsScore >= 55 ? '#facc15' : '#f87171';

  return (
    <div>
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #printable-resume, #printable-resume * { visibility: visible !important; }
          #printable-resume { position: absolute; left: 0; top: 0; width: 100%; margin: 0; padding: 20px; color: #000 !important; background: #fff !important; }
        }
        .resume-input {
          width: 100%;
          background: #0d1117;
          border: 1px solid #30363d;
          color: #f0f6fc;
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 13.5px;
          box-sizing: border-box;
          margin-bottom: 12px;
        }
        .resume-input:focus {
          outline: none;
          border-color: #a855f7;
        }
      `}</style>

      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button className="back-btn" onClick={onBack}>
          ← Back to Dashboard
        </button>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <div style={{ fontSize: '13.5px', color: '#94a3b8', backgroundColor: '#131927', padding: '6px 14px', borderRadius: '8px', border: '1px solid #1e293b' }}>
            Live ATS Score: <strong style={{ color: scoreColor, fontSize: '15px' }}>{atsScore}/100</strong>
          </div>
          <button 
            onClick={() => window.print()}
            style={{ backgroundColor: '#22c55e', color: '#fff', border: 'none', padding: '9px 18px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}
          >
            🖨️ Download / Print PDF
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '24px' }}>
        <div style={{ backgroundColor: '#131927', padding: '24px', borderRadius: '16px', border: '1px solid #1e293b' }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', color: '#c084fc' }}>Edit Resume Details</h3>
          
          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Full Name</label>
          <input className="resume-input" name="fullName" value={resumeData.fullName} onChange={handleChange} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label style={{ fontSize: '12px', color: '#94a3b8' }}>Email</label>
              <input className="resume-input" name="email" value={resumeData.email} onChange={handleChange} />
            </div>
            <div>
              <label style={{ fontSize: '12px', color: '#94a3b8' }}>Phone</label>
              <input className="resume-input" name="phone" value={resumeData.phone} onChange={handleChange} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label style={{ fontSize: '12px', color: '#94a3b8' }}>LinkedIn</label>
              <input className="resume-input" name="linkedin" value={resumeData.linkedin} onChange={handleChange} />
            </div>
            <div>
              <label style={{ fontSize: '12px', color: '#94a3b8' }}>GitHub</label>
              <input className="resume-input" name="github" value={resumeData.github} onChange={handleChange} />
            </div>
          </div>

          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Professional Summary</label>
          <textarea className="resume-input" rows="3" name="summary" value={resumeData.summary} onChange={handleChange} />

          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Education Details</label>
          <input className="resume-input" name="education" value={resumeData.education} onChange={handleChange} />

          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Technical Skills (comma-separated)</label>
          <input className="resume-input" name="skills" value={resumeData.skills} onChange={handleChange} />

          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Key Project Name</label>
          <input className="resume-input" name="projectTitle" value={resumeData.projectTitle} onChange={handleChange} />

          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Project Description</label>
          <textarea className="resume-input" rows="3" name="projectDesc" value={resumeData.projectDesc} onChange={handleChange} />

          <label style={{ fontSize: '12px', color: '#94a3b8' }}>Experience / Internships (Type "Fresher" if none)</label>
          <textarea className="resume-input" rows="2" name="experience" value={resumeData.experience} onChange={handleChange} />
        </div>

        <div 
          id="printable-resume"
          style={{
            backgroundColor: '#ffffff',
            color: '#111827',
            padding: '36px 40px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
            fontFamily: 'Arial, sans-serif',
            minHeight: '700px'
          }}
        >
          <div style={{ textAlign: 'center', borderBottom: '2px solid #1e293b', paddingBottom: '12px', marginBottom: '16px' }}>
            <h1 style={{ margin: 0, fontSize: '24px', textTransform: 'uppercase', letterSpacing: '1px', color: '#0f172a' }}>
              {resumeData.fullName || 'YOUR NAME'}
            </h1>
            <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#475569' }}>
              {[resumeData.email, resumeData.phone, resumeData.linkedin, resumeData.github].filter(Boolean).join(' | ')}
            </p>
          </div>

          {resumeData.summary.trim() && (
            <div style={{ marginBottom: '14px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '12.5px', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '2px', color: '#0f172a' }}>
                Professional Summary
              </h4>
              <p style={{ margin: 0, fontSize: '12px', lineHeight: '1.5', color: '#334155' }}>
                {resumeData.summary}
              </p>
            </div>
          )}

          {resumeData.skills.trim() && (
            <div style={{ marginBottom: '14px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '12.5px', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '2px', color: '#0f172a' }}>
                Technical Skills
              </h4>
              <p style={{ margin: 0, fontSize: '12px', color: '#334155' }}>
                {resumeData.skills}
              </p>
            </div>
          )}

          {resumeData.education.trim() && (
            <div style={{ marginBottom: '14px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '12.5px', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '2px', color: '#0f172a' }}>
                Education
              </h4>
              <p style={{ margin: 0, fontSize: '12px', color: '#334155' }}>
                {resumeData.education}
              </p>
            </div>
          )}

          {(resumeData.projectTitle.trim() || resumeData.projectDesc.trim()) && (
            <div style={{ marginBottom: '14px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '12.5px', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '2px', color: '#0f172a' }}>
                Projects
              </h4>
              {resumeData.projectTitle.trim() && (
                <p style={{ margin: '0 0 2px 0', fontSize: '12px', fontWeight: 'bold', color: '#0f172a' }}>
                  {resumeData.projectTitle}
                </p>
              )}
              {resumeData.projectDesc.trim() && (
                <p style={{ margin: 0, fontSize: '12px', lineHeight: '1.5', color: '#334155' }}>
                  {resumeData.projectDesc}
                </p>
              )}
            </div>
          )}

          {resumeData.experience.trim() && (
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '12.5px', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '2px', color: '#0f172a' }}>
                Work Experience / Internships
              </h4>
              <p style={{ margin: 0, fontSize: '12px', lineHeight: '1.5', color: '#334155' }}>
                {resumeData.experience}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 8. MAIN DASHBOARD COMPONENT
// ==========================================
const Dashboard = () => {
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState(null); // null | 'practice' | 'aptitude' | 'resume'
  
  // Sheet Selector: 'dsa' | 'sql' | 'system-design' | 'oops' | 'os'
  const [selectedSheetType, setSelectedSheetType] = useState('dsa');
  const [viewDetail, setViewDetail] = useState(false);

  // Sheets data states
  const [dsaTopics, setDsaTopics] = useState(dsa150Data);
  const [sqlTopics, setSqlTopics] = useState(sqlMasterData);
  const [sdTopics, setSdTopics] = useState(systemDesignData);
  const [oopsTopics, setOopsTopics] = useState(oopsMasterData);
  const [osTopics, setOsTopics] = useState(osMasterData);
  const [openCategory, setOpenCategory] = useState('');

  // Roadmaps state
  const [selectedRoadmap, setSelectedRoadmap] = useState(roadmapData[0]);

  // Safe Authentication Guard
  let storedUser = null;
  try {
    storedUser = JSON.parse(localStorage.getItem('user'));
  } catch {
    storedUser = null;
  }
  const user = storedUser || { name: 'Himanshu', email: 'himanshu@example.com', role: 'student' };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && !localStorage.getItem('user')) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Active sheet retriever
  const getCurrentTopics = () => {
    switch (selectedSheetType) {
      case 'dsa': return dsaTopics;
      case 'sql': return sqlTopics;
      case 'system-design': return sdTopics;
      case 'oops': return oopsTopics;
      case 'os': return osTopics;
      default: return dsaTopics;
    }
  };

  const setCurrentTopics = (updater) => {
    switch (selectedSheetType) {
      case 'dsa': setDsaTopics(updater); break;
      case 'sql': setSqlTopics(updater); break;
      case 'system-design': setSdTopics(updater); break;
      case 'oops': setOopsTopics(updater); break;
      case 'os': setOsTopics(updater); break;
      default: break;
    }
  };

  const currentTopics = getCurrentTopics();

  const toggleCheck = (id) => {
    setCurrentTopics(prev => prev.map(topic => ({
      ...topic,
      problems: topic.problems.map(prob => 
        prob.id === id ? { ...prob, completed: !prob.completed } : prob
      )
    })));
  };

  // Sheet metrics calculation
  const allProblems = currentTopics.flatMap(t => t.problems);
  const totalQuestions = allProblems.length;
  const completedQuestions = allProblems.filter(p => p.completed).length;
  const progressPercent = Math.round((completedQuestions / totalQuestions) * 100) || 0;

  const easyDone = allProblems.filter(p => p.difficulty === 'Easy' && p.completed).length;
  const easyTotal = allProblems.filter(p => p.difficulty === 'Easy').length;
  const mediumDone = allProblems.filter(p => p.difficulty === 'Medium' && p.completed).length;
  const mediumTotal = allProblems.filter(p => p.difficulty === 'Medium').length;
  const hardDone = allProblems.filter(p => p.difficulty === 'Hard' && p.completed).length;
  const hardTotal = allProblems.filter(p => p.difficulty === 'Hard').length;

  return (
    <div style={styles.dashboardWrapper}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background-color: #090d16; color: #f0f6fc; font-family: system-ui, -apple-system, sans-serif; }
        .action-btn { background: #5865f2; color: white; border: none; padding: 12px; border-radius: 8px; font-weight: 700; cursor: pointer; width: 100%; transition: all 0.2s ease; }
        .action-btn:hover { background: #4752c4; transform: translateY(-1px); }
        .back-btn { background: #21262d; color: #c9d1d9; border: 1px solid #30363d; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: 0.2s; }
        .back-btn:hover { background: #30363d; color: #ffffff; }
        .roadmap-tab { transition: all 0.2s ease; cursor: pointer; }
        .roadmap-tab:hover { border-color: #a855f7 !important; background-color: #1a2234 !important; }
        .timeline-card { transition: all 0.2s ease; }
        .timeline-card:hover { border-color: #a855f7 !important; transform: translateX(3px); }
        .link-badge { padding: 4px 8px; border-radius: 6px; font-size: 12px; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 4px; }
        .gfg-btn { background-color: #1e3a29; color: #4ade80; border: 1px solid #22c55e; }
        .leetcode-btn { background-color: #3b2312; color: #fb923c; border: 1px solid #f97316; }
        .video-btn { background-color: #3b1219; color: #f87171; border: 1px solid #ef4444; }
      `}</style>

      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.portalBadge}>MERN PLACEMENT PORTAL</div>
        <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
      </div>

      <div style={styles.mainContainer}>

        {/* 1. DASHBOARD HOME VIEW */}
        {!activeModule && (
          <>
            <h1 style={styles.mainHeading}>Student Dashboard</h1>

            <div style={styles.userCard}>
              <div style={styles.avatar}>{user.name ? user.name[0].toUpperCase() : 'H'}</div>
              <div>
                <h2 style={styles.welcomeText}>
                  Welcome back, <span style={{ color: '#a855f7' }}>{user.name}</span> 👋
                </h2>
                <p style={styles.userInfoText}>
                  Role: <span style={{ color: '#c084fc', fontWeight: '600' }}>{user.role}</span> | Email: {user.email}
                </p>
              </div>
            </div>

            <h3 style={styles.sectionHeading}>Placement Resources</h3>
            <div style={styles.gridContainer}>
              <div style={styles.resourceCard}>
                <div style={styles.cardIcon}>💻</div>
                <h3 style={styles.cardTitle}>Mock Technical Interviews</h3>
                <p style={styles.cardDesc}>5 Interview sheets: Striver's 150 DSA, SQL 75 Queries, System Design, OOPS & Operating Systems.</p>
                <button className="action-btn" onClick={() => setActiveModule('practice')}>
                  Start Practice
                </button>
              </div>

              <div style={styles.resourceCard}>
                <div style={styles.cardIcon}>🧠</div>
                <h3 style={styles.cardTitle}>Aptitude Test Series</h3>
                <p style={styles.cardDesc}>Topic-wise structured tests (Time & Work, Profit & Loss, Speed & Distance, Blood Relations).</p>
                <button className="action-btn" onClick={() => setActiveModule('aptitude')}>
                  Take Test
                </button>
              </div>

              <div style={styles.resourceCard}>
                <div style={styles.cardIcon}>📄</div>
                <h3 style={styles.cardTitle}>Resume Builder & Review</h3>
                <p style={styles.cardDesc}>Build ATS-friendly tech resumes with real-time score optimization and instant PDF print.</p>
                <button className="action-btn" onClick={() => setActiveModule('resume')}>
                  Build Resume
                </button>
              </div>
            </div>

            {/* 6-MONTH ROADMAPS */}
            <div style={{ marginTop: '40px' }}>
              <div style={styles.roadmapHeaderCard}>
                <div style={styles.badge}>STRUCTURED LEARNING PATHS</div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', margin: '6px 0', color: '#f0f6fc' }}>
                  6-Month Tech Roadmaps
                </h2>
                <p style={{ color: '#94a3b8', fontSize: '13.5px', margin: 0 }}>
                  Structured monthly learning paths for Aptitude, MERN, System Design, DSA, and OOPS.
                </p>
              </div>

              <div style={styles.tabGrid}>
                {roadmapData.map((item) => {
                  const isSelected = selectedRoadmap.id === item.id;
                  return (
                    <div
                      key={item.id}
                      className="roadmap-tab"
                      onClick={() => setSelectedRoadmap(item)}
                      style={{
                        ...styles.tabCard,
                        backgroundColor: isSelected ? '#1e293b' : '#131927',
                        borderColor: isSelected ? '#a855f7' : '#1e293b',
                        boxShadow: isSelected ? '0 0 14px rgba(168, 85, 247, 0.25)' : 'none'
                      }}
                    >
                      <div style={{ fontSize: '24px' }}>{item.icon}</div>
                      <div>
                        <h4 style={{ margin: '0 0 2px 0', fontSize: '14px', color: isSelected ? '#c084fc' : '#f0f6fc', fontWeight: '700' }}>
                          {item.title}
                        </h4>
                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                          {item.duration} • <span style={{ color: '#38bdf8' }}>{item.tag}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={styles.timelineWrapper}>
                <div style={styles.timelineHeader}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '28px' }}>{selectedRoadmap.icon}</span>
                    <div>
                      <h3 style={{ margin: 0, fontSize: '19px', color: '#f0f6fc', fontWeight: '800' }}>
                        {selectedRoadmap.title}
                      </h3>
                      <p style={{ margin: '2px 0 0 0', fontSize: '12.5px', color: '#94a3b8' }}>
                        6-Month comprehensive syllabus broken down into 4-week milestones
                      </p>
                    </div>
                  </div>
                  <span style={styles.durationBadge}>⏳ {selectedRoadmap.duration}</span>
                </div>

                <div style={styles.timelineList}>
                  {selectedRoadmap.schedule.map((step, idx) => (
                    <div key={idx} className="timeline-card" style={styles.monthCard}>
                      <div style={styles.monthPill}>{step.month}</div>
                      <div style={{ flex: 1 }}>
                        <h4 style={styles.monthTitle}>{step.topic}</h4>
                        <p style={styles.monthDetails}>{step.details}</p>
                      </div>
                      <div style={styles.checkboxPlaceholder}>✓</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* 2. MOCK TECHNICAL INTERVIEWS (5-FOLDER MULTI-SHEET HUB) */}
        {activeModule === 'practice' && (
          <div>
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="back-btn" onClick={() => { setActiveModule(null); setViewDetail(false); }}>
                ← Back to Dashboard
              </button>
              <span style={{ fontSize: '14px', color: '#8b949e' }}>
                Mock Technical Interviews / {viewDetail ? selectedSheetType.toUpperCase() : 'Select Practice Sheet'}
              </span>
            </div>

            {!viewDetail ? (
              <div style={styles.sheetSectionWrapper}>
                <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#c084fc', margin: '0 0 6px 0' }}>Technical Interview Prep Library</h2>
                <p style={{ fontSize: '14px', color: '#8b949e', margin: '0 0 28px 0' }}>
                  Choose your interview domain: 150 DSA, SQL 75 Queries, System Design, Object-Oriented Programming, or Operating Systems.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '22px' }}>
                  
                  {/* CARD 1: STRIVER 150 DSA */}
                  <div style={styles.libraryCard}>
                    <div style={{ ...styles.cardBanner, borderLeft: '4px solid #a855f7' }}>
                      <div>
                        <h3 style={{ margin: 0, fontSize: '19px', color: '#fff' }}>Striver’s SDE Sheet (DSA)</h3>
                        <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#cbd5e1' }}>150 Problems (80 Easy, 50 Med, 20 Hard)</p>
                      </div>
                      <span style={{ fontSize: '22px' }}>⚡</span>
                    </div>
                    <div style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', flexWrap: 'wrap' }}>
                        <span style={styles.tag}>Arrays</span>
                        <span style={styles.tag}>Linked Lists</span>
                        <span style={styles.tag}>Binary Search</span>
                        <span style={styles.tag}>DP & Graphs</span>
                      </div>
                      <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', minHeight: '40px', margin: '0 0 16px 0' }}>
                        Top interview problems asked at Google, Amazon, Microsoft, and Uber.
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #30363d' }}>
                        <span style={{ fontSize: '12.5px', color: '#4ade80', fontWeight: '700' }}>✓ 150 Curated</span>
                        <button 
                          className="action-btn" 
                          style={{ width: 'auto', padding: '9px 18px' }} 
                          onClick={() => { setSelectedSheetType('dsa'); setOpenCategory('Arrays & Math (25 Problems)'); setViewDetail(true); }}
                        >
                          Open DSA Sheet →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2: SQL 75 MASTER */}
                  <div style={styles.libraryCard}>
                    <div style={{ ...styles.cardBanner, borderLeft: '4px solid #38bdf8' }}>
                      <div>
                        <h3 style={{ margin: 0, fontSize: '19px', color: '#fff' }}>SQL 75 Master Queries</h3>
                        <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#cbd5e1' }}>Beginner to Advanced Query Roadmap</p>
                      </div>
                      <span style={{ fontSize: '22px' }}>🗄️</span>
                    </div>
                    <div style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', flexWrap: 'wrap' }}>
                        <span style={{ ...styles.tag, backgroundColor: '#075985', color: '#7dd3fc' }}>Joins</span>
                        <span style={{ ...styles.tag, backgroundColor: '#075985', color: '#7dd3fc' }}>Window Functions</span>
                        <span style={{ ...styles.tag, backgroundColor: '#075985', color: '#7dd3fc' }}>CTEs</span>
                      </div>
                      <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', minHeight: '40px', margin: '0 0 16px 0' }}>
                        75 LeetCode & HackerRank queries with full-course video link for backend & data analyst roles.
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #30363d' }}>
                        <span style={{ fontSize: '12.5px', color: '#38bdf8', fontWeight: '700' }}>✓ 75 Queries</span>
                        <button 
                          className="action-btn" 
                          style={{ width: 'auto', padding: '9px 18px', backgroundColor: '#0284c7' }} 
                          onClick={() => { setSelectedSheetType('sql'); setOpenCategory('DDL, DML & Basic Select (15 Queries)'); setViewDetail(true); }}
                        >
                          Open SQL Sheet →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* CARD 3: SYSTEM DESIGN */}
                  <div style={styles.libraryCard}>
                    <div style={{ ...styles.cardBanner, borderLeft: '4px solid #f59e0b' }}>
                      <div>
                        <h3 style={{ margin: 0, fontSize: '19px', color: '#fff' }}>System Design: HLD & LLD</h3>
                        <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#cbd5e1' }}>Scalable Architecture & Design Patterns</p>
                      </div>
                      <span style={{ fontSize: '22px' }}>🏗️</span>
                    </div>
                    <div style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', flexWrap: 'wrap' }}>
                        <span style={{ ...styles.tag, backgroundColor: '#78350f', color: '#fcd34d' }}>HLD Architecture</span>
                        <span style={{ ...styles.tag, backgroundColor: '#78350f', color: '#fcd34d' }}>SOLID</span>
                        <span style={{ ...styles.tag, backgroundColor: '#78350f', color: '#fcd34d' }}>Cache & Sharding</span>
                      </div>
                      <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', minHeight: '40px', margin: '0 0 16px 0' }}>
                        Architectural case studies: URL Shortener, Rate Limiter, WhatsApp, and Netflix design walk-throughs.
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #30363d' }}>
                        <span style={{ fontSize: '12.5px', color: '#f59e0b', fontWeight: '700' }}>✓ 15 Architectures</span>
                        <button 
                          className="action-btn" 
                          style={{ width: 'auto', padding: '9px 18px', backgroundColor: '#d97706' }} 
                          onClick={() => { setSelectedSheetType('system-design'); setOpenCategory('High-Level Design (HLD) Architectures'); setViewDetail(true); }}
                        >
                          Open System Design →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* CARD 4: OOPS MASTERY */}
                  <div style={styles.libraryCard}>
                    <div style={{ ...styles.cardBanner, borderLeft: '4px solid #ec4899' }}>
                      <div>
                        <h3 style={{ margin: 0, fontSize: '19px', color: '#fff' }}>Object-Oriented Programming</h3>
                        <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#cbd5e1' }}>4 Pillars, VTable & Design Patterns</p>
                      </div>
                      <span style={{ fontSize: '22px' }}>🧩</span>
                    </div>
                    <div style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', flexWrap: 'wrap' }}>
                        <span style={{ ...styles.tag, backgroundColor: '#831843', color: '#fbcfe8' }}>Polymorphism</span>
                        <span style={{ ...styles.tag, backgroundColor: '#831843', color: '#fbcfe8' }}>Design Patterns</span>
                        <span style={{ ...styles.tag, backgroundColor: '#831843', color: '#fbcfe8' }}>VTable</span>
                      </div>
                      <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', minHeight: '40px', margin: '0 0 16px 0' }}>
                        Inheritance, Virtual Functions, Singleton, Factory & Deep Copy interview scenarios.
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #30363d' }}>
                        <span style={{ fontSize: '12.5px', color: '#ec4899', fontWeight: '700' }}>✓ 10 Core Topics</span>
                        <button 
                          className="action-btn" 
                          style={{ width: 'auto', padding: '9px 18px', backgroundColor: '#db2777' }} 
                          onClick={() => { setSelectedSheetType('oops'); setOpenCategory('Core OOP Principles (The 4 Pillars)'); setViewDetail(true); }}
                        >
                          Open OOPS Sheet →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* CARD 5: OPERATING SYSTEMS */}
                  <div style={styles.libraryCard}>
                    <div style={{ ...styles.cardBanner, borderLeft: '4px solid #10b981' }}>
                      <div>
                        <h3 style={{ margin: 0, fontSize: '19px', color: '#fff' }}>Operating Systems (OS)</h3>
                        <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#cbd5e1' }}>Process Scheduling, Deadlocks & Memory</p>
                      </div>
                      <span style={{ fontSize: '22px' }}>⚙️</span>
                    </div>
                    <div style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', flexWrap: 'wrap' }}>
                        <span style={{ ...styles.tag, backgroundColor: '#064e3b', color: '#a7f3d0' }}>Deadlocks</span>
                        <span style={{ ...styles.tag, backgroundColor: '#064e3b', color: '#a7f3d0' }}>Paging & TLB</span>
                        <span style={{ ...styles.tag, backgroundColor: '#064e3b', color: '#a7f3d0' }}>Scheduling</span>
                      </div>
                      <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', minHeight: '40px', margin: '0 0 16px 0' }}>
                        Process synchronization, Mutex vs Semaphore, Banker's algorithm, and Virtual Memory.
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #30363d' }}>
                        <span style={{ fontSize: '12.5px', color: '#10b981', fontWeight: '700' }}>✓ 10 OS Topics</span>
                        <button 
                          className="action-btn" 
                          style={{ width: 'auto', padding: '9px 18px', backgroundColor: '#059669' }} 
                          onClick={() => { setSelectedSheetType('os'); setOpenCategory('Process Management & CPU Scheduling'); setViewDetail(true); }}
                        >
                          Open OS Sheet →
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ) : (
              <div>
                <div style={styles.detailHeader}>
                  <div>
                    <button 
                      onClick={() => setViewDetail(false)}
                      style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', fontSize: '13px', fontWeight: '700', padding: 0, marginBottom: '8px' }}
                    >
                      ← Switch to another sheet
                    </button>
                    <h1 style={{ fontSize: '26px', fontWeight: '800', margin: '0 0 8px 0' }}>
                      {selectedSheetType === 'dsa' && "Striver’s SDE Sheet (150 Target DSA)"}
                      {selectedSheetType === 'sql' && "SQL 75: Comprehensive Database Query Roadmap"}
                      {selectedSheetType === 'system-design' && "System Design Interview Blueprint (HLD + LLD)"}
                      {selectedSheetType === 'oops' && "Object-Oriented Programming (OOPS) Interview Sheet"}
                      {selectedSheetType === 'os' && "Operating Systems (OS) Core Fundamentals"}
                    </h1>
                    <p style={{ color: '#8b949e', fontSize: '13.5px', margin: 0, maxWidth: '700px', lineHeight: '1.5' }}>
                      {selectedSheetType === 'dsa' && "150 Handcrafted questions: 80 Easy for fast foundational clarity, 50 Medium for core rounds, and 20 Hard to crack top product tiers."}
                      {selectedSheetType === 'sql' && "75 Essential Queries covering Joins, Window Functions, Group By, Subqueries, CTEs, and HackerRank/LeetCode challenges."}
                      {selectedSheetType === 'system-design' && "Standard High-Level (HLD) and Low-Level (LLD) architectural problems with system breakdowns and video deep-dives."}
                      {selectedSheetType === 'oops' && "Core Object-Oriented concepts: 4 Pillars, Virtual Tables, Memory allocation, and standard Software Design Patterns."}
                      {selectedSheetType === 'os' && "Process Scheduling, Concurrency, Mutex/Semaphores, Deadlocks, Virtual Memory Paging, and Disk Management."}
                    </p>
                  </div>

                  <div style={styles.topProgressWidget}>
                    <div style={{ fontSize: '13px', color: '#8b949e' }}>Sheet Progress</div>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: '#f0f6fc', margin: '4px 0' }}>{completedQuestions} / {totalQuestions}</div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#c084fc' }}>{progressPercent}% Solved</div>
                  </div>
                </div>

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

                <div style={{ marginTop: '24px' }}>
                  {currentTopics.map((topic) => {
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
                                  <th style={styles.th}>Problem / Concept Title</th>
                                  <th style={styles.th}>Difficulty</th>
                                  <th style={styles.th}>Practice & Docs</th>
                                  <th style={styles.th}>Video Explanation</th>
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
                                        <a href={prob.leetcodeLink} target="_blank" rel="noreferrer" className="link-badge leetcode-btn">LeetCode / GitHub ↗</a>
                                        <a href={prob.gfgLink} target="_blank" rel="noreferrer" className="link-badge gfg-btn">GFG Docs ↗</a>
                                      </div>
                                    </td>
                                    <td style={styles.td}>
                                      <a href={prob.videoLink} target="_blank" rel="noreferrer" className="link-badge video-btn">▶ Watch Video</a>
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

        {/* 3. APTITUDE MODULE */}
        {activeModule === 'aptitude' && (
          <div>
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="back-btn" onClick={() => setActiveModule(null)}>
                ← Back to Dashboard
              </button>
              <span style={{ fontSize: '14px', color: '#8b949e' }}>Placement Resources / Aptitude Test Series</span>
            </div>

            <Aptitude />
          </div>
        )}

        {/* 4. RESUME BUILDER MODULE */}
        {activeModule === 'resume' && (
          <ResumeBuilderSection onBack={() => setActiveModule(null)} />
        )}

      </div>
    </div>
  );
};

const styles = {
  dashboardWrapper: { minHeight: '100vh', backgroundColor: '#090d16', color: '#f0f6fc', paddingBottom: '50px' },
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
  gridContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' },
  resourceCard: { backgroundColor: '#131927', borderRadius: '16px', padding: '28px 24px', border: '1px solid #1e293b', display: 'flex', flexDirection: 'column', gap: '12px' },
  cardIcon: { fontSize: '28px' },
  cardTitle: { fontSize: '18px', fontWeight: '800', margin: 0 },
  cardDesc: { fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', flexGrow: 1, margin: 0 },
  roadmapHeaderCard: { backgroundColor: '#131927', borderRadius: '16px', padding: '22px', border: '1px solid #1e293b', marginBottom: '16px' },
  badge: { display: 'inline-block', fontSize: '11px', fontWeight: '700', color: '#c084fc', backgroundColor: '#3b0764', padding: '4px 10px', borderRadius: '12px', letterSpacing: '0.5px' },
  tabGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '20px' },
  tabCard: { padding: '14px', borderRadius: '12px', border: '1px solid #1e293b', display: 'flex', alignItems: 'center', gap: '12px' },
  timelineWrapper: { backgroundColor: '#131927', borderRadius: '16px', border: '1px solid #1e293b', padding: '22px' },
  timelineHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid #1e293b', marginBottom: '16px' },
  durationBadge: { backgroundColor: '#1a2234', border: '1px solid #30363d', color: '#38bdf8', padding: '4px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: '700' },
  timelineList: { display: 'flex', flexDirection: 'column', gap: '10px' },
  monthCard: { backgroundColor: '#1a2234', border: '1px solid #30363d', borderRadius: '10px', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '16px' },
  monthPill: { backgroundColor: '#3b0764', color: '#c084fc', fontWeight: '800', fontSize: '11.5px', padding: '6px 10px', borderRadius: '6px', whiteSpace: 'nowrap' },
  monthTitle: { margin: '0 0 3px 0', fontSize: '14.5px', fontWeight: '700', color: '#f0f6fc' },
  monthDetails: { margin: 0, fontSize: '12.5px', color: '#94a3b8', lineHeight: '1.4' },
  checkboxPlaceholder: { width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#0d1117', border: '1px solid #30363d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#4ade80', fontWeight: '800' },
  sheetSectionWrapper: { backgroundColor: '#131927', padding: '28px', borderRadius: '16px', border: '1px solid #1e293b' },
  libraryCard: { backgroundColor: '#1a2234', borderRadius: '14px', border: '1px solid #30363d', overflow: 'hidden', minWidth: '280px' },
  cardBanner: { backgroundColor: '#0f172a', padding: '20px', display: 'flex', justifyContent: 'space-between' },
  tag: { backgroundColor: '#3b0764', color: '#c084fc', fontSize: '11px', fontWeight: '700', padding: '4px 8px', borderRadius: '12px' },
  detailHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', backgroundColor: '#131927', padding: '24px', borderRadius: '16px', border: '1px solid #1e293b' },
  topProgressWidget: { backgroundColor: '#1a2234', padding: '16px 24px', borderRadius: '12px', border: '1px solid #30363d', textAlign: 'center' },
  statsRow: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' },
  statBox: { backgroundColor: '#131927', padding: '16px', borderRadius: '12px', border: '1px solid #1e293b', display: 'flex', flexDirection: 'column', gap: '4px' },
  accordionContainer: { backgroundColor: '#131927', borderRadius: '12px', border: '1px solid #1e293b', marginBottom: '14px', overflow: 'hidden' },
  accordionHeader: { padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', backgroundColor: '#1a2234' },
  table: { width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13.5px' },
  thRow: { backgroundColor: '#0f172a', borderBottom: '1px solid #1e293b' },
  th: { padding: '12px 16px', color: '#94a3b8', fontWeight: '700' },
  tr: { borderBottom: '1px solid #1e293b', transition: '0.2s' },
  td: { padding: '12px 16px' }
};

export default Dashboard;