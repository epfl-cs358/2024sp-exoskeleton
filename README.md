# 2024sp-exoskeleton
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
-->
[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]

### Authors
- [Ewa Miazga](https://github.com/ewaMiazga)
- [Gabin Forestier](https://github.com/ForestDope)
- [Wei-En Hsieh](https://github.com/annhit29)
- [William Robert](https://github.com/AgeX21)
- [Benoit Morawiec](https://github.com/markh0rr)
- [Haris Malik](https://github.com/harismalik-1)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- change the contributors page -->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#motivation">Motivation</a></li>
        <li><a href="#goal">Goal</a></li>
        <li><a href="#final-result">Final Result</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li>
      <a href="#building-the-exoskeleton">Building the Exoskeleton</a>
      <ul>
        <li><a href="#mechanical-parts">Mechanical Parts</a></li>
        <li><a href="#assembly">Assembly</a></li>
        <li><a href="#electronics">Electronics</a></li>
      </ul>
    </li>
    <li><a href="#software">Software</a></li>
    <li><a href="#problems">Problems</a></li>
    <li><a href="#possible-improvements--extensions">Possible Improvements & Extensions</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
![Demo](./photos/demo.mp4)

<!-- MOTIVATION -->
### Motivation

Nowadays, hand exoskeletons are commonly used for rehabilitation therapy following health accidents such as strokes. Its efficacy in muscle memory training has the potential to be exploited in the fields of music, technology, and rehabilitation therapy.

Our project aims to facilitate muscle memory training of various piano techniques for pianists seeking to strengthen specific muscles and refine pianistic skills with greater efficiency. By using a lightweight hand exoskeleton, we can enforce specific positions at a given rhythm that allows the user to acquire a specific technique more quickly compared to traditional training.

We want the user to be able to input a technique and a specific tempo that they wish to train using an accompanying software tied to the exoskeleton. This then allows the exoskeleton to reproduce the movements of the technique.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FINAL RESULT -->
### Final Result
At the end of the semester, we have an exoskeleton of a hand that functions as follows:

Some photos for reference:

<p align="center">
    <img src="photos/_DSF0942.JPG" width="400"/> 
    <img src="photos/_DSF0944.JPG" width="400"/> 
</p>



It is controlled via a web application, which includes a feature for playing songs with preloaded files. Additionally, the device can record played pieces, aiding the learning process by allowing users to repeat the segments they prefer.
Each finger is operated by a separate motor, enabling simultaneous movement of all fingers. This design grants the device flexibility, allowing it to play almost any song desired.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- BUILT WITH -->
### Built With 
* [![React][React.js]][React-url]
* [![Python][Python.org]][Python-url]
* [![Cpp][Cpp.org]][Cpp-url]
* [![Flask][Flask.com]][Flask-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PREREQUISITES -->
### Prerequisites

Comprehensive list of elements we used in our project along with needed equipment. To construct the device, one should
- buy:
  -	Arduino Uno Board
  -	Proto Shield ARDUINO V.R3
  -	Power supply GST60A12-P1J
  -	Board LM2596
  -	DC Power Jack PJ-102B
  -	4 Bowden cables
  -	4 Servo motors DMS15-270
  -	MIDI keyboard
  -	Velcro tape
  -	Sewing kit
  -	Threads
  -	Screws
  -	Small elastic bands

- have access to:
  -	3D printer with TPU filament
  -	3D printer with PET filament
  -	Laser cutting machine
  -	Plastic board 3mm
  -	MDF board 3mm
  -	Driller
  -	Bunch of different screwdrivers
  -	Soldering kit

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- BUILDING THE EXOSKELETON -->
## Building the Exoskeleton

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MECHANICS -->
### Mechanics Parts
The comprehensive list of all the elements to start:
- [x] 4 adjustable finger wraps
- [x] 4 finger Bowden end place holders
- [x] 4 Bowden cable guide fingers
- [x] 1 Bowden cables guide hand
- [x] 1 Bowden cables guide wrist
- [x] 1 forearm top holder
- [x] 1 motor mounting plate
- [x] 1 forearm top holder with cables passthrough
- [x] 1 Arduino and power supply bottom plate
- [x] 4 forearm attachments
- [x] 4 Bowden cable motor attachments
- [x] 4 Bowden inside board holders
- [x] 2 logo sides

To construct the device, one should first print all the necessary elements using 3D printers:

* For 3D printer with PET filament: [STL files](stl_files/pet_3d_print)  
* For 3D printer with TPU filament: [STL files](stl_files/tpu_3d_print)  

Then all the necessary elements need to be laser cut:

* On plastic 3mm board: [DXF files](dxf_files)

### Assembly
Steps to put the device together:

1. Place threads into holes of Bowden cable guides (hand and wrist)

2. Glue Velcro straps to:
   - a. Bowden cable guides hand
   - b. Bowden cables guides wrist
   - c. 4 forearm attachments

<p align="center">
    <img src="photos/_DSF0940.JPG" alt="threads_photo" width="300"/>
</p>

3. To each of adjustable finger wraps, one should glue:
   - a. Finger Bowden end placeholders
   - b. Bowden cable guide fingers

<p align="center">
    <img src="photos/_DSF0943.JPG" width="300"/>
</p>

4. Screw motors to the motors mounting plate.

5. Screw logo sides to the motors mounting plate.

<p align="center">
    <img src="photos/_DSF0929.JPG" width="300"/>
</p>

6. Screw 2 forearm attachments to the forearm top holder which has the cables passthrough.

7. Screw 2 forearm attachments to Arduino and power supply bottom plate

<p align="center">
    <img src="photos/photo_2024-05-30_21-35-23.jpg" width="300"/>
</p>

8. Solder all the necessary cables according to the scheme [Figure 2](#figure-2). For more details about soldering, go to section [Electronics](#electronics).

<p align="center">
    <img src="photos/_DSF0934.JPG" width="300"/> 
    <img src="photos/_DSF0931.JPG" width="300"/> 
</p>

9. Screw the Arduino board with Proto Shield and all soldered components to Arduino and power supply bottom plate.

10. Pass Bowden cables through:
    - a. Bowden cable guides hand
    - b. Bowden cables guides wrist
    - c. Forearm top holder

11. Adjust the length of the Bowden cables in a way that they fit the placement of the motors.

12. Secure the Bowden cables by placing screws in threads of:
    - a. Bowden cable guides hand
    - b. Bowden cables guides wrist

13. Solder a bulb at the end of each of the Bowden cables.

<p align="center">
    <img src="photos/_DSF0938.JPG" width="300"/>
</p>

14. Enclose the soldered bulb in the Bowden cable motor attachments using a screw.

<p align="center">
    <img src="photos/_DSF0939.JPG" width="300"/>
</p>

15. Glue all of Bowden inside board holders in correct places on the forearm top holder

16. Connect Bowden cable motor attachments with Bowden inside board holders using elastic bands. Use the reef knot.

<p align="center">
    <img src="photos/reef_knot.png" width="300"/>
    <img src="photos/_DSF0936.JPG" width="300"/>
</p>

17. Attach Bowden cable motor attachments to the motors, so that they point towards the back (it enables half of the circle rotation to the front, and this push a finger down).

18. Screw the motors mounting plate to the forearm top holder.

<p align="center">
    <img src="photos/_DSF0930.JPG" width="300"/>
</p>

19. Sew Velcro straps to 
    - a. Bowden cable guides hand
    - b. Bowden cables guides wrist
    - c. 2 Bowden forearm attachments (on one of the sides of the Forearm top holder)

<p align="center">
    <img src="photos/photo_2024-.jpg" width="300"/>
</p>

20. Pass the motors’ cables through prepared space on 
    - a. Forearm top holder
    - b. Arduino and power supply bottom plate

<p align="center">
    <img src="photos/photo_2024.jpg" width="300"/>
</p>

21. Attach the round end of the Bowden cable to the Bowden end place holders and force the cable into the finger guides.

22. Attach the logo at the top of the logo sides.

<p align="center">
    <img src="photos/photo_2024-0.jpg" width="300"/>
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ELECTRONICS -->
### Electronics

For the electronics, we needed to power 4 6V servomotors so we couldn't use the Arduino 5V power supply. To solve this problem, we used a 12V power supply with a LM2596 voltage regulator to transform the 12V input into 6V. We then connected to 6V input to all the motors voltage input and did the same for the ground. The servomotors need a PWD arduino pin for control so we settle for the pin 3 5 9 and 11 because they don't touch each other so it would be simpler to solder everything. We also used an external arduino connection board to make everything look nicer.

You can see the schematics for the circuit here, the input is missing from the schematics but it goes on the left handside of the potentiometer : 

<a name="figure-1"></a>
<p align="center">
    <img src="photos/electronic_sketch_1_schema.png" width="300"/>
</p>

*Figure 1: Schematic of the electronic sketch.*

Here is the same schematics but the added external board :

<a name="figure-2"></a>
<p align="center">
    <img src="photos/electronic_sketch_2_bb.png" width="300"/>
</p>

*Figure 2: Schematic of the electronic sketch.*

Step by step guide to connect everything (using a breadboard):

1. solder the potentiometer LM2596 to the connector for the power supply and the other end to cables

2. connect the potentiometer out+ in one line in the breadboard, connect the out- to another line (must be different lines)

3. connect the ground of the arduino to the same line as the out-

4. Connect each motor to the breadboard as follows : red wire goes to out+, brown wire goes to out- and yellow wire is used for later

5. connect the yellow wire of each motor to the arduino on the pin 3 5 9 and 11, each pin correspond to a finger in increasing order (see schematics)

6. You're done !

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SOFTWARE -->
## Software
We are building a Next.js App. 

We need to have two terminals to run the frontend (client end) and the backend (server end).

### Frontend
The frontend part is the client of the website, written in the TypeScript programming language.


#### Requirements
To run the frontend, please make sure you are in the `frontend` folder, please run the following command if not: 
```
cd .\frontend\
```
then 
```
npm install
```

If you have encountered the problem of `concurrently "npm run dev:next" "npm run dev:ws"`, please run:
```
npm install concurrently --save-dev
```

#### Run
```
npm run dev
```

#### Output
You will reach the welcome page
![Dashboard welcome page](./photos/Dashboard_welcome_page.png)

Now, we can record a piece after clicking on the "Record" blue button to record what we play, then stop recording by clicking on the "Recording ..." grey button, and then save the file.
We can also play songs, which are MIDI files, by clicking on "Play MIDI File" button after selecting a file with the "Select a file" button.



### Backend
The backend is made of a Flask server. It exposes the following functionalities to the WebApp: play a recording on the glove, start to record keypresses from the midi device and list existing recordings. The server listens for incoming HTTP requests. If the request corresponds to one of the two actions: play and record, the server schedules its execution by registering a new task intent in the job queue. A consumer thread periodically pulls the queue for new jobs. Below is the system architecture of the backend.

<img src="./photos/backend_architecture.png" alt="backend architecture" width="100%"/>

#### Requirements

You will need python3 and pip3 to be installed on your system to run the backend.

The first step is to create a python virtual environment within `./backend`:
```
cd backend
python3 -m venv venv
```

Enable the virtual environment (Windows):
```
.\venv\Scripts\activate.bat
```

Enable the virtual environment (Mac and Linux):
```
source ./venv/bin/activate
```

Install the project dependencies:
```
pip3 install -r requirements.txt
```

#### Run

Make sure the Python virtual environment is enabled.

Then you can run the backend server with:
```
python3 ./src/main.py
```

### MIDI Interpreter

For the MIDI Interpreter, we used a python library called Mido to read and play the midifile live.
The MIDI Interpreter class has 6 main functions :

  1. __init__ : The starting point of the class, it opens the serial port and setup everything that has been given to it

  2. __write_read(x)__ : This is the function responsible for communicating with the arduino, both writing to the Serial port and reading from it.

  3. set_filename(x)__ : This function is used to switch midifile dynamically without restarting everything

  4. __preprocess()__ : This function looks through the midifile and make a list of playable note based on the amount of finger we want to play with, it takes the first note played as a base and uses a bound to reject note that a too far away from it (we can't play with one hand across 2 octaves). Once the file is over or if we have enough note to play, it returns.

  5. __interpret()__ : This function is the actual function responsible for playing the midifile, it takes the midifile currently opened in the class and the list of note to play and sends the appropriate message to the arduino to rotate the motor in the right direction.

  6. __play()__ : This function executes all sub-functions required to play a midifile.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Problems
One of the main challenges in constructing the exoskeleton is determining the correct cable length. We experienced numerous iterations of cutting, soldering, and covering cables before achieving the proper lengths. Incorrect cable lengths prevent effective force transfer from the motors throughout the design, resulting in inadequate finger movement. It's crucial to adjust the cable length to fit the smallest potential user, as it can still be accommodated by larger users with closer placement on the hand.

Another significant issue is that the force is generated by pushing the cables rather than pulling them from the bottom. This makes the cables more susceptible to bending, which posed a considerable problem in our project. Although it may seem repetitive, the efforts to mitigate this issue are essential. The device is secured to the board with elastics that generate force towards the cable covers, and these measures are not redundant. The cables require multiple rigid components to prevent bending and ensure proper finger movement.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- POSSIBLE IMPROVEMENTS & EXTENSIONS -->
## Possible Improvements & Extensions

### Hardware
Possible improvements for the hardware should include adding control for the thumb. This addition is more complex and requires a different approach compared to the finger attachments. 

To incorporate this feature, adjustments are needed in the initial design. Specifically, the wrist and palm stabilizing elements must be modified to accommodate a fifth cable, as there is currently no space for it. However, the motor fixation plate and electronics are already designed to support five motors, so no modifications are needed for these components.

### Software
The front-end web developer has developed the following screens:

Dashboard page:
![frontendDone1](./photos/frontendDone1.png)

My_Files page:
![frontendDone2](./photos/frontendDone2.png)

In the future, we will develop the Computer Vision part. So far, we have the fundamental part of Computer Vision which can track the hand.
There is also a piano visualizer that will be combined with the MIDI interpreter and the backend.

There is the My_Files page where the front-end and the back-end developers will combine the two ends. The current version of the My_Files page can see MIDI file information in detail such as the file name, the last used time, and the length. We can select and deselect MIDI files as well. In addition, we can search a file and sort the files. When the client (frontend) and the server (backend) communicate between themselves with websockets, we will be able to upload files from our computer, play and delete the existing MIDI files on the My_Files page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/badge/CONTRIBUTORS-6-brightgreen?style=for-the-badge 
[contributors-url]: https://github.com/epfl-cs358/2024sp-exoskeleton/graphs/contributors
[license-shield]: https://img.shields.io/badge/LICENSE-MIT-brightyellow?style=for-the-badge
[license-url]: https://github.com/epfl-cs358/2024sp-exoskeleton/blob/main/LICENSE


[React.js]: https://img.shields.io/badge/React-black?logo=react
[React-url]: https://reactjs.org/
[Python.org]: https://img.shields.io/badge/Python-brightgreeen?style=flat&logo=python&logoColor=FFE873&color=306998
[Python-url]: https://www.python.org/
[Flask.com]: https://img.shields.io/badge/Flask-black?style=plastic&logo=flask&color=%2361dafb
[Flask-url]: https://flask.palletsprojects.com/en/3.0.x/
[Cpp.org]: https://img.shields.io/badge/C%2B%2B-blue?logo=cplusplus
[Cpp-url]: https://isocpp.org/
