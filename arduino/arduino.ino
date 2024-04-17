int x; 

void setup() { 
	Serial.begin(115200);
  Serial.setTimeout(0.1);
} 


void loop() {
  processInput();
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
  Serial.println("Motor "+String(motor)+" UP");
}

void motor_down(int motor, int velocity)
{
  Serial.println("Motor "+String(motor)+" Down with velocity "+String(velocity));
}
