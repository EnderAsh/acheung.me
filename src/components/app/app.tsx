import "./app.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../react-tabs/react-tabs.scss";
import { Card } from "../card/card";
import "../card/card.scss";
import { AnimatedImage, Image } from "../image/image";
import "../image/image.scss";
//#region Image Imports
import ResumePdf from "../../images/Ashley Cheung Resume.pdf";
import DdrImg1 from "../../images/ddr_1.png";
import DdrImg2 from "../../images/ddr_2.png";
import DdrImg3 from "../../images/ddr_3.png";
import DdrImg4 from "../../images/ddr_4.jpg";
import DdrImg5 from "../../images/ddr_5.jpg";
import DdrImg6 from "../../images/ddr_6.jpg";
import ClockImg1 from "../../images/clock_1.jpg";
import ClockImg2 from "../../images/clock_2.jpg";
import ClockImg3 from "../../images/clock_3.jpg";
import ClockImg4 from "../../images/clock_4.jpg";
import LaptopHolderImg from "../../images/laptopholder_1.jpg";
import HotDogImg from "../../images/hotdog_1.jpg";
import LightSwitchImg from "../../images/lightswitch_1.webm";
import FlowerImg1 from "../../images/flowers_1.jpg";
import FlowerImg2 from "../../images/flowers_2.jpg";
import RobotImg1 from "../../images/robotics_1.png";
import RobotImg2 from "../../images/robotics_2.png";
import PencilImg1 from "../../images/pencilholder_1.jpg";
import PencilImg2 from "../../images/pencilholder_2.jpg";
import HeartImg1 from "../../images/heart_1.jpg";
import HeartImg2 from "../../images/heart_2.jpg";
import HeadphoneImg1 from "../../images/hh_1.jpg";
import HeadphoneImg2 from "../../images/hh_2.jpg";
import HeadphoneImg3 from "../../images/hh_3.jpg";
import HeadphoneImg4 from "../../images/hh_4.jpg";
import HeadphoneImg5 from "../../images/hh_5.jpg";
import HeadphoneImg6 from "../../images/hh_6.jpg";
import HeadphoneImg7 from "../../images/hh_7.jpg";
import UndertaleImg1 from "../../images/undertale_1.jpg";
import TrebuchetImg1 from "../../images/trebuchet_1.jpg";
import FerrisImg1 from "../../images/ferriswheel_1.webm";
import FerrisImg2 from "../../images/ferriswheel_2.jpg";
import FerrisImg3 from "../../images/ferriswheel_3.jpg";
import FerrisImg4 from "../../images/ferriswheel_4.png";
import FerrisImg5 from "../../images/ferriswheel_5.jpg";
import EiffelImg1 from "../../images/eiffel_tower_1.jpg";
import EiffelImg2 from "../../images/eiffel_tower_2.jpg";
import NodesImg1 from "../../images/nodes_1.jpg";
import NodesImg2 from "../../images/nodes_2.jpg";
import StringArtImg1 from "../../images/stringart_1.jpg";
import StringArtImg2 from "../../images/stringart_2.png";
import StringArtImg3 from "../../images/stringart_3.jpg";
import StringArtImg4 from "../../images/stringart_4.jpg";
import StringArtImg5 from "../../images/stringart_5.jpg";
import ToteBagImg1 from "../../images/totebag_1.jpg";
import EmbroideryImg1 from "../../images/embroidery_1.jpg";
import EmbroideryImg2 from "../../images/embroidery_2.jpg";
import ChestImg1 from "../../images/chest_1.jpg";
import ChestImg2 from "../../images/chest_2.jpeg";
import ChestImg3 from "../../images/chest_3.jpeg";
import ChestImg4 from "../../images/chest_4.jpeg";
import ChestImg5 from "../../images/chest_5.png";
import CncPuzzleImg1 from "../../images/cncpuzzle_1.jpg";
import CncPuzzleImg2 from "../../images/cncpuzzle_2.png";
import HODImg1 from "../../images/hod_1.jpg";
import HODImg2 from "../../images/hod_2.jpg";
import OrganizerImg1 from "../../images/organizer_1.jpg";
import OrganizerImg2 from "../../images/organizer_2.jpg";
import SculptureImg1 from "../../images/sculpture_1.webm";
import SculptureImg2 from "../../images/sculpture_2.png";
import ClinicImg1 from "../../images/clinic_1.webm";
import ClinicImg2 from "../../images/clinic_2.jpg";
import ClinicImg3 from "../../images/clinic_3.jpg";
import ClinicImg4 from "../../images/clinic_4.jpg";
import ClinicImg5 from "../../images/clinic_5.webm";
import ClinicImg6 from "../../images/clinic_6.jpg";
//#endregion

