export const DEFAULT_PLAN={books:['数据结构','计算机组成原理'],topics:[['线性表与链表','栈、队列与数组','树与二叉树','图的存储与遍历','查找算法','排序算法','本周错题整理'],['计算机系统概述','数据的表示与运算','存储器层次结构','指令系统','中央处理器','总线与输入输出','本周知识框架回顾']]};
const PAPER=(year)=>`https://pgcode.cn/exams/408/years/${year}/preview`;
export const PRACTICE=[
  {book1:{choice:'线性表/链表选择题 2 道：盯住指针变化和插入删除边界。',big:'完成 1 道链表综合题：画出操作前后指针，写出关键语句并分析复杂度。',year:2024,reference:'第 1 题：单链表结点移动'},book2:{choice:'系统组成与性能指标选择题 2 道：区分时钟周期、CPI、执行时间。',big:'完成 1 道性能计算或系统结构综合题，列式并写出单位。',year:2024,reference:'2024 年试卷：计算机组成原理部分'}},
  {book1:{choice:'栈、队列选择题 2 道：判断出入栈序列、循环队列队空队满。',big:'完成 1 道栈/队列应用题：写清每一步状态变化，再给出算法。',year:2024,reference:'2024 年试卷：数据结构部分'},book2:{choice:'补码、浮点数选择题 2 道：手算数值范围、规格化和舍入。',big:'完成 1 道定点数或 IEEE 754 表示题，逐位写出符号、阶码和尾数。',year:2022,reference:'第 13–14 题：补码范围与 IEEE 754'}},
  {book1:{choice:'树与二叉树选择题 2 道：BST 关键字范围、遍历序列或堆调整。',big:'完成 1 道树综合题：由遍历序列还原树，或写出建堆/删除过程。',year:2024,reference:'第 7 题：二叉搜索树子树范围；第 9 题：大根堆删除'},book2:{choice:'Cache 选择题 2 道：拆分 Tag、组号、块内地址，计算命中与缺失。',big:'完成 1 道 Cache 地址映射题，写出块号、组号、标记位和命中判断。',year:2022,reference:'第 16 题：组相联 Cache 比较器'}},
  {book1:{choice:'图选择题 2 道：邻接表/矩阵、BFS/DFS、拓扑序和关键路径。',big:'完成 1 道图算法题：手推遍历或拓扑排序，并标出访问次序/入度变化。',year:2024,reference:'2024 年试卷：数据结构部分'},book2:{choice:'指令格式与寻址选择题 2 道：辨别寻址方式及有效地址。',big:'完成 1 道指令执行题，逐步写出取指、译码、取数和结果写回。',year:2023,reference:'第 17 题：寻址方式辨别'}},
  {book1:{choice:'查找选择题 2 道：比较折半查找、BST 与散列表的适用条件。',big:'完成 1 道查找综合题：画 BST 或计算散列冲突处理过程。',year:2024,reference:'第 7 题：二叉搜索树关键字范围'},book2:{choice:'CPU/数据通路选择题 2 道：区分组合部件、状态部件与控制信号。',big:'完成 1 道 CPU 数据通路大题，按小问写标志位、寄存器作用和控制序列。',year:2022,reference:'第 43 题：CPU 数据通路与控制'}},
  {book1:{choice:'排序选择题 2 道：比较一趟排序后的区间性质、稳定性和复杂度。',big:'手推 1 道快速排序或归并排序，并统计关键字比较次数。',year:2024,reference:'第 8 题：快速排序一趟划分'},book2:{choice:'总线与 I/O 选择题 2 道：区分同步/异步、中断/DMA 和接口功能。',big:'完成 1 道 I/O 数据传送或总线带宽计算题，写清传送过程和公式。',year:2024,reference:'2024 年试卷：计算机组成原理部分'}},
  {book1:{choice:'重做本周错题中的 3 道选择题，只看题干重新作答。',big:'限时重做 1 道错题大题；对照评分点补全步骤并记录失分原因。',year:2024,reference:'2024 年完整试卷：数据结构部分'},book2:{choice:'重做本周错题中的 3 道选择题，口述每个干扰项错在哪里。',big:'限时重做 1 道错题大题，整理一张“公式/判断条件/易错点”卡片。',year:2022,reference:'2022 年完整试卷：计算机组成原理部分'}}
];
export const TASKS=[{id:'book1',minutes:40},{id:'book2',minutes:40},{id:'recall',minutes:10}];
export function practiceFor(id,date){const index=(date.getDay()+6)%7;if(id==='recall')return null;const guide=PRACTICE[index][id];return{...guide,url:PAPER(guide.year)}}
export const QUIZZES={
  book1:[
    {question:'单链表中已经定位到插入位置的前驱结点。插入一个新结点的时间复杂度是？',options:['O(1)','O(log n)','O(n)','O(n log n)'],answer:0,explain:'已知前驱结点时，只需修改有限个 next 指针。若还要先搜索位置，搜索本身才是 O(n)。'},
    {question:'依次将 1、2、3 入栈，再连续出栈两次，出栈序列是什么？',options:['1、2','2、1','3、2','3、1'],answer:2,explain:'栈后进先出，所以先出 3，再出 2。'},
    {question:'二叉搜索树中，结点 K₃ 位于 K₂ 的左子树；子树 T 位于 K₃ 的右侧。T 中任意关键字 X 的范围是？',options:['X < K₃','X > K₂','K₃ < X < K₂','X > K₃'],answer:2,explain:'T 属于 K₃ 的右子树，所以 X>K₃；同时它仍在 K₂ 的左子树，所以 X<K₂。对应历年选择真题：2024 数据结构第 7 题。',source:[{label:'打开 2024 数据结构第 7 题真题',year:2024}]},
    {question:'用 Kahn 算法做拓扑排序时，怎样判断拓扑序列唯一？',options:['图中只有一个入度为 0 的顶点','每一轮都恰好只有一个入度为 0 的顶点','图中没有出度为 0 的顶点','图一定是连通图'],answer:1,explain:'每轮可选的零入度顶点都恰好一个，选择没有分支，拓扑序才唯一。'},
    {question:'在有序顺序表中进行折半查找，最坏时间复杂度是？',options:['O(1)','O(log n)','O(n)','O(n log n)'],answer:1,explain:'每次比较都把待查范围缩小一半，最坏比较次数为 O(log n)。'},
    {question:'下列排序方法中，通常是稳定排序的是？',options:['快速排序','堆排序','归并排序','简单选择排序'],answer:2,explain:'归并排序在相等关键字时保持左右子序列的先后次序，因此稳定。'},
    {question:'从 n 个数中找最小的 k 个数（k 远小于 n），适合维护哪种堆？',options:['容量为 k 的大根堆','容量为 n 的小根堆','容量为 k 的小根堆','不使用堆，只排序 n 个数'],answer:0,explain:'大根堆堆顶是当前 k 个候选中的最大值，新数更小时替换堆顶即可。'},
  ],
  book2:[
    {question:'CPU 执行时间与指令数 IC、平均 CPI 和时钟周期 T 的关系是？',options:['IC ÷ CPI × T','IC × CPI × T','IC × T ÷ CPI','CPI ÷ IC × T'],answer:1,explain:'执行时间 = 指令数 × 平均每条指令周期数 × 时钟周期。'},
    {question:'n 位二进制补码能表示的整数范围是？',options:['−2ⁿ 到 2ⁿ−1','−2ⁿ⁻¹ 到 2ⁿ⁻¹−1','−(2ⁿ⁻¹−1) 到 2ⁿ⁻¹','−2ⁿ⁻¹ 到 2ⁿ−1'],answer:1,explain:'n 位补码范围为 −2^(n−1) 至 2^(n−1)−1。'},
    {question:'28 位主存地址；Cache 数据区 16 KiB，块大小 32 B，4 路组相联。每组需要几个比较器、每个比较器比较几位标记？',options:['4 个、16 位','4 个、21 位','128 个、16 位','128 个、21 位'],answer:0,explain:'块内偏移 5 位；共 512 块、128 组，组号 7 位；标记 28−5−7=16 位。4 路需要 4 个 16 位比较器。相关历年真题：2022 组成原理第 16 题。',source:[{label:'打开 2022 组成原理第 16 题真题',year:2022}]},
    {question:'下列哪项通常属于指令集体系结构（ISA）对程序员可见的规定？',options:['CPU 的时钟周期','通用寄存器的数量与位宽','加法器采用何种进位电路','流水线级数'],answer:1,explain:'ISA 定义指令、数据类型和程序员可见寄存器等；时钟周期、进位电路和流水线级数属于实现细节。'},
    {question:'两个同位宽补码做加法时，哪种情形表示发生有符号溢出？',options:['异号数相加','同号数相加且结果符号与它们不同','结果为 0','最高位有进位'],answer:1,explain:'有符号加法溢出判据：两个同号操作数相加，结果符号与操作数符号不同。'},
    {question:'DMA 方式传送数据时，数据主要在谁之间直接传送？',options:['CPU 与寄存器','I/O 设备与主存','Cache 与 CPU','控制器与指令寄存器'],answer:1,explain:'DMA 控制器取得总线控制权后，可在 I/O 设备与主存之间成批传数据，CPU 通常在传送完成后处理中断。'},
    {question:'按字节编址，虚拟地址转换为物理地址时，页内偏移部分通常如何处理？',options:['与页号一起查页表','保持不变并与页框号拼接','清零后再查 TLB','加上页表基址'],answer:1,explain:'页大小固定时，虚拟页内偏移等于物理页内偏移；页框号替换虚页号后拼接。'},
  ]
};
export function quizFor(id,date){if(id==='recall')return null;const index=(date.getDay()+6)%7;return QUIZZES[id][index]}
export function dateKey(date){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`}
export function mondayOf(date){const d=new Date(date.getFullYear(),date.getMonth(),date.getDate());d.setDate(d.getDate()-((d.getDay()+6)%7));return d}
export function getWeekDays(anchor){const monday=mondayOf(anchor);return Array.from({length:7},(_,i)=>{const d=new Date(monday);d.setDate(monday.getDate()+i);return d})}
export function weekLabel(days){const a=days[0],b=days[6];return `${a.getFullYear()}年${a.getMonth()+1}月${a.getDate()}日 — ${b.getMonth()+1}月${b.getDate()}日`}
export function taskRemaining(timer,now=Date.now()){if(!timer)return null;if(timer.status!=='running')return Math.max(0,timer.remainingMs);return Math.max(0,timer.remainingMs-(now-timer.startedAt))}
export function completionRatio(day){return TASKS.filter(t=>day?.[t.id]?.done).length/TASKS.length}
export function weekProgress(data,days){const done=days.reduce((sum,d)=>sum+TASKS.filter(t=>data[dateKey(d)]?.[t.id]?.done).length,0);return{done,total:21,ratio:done/21}}

export function createStorage(storage){let available=true;return{get available(){return available},load(){try{const raw=storage?.getItem('408-daily-review-v1');return raw?JSON.parse(raw):null}catch{available=false;return null}},save(value){try{storage?.setItem('408-daily-review-v1',JSON.stringify(value));if(!storage)throw new Error('unavailable');return true}catch{available=false;return false}}}}
