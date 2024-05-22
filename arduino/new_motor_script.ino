#include "Servo.h"

int motors[5] = {0, 0, 0, 0, 0}; // index, middle finger, ring finger, little finger, thumb
Servo servo[5];
const byte servoPins[] = {3,5,9,11,6};
const int direction[] = {-1, -1, 1, 1, 1};
float angle = 75.;
int angle_ajusted = int((180./270.) * angle);

void setup() { 
	Serial.begin(115200);
  Serial.setTimeout(0.1);
  for(int i = 0; i < 5; i++)
  {
    servo[i].attach(servoPins[i]);
    servo[i].write(90-90*direction[i]);
  }
} 


void loop() {
  processInput();
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

      int motor;
      char dir;
      // Parse the three integers separated by spaces
      int parsedCount = sscanf(input.c_str(), "%d %c", &motor, &dir);

      if (parsedCount == 2) {
        // Successfully parsed three integers
        if(dir == 'd') {
          motor_down(motor);
        } else if (dir == 'u') {
          motor_up(motor);
        } else {
          Serial.println("Failed to parse integers, here is the string : " + input);
        }
      }
    }
  }
}

void motor_down(int motor)
{
  Serial.println("Motor DOWN : " + String(motor));
  servo[motor].write(90);
}

void motor_up(int motor)
{
  int a = 90-90*direction[motor];
  Serial.println("Motor UP : " + String(motor) + "   " + String(a));
  servo[motor].write(90-90*direction[motor]);
}
