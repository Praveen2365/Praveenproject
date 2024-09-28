import java.io.*;
import java.net.*;

public class Server {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(12345)) {
            System.out.println("Server is listening on port 12345");

            while (true) {
                try (Socket socket = serverSocket.accept();
                     BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                     PrintWriter output = new PrintWriter(socket.getOutputStream(), true)) {

                    String receivedData = input.readLine();
                    System.out.println("Received: " + receivedData);

                    // Calculate parity
                    int data = Integer.parseInt(receivedData);
                    boolean isEven = (data % 2 == 0);

                    String response = isEven ? "Even" : "Odd";
                    output.println(response);
                } catch (NumberFormatException e) {
                    System.err.println("Invalid number format");
                }
            }
        } catch (IOException e) {
            System.err.println("Server error: " + e.getMessage());
        }
    }
}
