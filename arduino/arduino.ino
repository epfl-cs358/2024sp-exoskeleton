#include "Servo.h"

const int angle = 30;
const int max_speed = 1915;
const int max_up_speed = 1200;
const int min_speed = 1536;
const int rotation_time = 1100;
const int max_velocity = 127;

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

  int motor = -2;
  int velocity = -2;

  // Find the position of the colon (':') separator
  int separatorIndex = input.indexOf(':');

  
  // If the separator is found
  if (separatorIndex != -1) {
    // Extract the substrings before and after the separator
    String motorString = input.substring(0, separatorIndex);
    String velocityString = input.substring(separatorIndex + 1);
    
    // Convert the substrings to integers
    motor = motorString.toInt();
    velocity = velocityString.toInt();
  }

  if(motor != -2 && velocity != -2)
  {
    if(velocity < 0)
    {
      motor_up(motor);
    }
    else
      motor_down(motor, velocity);
  }
  }
}


void motor_up(int motor)
{
  float angle_factor = angle/360.0;
  float speed_factor = 1;
  int rotation_delay = int(rotation_time*angle_factor*speed_factor);

  Serial.println("Rotating Servo " + String(motor) + " UP with speed " + String(max_up_speed) + " for " + String(rotation_delay) + " milliseconds.");

  servo[motor].writeMicroseconds(max_up_speed);
  delay_motors[motor] = millis() + rotation_delay;
}

void motor_down(int motor, int velocity)
{
  if(motors[motor] == 0)
  {
    motors[motor] = 1;
    int diff = max_speed - min_speed;
    float factor = velocity/max_velocity;
    int speed = min_speed + int(diff*factor);
    float angle_factor = angle/360.0;
    float speed_factor = (speed - min_speed) / diff;
    int rotation_delay = int(rotation_time*angle_factor*speed_factor);   

    Serial.println("Rotating Servo " + String(motor) + " with speed " + String(speed) + " for " + String(rotation_delay) + " milliseconds.");

    servo[motor].writeMicroseconds(speed);
    delay_motors[motor] = millis() + rotation_delay;
  }
}

void stop_motor(int motor)
{
  Serial.println("Stopping Servo " + String(motor));

  servo[motor].writeMicroseconds(1500);
  delay_motors[motor] = -1;
}
