const lectureOne = [
  {
    question:
      "What are the characteristics of a good comment according to the lecture?",
    answers: [
      "Easy to debug (fix mistakes)",
      "Easy to verify (prove correctness)",
      "Easy to maintain (add features)",
      "Energy",
      "Time",
      "Describing how it works",
      "Describing why it is done in that way",
      "How to change",
    ],
    correctAnswers: [
      "Easy to debug (fix mistakes)",
      "Easy to verify (prove correctness)",
      "Easy to maintain (add features)",
    ],
  },
  {
    question: "What is bandwidth in the context of dynamic efficiency?",
    answers: [
      "Calculations performed per second",
      "Data transferred per second",
      "Number of input devices connected",
      "Amount of memory available",
      "Time taken to process a request",
    ],
    correctAnswers: [
      "Data transferred per second",
      "Calculations performed per second",
    ],
  },
  {
    question:
      "What is latency or response time in the context of dynamic efficiency?",
    answers: [
      "Time from a request to the time action satisfies request",
      "Time new input ready to time data is read",
      "Time output device is idle to time new data is written",
      "Time from power-on to system ready state",
      "Time taken to compile code",
    ],
    correctAnswers: [
      "Time from a request to the time action satisfies request",
    ],
  },
  {
    question: "What is the size of RAM in 9S12DP512 microcontroller?",
    answers: [
      "2 kibibytes",
      "4 kibibytes",
      "512 kibibytes",
      "1 mebibyte",
      "2 mebibytes",
    ],
    correctAnswers: ["2 kibibytes"],
  },
  {
    question: "What is the size of EEPROM in 9S12C32 microcontroller?",
    answers: [
      "2 kibibytes",
      "4 kibibytes",
      "32 kibibytes",
      "64 kibibytes",
      "128 kibibytes",
    ],
    correctAnswers: ["32 kibibytes"],
  },
  {
    question: "What is the size of RAM in MSP430F2013 microcontroller?",
    answers: ["16 bytes", "64 bytes", "128 bytes", "256 bytes", "512 bytes"],
    correctAnswers: ["128 bytes"],
  },

  {
    question: "What constraints must be considered for power?",
    answers: [
      "Must not stop running for within 24 hours on +9V",
      "Must not exceed $100,000",
      "Must not need more than 2 KiB RAM or 32 KiB ROM",
      "Must not take more than 1 month to produce",
    ],
    correctAnswers: ["Must not stop running for within 24 hours on +9V"],
  },

  {
    question:
      "What aspects reflect the developer's attitude towards software quality?",
    answers: [
      "Embarrassed to deliver poorly written software",
      "Modules that are easy to change",
      "Expect our code will be modified",
      "Reward good behavior",
    ],
    correctAnswers: [
      "Embarrassed to deliver poorly written software",
      "Modules that are easy to change",
      "Reward good behavior",
      "Expect our code will be modified",
    ],
  },
  {
    question:
      "What actions demonstrate the developer's approach to maintaining code quality?",
    answers: [
      "Punish bad behavior",
      "Test it now, fix it now",
      "Plan for testing",
      "Reward good behavior",
    ],
    correctAnswers: [
      "Punish bad behavior",
      "Test it now, fix it now",
      "Plan for testing",
    ],
  },
  {
    question: "What is the Golden Rule of Software Development?",
    answers: [
      "Write software for others as you wish they would write for you.",
      "Prioritize speed over quality.",
      "Ignore user feedback.",
      "Minimize documentation.",
    ],
    correctAnswers: [
      "Write software for others as you wish they would write for you.",
    ],
  },
  {
    question:
      "What relevant aphorism emphasizes the importance of having a software system that runs, even if it runs slowly?",
    answers: [
      "The turtle wins the race!",
      "Slow and steady wins the race.",
      "Haste makes waste.",
      "Better late than never.",
    ],

    correctAnswers: [
      "The turtle wins the race!",
      "Slow and steady wins the race.",
    ],
  },
  {
    question:
      "According to Hoare's aphorism, what are the two ways of constructing a software design?",
    answers: [
      "Make it so simple that there are obviously no deficiencies.",
      "Make it so complicated that there are no obvious deficiencies.",
      "Make it complicated to hide deficiencies.",
      "Make it simple and hope for the best.",
    ],
    correctAnswers: [
      "Make it so simple that there are obviously no deficiencies.",
      "Make it so complicated that there are no obvious deficiencies.",
    ],
  },
  {
    question: "What are the two types of debugging mentioned in the lecture?",
    answers: [
      "Performance debugging (timing)",
      "Functional debugging (data)",
      "Syntax debugging (code)",
      "Visual debugging (UI)",
    ],
    correctAnswers: [
      "Performance debugging (timing)",
      "Functional debugging (data)",
    ],
  },
  {
    question: "What is the goal of debugging according to the lecture?",
    answers: [
      "To introduce more errors into the program",
      "To test the software",
      "To remedy faults or to correct errors in a program",
      "To maintain and improve software",
      "To write new code",
    ],
    correctAnswers: [
      "To maintain and improve software",
      "To remedy faults or to correct errors in a program",
    ],
  },
  {
    question:
      "What are the steps involved in the debugging process mentioned in the lecture?",
    answers: [
      "Testing, stabilizing, optimizing, deploying",
      "Analyzing, modifying, compiling, running",
      "Inspecting, validating, documenting, releasing",
      "Testing, stabilizing, localizing, correcting errors",
    ],
    correctAnswers: ["Testing, stabilizing, localizing, correcting errors"],
  },
  {
    question: "What does intrusiveness refer to in the context of debugging?",
    answers: [
      "The level of annoyance caused by debugging",
      "The degree of perturbation caused by the debugging itself",
      "The speed of code execution during debugging",
      "How much the debugging slows down execution",
      "The number of bugs introduced by debugging",
    ],
    correctAnswers: [
      "The degree of perturbation caused by the debugging itself",
      "How much the debugging slows down execution",
    ],
  },
  {
    question: "What is the characteristic of a nonintrusive debugger?",
    answers: [
      "It introduces bugs into the system",
      "It allows the system to operate as if the debugger did not exist",
      "It is slow in debugging",
      "It prints excessive statements",
    ],
    correctAnswers: [
      "It allows the system to operate as if the debugger did not exist",
    ],
  },
  {
    question: "What defines a minimally intrusive debugger?",
    answers: [
      "It has a negligible effect on the system being debugged",
      "It slows down the system significantly",
      "It only works with logic analyzers",
      "It requires frequent single-stepping",
    ],
    correctAnswers: ["It has a negligible effect on the system being debugged"],
  },
  {
    question: "What are examples of highly intrusive debugging techniques?",
    answers: [
      "Print statements, breakpoints, and single-stepping",
      "Logic analyzers and ICE",
      "Dumps (ScanPoint) and monitors",
      "Analyzing, modifying, compiling, running",
    ],
    correctAnswers: ["Print statements, breakpoints, and single-stepping"],
  },
  {
    question: "What is desk-checking in manual debugging methods?",
    answers: [
      "Using a physical desk to organize code printouts",
      "Hand executing the program and thinking about it extensively",
      "Using a desk to store debugging tools",
      "Automatically executing the program",
    ],
    correctAnswers: [
      "Hand executing the program and thinking about it extensively",
    ],
  },
  {
    question: "What is the purpose of dumps in manual debugging?",
    answers: [
      "To discard unnecessary data",
      "To manually modify the code",
      "To save important data for later analysis",
      "To save important data into an array and look at it later",

      "To print statements during execution",
    ],
    correctAnswers: [
      "To save important data for later analysis",
      "To save important data into an array and look at it later",
    ],
  },
  {
    question: "What is the role of print statements in manual debugging?",
    answers: [
      "To execute code manually",
      "To analyze program flow",
      "To print important data during execution",
      "To create visual representations of code",
    ],
    correctAnswers: ["To print important data during execution"],
  },
  {
    question:
      "What is the purpose of naming conventions in self-documenting code?",
    answers: [
      "To confuse other developers",
      "To make the code shorter",
      "To give hints about the type and meaning of names",
      "To avoid using names altogether",
    ],
    correctAnswers: ["To give hints about the type and meaning of names"],
  },
  {
    question: "What should names in self-documenting code avoid?",
    answers: [
      "Meaningful names",
      "Ambiguities",
      "Short names",
      "Public objects",
    ],
    correctAnswers: ["Ambiguities"],
  },
  {
    question:
      "How can scope be specified in self-documenting code naming conventions?",
    answers: [
      "By using a prefix",
      "By using upper and lower case",
      "By using capitalization",
      "By using camel case",
    ],
    correctAnswers: ["By using upper and lower case"],
  },
  {
    question:
      "What is the importance of naming conventions in self-documenting code?",
    answers: [
      "To confuse developers",
      "To extend clarity to where objects are used",
      "To make the code longer",
      "To hide the properties of objects",
    ],
    correctAnswers: ["To extend clarity to where objects are used"],
  },
  {
    question: "What should opening comments in a code (*.c) file contain?",
    answers: [
      "The purpose of the software module",
      "A list of hardware configuration",
      "The names of the programmers",
      "The file name on the first line",
      "the creation and update dates of the software module",
    ],
    correctAnswers: [
      "The purpose of the software module",
      "A list of hardware configuration",
      "The file name on the first line",
      "the creation and update dates of the software module",
      "The names of the programmers",
    ],
  },
  {
    question: "What are some guidelines for header (*.h) files?",
    answers: [
      "Assist in drawing a call-graph",
      "Avoid having one header file include other header files",
      "Only include files that are absolutely necessary",
    ],
    correctAnswers: [
      "Assist in drawing a call-graph",
      "Avoid having one header file include other header files",
      "Only include files that are absolutely necessary",
    ],
  },
  {
    question: "What are the advantages of abstraction?",
    answers: [
      "Faster development",
      "Easier debugging (proving correctness)",
      "Easier to change/update",
      "Reduced development time",
      "Simplified debugging process",
      "Increased resistance to change",
      "More complex development process",
    ],
    correctAnswers: [
      "Faster development",
      "Easier debugging (proving correctness)",
      "Easier to change/update",
    ],
  },
  {
    question: "What is a state?",
    answers: [
      "Description of current conditions",
      "A variable that never changes",
      "An action taken by the software",
      "A representation of future conditions",
    ],
    correctAnswers: ["Description of current conditions"],
  },
  {
    question: "What is a state graph?",
    answers: [
      "A graphical interconnection between states",
      "A representation of all possible conditions",
      "A type of input device",
      "A diagram used for debugging",
    ],
    correctAnswers: ["A graphical interconnection between states"],
  },
  {
    question: "What is a controller?",
    answers: [
      "Software that inputs, outputs, changes state",
      "A physical device used to control a system",
      "A type of programming language",
      "A representation of a state",
    ],
    correctAnswers: ["Software that inputs, outputs, changes state"],
  },
  {
    question: "What are components of a finite state machine?",
    answers: ["Input sensors", "Output actuators", "Controller", "State graph"],
    correctAnswers: [
      "Input sensors",
      "Output actuators",
      "Controller",
      "State graph",
    ],
  },
  {
    question: "What is a characteristic of a Moore finite state machine?",
    answers: [
      "Output depends on state",
      "Next state depends on input and current state",
      "Output means being in that state",
      "Input is needed to be in that state",
    ],
    correctAnswers: [
      "Output depends on state",
      "Next state depends on input and current state",
      "Output means being in that state",
    ],
  },
  {
    question: "What is a characteristic of a Mealy finite state machine?",
    answers: [
      "Output depends only on the input",
      "Output depends on input and current state",

      "Next state depends on input and current state",
      "Use Mealy if the output causes the state to change",
      "Use Mealy if the output is independent of the input",
    ],
    correctAnswers: [
      "Output depends on input and current state",
      "Use Mealy if the output causes the state to change",
      "Next state depends on input and current state",
    ],
  },
  {
    question:
      "What type of coupling occurs when one module calls or invokes a function in another module?",
    answers: [
      "Invocation coupling",
      "Bandwidth coupling",
      "Control coupling",
      "Sequential coupling",
    ],
    correctAnswers: ["Invocation coupling"],
  },
  {
    question:
      "What type of coupling occurs when one module calls or invokes a function in another module?",
    answers: [
      "Invocation coupling",
      "Bandwidth coupling",
      "Control coupling",
      "Sequential coupling",
    ],
    correctAnswers: ["Invocation coupling"],
  },
  {
    question:
      "Which type of coupling involves information flowing from one module to another?",
    answers: [
      "Invocation coupling",
      "Bandwidth coupling",
      "Control coupling",
      "Sequential coupling",
    ],
    correctAnswers: ["Bandwidth coupling"],
  },
  {
    question:
      "In which type of cohesion are components of the module unrelated, resulting in poor design?",
    answers: [
      "Coincidental cohesion",
      "Logical cohesion",
      "Temporal cohesion",
      "Communicational cohesion",
    ],
    correctAnswers: ["Coincidental cohesion"],
  },
  {
    question: "What is the relationship between parts in logical cohesion?",
    answers: [
      "Components of the module are unrelated",
      "Grouping of components into a single module",
      "Components operate on the same data",
      "Components are performed at the same time",
    ],
    correctAnswers: ["Grouping of components into a single module"],
  },
  {
    question:
      "Which type of coupling involves actions in one module affecting the control path within another module?",
    answers: [
      "Invocation coupling",
      "Bandwidth coupling",
      "Control coupling",
      "Sequential coupling",
    ],
    correctAnswers: ["Control coupling"],
  },
  {
    question:
      "In which type of cohesion are components combined if they are connected in time sequence?",
    answers: [
      "Coincidental cohesion",
      "Logical cohesion",
      "Temporal cohesion",
      "Communicational cohesion",
    ],
    correctAnswers: ["Temporal cohesion"],
  },
  {
    question:
      "Which type of cohesion groups functions together in order to ensure mandatory ordering?",
    answers: [
      "Procedural cohesion",
      "Sequential cohesion",
      "Communicational cohesion",
      "Functional cohesion",
    ],
    correctAnswers: ["Procedural cohesion"],
  },
  {
    question:
      "What type of coupling occurs when components operate on the same data?",
    answers: [
      "Invocation coupling",
      "Bandwidth coupling",
      "Control coupling",
      "Communicational coupling",
    ],
    correctAnswers: ["Communicational coupling"],
  },
  {
    question:
      "In which type of cohesion do all components combine to implement a single objective?",
    answers: [
      "Coincidental cohesion",
      "Logical cohesion",
      "Functional cohesion",
      "Sequential cohesion",
    ],
    correctAnswers: ["Functional cohesion"],
  },
  {
    question:
      "Which type of cohesion groups components based on their common purpose?",
    answers: [
      "Procedural cohesion",
      "Sequential cohesion",
      "Communicational cohesion",
      "Functional cohesion",
    ],
    correctAnswers: ["Functional cohesion"],
  },
  {
    question:
      "What type of coupling involves components being grouped together based on a mandatory ordering of functions?",
    answers: [
      "Procedural coupling",
      "Sequential coupling",
      "Temporal coupling",
      "Functional coupling",
    ],
    correctAnswers: ["Sequential coupling"],
  },
  {
    question:
      "Which type of cohesion combines components if they are performed at the same time?",
    answers: [
      "Coincidental cohesion",
      "Logical cohesion",
      "Temporal cohesion",
      "Communicational cohesion",
    ],
    correctAnswers: ["Temporal cohesion"],
  },
  {
    question: "What is the relationship between parts in functional cohesion?",
    answers: [
      "Components of the module are unrelated",
      "Grouping of components into a single module",
      "Components combine to implement a single objective",
      "Components are performed at the same time",
    ],
    correctAnswers: ["Components combine to implement a single objective"],
  },
  {
    question: "What are the peripheral primitives states",
    answers: ["Ready", "BUSY", "NOT READY", "WAIT", "REST"],
    correctAnswers: ["Ready", "BUSY", "NOT READY"],
  },
  {
    question:
      "Assuming a busy control signal is not available , what are the options for I / O synchronization ? ",
    answers: [
      "Turn and repeat",
      "Blind Cycle",
      "Direct Memory Access Transfer",
      "Interrupt/transfer",
      "Test/Transfer",
    ],
    correctAnswers: [
      "Blind Cycle",
      "Direct Memory Access Transfer",
      "Interrupt/transfer",
      "Test/Transfer",
    ],
  },
  {
    question:
      "An approach where before you perform an I/O operation you wait for a time period that is garaunteed to perform the operation before the next operation is initiated is ?",
    answers: [
      "Direct Memory Access Transfer",
      "Test/Transfer",
      "Turn and Transfer",
      "Blind cycle",
    ],
    correctAnswers: ["Blind cycle"],
  },
  {
    question:
      "Which of the following processes best fit the Blind Cycle in Read synchronization ?",
    answers: [
      "input => wait a fixed time => read data => Return",
      "input => wait a fixed time => write data => Return",
      "input => return => read data => wait a fixed time",
    ],
    correctAnswers: ["input => wait a fixed time => read data => Return"],
  },
  {
    question:
      "Which of the following processes best fit the Busy/Wait cycle in Read synchronization ?",
    answers: [
      "input => status => (if busy)=> input =>(else) => read data => Return",
      "input => status => (if busy)=> read data =>(else) => input => Return",
      "input => read data  => input => Return",
    ],
    correctAnswers: [
      "input => status => (if busy)=> input =>(else) => read data => Return",
    ],
  },
  {
    question:
      "Which of the following processes best fit the Blind Cycle in Write synchronization ?",
    answers: [
      "input => wait a fixed time => read data => Return",
      "output =>  write data => wait a fixed time  => Return",
      "input => return => read data => wait a fixed time",
    ],
    correctAnswers: ["output =>  write data => wait a fixed time  => Return"],
  },
  {
    question:
      "Which of the following processes best fit the Busy/Wait cycle in Write synchronization ?",
    answers: [
      "input => status => (if busy)=> input =>(else) => read data => Return",
      "input => status => (if busy)=> read data =>(else) => output => Return",
      "output => status => (if busy)=> output =>(else) => write data => Return",
      "input => read data  => input => Return",
    ],
    correctAnswers: [
      "output => status => (if busy)=> output =>(else) => write data => Return",
    ],
  },
  {
    question:
      "What is the difference between the blind cycle in read and write synchronization respectively",
    answers: [
      "in read , wait a fixed time before data is read whilst in write synchronization, data is written before a wait for a fixed time",
      "in write , wait a fixed time before data write whilst in read synchronization, data is read before a wait for a fixed time",
      "in read , no  fixed time before data is read whilst in write synchronization, data is written before a wait for a fixed time",
    ],
    correctAnswers: [
      "in read , wait a fixed time before data is read whilst in write synchronization, data is written before a wait for a fixed time",
    ],
  },
  {
    question: "What are some busy-Wait conditions ?",
    answers: [
      "simple I/O",
      "Single process ",
      "Fixed load",
      "Dedicated single thread",
      "Nothing else to do",
    ],
    correctAnswers: [
      "simple I/O",
      "Single process ",
      "Fixed load",
      "Dedicated single thread",
      "Nothing else to do",
    ],
  },
  {
    question: "What are some interrupt conditions ?",
    answers: [
      "Multithread/multi process",
      "Program errors",

      " Illegal stack or memory",
      "access",
      " Machine errors",
    ],
    correctAnswers: [
      "Multithread/multi process",
      "Program errors",

      " Illegal stack or memory",
      "access",
      " Machine errors",
    ],
  },
  {
    question: "What are some memory access conditions ?",
    answers: ["Low latency", "High bandwidth", "Memory Size"],
    correctAnswers: ["Low latency", "High bandwidth"],
  },
  {
    question:
      "What is the main difference between arm bits and flag bits in terms of purpose",
    answers: [
      "Arm bit is used to indicate interrupts in a device whilst flag bit is used to disable or enable interrupts that occurs and needs servicing",

      "Arm bit is used to enable or disable interrupt sources in a device whilst flag bit is used to indicate that an interrupt has occurred and needs servicing",
    ],
    correctAnswers: [
      "Arm bit is used to enable or disable interrupt sources in a device whilst flag bit is used to indicate that an interrupt has occurred and needs servicing",
    ],
  },
  {
    question: "Latency may occur in ?",
    answers: ["Output Device", "Input Device", "Periodic Events"],
    correctAnswers: ["Periodic Events", "Input Device", "Output Device"],
  },
  {
    question: "A Real time system can garuantee a worst case software latency ",
    answers: ["true", "False"],
    correctAnswers: ["true"],
  },
  {
    question:
      "Hardware latency is the time between devices given command and the time command is completed",
    answers: ["True", "Fsalse"],
    correctAnswers: ["True"],
  },
  {
    question:
      "According to the lecture , there are what types of bandwidth limits ?",
    answers: ["I/O bound", "CPU bound", "Memory bound"],
    correctAnswers: ["I/O bound", "CPU bound"],
  },
  {
    question:
      "In the I/O bound in terms of their bandwidths the following conditions are true",
    answers: [
      "Bandwidth is limited by the I/O devices speed",
      "Making the I/o faster will  increase the bandwidth",
      "Making the software faster will not increase the bandwidth",
      "CPU being busy or idle affects the bandwidth",
      "Making the software slower affects the bandwidth",
    ],
    correctAnswers: [
      "Bandwidth is limited by the I/O devices speed",
      "Making the I/o faster will  increase the bandwidth",
      "Making the software faster will not increase the bandwidth",
    ],
  },
  {
    question:
      "In a CPU bound in terms of their bandwidths the following conditions are true",
    answers: [
      "Bandwidth is limited by the software speed",
      "Making the I/O faster has no effect on the bandwidth",
      "Making the software faster will increase it bandwidth",
      "Making the I/O faster will increase the bandwidth",
      "Increasing the I/O size will increase the bandwidth",
    ],
    correctAnswers: [
      "Bandwidth is limited by the software speed",
      "Making the I/O faster has no effect on the bandwidth",
      "Making the software faster will increase it bandwidth",
    ],
  },
  {
    question: "Characteristics of an embedded computer system include:",
    answers: [
      "Includes a microcomputer like the Freescale 9S12",
      "Configured to perform a specific dedicated application",
      "Software programmed into ROM",
      "Software not accessible to the user of the device",
      "Software solves only a limited range of problems",
      "Microcomputer embedded or hidden inside",
    ],
    correctAnswers: [
      "Includes a microcomputer like the Freescale 9S12",
      "Configured to perform a specific dedicated application",
      "Software programmed into ROM",
      "Software not accessible to the user of the device",
      "Software solves only a limited range of problems",
      "Microcomputer embedded or hidden inside",
    ],
  },
  {
    question: "Common applications of embedded computer systems include:",
    answers: [
      "Communications",
      "Automotive (approximately 10 per car)",
      "Military",
      "Agriculture",
      "Medical",
      "Consumer (approximately 150 per home)",
      "Machine control",
    ],
    correctAnswers: [
      "Communications",
      "Automotive (approximately 10 per car)",
      "Military",
      "Medical",
      "Consumer (approximately 150 per home)",
      "Machine control",
    ],
  },
  {
    question: "Characteristics of an embedded microcomputer system include:",
    answers: [
      "Accepts inputs",
      "Performs calculations",
      "Generates outputs",
      "Runs in 'real time'",
      "Connects to the internet",
      "Has a graphical user interface",
    ],
    correctAnswers: [
      "Accepts inputs",
      "Performs calculations",
      "Generates outputs",
      "Runs in 'real time'",
    ],
  },
  {
    question:
      "In a real-time system, there is an upper bound on the time required to:",
    answers: [
      "Perform input/calculation/output",
      "Respond to external events",
      "Update system software",
      "Access secondary storage",
      "Send data over a network",
    ],
    correctAnswers: [
      "Perform input/calculation/output",
      "Respond to external events",
    ],
  },
  {
    question: "What are important embedded system specifications?",
    answers: [
      "Speed (bytes/sec)",
      "Power (watts)",
      "Size (cm3) and weight (g)",
      "Accuracy (% error)",
      "Memory (GB)",
    ],
    correctAnswers: [
      "Speed (bytes/sec)",
      "Power (watts)",
      "Size (cm3) and weight (g)",
      "Accuracy (% error)",
    ],
  },
  {
    question: "How do you choose a microcontroller?",
    answers: [
      "Ability to process data (speed, precision, data type)",
      "I/O devices",
      "RAM and ROM size",
      "Operating system compatibility",
      "Cost",
    ],
    correctAnswers: [
      "Ability to process data (speed, precision, data type)",
      "I/O devices",
      "RAM and ROM size",
    ],
  },
  {
    question: "What defines an interface?",
    answers: [
      "The hardware and software enabling communication with external hardware",
      "Adaptability to a wide range of digital or analog inputs and outputs",
      "Provides physical connections only",
      "Is specific to either digital or analog signals",
    ],
    correctAnswers: [
      "The hardware and software enabling communication with external hardware",
      "Adaptability to a wide range of digital or analog inputs and outputs",
    ],
  },
  {
    question:
      "What is the sequential order of steps in the design process of an embedded system?",
    answers: [
      "High-level design => Engineering design => Analyze the problem => Implementation => Testing => Analyze the problem (repeated)",
      "Analysis => Design => Testing => Implementation => Analyze the problem (repeated)",
      "Engineering design => High-level design => Testing => Analyze the problem => Implementation => Analyze the problem (repeated)",
      "Testing => Analyze the problem => High-level design => Engineering design => Implementation => Analyze the problem (repeated)",
    ],
    correctAnswers: [
      "Analyze the problem => High-level design => Engineering design => Implementation => Testing => Analyze the problem (repeated)",
    ],
  },
  {
    question:
      "What is the definition of 'fan out' in the context of electronic systems?",
    answers: [
      "The maximum number of outputs a single input can drive",
      "The maximum number of inputs a single output can drive",
      "The maximum number of inputs one output can drive",
      "The maximum number of outputs one input can drive",
    ],
    correctAnswers: ["The maximum number of inputs one output can drive"],
  },
  {
    question: "What is capacitive loading in electronic systems?",
    answers: [
      "The maximum capacitance a system can handle",
      "The process of charging capacitors in a circuit",
      "The effect of connecting capacitors to a system's outputs",
      "The time it takes for capacitors to discharge",
    ],
    correctAnswers: [
      "The effect of connecting capacitors to a system's outputs",
    ],
  },
  {
    question: "What is voltage threshold in electronic systems?",
    answers: [
      "The maximum voltage a system can handle",
      "The minimum voltage required for a signal to be recognized as high or low",
      "The voltage drop across a resistor",
      "The voltage level at which capacitors start charging",
    ],
    correctAnswers: [
      "The minimum voltage required for a signal to be recognized as high or low",
    ],
  },
  {
    question: "What is memory-mapped architecture in computer systems?",
    answers: [
      "A design where memory is accessed through a dedicated I/O port",
      "A method where memory and I/O devices share the same address space",
      "A technique where memory and CPU communicate via separate buses",
      "A process where memory is physically connected to the CPU",
    ],
    correctAnswers: [
      "A method where memory and I/O devices share the same address space",
    ],
  },
];

