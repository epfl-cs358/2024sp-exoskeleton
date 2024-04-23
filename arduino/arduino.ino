#include "Servo.h"

int motors[5] = {0, 0, 0, 0, 0};
int delay_motors[5] = {-1, -1, -1, -1, -1};
Servo servo[5];
const byte servoPins[] = {3,5,6,9,10};

void setup() { 
	Serial.begin(115200);
  Serial.setTimeout(0.1);
  for(int i = 0; i < 5; i++)
  {
    servo[i].attach(servoPins[i]);
  }
} 


void loop() {
  processInput();
  for(int i = 0; i < 5; i++)
  {
    if(delay_motors[i] != -1 && delay_motors[i] < millis()) stop_motor(i);
  }
}


void processInput() {
  if(Serial.available() > 0){
    delay(5);
    String input = Serial.readStringUntil("\n");
    input.trim();

    if (input.startsWith("m")) {
    // Remove the "m" tag from the input string
    input.remove(0, 1); // Remove the first character (tag)
    input.trim();

    int motor, speed, delay;
    // Parse the three integers separated by spaces
    int parsedCount = sscanf(input.c_str(), "%d %d %d", &motor, &speed, &delay);

    if (parsedCount == 3) {
      // Successfully parsed three integers
      motor_control(motor, speed, delay);
    } else {
      Serial.println("Failed to parse integers, here is the string : " + input);
    }
  }
  }
}

void motor_control(int motor, int speed, int delay)
{
  if(speed < 1500)
  {
    if(motors[motor] == 1)
    {
      motors[motor] = 0; 
    }
    else return;
  }
  else {
    if(motors[motor] == 0)
    {
      motors[motor] = 1; 
    }
    else return;
  }

  Serial.println("Rotating Servo " + String(motor) + " with speed " + String(speed-1500) + " for " + String(delay) + " milliseconds.");
  servo[motor].writeMicroseconds(speed);
  delay_motors[motor] = millis() + delay;
}

void stop_motor(int motor)
{
  Serial.println("Stopping Servo " + String(motor));

  servo[motor].writeMicroseconds(1500);
  delay_motors[motor] = -1;
}
