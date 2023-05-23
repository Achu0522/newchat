export const analyze = (text) => {
    if (text.includes('Hi') || text.includes('Hai') || text.includes('Hello'))
        return 'Hi,How can i help you?'
    else if (text.includes('Java'))
        return 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA),[17] meaning that compiled Java code can run on all platforms that support Java without the need to recompile.[18] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture.'
    else if (text.includes('Oops'))
        return 'As the name suggests, Object-Oriented Programming or OOPs refers to languages that use objects in programming, they use objects as a primary source to implement what is to happen in the code. Objects are seen by the viewer or user, performing tasks assigned by you. Object-oriented programming aims to implement real-world entities like inheritance, hiding, polymorphism etc. in programming. The main aim of OOP is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function. '
    else if (text.includes('Features of oops'))
        return 'Classes,Objects,Polymorphism,Encapsulation,Data Abstraction,Inheritance'
    else if (text.includes('Polymorphism'))
        return 'Polymorphism is one of the core concepts of object-oriented programming (OOP) and describes situations in which something occurs in several different forms. In computer science, it describes the concept that you can access objects of different types through the same interface. Each type can provide its own independent implementation of this interface.'
    else if (text.includes('Inheritance'))
        return 'Inheritance is one of the core concepts of object-oriented programming (OOP) languages. It is a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of attributes and methods In Java, each class can only be derived from one other class. That class is called a superclass, or parent class. The derived class is called subclass, or child class You use the keyword extends to identify the class that your subclass extends. If you don’t declare a superclass, your class implicitly extends the class Object. Object is the root of all inheritance hierarchies; it’s the only class in Java that doesn’t extend another class.'
    else if (text.includes('Data Abstraction'))
        return 'Abstraction is the process of hiding the internal details of an application from the outer world. Abstraction is used to describe things in simple terms. It’s used to create a boundary between the application and the client programs.'
    else if (text.includes('Encapsulation'))
        return 'Encapsulation in Java is a process of wrapping code and data together into a single unit, for example, a capsule which is mixed of several medicines We can create a fully encapsulated class in Java by making all the data members of the class private. Now we can use setter and getter methods to set and get the data in it.'
    else if (text.includes('Python'))
        return 'Python is a popular programming language. It was created by Guido van Rossum, and released in 1991 It is used for  web development (server-side),software development, mathematics,system scripting.'
    else if (text.includes('C'))
        return 'Procedural Language - Instructions in a C program are executed step by step Portable - You can move C programs from one platform to another, and run it without any or minimal changes,Speed - C programming is faster than most programming languages like Java, Python, etc,General Purpose - C programming can be used to develop operating systems, embedded systems, databases, and so on.'
    else if (text.includes('Javascript'))
        return 'JavaScript (JS) is the most popular lightweight, interpreted compiled programming language. It can be used for both Client-side as well as Server-side developments. JavaScript also known as a scripting language for web pages.'
    else if (text.includes('Data types in c'))
        return 'Each variable in C has an associated data type. Each data type requires different amounts of memory and has some specific operations which can be performed over it. It specifies the type of data that the variable can store like integer, character, floating, double, etc.'
    else if (text.includes('Thank you'))
        return 'Thank You,Have a Good Day.'
    else if (text.includes('Class'))
        return 'In object-oriented programming, a class is a blueprint for creating objects (a particular data structure), providing initial values for state (member variables or attributes), and implementations of behavior (member functions or methods).The user-defined objects are created using the class keyword.'
    else if (text.includes('Objects'))
        return 'Objects in OOPs are conceptually identical to real-world objects. From a Technical point of view, An entity with a clearly defined structure and behaviour is called an object. An object in OOPs can include: A Variable,A Data Structure,A Function or A Method.'
    else if(text.includes('Data Structure'))
        return 'A data structure is not only used for organizing the data. It is also used for processing, retrieving, and storing data. There are different basic and advanced types of data structures that are used in almost every program or software system that has been developed,A data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.'

    return "I can't get you....Can you rephrase the message"
}