## 1. TDZ কি?
 Temporal Death Zone হলো Javascript এর behavior যেখানে variables declare করার আগে access করলে reference error দেয়।

 JavaScript Code execution এ hoisting এর মাধমে variables গুলোকে scope এর top নিয়ে যায়। এক্ষেত্রে let, const দ্বারা declare কৃত variables গুলো uninitialize অবস্থায় থাকে যতক্ষণ না code execution declaration line এ পৌছায়। আর এই hoisting থেকে actual declaration line পর্যন্ত মধ্যবর্তী zone এই হল Temporal Death Zone (TDZ)।

