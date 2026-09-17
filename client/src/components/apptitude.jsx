import React, { useState } from 'react';

export const aptitudeTopicsData = [
  // 1. Time and Work & Pipes
  {
    topicId: 'time-work',
    topicName: '1. Time and Work & Pipes',
    category: 'Quantitative Aptitude',
    icon: '⏳',
    indiabixUrl: 'https://www.indiabix.com/aptitude/time-and-work/',
    questions: [
      {
        id: 'tw_1',
        question: 'A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is:',
        options: ['7/15', '8/15', '1/10', '1/4'],
        correct: 1,
        explanation: "A's 1 day = 1/15, B's 1 day = 1/20. Together in 1 day = 1/15 + 1/20 = 7/60. In 4 days = 28/60 = 7/15. Work left = 1 - 7/15 = 8/15."
      },
      {
        id: 'tw_2',
        question: 'A can do a piece of work in 4 hours; B and C together in 3 hours, and A and C together in 2 hours. How long will B alone take to do it?',
        options: ['8 hours', '10 hours', '12 hours', '24 hours'],
        correct: 2,
        explanation: "A's rate = 1/4. C's rate = 1/2 - 1/4 = 1/4. B's rate = 1/3 - 1/4 = 1/12. B takes 12 hours alone."
      },
      {
        id: 'tw_3',
        question: 'A is thrice as good a workman as B and therefore is able to finish a job in 60 days less than B. Working together, they can do it in:',
        options: ['20 days', '22.5 days', '25 days', '30 days'],
        correct: 1,
        explanation: 'Ratio of time = 1:3. Difference = 2 units = 60 days => 1 unit = 30 days (A), 3 units = 90 days (B). Together = (30 * 90) / 120 = 22.5 days.'
      },
      {
        id: 'tw_4',
        question: '4 men and 6 women can complete a work in 8 days, while 3 men and 7 women can complete it in 10 days. In how many days will 10 women complete it?',
        options: ['35 days', '40 days', '45 days', '50 days'],
        correct: 1,
        explanation: '32m + 48w = 30m + 70w => 2m = 22w => 1m = 11w. Total work = (4*11 + 6)*8 = 400 woman-days. 10 women take 400 / 10 = 40 days.'
      },
      {
        id: 'tw_5',
        question: 'A pipe can fill a tank in 6 hours and another pipe can empty it in 12 hours. If both are opened together, the tank will fill in:',
        options: ['8 hours', '10 hours', '12 hours', '15 hours'],
        correct: 2,
        explanation: 'Net fill rate = 1/6 - 1/12 = 1/12. Tank fills in 12 hours.'
      },
      {
        id: 'tw_6',
        question: 'Two pipes A and B can fill a cistern in 20 and 30 minutes respectively. Both being opened simultaneously, the tank is filled in:',
        options: ['12 min', '15 min', '22 min', '25 min'],
        correct: 0,
        explanation: 'Net fill rate = 1/20 + 1/30 = 5/60 = 1/12 => 12 minutes.'
      },
      {
        id: 'tw_7',
        question: 'A works twice as fast as B. If B can complete a work in 12 days alone, how long will they take together?',
        options: ['4 days', '6 days', '8 days', '9 days'],
        correct: 0,
        explanation: 'B takes 12 days, so A takes 6 days. Together = (6 * 12) / (6 + 12) = 4 days.'
      },
      {
        id: 'tw_8',
        question: 'A does 4/5 of a work in 20 days. He then calls in B and together they finish the remaining work in 3 days. How long would B alone take?',
        options: ['30 days', '37.5 days', '40 days', '45 days'],
        correct: 1,
        explanation: 'Remaining 1/5 in 3 days => (A+B) do whole in 15 days. A does whole in 25 days. B = 1/15 - 1/25 = 2/75 => 37.5 days.'
      },
      {
        id: 'tw_9',
        question: 'A pump can fill a tank in 2 hours. Because of a leak, it took 2.33 hours (7/3 hrs) to fill. The leak can empty the full tank in:',
        options: ['7 hours', '8 hours', '12 hours', '14 hours'],
        correct: 3,
        explanation: 'Leak rate = 1/2 - 3/7 = 1/14. Emptying time = 14 hours.'
      },
      {
        id: 'tw_10',
        question: 'A and B undertake a project for ₹3200. A alone can do it in 6 days, B in 8 days. With C they do it in 3 days. What is C’s share?',
        options: ['₹375', '₹400', '₹600', '₹800'],
        correct: 1,
        explanation: "C's 1 day = 1/3 - (1/6 + 1/8) = 1/24. Ratio = 4 : 3 : 1. C's share = (1/8) * 3200 = ₹400."
      }
    ]
  },

  // 2. Profit and Loss
  {
    topicId: 'profit-loss',
    topicName: '2. Profit and Loss',
    category: 'Quantitative Aptitude',
    icon: '💰',
    indiabixUrl: 'https://www.indiabix.com/aptitude/profit-and-loss/',
    questions: [
      {
        id: 'pl_1',
        question: 'A person sold an article for ₹6750 at a loss of 25%. At what price should he sell it so as to gain 15%?',
        options: ['₹7,500', '₹9,000', '₹10,350', '₹11,000'],
        correct: 2,
        explanation: '75% of CP = 6750 => CP = 9000. For 15% gain, SP = 9000 * 1.15 = ₹10,350.'
      },
      {
        id: 'pl_2',
        question: 'The cost price of 20 articles is equal to the selling price of x articles. If the profit is 25%, the value of x is:',
        options: ['15', '16', '18', '25'],
        correct: 1,
        explanation: 'Profit% = (20 - x)/x * 100 = 25 => (20 - x)/x = 1/4 => 5x = 80 => x = 16.'
      },
      {
        id: 'pl_3',
        question: 'A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?',
        options: ['3', '4', '5', '6'],
        correct: 2,
        explanation: 'CP of 1 = ₹(1/6). SP of 1 = 120% of (1/6) = ₹(1/5). Hence 5 toffees for a rupee.'
      },
      {
        id: 'pl_4',
        question: 'Two successive discounts of 20% and 10% are equivalent to a single discount of:',
        options: ['28%', '30%', '32%', '35%'],
        correct: 0,
        explanation: 'Single equivalent discount = 20 + 10 - (20 * 10)/100 = 28%.'
      },
      {
        id: 'pl_5',
        question: 'A dishonest dealer professes to sell his goods at cost price, but uses 960 grams for a kg weight. His gain % is:',
        options: ['4%', '4.16%', '4.5%', '5%'],
        correct: 1,
        explanation: 'Gain% = (40 / 960) * 100 = 4.16% (or 4 1/6%).'
      },
      {
        id: 'pl_6',
        question: 'If the selling price of an item is doubled, the profit triples. Find the profit percentage.',
        options: ['66.66%', '100%', '105%', '120%'],
        correct: 1,
        explanation: '2s - c = 3(s - c) => s = 2c. Profit% = ((2c - c)/c) * 100 = 100%.'
      },
      {
        id: 'pl_7',
        question: 'By selling 33 metres of cloth, a shopkeeper gains the selling price of 11 metres. The gain % is:',
        options: ['25%', '33.33%', '50%', '60%'],
        correct: 2,
        explanation: 'Gain = SP of 11 = SP of 33 - CP of 33 => CP of 33 = SP of 22. Profit% = (11 / 22) * 100 = 50%.'
      },
      {
        id: 'pl_8',
        question: 'A man sells two horses for ₹9900 each. On one he gains 10% and on other he loses 10%. Overall result is:',
        options: ['1% loss', '1% gain', 'No loss no gain', '2% loss'],
        correct: 0,
        explanation: 'Always loss = (x/10)^2 % = (10/10)^2 = 1% loss.'
      },
      {
        id: 'pl_9',
        question: 'A merchant marks goods 20% above CP and allows a 10% discount on marked price. Profit % is:',
        options: ['8%', '10%', '12%', '14%'],
        correct: 0,
        explanation: 'Let CP = 100. MP = 120. SP = 90% of 120 = 108. Profit = 8%.'
      },
      {
        id: 'pl_10',
        question: 'The profit earned by selling an article for ₹832 is equal to the loss incurred when sold for ₹448. The CP is:',
        options: ['₹640', '₹650', '₹680', '₹700'],
        correct: 0,
        explanation: 'CP = (832 + 448) / 2 = 1280 / 2 = ₹640.'
      }
    ]
  },

  // 3. Time, Speed and Distance
  {
    topicId: 'time-distance',
    topicName: '3. Time, Speed and Distance',
    category: 'Quantitative Aptitude',
    icon: '🚀',
    indiabixUrl: 'https://www.indiabix.com/aptitude/time-and-distance/',
    questions: [
      {
        id: 'td_1',
        question: 'A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?',
        options: ['3.6 km/hr', '7.2 km/hr', '8.4 km/hr', '10 km/hr'],
        correct: 1,
        explanation: 'Speed = 600 m / 300 s = 2 m/s = 2 * (18/5) = 7.2 km/hr.'
      },
      {
        id: 'td_2',
        question: 'If a person walks at 14 km/hr instead of 10 km/hr, he would walk 20 km more. The actual distance travelled is:',
        options: ['50 km', '56 km', '70 km', '80 km'],
        correct: 0,
        explanation: 'd/10 = (d+20)/14 => 14d = 10d + 200 => 4d = 200 => d = 50 km.'
      },
      {
        id: 'td_3',
        question: 'Excluding stoppages, bus speed is 54 km/hr and including stoppages it is 45 km/hr. How many minutes does it stop per hour?',
        options: ['9 min', '10 min', '12 min', '20 min'],
        correct: 1,
        explanation: 'Stoppage time = [(54 - 45) / 54] * 60 = (9/54) * 60 = 10 minutes.'
      },
      {
        id: 'td_4',
        question: 'A man travels from A to B at 20 km/hr and returns at 30 km/hr. What is his average speed for the whole journey?',
        options: ['24 km/hr', '25 km/hr', '26 km/hr', '28 km/hr'],
        correct: 0,
        explanation: 'Average speed = (2 * 20 * 30) / (20 + 30) = 1200 / 50 = 24 km/hr.'
      },
      {
        id: 'td_5',
        question: 'Walking at 3/4 of his normal speed, a man is 20 minutes late. His usual time is:',
        options: ['45 min', '60 min', '75 min', '80 min'],
        correct: 1,
        explanation: 'Usual time = 20 * (3 / (4 - 3)) = 60 minutes.'
      },
      {
        id: 'td_6',
        question: 'In a 100 m race, A beats B by 10 m and C by 13 m. In a race of 180 m, B will beat C by:',
        options: ['5.4 m', '6 m', '6.5 m', '7.2 m'],
        correct: 1,
        explanation: 'When B runs 90 m, C runs 87 m. When B runs 180 m, C runs (87/90)*180 = 174 m. B beats C by 180 - 174 = 6 m.'
      },
      {
        id: 'td_7',
        question: 'A thief is spotted by a policeman from 200 m. Thief runs at 10 km/hr and police chases at 11 km/hr. Distance between them after 6 mins:',
        options: ['100 m', '150 m', '180 m', '190 m'],
        correct: 0,
        explanation: 'Relative speed = 1 km/hr = 1000 m / 60 min. In 6 mins distance closed = 100 m. Distance left = 200 - 100 = 100 m.'
      },
      {
        id: 'td_8',
        question: 'A boy goes to school at 3 km/hr and returns at 2 km/hr taking 5 hours in total. The distance is:',
        options: ['5 km', '5.5 km', '6 km', '6.5 km'],
        correct: 2,
        explanation: 'd/3 + d/2 = 5 => 5d/6 = 5 => d = 6 km.'
      },
      {
        id: 'td_9',
        question: 'A speed of 14 metres per second is equal to:',
        options: ['46.8 km/hr', '50.4 km/hr', '52 km/hr', '55 km/hr'],
        correct: 1,
        explanation: '14 * (18/5) = 252 / 5 = 50.4 km/hr.'
      },
      {
        id: 'td_10',
        question: 'An aeroplane covers a distance at 240 km/hr in 5 hours. To cover the same in 1 2/3 hours (5/3 hrs), it must travel at:',
        options: ['300 km/hr', '360 km/hr', '600 km/hr', '720 km/hr'],
        correct: 3,
        explanation: 'Distance = 240 * 5 = 1200 km. Speed = 1200 / (5/3) = 720 km/hr.'
      }
    ]
  },

  // 4. Problems on Trains
  {
    topicId: 'trains',
    topicName: '4. Problems on Trains',
    category: 'Quantitative Aptitude',
    icon: '🚆',
    indiabixUrl: 'https://www.indiabix.com/aptitude/problems-on-trains/',
    questions: [
      {
        id: 'tr_1',
        question: 'A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?',
        options: ['65 sec', '89 sec', '100 sec', '150 sec'],
        correct: 1,
        explanation: 'Speed = 240 / 24 = 10 m/s. Time = (240 + 650) / 10 = 89 seconds.'
      },
      {
        id: 'tr_2',
        question: 'Two trains 140 m and 160 m long run at 60 km/hr and 40 km/hr in opposite directions. Time to cross each other is:',
        options: ['9 sec', '10.8 sec', '12 sec', '15 sec'],
        correct: 1,
        explanation: 'Relative speed = 100 km/hr = 250/9 m/s. Total distance = 300 m. Time = 300 / (250/9) = 10.8 sec.'
      },
      {
        id: 'tr_3',
        question: 'A train 125 m long passes a man running at 5 km/hr in the same direction in 10 seconds. Train speed is:',
        options: ['45 km/hr', '50 km/hr', '54 km/hr', '55 km/hr'],
        correct: 1,
        explanation: 'Relative speed = 125 / 10 = 12.5 m/s = 45 km/hr. Train speed = 45 + 5 = 50 km/hr.'
      },
      {
        id: 'tr_4',
        question: 'A train passes a telegraph post and a 264 m bridge in 8 sec and 20 sec respectively. Length of the train is:',
        options: ['120 m', '140 m', '176 m', '200 m'],
        correct: 2,
        explanation: 'Speed = 264 / (20 - 8) = 22 m/s. Train length = 22 * 8 = 176 m.'
      },
      {
        id: 'tr_5',
        question: 'A train 360 m long is running at 45 km/hr. In what time will it pass a bridge 140 m long?',
        options: ['40 sec', '42 sec', '45 sec', '48 sec'],
        correct: 0,
        explanation: 'Distance = 500 m. Speed = 45 * (5/18) = 12.5 m/s. Time = 500 / 12.5 = 40 seconds.'
      },
      {
        id: 'tr_6',
        question: 'Two trains in opposite directions cross a man on platform in 27s and 17s, and cross each other in 23s. Speed ratio:',
        options: ['1:3', '3:2', '3:4', '2:3'],
        correct: 1,
        explanation: 'Alligation: (27 - 23) / (23 - 17) = 4 / 6 => ratio of speeds = 3 : 2.'
      },
      {
        id: 'tr_7',
        question: 'A train 100 m long travelling at 60 km/hr passes a platform in 30 sec. Length of the platform is:',
        options: ['200 m', '300 m', '400 m', '500 m'],
        correct: 2,
        explanation: 'Distance = 60 * (5/18) * 30 = 500 m. Platform length = 500 - 100 = 400 m.'
      },
      {
        id: 'tr_8',
        question: 'A train 150 m long passes a milestone in 15 seconds. Speed of the train in km/hr is:',
        options: ['30 km/hr', '36 km/hr', '40 km/hr', '45 km/hr'],
        correct: 1,
        explanation: 'Speed = 150 / 15 = 10 m/s = 10 * (18/5) = 36 km/hr.'
      },
      {
        id: 'tr_9',
        question: 'Two trains run at 40 km/hr and 20 km/hr in same direction. Faster train completely passes a man in slower train in 5 sec. Length of fast train:',
        options: ['25 m', '27.77 m', '30 m', '32 m'],
        correct: 1,
        explanation: 'Relative speed = 20 * (5/18) = 50/9 m/s. Length = (50/9) * 5 = 27.77 m.'
      },
      {
        id: 'tr_10',
        question: 'A passenger counts 21 telephone posts in 1 minute. If they are 50 m apart, train speed is:',
        options: ['54 km/hr', '57 km/hr', '60 km/hr', '63 km/hr'],
        correct: 2,
        explanation: '20 intervals * 50 = 1000 m. Speed = (1000 / 60) * (18/5) = 60 km/hr.'
      }
    ]
  },

  // 5. Percentages & Averages
  {
    topicId: 'percentages',
    topicName: '5. Percentages & Averages',
    category: 'Quantitative Aptitude',
    icon: '📊',
    indiabixUrl: 'https://www.indiabix.com/aptitude/percentage/',
    questions: [
      {
        id: 'pct_1',
        question: 'If A is 20% more than B, then by what percentage is B less than A?',
        options: ['16.66%', '20%', '25%', '15%'],
        correct: 0,
        explanation: 'Percentage reduction = [20 / (100 + 20)] * 100 = 16.66%.'
      },
      {
        id: 'pct_2',
        question: 'A student multiplied a number by 3/5 instead of 5/3. What is the percentage error in the calculation?',
        options: ['34%', '44%', '54%', '64%'],
        correct: 3,
        explanation: 'Correct = 25, wrong = 9. Error = 16. Error % = (16 / 25) * 100 = 64%.'
      },
      {
        id: 'pct_3',
        question: 'If the price of sugar increases by 25%, by what percent must a family reduce consumption so budget remains constant?',
        options: ['15%', '20%', '25%', '30%'],
        correct: 1,
        explanation: 'Reduction % = [25 / (100 + 25)] * 100 = 20%.'
      },
      {
        id: 'pct_4',
        question: 'The population of a town increases by 5% annually. If current population is 80,000, what will it be after 2 years?',
        options: ['88,000', '88,200', '89,000', '90,000'],
        correct: 1,
        explanation: 'Population = 80000 * (1.05)^2 = 88,200.'
      },
      {
        id: 'pct_5',
        question: 'A candidate must get 33% marks to pass. He got 210 marks and failed by 21 marks. Maximum marks are:',
        options: ['600', '700', '800', '900'],
        correct: 1,
        explanation: 'Pass marks = 231. 33% = 231 => Max = 700.'
      },
      {
        id: 'pct_6',
        question: 'The average of 5 consecutive odd numbers is 61. What is the difference between highest and lowest numbers?',
        options: ['4', '8', '12', '16'],
        correct: 1,
        explanation: 'Numbers are: 57, 59, 61, 63, 65. Difference = 65 - 57 = 8.'
      },
      {
        id: 'pct_7',
        question: 'The average age of 30 students is 14 years. If teacher’s age is included, average becomes 15. Teacher’s age is:',
        options: ['40 years', '44 years', '45 years', '50 years'],
        correct: 2,
        explanation: 'Total with teacher = 31 * 15 = 465. Students = 30 * 14 = 420. Teacher = 465 - 420 = 45 years.'
      },
      {
        id: 'pct_8',
        question: 'Average of 10 numbers is 23. If each number is multiplied by 4, new average will be:',
        options: ['27', '82', '92', '102'],
        correct: 2,
        explanation: 'New average = 23 * 4 = 92.'
      },
      {
        id: 'pct_9',
        question: 'A cricketer has an average of 40 runs in 10 innings. How many runs must he score in the 11th inning to raise average to 45?',
        options: ['85', '90', '95', '100'],
        correct: 2,
        explanation: 'Runs required = (11 * 45) - (10 * 40) = 495 - 400 = 95.'
      },
      {
        id: 'pct_10',
        question: 'The average weight of 8 persons increases by 2.5 kg when a new person replaces one weighing 65 kg. Weight of new person:',
        options: ['75 kg', '80 kg', '85 kg', '90 kg'],
        correct: 2,
        explanation: 'Weight = 65 + (8 * 2.5) = 85 kg.'
      }
    ]
  },

  // 6. Ratio, Proportion & Alligation
  {
    topicId: 'ratio-proportion',
    topicName: '6. Ratio, Proportion & Alligation',
    category: 'Quantitative Aptitude',
    icon: '⚖️',
    indiabixUrl: 'https://www.indiabix.com/aptitude/ratio-and-proportion/',
    questions: [
      {
        id: 'rp_1',
        question: 'If A:B = 2:3 and B:C = 4:5, find the combined ratio A : B : C:',
        options: ['8:12:15', '2:4:5', '6:9:10', '8:10:15'],
        correct: 0,
        explanation: 'Multiply A:B by 4 and B:C by 3 => 8 : 12 : 15.'
      },
      {
        id: 'rp_2',
        question: 'Two numbers are in ratio 3:5. If 9 is subtracted from each, ratio becomes 12:23. The smaller number is:',
        options: ['27', '33', '49', '55'],
        correct: 1,
        explanation: '(3x - 9)/(5x - 9) = 12/23 => 9x = 99 => x = 11. Smaller number = 33.'
      },
      {
        id: 'rp_3',
        question: 'In a mixture of 60 litres, ratio of milk and water is 2:1. How much water must be added to make ratio 1:2?',
        options: ['40 litres', '50 litres', '60 litres', '80 litres'],
        correct: 2,
        explanation: 'Milk = 40 L, water = 20 L. In new ratio milk (40) is 1 part, so water = 80 L. Water added = 60 L.'
      },
      {
        id: 'rp_4',
        question: 'In what ratio must tea at ₹62/kg be mixed with tea at ₹72/kg so that mixture is worth ₹64.50/kg?',
        options: ['3:1', '3:2', '4:3', '5:3'],
        correct: 0,
        explanation: '(72 - 64.5) : (64.5 - 62) = 7.5 : 2.5 = 3 : 1.'
      },
      {
        id: 'rp_5',
        question: 'A bag contains 50p, 25p and 10p coins in ratio 5:9:4 amounting to ₹206. Number of 50p coins is:',
        options: ['150', '200', '250', '300'],
        correct: 1,
        explanation: '5.15x = 206 => x = 40. 50p coins = 5 * 40 = 200.'
      },
      {
        id: 'rp_6',
        question: 'Salaries of A, B, C are in ratio 2:3:5. If increments of 15%, 10% and 20% are allowed, new ratio is:',
        options: ['23:33:60', '33:23:60', '21:33:60', '23:30:50'],
        correct: 0,
        explanation: '2.3 : 3.3 : 6 = 23 : 33 : 60.'
      },
      {
        id: 'rp_7',
        question: 'A jar contains milk and water in ratio 3:1. What fraction must be drawn off and replaced with water so ratio becomes 1:1?',
        options: ['1/4', '1/3', '2/3', '1/2'],
        correct: 1,
        explanation: '3/4(1 - x) = 1/2 => 1 - x = 2/3 => x = 1/3.'
      },
      {
        id: 'rp_8',
        question: 'The fourth proportional to 5, 8, 15 is:',
        options: ['18', '20', '24', '30'],
        correct: 2,
        explanation: '5/8 = 15/x => x = 24.'
      },
      {
        id: 'rp_9',
        question: 'If a carton containing a dozen mirrors is dropped, which cannot be the ratio of broken to unbroken mirrors?',
        options: ['2:1', '3:1', '3:2', '7:5'],
        correct: 2,
        explanation: '3 + 2 = 5 does not divide 12.'
      },
      {
        id: 'rp_10',
        question: '₹427 is divided among A, B, C such that 3A = 4B = 7C. C’s share is:',
        options: ['₹84', '₹140', '₹196', '₹240'],
        correct: 0,
        explanation: 'Ratio A:B:C = 28 : 21 : 12. Sum = 61. C share = (12/61) * 427 = ₹84.'
      }
    ]
  },

  // 7. Permutation, Combination & Probability
  {
    topicId: 'probability',
    topicName: '7. Permutation, Combination & Probability',
    category: 'Quantitative Aptitude',
    icon: '🎲',
    indiabixUrl: 'https://www.indiabix.com/aptitude/probability/',
    questions: [
      {
        id: 'prob_1',
        question: 'In how many ways can the letters of the word "LEADING" be arranged so that vowels always come together?',
        options: ['360', '480', '720', '5040'],
        correct: 2,
        explanation: 'Units = 5! * 3! = 120 * 6 = 720.'
      },
      {
        id: 'prob_2',
        question: 'Two dice are thrown simultaneously. Probability of getting two numbers whose product is even:',
        options: ['1/2', '3/4', '3/8', '5/16'],
        correct: 1,
        explanation: 'Total = 36. Both odd = 9. P(even) = 1 - 9/36 = 27/36 = 3/4.'
      },
      {
        id: 'prob_3',
        question: 'From a pack of 52 cards, two cards are drawn at random. What is the probability that both are Kings?',
        options: ['1/13', '1/221', '2/221', '4/663'],
        correct: 1,
        explanation: '(4C2) / (52C2) = 6 / 1326 = 1 / 221.'
      },
      {
        id: 'prob_4',
        question: 'In how many ways can a cricket team of 11 be chosen from 15 players if captain is always included?',
        options: ['1001', '1365', '1400', '1500'],
        correct: 0,
        explanation: '14C10 = 14C4 = 1001.'
      },
      {
        id: 'prob_5',
        question: 'A box contains 2 white, 3 black and 4 red balls. If 3 balls are drawn, probability that none is white:',
        options: ['5/12', '7/24', '5/24', '1/3'],
        correct: 0,
        explanation: '7C3 / 9C3 = 35 / 84 = 5/12.'
      },
      {
        id: 'prob_6',
        question: 'In how many ways can 5 persons sit around a circular table?',
        options: ['24', '60', '120', '720'],
        correct: 0,
        explanation: '(5 - 1)! = 4! = 24.'
      },
      {
        id: 'prob_7',
        question: 'What is the probability that a leap year selected at random contains 53 Sundays?',
        options: ['1/7', '2/7', '3/7', '5/7'],
        correct: 1,
        explanation: 'Leap year has 2 extra days. 2 pairs out of 7 contain Sunday => 2/7.'
      },
      {
        id: 'prob_8',
        question: 'How many 4-digit numbers can be formed using digits 1, 2, 3, 4, 5 without repetition?',
        options: ['60', '100', '120', '125'],
        correct: 2,
        explanation: '5P4 = 120.'
      },
      {
        id: 'prob_9',
        question: 'Three coins are tossed simultaneously. What is the probability of getting at most two heads?',
        options: ['3/4', '7/8', '1/2', '5/8'],
        correct: 1,
        explanation: 'P = 1 - P(HHH) = 1 - 1/8 = 7/8.'
      },
      {
        id: 'prob_10',
        question: 'A card is drawn from a pack of 52 cards. What is probability of getting a queen or a heart?',
        options: ['4/13', '1/4', '17/52', '16/52'],
        correct: 0,
        explanation: 'Favorable = 4 + 13 - 1 = 16. P = 16/52 = 4/13.'
      }
    ]
  },

  // 8. Simple & Compound Interest
  {
    topicId: 'interest',
    topicName: '8. Simple & Compound Interest',
    category: 'Quantitative Aptitude',
    icon: '📈',
    indiabixUrl: 'https://www.indiabix.com/aptitude/compound-interest/',
    questions: [
      {
        id: 'si_1',
        question: 'A sum of money at simple interest amounts to ₹815 in 3 years and to ₹854 in 4 years. The sum is:',
        options: ['₹650', '₹690', '₹698', '₹700'],
        correct: 2,
        explanation: 'SI for 1 yr = 854 - 815 = 39. SI for 3 yrs = 117. Principal = 815 - 117 = ₹698.'
      },
      {
        id: 'si_2',
        question: 'The difference between CI and SI on a certain sum at 10% per annum for 2 years is ₹631. The sum is:',
        options: ['₹60,100', '₹61,100', '₹63,100', '₹65,100'],
        correct: 2,
        explanation: 'Diff = P * (10/100)^2 => 631 = P / 100 => P = ₹63,100.'
      },
      {
        id: 'si_3',
        question: 'A sum of money doubles itself in 5 years at simple interest. In how many years will it become 4 times?',
        options: ['10 years', '12 years', '15 years', '20 years'],
        correct: 2,
        explanation: '1P in 5 years => 3P interest takes 3 * 5 = 15 years.'
      },
      {
        id: 'si_4',
        question: 'A sum invested at compound interest doubles in 3 years. In how many years will it become 8 times itself?',
        options: ['6 years', '9 years', '12 years', '15 years'],
        correct: 1,
        explanation: '8 = 2^3 => 3 * 3 = 9 years.'
      },
      {
        id: 'si_5',
        question: 'Find the compound interest on ₹10,000 in 2 years at 10% per annum, compounded annually:',
        options: ['₹2,000', '₹2,100', '₹2,200', '₹2,400'],
        correct: 1,
        explanation: 'Amount = 10000 * 1.21 = 12100. CI = ₹2,100.'
      },
      {
        id: 'si_6',
        question: 'At what rate percent will ₹5,000 produce simple interest of ₹1,000 in 4 years?',
        options: ['4%', '5%', '6%', '8%'],
        correct: 1,
        explanation: 'R = (1000 * 100) / (5000 * 4) = 5%.'
      },
      {
        id: 'si_7',
        question: 'Compound interest on ₹50,000 for 1.5 years at 4% per annum compounded half-yearly is:',
        options: ['₹3,000', '₹3,060.40', '₹3,120', '₹3,200'],
        correct: 1,
        explanation: 'Rate = 2%, n = 3. Amount = 50000 * (1.02)^3 = 53060.40. CI = ₹3,060.40.'
      },
      {
        id: 'si_8',
        question: 'A sum amounts to ₹1323 in 2 years at 5% compound interest per annum. The sum was:',
        options: ['₹1,150', '₹1,200', '₹1,250', '₹1,300'],
        correct: 1,
        explanation: 'P = 1323 / (1.05)^2 = ₹1,200.'
      },
      {
        id: 'si_9',
        question: 'If simple interest on a sum at 4% for 2 years is ₹80, compound interest on same is:',
        options: ['₹80.80', '₹81.60', '₹82.40', '₹83.20'],
        correct: 1,
        explanation: 'P = ₹1000. CI = 1000 * 0.0816 = ₹81.60.'
      },
      {
        id: 'si_10',
        question: 'A sum of ₹12,500 amounts to ₹15,500 in 4 years at simple interest. Rate is:',
        options: ['5%', '6%', '6.5%', '8%'],
        correct: 1,
        explanation: 'SI = 3000. R = (3000 * 100) / (12500 * 4) = 6%.'
      }
    ]
  },

  // 9. Blood Relations
  {
    topicId: 'blood-relations',
    topicName: '9. Blood Relations',
    category: 'Logical Reasoning',
    icon: '🧬',
    indiabixUrl: 'https://www.indiabix.com/logical-reasoning/blood-relations/',
    questions: [
      {
        id: 'br_1',
        question: 'Pointing to a photograph of a boy Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?',
        options: ['Brother', 'Uncle', 'Cousin', 'Father'],
        correct: 3,
        explanation: "Only son of Suresh's mother is Suresh. Boy is his son, making Suresh his Father."
      },
      {
        id: 'br_2',
        question: 'If A is the brother of B, B is the sister of C, and C is the father of D, how is D related to A?',
        options: ['Brother', 'Sister', 'Nephew / Niece', 'Cannot be determined'],
        correct: 2,
        explanation: 'D is child of C. A is sibling of C. D is Nephew or Niece of A.'
      },
      {
        id: 'br_3',
        question: 'Introducing a boy, a girl said, "He is the son of the daughter of the father of my uncle." The boy is the girl’s:',
        options: ['Brother', 'Nephew', 'Uncle', 'Son-in-law'],
        correct: 0,
        explanation: "Father of uncle is grandfather. Daughter of grandfather is mother. Son is Brother."
      },
      {
        id: 'br_4',
        question: 'Pointing to a person, a man said to a woman, "His mother is the only daughter of your father." Woman is his:',
        options: ['Aunt', 'Mother', 'Wife', 'Daughter'],
        correct: 1,
        explanation: "Only daughter of woman's father is the woman herself. She is Mother."
      },
      {
        id: 'br_5',
        question: 'A is B’s sister. C is B’s mother. D is C’s father. E is D’s mother. How is A related to D?',
        options: ['Grandmother', 'Grandfather', 'Daughter', 'Granddaughter'],
        correct: 3,
        explanation: "A is daughter of C, C is daughter of D. A is Granddaughter of D."
      },
      {
        id: 'br_6',
        question: 'Pointing to a man, a woman says, "His mother is the only daughter of my mother." Woman is his:',
        options: ['Mother', 'Daughter', 'Sister', 'Grandmother'],
        correct: 0,
        explanation: "Only daughter of woman's mother is the woman herself. She is Mother."
      },
      {
        id: 'br_7',
        question: 'A and B are young children of C. If C is father of A, but B is not son of C, how are B and C related?',
        options: ['Daughter and Father', 'Niece and Uncle', 'Aunt and Nephew', 'Mother and Son'],
        correct: 0,
        explanation: 'B is child but not son => Daughter of C.'
      },
      {
        id: 'br_8',
        question: 'If P + Q means P is brother; P - Q means P is sister; P x Q means P is father. Which shows C is son of M?',
        options: ['M - N x C + F', 'F - C + N x M', 'M x N - C + F', 'M x C - F'],
        correct: 2,
        explanation: 'M is father, N is sister, C is brother (male child) => C is son of M.'
      },
      {
        id: 'br_9',
        question: 'Deepak said to Nitin, "That boy playing football is the younger brother of daughter of my father’s wife." Boy is his:',
        options: ['Son', 'Brother', 'Cousin', 'Nephew'],
        correct: 1,
        explanation: "Father's wife is mother. Daughter is sister. Younger brother of sister is Brother."
      },
      {
        id: 'br_10',
        question: 'A is father of C and D is son of B. E is brother of A. If C is sister of D, how is B related to E?',
        options: ['Daughter', 'Brother-in-law', 'Sister-in-law', 'Sister'],
        correct: 2,
        explanation: 'B is wife of A. E is brother of A. So B is Sister-in-law to E.'
      }
    ]
  },

  // 10. Syllogisms & Number Series
  {
    topicId: 'syllogism-series',
    topicName: '10. Syllogisms & Number Series',
    category: 'Logical Reasoning',
    icon: '🧩',
    indiabixUrl: 'https://www.indiabix.com/logical-reasoning/logical-deduction/',
    questions: [
      {
        id: 'syl_1',
        question: 'Statements: All mangoes are golden in colour. No golden-coloured things are cheap. Conclusions: 1) All mangoes are cheap. 2) Golden-coloured mangoes are not cheap.',
        options: ['Only conclusion 1 follows', 'Only conclusion 2 follows', 'Either 1 or 2 follows', 'Neither follows'],
        correct: 1,
        explanation: 'Mangoes are golden and golden things are not cheap => golden mangoes are not cheap. Only 2 follows.'
      },
      {
        id: 'syl_2',
        question: 'Statements: Some actors are singers. All singers are dancers. Conclusion: Some actors are dancers.',
        options: ['Only 1 follows', 'Only 2 follows', 'Both follow', 'Neither follows'],
        correct: 0,
        explanation: 'Actors who are singers are dancers. Conclusion follows.'
      },
      {
        id: 'syl_3',
        question: 'Statements: All windows are doors. No door is a wall. Conclusions: 1) No window is a wall. 2) No wall is a door.',
        options: ['Only 1 follows', 'Only 2 follows', 'Both 1 and 2 follow', 'Neither follows'],
        correct: 2,
        explanation: 'Both conclusions logically follow the universal negative premise.'
      },
      {
        id: 'syl_4',
        question: 'Statements: All cups are books. All books are shirts. Conclusion: All cups are shirts.',
        options: ['True', 'False', 'Cannot say', 'Inconclusive'],
        correct: 0,
        explanation: 'Cups subset of Books subset of Shirts => Cups subset of Shirts. True.'
      },
      {
        id: 'syl_5',
        question: 'Statements: Some papers are pens. All pencils are pens. Conclusion: Some pens are pencils.',
        options: ['Follows', 'Does not follow', 'Either follows', 'Cannot determine'],
        correct: 0,
        explanation: 'Conversion of "All pencils are pens" gives "Some pens are pencils".'
      },
      {
        id: 'ser_6',
        question: 'Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?',
        options: ['(1/3)', '(1/8)', '(2/8)', '(1/16)'],
        correct: 1,
        explanation: 'Divided by 2 at each step: (1/4) / 2 = 1/8.'
      },
      {
        id: 'ser_7',
        question: 'Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?',
        options: ['7', '10', '12', '13'],
        correct: 1,
        explanation: 'Pattern: +3, -2, +3, -2 => 12 - 2 = 10.'
      },
      {
        id: 'ser_8',
        question: 'Look at this series: 36, 34, 30, 28, 24, ... What number should come next?',
        options: ['20', '22', '23', '26'],
        correct: 1,
        explanation: 'Pattern: -2, -4, -2, -4 => 24 - 2 = 22.'
      },
      {
        id: 'ser_9',
        question: 'In a code language, TEACHER is written as VGCEJGT. How is CHILDREN written?',
        options: ['EJKNFTGP', 'EJKNFGTO', 'EJLNFITP', 'EJKNFTPO'],
        correct: 0,
        explanation: 'Each letter is shifted by +2 positions in the alphabet.'
      },
      {
        id: 'ser_10',
        question: 'If DELHI is coded as 73541 and CALCUTTA as 82589662, how can CALICUT be written?',
        options: ['5279431', '5978013', '8251896', '8543691'],
        correct: 2,
        explanation: 'Direct letter substitution: C=8, A=2, L=5, I=1, C=8, U=9, T=6 => 8251896.'
      }
    ]
  }
];