function App() {
  return (
    <div className="portfolio">
      <h1 className="portfolio__header">Ashley Cheung's Portfolio</h1>
      <Tabs>
        <TabList>
          {/*@ts-ignore*/}
          <Tab style={{ "--bg-color": "lightblue" }}>Home</Tab>
          {/*@ts-ignore*/}
          <Tab style={{ "--bg-color": "palegreen" }}>Resume</Tab>
          {/*@ts-ignore*/}
          <Tab style={{ "--bg-color": "lightyellow" }}>Contact</Tab>
        </TabList>

        <TabPanel>
          <div className="tab__home">
            <h2>My Projects</h2>
            <div className="card-grid">
              <Card
                style={{ gridArea: "clinic" }}
                variant="large"
                name="Amazon Lab126 Autonomous Robot"
                date="September 2021-May 2022"
                images={[
                  <AnimatedImage
                    key="clinicimg1"
                    src={ClinicImg1}
                    caption="Demo of robot localizing and navigating autonomously (sped up)"
                  />,
                  <Image
                    key="clinicimg2"
                    src={ClinicImg2}
                    caption="Robot equipped with omnidirectional mecanum wheels"
                  />,
                  <Image
                    key="clinicimg3"
                    src={ClinicImg3}
                    caption="Internals of robot"
                  />,
                  <Image
                    key="clinicimg4"
                    src={ClinicImg4}
                    caption="Mockup of mannequin weight to test stability"
                  />,
                  <AnimatedImage
                    key="clinicimg5"
                    src={ClinicImg5}
                    caption="SolidWorks simulation of mannequin to test stability"
                  />,
                  <Image
                    key="clinicimg6"
                    src={ClinicImg6}
                    caption="AprilTag used for camera based localization"
                  />,
                ]}
                details="As my junior year capstone project, I and a team of four other students are developing an
                autonomous robotic solution to take repetitive audio data measurements. The robot uses its
                omnidirectional wheels to navigate and localize itself within a household environment after being
                given a LiDAR constructed map of the room. Ultimately, two robots will operate simultaneously
                in a room, where one would hold a speaker and another would hold a microphone. Together,
                they will visit every combination of positions in a grid, taking audio room impulse response data
                at each position. An adjustable mount is also being designed to hold a variety of equipment,
                including a mannequin."
              />
              <Card
                style={{ gridArea: "sculpture" }}
                variant="small-2pic"
                name="Kinetic Sculpture"
                date="March 2022"
                images={[
                  <AnimatedImage
                    key="sculptureimg1"
                    src={SculptureImg1}
                    caption="Finished product"
                  />,
                  <Image
                    key="sculptureimg2"
                    src={SculptureImg2}
                    caption="SolidWorks model of contraption"
                  />,
                ]}
                details="As part of my mechanical design class, I worked with a team of 4 to create this machine that
                plays the xylophone when powered. The user turns a crank, which is geared up to drive a lead
                screw to translate the keys. The same input rotation is used to swing a mallet up and down so it
                strikes the keys as they pass by below. The purpose of this assignment was to gain familiarity
                with belts, pulleys, and lead screws."
              />
              <Card
                style={{ gridArea: "organizer" }}
                variant="small-2pic"
                name="Embroidery Organizer"
                date="March 2022"
                images={[
                  <Image
                    key="organizerimg1"
                    src={OrganizerImg1}
                    caption="Finished product"
                  />,
                  <Image
                    key="organizerimg2"
                    src={OrganizerImg2}
                    caption="Spool made from a rejected laser cut project"
                  />,
                ]}
                details="This drawer of assorted embroidery was tangled beyond usability. I designed and laser cut
                embroidery holders out of scrap wood, wrapped up each color, created a grid insert for the
                drawer and organized them by color so that users of the space would be able to make use of
                our embroidery floss."
              />
              <Card
                style={{ gridArea: "hod" }}
                variant="small-2pic"
                name="House of Desires Set"
                date="Oct-Nov 2021"
                images={[
                  <Image
                    key="hodimg1"
                    src={HODImg1}
                    caption="Finished product"
                  />,
                  <Image
                    key="hodimg2"
                    src={HODImg2}
                    caption="Arches in progress"
                  />,
                ]}
                details="Working on a team of 5-6, I assisted in the building and painting of this set at Pomona College's
                production of House of Desires. Elements that I worked on were the arches, flower boxes,
                plaques, doors, and miscellaneous decorations."
              />
              <Card
                style={{ gridArea: "cnc-puzzle" }}
                variant="small-2pic"
                name="CNC Machine Puzzle"
                date="February 2022"
                images={[
                  <Image
                    key="cncpuzzleimg1"
                    src={CncPuzzleImg1}
                    caption="Finished product"
                  />,
                  <Image
                    key="cncpuzzleimg2"
                    src={CncPuzzleImg2}
                    caption="PartWorks path"
                  />,
                ]}
                details="This puzzle was a tutorial for using the wood shop's ShopBot, a CNC milling machine. Six
                pieces were cut out of a sheet of wood, and they are able to be assembled together into a cube.
                I designed SolidWorks models of the parts to create outlines that could be imported into
                PartWorks. From there, a path was generated that included tabs and ramping as the bit plunged
                into and out of the wood. Careful consideration was given to the islands and the diameter of the
                cutting bit."
              />
              <Card
                style={{ gridArea: "chest" }}
                variant="large"
                name="Treasure Chest"
                date="Nov-Dec 2021"
                link="/dead-mans-chest"
                images={[
                  <Image
                    key="chestimg1"
                    src={ChestImg1}
                    caption="Finished product"
                  />,
                  <Image
                    key="chestimg2"
                    src={ChestImg2}
                    caption="Lid pieces"
                  />,
                  <Image
                    key="chestimg3"
                    src={ChestImg3}
                    caption="Sanded lid"
                  />,
                  <Image
                    key="chestimg4"
                    src={ChestImg4}
                    caption="Details done"
                  />,
                  <Image
                    key="chestimg5"
                    src={ChestImg5}
                    caption="Starting second coat of paint"
                  />,
                ]}
                details="Pirates of the Caribbean prop replica of Davy Jones' chest. I'm still
                working on designing and prototyping the mechanical elements that make parts of
                the chest move when you open and close it. I've completed one pass of what the
                outside will look like, including the construction process and the paint work in
                the context of how you would make a theatre prop. I learned a lot while doing this
                and I hope that all the mistakes I made will help make the next versions even better!"
              />
              <Card
                style={{ gridArea: "embroidery" }}
                variant="small-2pic"
                name="Embroidery"
                date="September 2021"
                images={[
                  <Image
                    key="embroideryimg1"
                    src={EmbroideryImg1}
                    caption="Finished product"
                  />,
                  <Image
                    key="embroideryimg2"
                    src={EmbroideryImg2}
                    caption="Cleaned up inside of apron"
                  />,
                ]}
                details="Chain stitch and stem stitch combination to customize apron. In our new
                makerspace at Harvey Mudd College, student employees are encouraged to decorate
                their uniform (denim aprons) with their name. Although we have several embroidery
                machines, I decided that I would prefer to hand stitch my name as it could be more
                customizable and visually interesting. I bought a skein of pretty multi-colored
                embroidery floss and first did a chain stitch. Then, to fill in the holes and lock
                in the threads in the back, I went back over my work with a stem stitch."
              />
              <Card
                style={{ gridArea: "tote-bag" }}
                variant="small-1pic"
                name="Tote bag"
                date="September 2021"
                images={[
                  <Image
                    key="totebagimg1"
                    src={ToteBagImg1}
                    caption="Finished product"
                  />,
                ]}
                details="Two-compartment original tote bag. I wanted to experiment with making
                my own patterns and decided to sew a tote bag with a divider in the middle.
                I hid as many raw edges as possible, but the goal of this project was rapid
                prototyping, not perfection. If the fabric was stiffer, it would hold its shape
                better, but as it stands now, the bag is a little floppy if nothing is in it."
              />
              <Card
                style={{ gridArea: "string-art" }}
                variant="large"
                name="String Art"
                date="August 2021"
                images={[
                  <Image
                    key="stringartimg1"
                    src={StringArtImg1}
                    caption="Finished product"
                  />,
                  <Image
                    key="stringartimg2"
                    src={StringArtImg2}
                    caption="Mockup in Adobe Illustrator"
                  />,
                  <Image
                    key="stringartimg3"
                    src={StringArtImg3}
                    caption="Paper template taped to wood plaque"
                  />,
                  <Image
                    key="stringartimg4"
                    src={StringArtImg4}
                    caption="First layer"
                  />,
                  <Image
                    key="stringartimg5"
                    src={StringArtImg5}
                    caption="Second layer"
                  />,
                ]}
                details="Piece of wall art that evokes the image of a leaf made of a wood
                plaque, tacks, and yarn. I planned out the design in Adobe Illustrator,
                trying to take advantage of how straight lines can form curves when angled
                against each other. In order to accurately drill holes and hammer in nails,
                I printed and taped a template based on my digital design. I also numbered
                the nails and created a list of instructions on how to string the yarn
                so the design was easier to execute. The border on the edges both adds
                a finished look to the piece and locks down the loose ends from the
                previous two layers. "
              />
              <Card
                style={{ gridArea: "ddr" }}
                variant="large"
                name="DDR"
                date="2019-Present"
                images={[
                  <Image
                    key="ddrimg1"
                    src={DdrImg1}
                    caption="Artistic rendering of step pad"
                  />,
                  <Image key="ddrimg2" src={DdrImg2} caption="Model of cab" />,
                  <Image
                    key="ddrimg3"
                    src={DdrImg3}
                    caption="Drawings of panels"
                  />,
                  <Image
                    key="ddrimg4"
                    src={DdrImg4}
                    caption="Step pad prototype"
                  />,
                  <Image
                    key="ddrimg5"
                    src={DdrImg5}
                    caption="Pad actuation prototype"
                  />,
                  <Image key="ddrimg6" src={DdrImg6} caption="Pad drawing" />,
                ]}
                details="Student-made Dance Dance Revolution machine, including cabinet and 2 dance pads.
                This project is currently in progress. I am leading the building and mechanical engineering part,
                which includes planning and constructing the cab and the pad.
                Currently: we have a prototype of the pad, which is made of 12 identical parts that slot together.
                Still planning the cab, but current plans can be seen in the images."
              />
              <Card
                style={{ gridArea: "clock" }}
                variant="large"
                name="Clock"
                date="Aug 2020"
                images={[
                  <Image
                    key="clockimg1"
                    src={ClockImg1}
                    caption="Finished product"
                  />,
                  <Image
                    key="clockimg2"
                    src={ClockImg2}
                    caption="Arduino held on back of clock"
                  />,
                  <Image
                    key="clockimg3"
                    src={ClockImg3}
                    caption="Paper to diffuse and dampen light"
                  />,
                  <Image
                    key="clockimg4"
                    src={ClockImg4}
                    caption="Back of clock"
                  />,
                ]}
                details="LED Matrix clock, with 3D printed frame and various hardware.
                I designed in SolidWorks and printed the frame with my Prusa for an 8x32 LED matrix.
                It's powered by an arduino. I ran into a lot of problems with the clock being too bright,
                so I added a piece of paper between the matrix and the holes on the outside."
              />
              <Card
                style={{ gridArea: "laptop-holder" }}
                variant="small-1pic"
                name="Laptop Holder"
                date="Jul 2020"
                images={[
                  <Image
                    src={LaptopHolderImg}
                    caption="Finished product, mounted on wall"
                  />,
                ]}
                details="Laptop holder with capacity for 2 Macbook Airs that attaches to wall.
                I designed and 3D printed these 3 brackets, ran into some issues with bridging and supports,
                but overall it works fine. I added 45 degree supports just to make sure it would never fail
                and drop my computer."
              />
              <Card
                style={{ gridArea: "hotdog" }}
                variant="small-1pic"
                name="Hot Dog Pillow Pet"
                date="Jan 2020"
                images={[
                  <Image src={HotDogImg} caption="Finished prototype" />,
                ]}
                details="Sewing project that I used to learn how to sew. I always thought it would be funny
                to have a hot dog pillow pet, like the bun folds out and the dog is removable. The yarn would
                be a placeholder for some thicker soft rope, it's supposed to be like ketchup and mustard.
                I was also planning on putting a face or some grill marks on the hot dog. I learned a lot
                about pattern making and how to make stuffed animals."
              />
              <Card
                style={{ gridArea: "light-switch" }}
                variant="large"
                name="Automatic Light Switch"
                date="Aug 2020"
                images={[
                  <AnimatedImage
                    key="lightswitchimg"
                    src={LightSwitchImg}
                    caption="Demonstration of light switch mechanism"
                  />,
                ]}
                details="Voice command operated light switcher. I made this because I was too lazy to get up
                and turn off the lights when I was in bed. It works through my Google Home: I set up a custom
                command through IFTTT and had it send a signal to the Arduino, which turns a servo one way or
                another to turn the lights on or off. I had a few problems with the strength of the servo,
                which was just some random one that I had lying around and then somehow committed myself to
                using that one specifically. But I was able to add some mechanical advantage to make it work."
              />
              <Card
                style={{ gridArea: "flowers" }}
                variant="small-2pic"
                name="Flowers and Vase"
                date="Feb 2020"
                images={[
                  <Image src={FlowerImg1} caption="Finished product" />,
                  <Image
                    src={FlowerImg2}
                    caption="Glue accumulated on petals"
                  />,
                ]}
                details="Handmade vase and epoxy flowers as a gift. I got some random craft wood from Michaels
                and turned it on the wood lathe to make a mini vase. I sanded it a bit to make it asymmetrical
                (the opening to the vase is slightly lower on one side). I stained it a bit and sprayed it with
                some random sealant I found in the Makerspace. The epoxy flowers were made of some thin wire. I
                bent them into the flower shape with pliers, then dipped them in glue (mod podge). After letting
                that dry, I dipped it in epoxy colored with blue food coloring. Then, I had to come up with some
                convoluted stands to let the flowers dry without the epoxy gathering at the bottom or tips of the
                petals. I made at least twenty, and I was happy with like four."
              />
              <Card
                style={{ gridArea: "robot" }}
                variant="small-2pic"
                name="Robotics"
                date="2017-2019"
                images={[
                  <Image
                    src={RobotImg1}
                    caption="Robot for 2017-2018 season"
                  />,
                  <Image
                    src={RobotImg2}
                    caption="Earlier version of '17-'18 robot"
                  />,
                ]}
                details="First Robotics projects. I led my high school First Robotics team, so here are a collection
                of robots from that time. Our team was pretty small and pretty new, so I did a lot of the work in
                terms of designing and building the robot. These robots did tasks like stacking blocks, and
                collecting/depositing balls."
              />
              <Card
                style={{ gridArea: "pencil-holder" }}
                variant="small-2pic"
                name="Pencil Holder"
                date="Apr 2017"
                images={[
                  <Image src={PencilImg1} caption="Finished product" />,
                  <Image
                    src={PencilImg2}
                    caption="Unstained work in progress"
                  />,
                ]}
                details="Laser-cut plywood pencil holder. This was one of my bigger laser cutter projects, made completely
                from 1/8&quot; plywood from JoAnn Fabric. I designed it all in Illusrtator and cut it out at my high school's
                laser cutter. I used a nodes method (one of my other projects - see below) where the parts that fit together
                were a bit too tight so you'd have to force them in and they would snap fit together. However, not all the
                fits were that tight so I ended up using a bit of wood glue on some parts. the inserts that divide the tall
                part and the short part into different sections are removable. There's also a ruler holder on the front, which
                incidentally also decided for me how long the whole thing was going to be (1 foot)."
              />
              <Card
                style={{ gridArea: "heart" }}
                variant="small-2pic"
                name="Moth/Heart Epoxy Art"
                date="Jun 2018"
                images={[
                  <Image src={HeartImg1} caption="Finished product" />,
                  <Image src={HeartImg2} caption="Clamped to let epoxy cure" />,
                ]}
                details="School project about a novel. It was laser cut and laser etched to cut out some parts of a
                tape-covered plywood sheet. I used the tape to mask the black paint and the white paint, and I poured blue
                epoxy into the hole. I certainly had some leakage problems and some bleeding problems, but it turned out okay
                in the end. I wish I sanded it a bit more."
              />
              <Card
                style={{ gridArea: "hh" }}
                variant="large"
                name="Headphones Holder"
                date="Nov 2017"
                images={[
                  <Image
                    key="headphoneimg1"
                    src={HeadphoneImg1}
                    caption="Finished product"
                  />,
                  <Image
                    key="headphoneimg2"
                    src={HeadphoneImg2}
                    caption="Close up of painted &amp; sanded product"
                  />,
                  <Image
                    key="headphoneimg3"
                    src={HeadphoneImg3}
                    caption="Mini prototype"
                  />,
                  <Image
                    key="headphoneimg4"
                    src={HeadphoneImg4}
                    caption="Primer coat on"
                  />,
                  <Image
                    key="headphoneimg5"
                    src={HeadphoneImg5}
                    caption="Fresh off the 3D printer"
                  />,
                  <Image
                    key="headphoneimg6"
                    src={HeadphoneImg6}
                    caption="Fresh coat of paint"
                  />,
                  <Image
                    key="headphoneimg7"
                    src={HeadphoneImg7}
                    caption="Epoxy to cover layer lines"
                  />,
                ]}
                details="Under-desk headphones holder. I wanted something to hang my headphones on that wouldn't take up any
                of my desk space. I designed it in Rhino, printed it at my school's fancy 3D printer, and primed/painted it.
                I also made a smaller version to test paint on. I must have done at least 8 coats of primer and paint,
                because I'd keep sanding it to try to get rid of the layer lines. There's a hole in the back to route my
                wires through, and there are indents in the top to fit command strips (I didn't want to screw into my desk).
                It served me well for years, though the paint did rub off after a while."
              />
              <Card
                style={{ gridArea: "undertale" }}
                variant="small-1pic"
                name="Undertale Charms"
                date="Jun 2018"
                images={[
                  <Image src={UndertaleImg1} caption="Finished charms" />,
                ]}
                details='Acrylic painted Undertale charms. I made these on the laser cutter, and masked them with the paper
                that came on the 1/8" acrylic. I spray painted them black/red, and then peeled off the masking.
                However, there was often spillover despite the masking, and I had to rub it off with Goof-off, but then that
                left a weird white residue on the acrylic. Only a few of them survived unscathed. I sent these to random people
                on Reddit, about 12 packages in total.'
              />
              <Card
                style={{ gridArea: "trebuchet" }}
                variant="small-1pic"
                name="Trebuchet"
                date="Nov 2018"
                images={[
                  <Image src={TrebuchetImg1} caption="Finished product" />,
                ]}
                details="Wooden laser-cut trebuchet, for my brother's birthday. It has a basket to put something heavy in, and
                a little wheel that could wind up a string. Put something small in the basket, release the string, and off it
                goes. I gave it to him unassembled, as a challenge."
              />
              <Card
                style={{ gridArea: "ferris-wheel" }}
                variant="large"
                name="Ferris Wheel"
                date="Oct 2017"
                images={[
                  <AnimatedImage
                    key="ferrisimg1"
                    src={FerrisImg1}
                    caption="Ferris wheel in motion"
                  />,
                  <Image
                    key="ferrisimg2"
                    src={FerrisImg2}
                    caption="Paper cutout of locking mechanism"
                  />,
                  <Image
                    key="ferrisimg3"
                    src={FerrisImg3}
                    caption="Drawing of design"
                  />,
                  <Image
                    key="ferrisimg4"
                    src={FerrisImg4}
                    caption="Parts to laser cut for one car"
                  />,
                  <Image
                    key="ferrisimg5"
                    src={FerrisImg5}
                    caption="Finished product"
                  />,
                ]}
                details='My biggest laser cutter project, with all the colors of acrylic available. It was completely made of
                1/8" acrylic, no glue, all snap fits. The cars were the hardest part - I wanted them curved but obviously the
                laser cutter only makes flat parts. I tried a lot of different things - started with several simple
                interlocking layers, tried out some kerfing, and finally ended up on a complex 8-part piece with super thin
                parts that snapped all the time, but when it worked, it was so satisfying to snap together.'
              />
              <Card
                style={{ gridArea: "eiffel-tower" }}
                variant="small-2pic"
                name="Eiffel Tower"
                date="Jan 2017"
                images={[
                  <Image src={EiffelImg1} caption="Finished product" />,
                  <Image src={EiffelImg2} caption="Disassembled pieces" />,
                ]}
                details="Laser cut acrylic Eiffel Tower. One of my first laser cutting projects, making a 3D shape out of
                cut out 2D pieces. I didn't use any 3D modeling software to visualize it, I just went for it. The stand is
                two clear pieces that slot together, and the ten blue pieces stack on top of the stand."
              />
              <Card
                style={{ gridArea: "nodes" }}
                variant="small-2pic"
                name="Nodes"
                date="2017"
                images={[
                  <Image src={NodesImg1} caption="Pile of test pieces" />,
                  <Image src={NodesImg2} caption="Sweet spot at 1/140 inch" />,
                ]}
                details='Laser cutter calibration test with this specific type of 1/8" plywood. The idea is that the rounded
                bits on the pieces make it so they snap fit together. The number engraved on the pieces is the width of that
                rounded bit. For this wood at some specific settings, it was 1/140" that would make a nice snap fit.'
              />
            </div>
            <br /> <br />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="tab__resume">
            <iframe title="Resume" src={ResumePdf} style={{ flexGrow: 1 }} />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="tab__contact">
            <h2>Ashley Cheung</h2>
            <h2>ashley3120@gmail.com</h2>
            <h2>240-328-3344</h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
