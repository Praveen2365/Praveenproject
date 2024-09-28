import java.io.*;
import java.net.*;

public class Client {
    public static void main(String[] args) {
        try (Socket socket = new Socket("localhost", 12345);
             BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             PrintWriter output = new PrintWriter(socket.getOutputStream(), true);
             BufferedReader userInput = new BufferedReader(new InputStreamReader(System.in))) {

            System.out.print("Enter a number: ");
            String number = userInput.readLine();

            output.println(number);

            String response = input.readLine();
            System.out.println("Parity Check Result: " + response);
        } catch (IOException e) {
            System.err.println("Client error: " + e.getMessage());
        }
    }
}