const Aptitude = () => {
  const [openTopic, setOpenTopic] = useState('time-work');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  return (
    <div>
      <div style={{ backgroundColor: '#131927', padding: '22px', borderRadius: '16px', border: '1px solid #1e293b', marginBottom: '20px' }}>
        <span style={{ fontSize: '11px', fontWeight: '700', color: '#c084fc', backgroundColor: '#3b0764', padding: '4px 10px', borderRadius: '12px' }}>
          TOP 10 HIGH-FREQUENCY PLACEMENT TOPICS (100 QUESTIONS)
        </span>
        <h2 style={{ fontSize: '24px', fontWeight: '800', margin: '6px 0', color: '#f0f6fc' }}>
          Campus Aptitude & Reasoning Series (IndiaBix Standard)
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '13.5px', margin: 0 }}>
          Master the exact 10 topics repeatedly asked in TCS NQT, Infosys, Capgemini, and Cognizant screening rounds.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {aptitudeTopicsData.map((topic) => {
          const isOpen = openTopic === topic.topicId;
          const solvedInTopic = topic.questions.filter(q => selectedAnswers[q.id] !== undefined).length;

          return (
            <div key={topic.topicId} style={{ backgroundColor: '#131927', borderRadius: '12px', border: '1px solid #1e293b', overflow: 'hidden' }}>
              <div
                style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', backgroundColor: '#1a2234' }}
                onClick={() => setOpenTopic(isOpen ? '' : topic.topicId)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '20px' }}>{topic.icon}</span>
                  <div>
                    <span style={{ fontWeight: '800', fontSize: '16px', color: isOpen ? '#c084fc' : '#f0f6fc' }}>
                      {topic.topicName}
                    </span>
                    <span style={{ fontSize: '12px', color: '#8b949e', marginLeft: '10px' }}>
                      • {topic.category}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '12px', color: '#38bdf8', backgroundColor: '#0c2d48', padding: '3px 8px', borderRadius: '10px', fontWeight: '700' }}>
                    {solvedInTopic} / {topic.questions.length} Solved
                  </span>
                  <span style={{ fontSize: '14px', color: '#94a3b8' }}>{isOpen ? '▲' : '▼'}</span>
                </div>
              </div>

              {isOpen && (
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: '#0f1420' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '8px', borderBottom: '1px solid #1e293b' }}>
                    <span style={{ fontSize: '13px', color: '#94a3b8' }}>Practicing 10 Target Questions</span>
                    <a href={topic.indiabixUrl} target="_blank" rel="noreferrer" style={{ color: '#fb923c', fontSize: '12px', textDecoration: 'none', fontWeight: '600' }}>
                      Explore more on IndiaBix ↗
                    </a>
                  </div>

                  {topic.questions.map((q, idx) => {
                    const choice = selectedAnswers[q.id];
                    const answered = choice !== undefined;
                    return (
                      <div key={q.id} style={{ backgroundColor: '#131927', padding: '16px', borderRadius: '10px', border: '1px solid #1e293b' }}>
                        <p style={{ fontWeight: '600', margin: '0 0 12px 0', fontSize: '14px', color: '#f0f6fc', lineHeight: '1.5' }}>
                          Q{idx + 1}. {q.question}
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                          {q.options.map((opt, oIdx) => (
                            <button
                              key={oIdx}
                              onClick={() => setSelectedAnswers(prev => ({ ...prev, [q.id]: oIdx }))}
                              style={{
                                padding: '10px 14px', borderRadius: '6px', textAlign: 'left', cursor: 'pointer', fontSize: '13px',
                                backgroundColor: answered ? (oIdx === q.correct ? '#064e3b' : choice === oIdx ? '#7f1d1d' : '#0d1117') : '#0d1117',
                                color: answered ? (oIdx === q.correct ? '#34d399' : choice === oIdx ? '#f87171' : '#c9d1d9') : '#c9d1d9',
                                border: '1px solid #30363d'
                              }}
                            >
                              <span style={{ fontWeight: '700', marginRight: '6px' }}>{String.fromCharCode(65 + oIdx)}.</span> {opt}
                            </button>
                          ))}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                          <button
                            onClick={() => setShowExplanation(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                            style={{ background: 'none', border: 'none', color: '#c084fc', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}
                          >
                            {showExplanation[q.id] ? 'Hide Explanation' : 'View Answer & Explanation'}
                          </button>
                          {answered && (
                            <span style={{ fontSize: '12px', fontWeight: '700', color: choice === q.correct ? '#4ade80' : '#f87171' }}>
                              {choice === q.correct ? '✓ Correct' : '✗ Incorrect'}
                            </span>
                          )}
                        </div>

                        {showExplanation[q.id] && (
                          <div style={{ marginTop: '10px', padding: '12px', backgroundColor: '#1a2234', borderRadius: '6px', fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5' }}>
                            <div style={{ color: '#38bdf8', fontWeight: '700', marginBottom: '4px' }}>
                              Correct Option: {String.fromCharCode(65 + q.correct)} ({q.options[q.correct]})
                            </div>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Aptitude;

