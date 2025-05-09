const quiz=[
{
	q:'Which of the following data structure used to implement priority queues efficiently?',
	options:['stack','LinkedList','binaryHeap','none'],
	answer:2
},
{
	q:'Which of the following data structure which works on insertion at only one end but deletions at both ends of the list?',
	options:['Priority Queues','Input - restricted deque','Output - restricted deque','Stack'],
	answer:1
},
{
	q:'For solving the N-Queens problem, which of the algorithm need to use?',
	options:['Dynamic','Divide and Conquer','Backtracking','None of Above'],
	answer:2
},
{
	q:'For checking whether an expression has balanced parenthesis, which data structure is best?',
	options:['Tree','Heap','Stack','Queue'],
	answer:2
},
{
	q:'The balance factor range of any node that can be accepted in the AVL tree?',
	options:['[-2, -1, 0]','[-2, -1, 0, 1]','[-1, 0, 1]','None of the Above'],
	answer:2
},
{
	q:'The minimum time required to check if an integer appears more than n/2 times in the array, assume that the array is sorted?',
	options:['O(log n)','O(n)','O(1)','O(n^2)','O(n logn)'],
	answer:0
},
{
	q:'For implementing a breadth-first search, which of the following data structure is used?',
	options:['Tree','Heap','Stack','Queue'],
	answer:3
},
{
	q:'Which of the following condition is necessary for checking queue is full? Assume that the queue is circular.',
	options:['Front == Rear+1','Front == 0 && Rear == len-1','(Front == Rear+1) || (Front == 0 && Rear == len-1)','(Front == Rear+1) && (Front == 0 && Rear == len-1)'],
	answer:2
},
{
	q:'In which linked list No NULL link is there?',
	options:['Null linked list','Doubly linked list','Circular linked list','Singly linked list'],
	answer:2
},
{
	q:'In stack for accessing an nth element from the top, which command needs to use?',
	options:['S [ Top-n ]','S[ Top+n ]','S[ Top-n+1 ]'],
	answer:2
},
{
	q:'The result of prefix expression * / b + - d a c d, where a = 3, b = 6, c = 1, d = 5 is',
	options:['0','8','10','6','14'],
	answer:2
},
{
	q:'Which among the following data structures is best suited for storing very large numbers',
	options:['stack','LinkedList','binaryHeap','Tree'],
	answer:1
},
{
	q:'server and client are communicating with each other, and both are working at a different speed. Which of the following data structure is best suited for synchronization?',
	options:['stack','LinkedList','queue','Tree','graph'],
	answer:2
},
{
	q:'we are working on heap data structure, so which of the following is used for storing the data of heap?',
	options:['stack','array','LinkedList','queue','graph'],
	answer:1
},
{
	q:'Which of the following order is given by binary search tree if we traverse it in inorder?',
	options:['ascending order','descending order','Random order','sequential order','Both A & D'],
	answer:0
}/*,
{
	q:'Which of the following time complexity of bubble sort in best/worst case?',
	options:['Best case: O(n), Worst case: O(n log(n))','Best case: O(n), Worst case: O(n^2)','Best case: O(n*log(n)), worst case: O(n*log(n))','None of the above'],
	answer:1
},
{
	q:'Which of the following is the aim of implementing prims and kruskals algorithms?',
	options:['Maximum spanning tree','Spanning tree','Minimum Spanning tree','weighted sum graph'],
	answer:2
},
{
	q:'Which of the following is the process of executing a correct program on data sets and measuring the time and space it takes to compute the results?',
	options:['testing','profiling','combining','all the above'],
	answer:1
},
{
	q:'Which of the following is the time complexity if the graph is represented as an adjacency matrix in kruskals algorithm?',
	options:['O( E log V )','O( V log E)','O( V^2)','O( log E)'],
	answer:0
},
{
	q:'Which of the following is the sum of the degree of each vertex is equal to if there an undirected graph with n vertices and e edges?',
	options:['2*n','2*e','(e^2+1) / 2','(2*n-1) / 2'],
	answer:1
},
{
	q:'What of the following is the time complexity to add a node at the end of the singly linked list, if the pointer is initially pointing to the head of the list?',
	options:['O(1)','O(n)','θ(n)','θ(1)'],
	answer:2
},
{
	q:'Which of the following operations are dependent on the length of the linked list if we have pointers to first and the last node of a singly linked list?',
	options:['Delete the last element of the list','Insert a new element as a first element','Delete the first element','Add a new element at the end of the liste'],
	answer:0
},
{
	q:'How can we define the memory-efficient doubly linked list?',
	options:['Each node has only one pointer to traverse the list back and forth','The list has breakpoints for faster traversal','A singly linked list acts as a helper list to traverse through the doubly linked list','A doubly linked list that uses bitwise AND operator for storing addresses'],
	answer:0
},
{
	q:'Which of the following supports the statement, Array implementation of stack is not dynamic?',
	options:['Space allocation for array is fixed and cannot be changed during run-time','Reduce time and space complexity','Compilation Error','Array implementation is flexible'],
	answer:0
},
{
	q:'Which of the following operation is correct, while evaluating a postfix expression, when an operator is encountered?',
	options:['Push it directly on to the stack','Pop 2 operands, evaluate them and push the result on to the stack','Pop the entire stack','Ignore the operator'],
	answer:1
},
{
	q:'In a complete k-ary tree, every internal node has exactly k children or no child. The number of leaves in such a tree with n internal nodes is?',
	options:['nk','(n-1)k + 1','n(k-1) + 1','n(k-1)'],
	answer:2
},
{
	q:'What is the number of leaf nodes in a rooted tree of n nodes, with each node having 0 or 3 children?',
	options:['n/2','(n-1)/3','(n-1)/2','(2n+1)/3'],
	answer:3
},
{
	q:'The height of a binary tree is the maximum number of edges in any root to leaf path. The maximum number of nodes in a binary tree of height h is?',
	options:['2h - 1','2h - 1 - 1','2h + 1 - 1','2 * (h+1)'],
	answer:2
},
{
	q:'Which of the following is the graphical representation of an algorithm?',
	options:['Pseudocode','Flow Chart','Graph Coloring','Dynamic Programming'],
	answer:1
},
{
	q:'The step by step procedure for a program is called?',
	options:['Pseudocode','Flow Chart','algorithm','Programming'],
	answer:2
},
{
	q:'Which of the following data structure that contains a relationship between a pair of elements; this is not necessarily hierarchical in nature?',
	options:['Tree','String','Graph','LinkedList','None of the mentioned'],
	answer:2
},
{
	q:'Which of the following is a set of data values and associated operations that are specified accurately, independent of any particular implementation?',
	options:['abstract data type','tree','stack','Heap'],
	answer:0
},
{
	q:'If we want to implement a stack using queue then how many queues are needed? Consider the situation where no other data structure like arrays, linked list is there.',
	options:['1','2','3','4','6'],
	answer:1
},
{
	q:'How many minimum number of spanning trees, one can have from a given connected graph with N nodes is having different weights for the edges',
	options:['N-1','One','1/ (N+1)','None of the above'],
	answer:1
},
{
	q:'int[][] myArray = new int[4][5]; This declWhich are the following 2 phases of testing of program?',
	options:['Best case and worst case','Space complexity and the time complexity','Validation and checking errors','Debugging and profiling'],
	answer:3
},
{
	q:'The applications of stack data structure is/are?',
	options:['Backtracking','Memory management','Arithmetic expression evaluation','All of the above'],
	answer:3
},
{
	q:'What happens when you push a new node in linked list representation of a stack?',
	options:['The new node is placed at the front of linked list','The new node is placed at the back of the linked list','The new node is placed at the middle of the linked list','None of the above'],
	answer:0
},
{
	q:'Which of the following linear list is unidirectional or can be traversed in only one direction from starting to end?',
	options:['Singly linked list','Array list','Null linked list','None of the above'],
	answer:0
},
{
	q:'Which of the following is another name of circular queue?',
	options:['Curve buffer','Square Buffer','Ring buffer','None of the above'],
	answer:2
},
{
	q:'Which of following is contained by the header of the linked list?',
	options:['The address of the first node','The address of the last node','Pointer to the last record of the actual data','Middle record of the actual data'],
	answer:0
},
{
	q:'Which of the following linear list in which the last node points to the first node?',
	options:['Null linked list','Circular linked list','Doubly linked list','None of the above'],
	answer:1
},
{
	q:'In binary search algorithm, which of the following statement does not support the binary search properties?',
	options:['Array must be sorted','Requirement of sorted array is expensive when a lot of insertion and deletions are needed','We can access middle element directly','If data items are more than 2000 then it will not be efficient'],
	answer:3
},
{
	q:'Which of the following can characterized of sorting algorithm?',
	options:['Simple algorithm which require the order of n2 comparisons to sort n items.','Sophisticated algorithms that require the O(nlog2n) comparisons to sort items.','Both of the above','None of the above'],
	answer:2
},
{
	q:'In binary search algorithm which of the following is not required condition?',
	options:['The data items must be sorted','We can access to the middle element in any sub list','There should be a function to delete and/or insert elements in the list','Number values should only be present in the list'],
	answer:2
},
{
	q:'How do you calculate the pointer difference in a memory efficient double linked list?',
	options:['head xor tail','pointer to previous node xor pointer to next node','pointer to previous node – pointer to next node','pointer to next node – pointer to previous node'],
	answer:1
},
{
	q:'Which of the following application makes use of a circular linked list?',
	options:['Undo operation in a text editor','Recursive function calls','Allocating CPU to resources','Implement Hash Tables'],
	answer:2
},
{
	q:'What is the time complexity of enqueue operation?',
	options:['O(logn)','O(nlogn)','O(n)','O(1)'],
	answer:3
},
{
	q:'In case of insertion into a linked queue, a node borrowed from the _______ list is inserted in the queue',
	options:['AVAIL','FRONT','REAR','NULL'],
	answer:0
},
{
	q:'Where is the root directory of a disk placed?',
	options:['Anywhere on the disk','At a fixed location on the system disk','At a fixed address in main memory','None of the above'],
	answer:1
},
{
	q:'Which value is assigned/set at front and rear ends during the Initialization of a Queue?',
	options:['1','-1','0','null'],
	answer:1
},
{
	q:'What should be the value of rear (end) if the queue is full (elements are completely occupied )?',
	options:['1','max+1','max-1','100'],
	answer:2
},
{
	q:'Which linear structure has a provision of Last-In-First-Out (LIFO) mechanism for its elements?',
	options:['stack','queue','Tree','heap'],
	answer:0
},
{
	q:'Which linear structure has a provision of First-In-First-Out (FIFO) mechanism for its elements?',
	options:['stack','queue','Tree','heap'],
	answer:1
},
{
	q:'Stacks do not find their applicability for ______',
	options:['Simplification of an arithmetic expression in postfix form','Recursion Implementation','Conversion of Infix to its equivalent Postfix Form','Allocation of Resources by an Operating System'],
	answer:3
},
{
	q:'Which data structure is used to manage nested calls?',
	options:['stack','queue','Tree','heap'],
	answer:0
},
{
	q:'How many elements are present in the stack if the variable top exhibits pointing towards the topmost element in the Array?',
	options:['top+1','0','-1','top-1','infinity'],
	answer:0
},
{
	q:'Which expressions are also regarded as "Reverse Polish Notations" ?',
	options:['infix','postfix','prefix'],
	answer:1
},
{
	q:'Which direction of scanning is suitable for the evaluation of a prefix expression?',
	options:['left to right','right to left','left to left','right to right'],
	answer:1
},
{
	q:'Which balance factor is stored in the new field introduced by an AVL tree for the representation of a node?',
	options:['length','height','width','information'],
	answer:1
},
{
	q:'Which value is assigned to leaf of game tree if the board position corresponds to the "draw" result for the player?',
	options:['1','0','-1','None of the above'],
	answer:1
}*/
]