let currentQuestionIndex = localStorage.getItem("currentQuestionIndex") || 0;
let selectedAnswers = [];

console.log(lectureOne.le);
function showQuestion() {
  const currentQuestion = lectureOne[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;
  const choices = document.querySelectorAll(".choice");
  choices.forEach((choice, index) => {
    choice.textContent = currentQuestion.answers[index];
    choice.classList.remove("correct-choice", "wrong-choice");
  });
  document.getElementById("feedback").textContent = "";
  selectedAnswers = [];
  updateProgressBar();
}

function checkAnswer(selectedChoice) {
  const selectedAnswer = selectedChoice.textContent;
  if (selectedAnswers.includes(selectedAnswer)) return; // Prevent selecting the same answer twice
  selectedAnswers.push(selectedAnswer);
  const correctAnswers = lectureOne[currentQuestionIndex].correctAnswers;
  const feedback = document.getElementById("feedback");
  const nextButton = document.querySelector("button");

  if (selectedAnswer === "") {
    feedback.textContent = "Please select an answer.";
    feedback.style.color = "red";
    nextButton.disabled = true; // Disable the next button
  } else if (correctAnswers.includes(selectedAnswer)) {
    selectedChoice.classList.add("correct-choice");
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
  } else {
    selectedChoice.classList.add("wrong-choice");
    feedback.textContent = "Wrong. Try again!";
    feedback.style.color = "red";
  }
  updateProgressBar();

  // Enable the next button if the progress bar is full
  const progressBarWidth = document.getElementById("progress-bar").style.width;
  if (progressBarWidth === "100%") {
    nextButton.disabled = false;
  }
}

function nextQuestion() {
  // Check if progress bar is full
  const progressBarWidth = document.getElementById("progress-bar").style.width;
  if (progressBarWidth !== "100%") {
    // Display a message to answer all lectureOne correctly
    const feedback = document.getElementById("feedback");
    feedback.textContent = "Please answer all lectureOne correctly.";
    feedback.style.color = "red";
    return; // Return without proceeding if progress bar is not full
  }

  // Check if any answer is selected
  const selectedChoice = document.querySelector(".choice.selected");

  // Proceed to the next question
  currentQuestionIndex++;
  if (currentQuestionIndex >= lectureOne.length) {
    alert("End of quiz!");
    currentQuestionIndex = 0;
    return;
  }

  localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
  showQuestion();
}

function updateProgressBar() {
  const currentQuestion = lectureOne[currentQuestionIndex];
  const totalcorrectAnswers = currentQuestion.correctAnswers.length;
  const progress =
    (selectedAnswers.filter((answer) =>
      currentQuestion.correctAnswers.includes(answer)
    ).length /
      totalcorrectAnswers) *
    100;
  document.getElementById("progress-bar").style.width = `${progress}%`;
}

showQuestion();

function showSlide(slideNumber) {
  // Hide all slides
  var slides = document.querySelectorAll(".flashcard-container > .flashcard");
  slides.forEach(function (slide) {
    slide.style.display = "none";
  });

  // Show the selected slide
  var selectedSlide = document.querySelector(
    ".flashcard-container > .flashcard:nth-child(" + slideNumber + ")"
  );
  selectedSlide.style.display = "block";
}
let sidebarOpen = true; // Initially sidebar is open

function toggleSidebar() {
  var sidebar = document.querySelector(".sidebar");
  sidebarOpen = !sidebarOpen; // Toggle the state

  if (sidebarOpen) {
    sidebar.classList.remove("collapsed");
  } else {
    sidebar.classList.add("collapsed");
  }
}
