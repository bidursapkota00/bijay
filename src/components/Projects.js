import proj1 from '../img/proj1.jpg'
import proj2 from '../img/proj2.jpg'
import icon2 from '../img/play.png'

const projects = [
    {
        id: 1,
        category: 'Academic',
        link1: '/SmartGlove.pdf',
        icon2,
        image: proj1,
        title: 'Smart Glove For Sign Language Translation Using Arduino',
        description: <> 
            <br/>
            Communication is the primary tool to exchange any information between people. But it becomes difficult for speech impaired and hearing impaired people to communicate as they use sign language for communication. Also it becomes difficult for normal people to understand sign languages. Smart Glove for Sign Language Translation is a work that aims to present an easy way of communication to speech impaired, hearing impaired people and normal people. This work consists of a glove equipped with sensors which senses different sign language gesture and Bluetooth module is used to transfer the data to commonly used Android phone. Android phone translates these gestures to respective voice, text and image of that particular gesture is also displayed on Android mobile using application.
            <br/>
            <br/>
            Besides, this application also translates voice of user (normal people) into text and text typed by the user into voice and image of that gesture is displayed. There are different types of sign languages which differ from country to country. This work deals with American standard sign language and Nepali sign language.
            <br/>
            <br/>
            In real life, the sign language users mostly use both hands. Thus, this is a prototype work presenting an ease in communication for the speech impaired and hearing impaired people.
            <br/>
            <br/>
            <strong>Keywords—Sign Language Translation, Sensor Based, Communication, Bluetooth module</strong>
        </>
    },
    {
        id: 2,
        category: 'Academic',
        link1: '/VirtualEye.pdf',
        icon2,
        image: proj2,
        title: 'Virtual Eye For Visually Impaired People',
        description: <>
                        <br/>
                        This  paper  is  associated  with  the  development  of  system   to   provide   an   aid   to   visually   impaired   people.   It   involves  an  implementation  of  a  system  which  includes  a  pi  camera for detection and recognition of text from image which is  possible  by  using  tesseract  OCR  library  of  OpenCV  in  Raspberry pi. This helps to convert the picture of desired page taken  by  camera  into  respective  text.  Finally,  this  text  is  converted into speech through headphone using TTS Engine. It also  assists  visually  impaired  people  to  navigate  safely  and  to  avoid  any  accident  possible  due  to  obstacles  that  may  be  encountered   on   their   way.   This   paper   proposes   wearable   equipment that consists of ultrasonic sensors to detect obstacles and  their  distance  from  the  user.  The  principle  used  for  the  detection  of  obstacle  is  similar  to  RADAR  except  ultrasonic  sound wave is used instead of radio wave. This paper describes a  system  to  send  an  emergency  SMS  to  their  guardian  if  the  visually  impaired  people  met  any  emergency  situation.  GPS  Module  is  used  to  extract  current  location  information  and  GSM Module is used to send SMS to guardian. 
                        <br/>
                        <br/>
                        By  the  use  of  text  to  speech  utilization,  navigation  and  emergency  SMS,  it  assists  them  to  read  printed  documents,  avoid   obstructions   while   travelling   and   alert   guardian   at   emergency   situation   through   SMS   and   hence   a   visually   impaired people can feel not being a visual impaired.
                        <br/>
                        <br/>
                       <strong>Keywords—  Read  Printed  Documents,  Obstacle  Detection,  Emergency SMS, Sensor Based.</strong>
                        </>
    },
    {
        id: 3,
        category: 'Field',
        link1: '#',
        icon2,
        image: proj1,
        title: 'Smart Glove For Sign Language Translation Using Arduino'
    },
    {
        id: 4,
        category: 'Field',
        link1: '#',
        icon2,
        image: proj2,
        title: 'Virtual Eye For Visually Impaired People'
    },
]

export default projects
