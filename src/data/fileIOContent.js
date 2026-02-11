export const fileIOContent = {
  title: 'File I/O - File Handling',
  sections: [
    {
      id: 'basics',
      title: '1. File Basics',
      content: `
**File I/O** handles reading and writing files.

**Classes:**
- File: Represents file/directory
- FileReader/FileWriter: Character streams
- BufferedReader/BufferedWriter: Buffered I/O
- FileInputStream/FileOutputStream: Byte streams

**Why File I/O?**
- Data persistence
- Configuration management
- Log files
- Data exchange
      `,
      code: `
import java.io.*;

public class FileBasics {
    public static void main(String[] args) {
        // Create File object
        File file = new File("example.txt");
        
        // File information
        System.out.println("Name: " + file.getName());
        System.out.println("Path: " + file.getAbsolutePath());
        System.out.println("Exists: " + file.exists());
        System.out.println("Is File: " + file.isFile());
        System.out.println("Is Directory: " + file.isDirectory());
        System.out.println("Size: " + file.length() + " bytes");
        
        // Create new file
        try {
            if (file.createNewFile()) {
                System.out.println("File created");
            } else {
                System.out.println("File already exists");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        // Directory operations
        File dir = new File("myFolder");
        if (dir.mkdir()) {
            System.out.println("Directory created");
        }
        
        // List files in directory
        File folder = new File(".");
        String[] files = folder.list();
        for (String f : files) {
            System.out.println(f);
        }
    }
}
      `,
      explanation: `
**Key Methods:**
1. exists(): Check if file exists
2. createNewFile(): Create new file
3. mkdir(): Create directory
4. delete(): Delete file
5. list(): List directory contents
      `
    },
    {
      id: 'read-write',
      title: '2. Reading and Writing Files',
      content: `
**File Operations:**
- Write: FileWriter, BufferedWriter
- Read: FileReader, BufferedReader
- Always close resources

**Best Practice:** Use try-with-resources
      `,
      code: `
import java.io.*;

public class FileReadWrite {
    
    // Write to file
    public static void writeFile(String filename, String content) {
        try (FileWriter writer = new FileWriter(filename);
             BufferedWriter buffer = new BufferedWriter(writer)) {
            
            buffer.write(content);
            buffer.newLine();
            System.out.println("File written successfully");
            
        } catch (IOException e) {
            System.err.println("Error writing file: " + e.getMessage());
        }
    }
    
    // Read from file
    public static void readFile(String filename) {
        try (FileReader reader = new FileReader(filename);
             BufferedReader buffer = new BufferedReader(reader)) {
            
            String line;
            while ((line = buffer.readLine()) != null) {
                System.out.println(line);
            }
            
        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + filename);
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }
    }
    
    // Append to file
    public static void appendFile(String filename, String content) {
        try (FileWriter writer = new FileWriter(filename, true);
             BufferedWriter buffer = new BufferedWriter(writer)) {
            
            buffer.write(content);
            buffer.newLine();
            System.out.println("Content appended");
            
        } catch (IOException e) {
            System.err.println("Error appending: " + e.getMessage());
        }
    }
    
    public static void main(String[] args) {
        String filename = "data.txt";
        
        // Write
        writeFile(filename, "Hello, World!");
        writeFile(filename, "Java File I/O");
        
        // Append
        appendFile(filename, "Additional line");
        
        // Read
        System.out.println("\\nFile contents:");
        readFile(filename);
    }
}

/* Output:
File written successfully
File written successfully
Content appended

File contents:
Hello, World!
Java File I/O
Additional line
*/
      `,
      explanation: `
**Key Points:**
1. try-with-resources auto-closes files
2. BufferedReader/Writer for efficiency
3. FileWriter(file, true) for append mode
4. Always handle IOException
      `
    },
    {
      id: 'byte-streams',
      title: '3. Byte Streams',
      content: `
**Byte Streams** handle binary data.

**Classes:**
- FileInputStream: Read bytes
- FileOutputStream: Write bytes
- Used for images, videos, etc.
      `,
      code: `
import java.io.*;

public class ByteStreams {
    
    // Copy file using byte streams
    public static void copyFile(String source, String dest) {
        try (FileInputStream in = new FileInputStream(source);
             FileOutputStream out = new FileOutputStream(dest)) {
            
            byte[] buffer = new byte[1024];
            int bytesRead;
            
            while ((bytesRead = in.read(buffer)) != -1) {
                out.write(buffer, 0, bytesRead);
            }
            
            System.out.println("File copied successfully");
            
        } catch (IOException e) {
            System.err.println("Error copying file: " + e.getMessage());
        }
    }
    
    // Write binary data
    public static void writeBinary(String filename) {
        try (FileOutputStream out = new FileOutputStream(filename)) {
            
            byte[] data = {65, 66, 67, 68, 69}; // A, B, C, D, E
            out.write(data);
            System.out.println("Binary data written");
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    // Read binary data
    public static void readBinary(String filename) {
        try (FileInputStream in = new FileInputStream(filename)) {
            
            int byteData;
            while ((byteData = in.read()) != -1) {
                System.out.print((char) byteData + " ");
            }
            System.out.println();
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    public static void main(String[] args) {
        writeBinary("binary.dat");
        readBinary("binary.dat");
        
        // Copy file
        copyFile("source.txt", "destination.txt");
    }
}

/* Output:
Binary data written
A B C D E 
File copied successfully
*/
      `,
      explanation: `
**Key Points:**
1. Use byte streams for binary files
2. Buffer improves performance
3. read() returns -1 at end of file
4. Suitable for images, videos, audio
      `
    },
    {
      id: 'serialization',
      title: '4. Serialization',
      content: `
**Serialization** converts object to byte stream for storage/transmission.

**Requirements:**
- Implement Serializable interface
- All fields must be serializable
- Use transient for non-serializable fields
      `,
      code: `
import java.io.*;

class Student implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private String name;
    private int rollNo;
    private double marks;
    private transient String password; // Not serialized
    
    public Student(String name, int rollNo, double marks, String password) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
        this.password = password;
    }
    
    @Override
    public String toString() {
        return "Student{name='" + name + "', rollNo=" + rollNo + 
               ", marks=" + marks + ", password=" + password + "}";
    }
}

public class SerializationDemo {
    
    // Serialize object
    public static void serializeStudent(Student student, String filename) {
        try (FileOutputStream file = new FileOutputStream(filename);
             ObjectOutputStream out = new ObjectOutputStream(file)) {
            
            out.writeObject(student);
            System.out.println("Student serialized: " + student);
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    // Deserialize object
    public static Student deserializeStudent(String filename) {
        try (FileInputStream file = new FileInputStream(filename);
             ObjectInputStream in = new ObjectInputStream(file)) {
            
            Student student = (Student) in.readObject();
            System.out.println("Student deserialized: " + student);
            return student;
            
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
            return null;
        }
    }
    
    public static void main(String[] args) {
        Student student = new Student("Alice", 101, 85.5, "secret123");
        
        // Serialize
        serializeStudent(student, "student.ser");
        
        // Deserialize
        Student loaded = deserializeStudent("student.ser");
        
        // Note: password is null after deserialization (transient)
    }
}

/* Output:
Student serialized: Student{name='Alice', rollNo=101, marks=85.5, password=secret123}
Student deserialized: Student{name='Alice', rollNo=101, marks=85.5, password=null}
*/
      `,
      explanation: `
**Key Points:**
1. Implement Serializable interface
2. serialVersionUID for version control
3. transient fields not serialized
4. Use ObjectOutputStream/ObjectInputStream
5. Handle ClassNotFoundException
      `
    },
    {
      id: 'nio',
      title: '5. NIO (New I/O)',
      content: `
**NIO** provides modern file operations.

**Features:**
- Path and Files classes
- Better performance
- More operations
- Simpler API
      `,
      code: `
import java.nio.file.*;
import java.io.IOException;
import java.util.List;

public class NIODemo {
    public static void main(String[] args) {
        try {
            // Create Path
            Path path = Paths.get("example.txt");
            
            // Write to file
            String content = "Hello NIO\\nJava File I/O";
            Files.write(path, content.getBytes());
            System.out.println("File written");
            
            // Read all lines
            List<String> lines = Files.readAllLines(path);
            System.out.println("\\nFile contents:");
            lines.forEach(System.out::println);
            
            // Read as string
            String fileContent = Files.readString(path);
            System.out.println("\\nAs string:\\n" + fileContent);
            
            // File operations
            Path source = Paths.get("source.txt");
            Path dest = Paths.get("destination.txt");
            
            // Copy file
            Files.copy(source, dest, StandardCopyOption.REPLACE_EXISTING);
            System.out.println("\\nFile copied");
            
            // Move file
            Path newPath = Paths.get("moved.txt");
            Files.move(dest, newPath, StandardCopyOption.REPLACE_EXISTING);
            System.out.println("File moved");
            
            // Delete file
            Files.deleteIfExists(newPath);
            System.out.println("File deleted");
            
            // File attributes
            System.out.println("\\nFile info:");
            System.out.println("Size: " + Files.size(path));
            System.out.println("Is directory: " + Files.isDirectory(path));
            System.out.println("Is readable: " + Files.isReadable(path));
            System.out.println("Is writable: " + Files.isWritable(path));
            
            // List directory
            Path dir = Paths.get(".");
            System.out.println("\\nDirectory contents:");
            Files.list(dir)
                .limit(5)
                .forEach(System.out::println);
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

/* Output:
File written

File contents:
Hello NIO
Java File I/O

As string:
Hello NIO
Java File I/O

File copied
File moved
File deleted

File info:
Size: 24
Is directory: false
Is readable: true
Is writable: true

Directory contents:
example.txt
source.txt
...
*/
      `,
      explanation: `
**NIO Advantages:**
1. Simpler API than traditional I/O
2. readAllLines() reads entire file
3. readString() for text files
4. copy(), move(), delete() operations
5. Stream API integration
      `
    },
    {
      id: 'real-world',
      title: '6. Real-World Example',
      content: `
**Log File Manager** - Complete file handling system.
      `,
      code: `
import java.io.*;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

class LogManager {
    private String logFile;
    private DateTimeFormatter formatter;
    
    public LogManager(String logFile) {
        this.logFile = logFile;
        this.formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
    }
    
    // Write log entry
    public void log(String level, String message) {
        String timestamp = LocalDateTime.now().format(formatter);
        String logEntry = String.format("[%s] [%s] %s", timestamp, level, message);
        
        try (FileWriter writer = new FileWriter(logFile, true);
             BufferedWriter buffer = new BufferedWriter(writer)) {
            
            buffer.write(logEntry);
            buffer.newLine();
            
        } catch (IOException e) {
            System.err.println("Error writing log: " + e.getMessage());
        }
    }
    
    public void info(String message) {
        log("INFO", message);
    }
    
    public void error(String message) {
        log("ERROR", message);
    }
    
    public void warning(String message) {
        log("WARNING", message);
    }
    
    // Read all logs
    public void displayLogs() {
        try {
            List<String> logs = Files.readAllLines(Paths.get(logFile));
            System.out.println("\\n=== Log File Contents ===");
            logs.forEach(System.out::println);
        } catch (IOException e) {
            System.err.println("Error reading logs: " + e.getMessage());
        }
    }
    
    // Search logs
    public void searchLogs(String keyword) {
        try {
            List<String> logs = Files.readAllLines(Paths.get(logFile));
            System.out.println("\\n=== Search Results for: " + keyword + " ===");
            logs.stream()
                .filter(log -> log.contains(keyword))
                .forEach(System.out::println);
        } catch (IOException e) {
            System.err.println("Error searching logs: " + e.getMessage());
        }
    }
    
    // Clear logs
    public void clearLogs() {
        try {
            Files.write(Paths.get(logFile), new byte[0]);
            System.out.println("Logs cleared");
        } catch (IOException e) {
            System.err.println("Error clearing logs: " + e.getMessage());
        }
    }
}

public class Main {
    public static void main(String[] args) {
        LogManager logger = new LogManager("application.log");
        
        // Write logs
        logger.info("Application started");
        logger.info("User logged in: john@example.com");
        logger.warning("Low memory warning");
        logger.error("Database connection failed");
        logger.info("Application shutdown");
        
        // Display all logs
        logger.displayLogs();
        
        // Search logs
        logger.searchLogs("ERROR");
        
        // Clear logs
        // logger.clearLogs();
    }
}

/* Output:
=== Log File Contents ===
[2024-01-15 10:30:00] [INFO] Application started
[2024-01-15 10:30:00] [INFO] User logged in: john@example.com
[2024-01-15 10:30:00] [WARNING] Low memory warning
[2024-01-15 10:30:00] [ERROR] Database connection failed
[2024-01-15 10:30:00] [INFO] Application shutdown

=== Search Results for: ERROR ===
[2024-01-15 10:30:00] [ERROR] Database connection failed
*/
      `,
      explanation: `
**Real-World Features:**
1. Timestamp for each log entry
2. Log levels (INFO, WARNING, ERROR)
3. Append mode for continuous logging
4. Search functionality
5. Display and clear operations
6. Error handling throughout
      `
    }
  ],
  practiceQuestions: [
    {
      id: 1,
      question: 'Write a program to read a text file and count the number of words.',
      difficulty: 'Easy'
    },
    {
      id: 2,
      question: 'Create a program to copy one file to another using byte streams.',
      difficulty: 'Easy'
    },
    {
      id: 3,
      question: 'Implement serialization for a Student class with name, age, and grades.',
      difficulty: 'Medium'
    },
    {
      id: 4,
      question: 'Build a file manager that can create, read, update, and delete files using NIO.',
      difficulty: 'Medium'
    },
    {
      id: 5,
      question: 'Design a configuration manager that reads/writes properties from/to files with validation.',
      difficulty: 'Hard'
    }
  ],
  keyTakeaways: [
    'File class represents files and directories',
    'Use BufferedReader/Writer for efficient text file operations',
    'Byte streams (FileInputStream/OutputStream) for binary data',
    'Always use try-with-resources to auto-close files',
    'Serialization converts objects to byte streams for storage',
    'transient keyword prevents field serialization',
    'NIO provides modern, simpler file operations',
    'Files.readAllLines() and Files.write() are convenient for small files',
    'Always handle IOException when working with files'
  ]
};
