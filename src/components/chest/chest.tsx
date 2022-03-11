import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";
import "../chest/chest.scss";
import BaseBottomPdf from "../chest/files/base_bottom.pdf";
import BaseFrontBackPdf from "../chest/files/base_front_back.pdf";
import BaseLeftRightPdf from "../chest/files/base_left_right.pdf";
import MiddlePdf from "../chest/files/middle.pdf";
import TopSlatsPdf from "../chest/files/top_slats.pdf";
import { faHome } from "@fortawesome/free-solid-svg-icons";
/* eslint-disable jsx-a11y/alt-text */

function Chest() {
  return (
    <div id="chest-page">
      <Helmet>
        <style>{"body { background-color: rgb(35, 161, 142); }"}</style>
      </Helmet>
      <h1>Dead Man's Chest</h1>
      <a href="/" className="home-button">
        <FontAwesomeIcon icon={faHome} />
      </a>
      <div className="flexgrid-container">
        <div className="row">
          <div className="flex-item-1">
            <p>
              For my final project in my Theatre Crafts class, I made a theatre
              prop replica of Davy Jones' chest from the movie Pirates of the
              Caribbean 2: Dead Man's Chest.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="flex-item-1">
            <img src="https://i.imgur.com/oVK0Dmn.jpg" />
          </div>
        </div>
      </div>
      <br /> <br />
      <h2>Design</h2>
      <div className="flexgrid-container">
        <div className="row">
          <div className="flex-item-1">
            <p>
              Since the geometry of the chest is a little complex, I modeled it
              in Solidworks before building anything. I made two models - one
              for the overall look and aesthetic, and one to figure out the
              anlges and measurements of the actual cuts that I'll make.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="flex-item-3">
            <p>
              The aesthetic model was based off of the overall model that I had
              for the chest before starting this project. I tweaked it until it
              looked like the reference picture that I was using.
            </p>
          </div>
          <div className="flex-item-3">
            <img src="https://i.imgur.com/Ud8owSL.png" />
          </div>
          <div className="flex-item-3">
            <img src="https://i.imgur.com/amNnaDT.png" />
          </div>
        </div>

        <div className="row">
          <div className="flex-item-2">
            <img src="https://i.imgur.com/OCEPbsa.png" />
          </div>
          <div className="flex-item-2">
            <p>
              This construction model was how I knew the dimensions of each of
              the parts. It fit perfectly together on the computer so I knew it
              would work in real life. It looks messed up because I messed up
              construction halfway through and had to adjust the model to fit.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="flex-item-2">
            <p>
              To figure out the dimensions of each slat in the lid, I just drew
              it all out in a Solidworks sketch, added the relations and let the
              math work itself out. I think 5 slats is a good number - you only
              need to sand off about 1/8 inch of wood. There is a gap between
              each slat so that when you have sanded down to the point where you
              can't see any gap, then the lid is to spec in that place. Note
              that the first and last slat are different than the 3 middle ones.
            </p>
          </div>
          <div className="flex-item-2">
            <img src="https://i.imgur.com/74XlCpB.png" />
          </div>
        </div>

        <div className="row">
          <div className="flex-item-2">
            <img src="https://i.imgur.com/OXO4yEs.png" />
          </div>
          <div className="flex-item-2">
            <p>
              This is the model for the middle part of the chest, assuming that
              each deadbolt has a square cross section with a side length of
              0.625". There is an offset around the outside but it is flush on
              the inside.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="flex-item-1">
            <p>
              Here are the drawings that I made from the solidworks parts to use
              for actually constructing the chest:
            </p>
            <ul>
              <li>
                <a
                  href={BaseFrontBackPdf}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Chest bottom front/back drawing
                </a>
              </li>
              <li>
                <a
                  href={BaseLeftRightPdf}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Chest bottom left/right drawing
                </a>
              </li>
              <li>
                <a
                  href={BaseBottomPdf}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  Chest bottom drawing
                </a>
              </li>
              <li>
                <a href={MiddlePdf} target="_blank" rel="noreferrer noopener">
                  Middle piece drawing
                </a>
              </li>
              <li>
                <a href={TopSlatsPdf} target="_blank" rel="noreferrer noopener">
                  Lid drawing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br /> <br />
      <h2>Construction</h2>
      <div className="flexgrid-container">
        <div className="row">
          <div className="flex-item-1">
            <p>
              I constructed this prop in Pomona College's theatre department's
              scene shop. I had basic knowledge of the tools before starting but
              this was the first time I had worked with this many angles. Also,
              I felt like the shop was more geared towards larger things, so it
              was a little awkward at times to cut the small parts.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="flex-item-2">
            <table>
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1/2" MDF</td>
                  <td>Chest bottom, lid endcaps, middle blocks</td>
                </tr>
                <tr>
                  <td>1x3</td>
                  <td>Lid slats</td>
                </tr>
                <tr>
                  <td>Wood glue</td>
                  <td>Everything</td>
                </tr>
                <tr>
                  <td>Staples</td>
                  <td>Everything</td>
                </tr>
                <tr>
                  <td>Chipboard</td>
                  <td>Details</td>
                </tr>
                <tr>
                  <td>1/16" wood</td>
                  <td>Details</td>
                </tr>
                <tr>
                  <td>1/8" wood</td>
                  <td>Details</td>
                </tr>
                <tr>
                  <td>Tacky glue</td>
                  <td>Details</td>
                </tr>
                <tr>
                  <td>Air dry clay</td>
                  <td>Details</td>
                </tr>
                <tr>
                  <td>Hinges</td>
                  <td>Lid</td>
                </tr>
                <tr>
                  <td>Handles</td>
                  <td>Chest bottom</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex-item-2">
            <table>
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Table saw</td>
                  <td>Chest bottom, slat angles, middle</td>
                </tr>
                <tr>
                  <td>Radial arm saw</td>
                  <td>Chest bottom, slat lengths</td>
                </tr>
                <tr>
                  <td>Miter saw</td>
                  <td>Bottom side angles</td>
                </tr>
                <tr>
                  <td>Jigsaw</td>
                  <td>Lid endcaps</td>
                </tr>
                <tr>
                  <td>Hand sander</td>
                  <td>Smoothing out lid</td>
                </tr>
                <tr>
                  <td>Laser cutter</td>
                  <td>Surface details</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="flex-item-1">
            Step by step guide to cutting the 5 bottom pieces:
            <ol>
              <li>
                Rip down a long strip of 1/2" MDF to roughly the height of the
                bottom part of the chest (leave extra room for the angles)
              </li>
              <li>
                Set the angle of the table saw to 3 degrees and trim one edge so
                it's angled
              </li>
              <li>
                Using the same angle, trim the other side to spec so the
                resulting cross section is a parallelogram
              </li>
              <li>
                Using a radial arm saw or miter saw, chop the strip into the
                four side pieces (leave extra room)
              </li>
              <li>
                Set the miter of the miter saw to 3 degrees and cut each of the
                four side pieces so they have trapezoidal profiles. Make sure
                you note which side is the outside/inside!
              </li>
            </ol>
          </div>
        </div>

        <div className="row">
          <div className="flex-item-2">
            Glue and staple the four sides together to make a box with no bottom
            or top. Then, roughly cut the bottom shape with the table saw and
            trim it slowly until it just about fits. Every side of the bottom
            will be angled up at 3 degrees.
          </div>
          <div className="flex-item-2">
            <img src="https://i.imgur.com/MXqvl1V.jpg" />
          </div>
        </div>

        <div className="row">
          <div className="flex-item-2">
            <img src="https://i.imgur.com/Yo0YpI8.jpg?1" />
          </div>
          <div className="flex-item-2">
            <p>
              Cut out the end caps of the lid, which should be the exact profile
              that you want the lid to be. The lid isn't a half circle, it's
              "minor segment" of a circle, so the center of the circle will be
              off the piece if you use one of the straight sides of the piece as
              part of the shape. I traced it out with a compass but it might
              have been better if you printed out the shape and traced it.
            </p>
            <p>
              I cut it out with a jigsaw, you could use a bandsaw if you feel
              confident. I sanded it a lot because my cut wasn't very neat. Make
              sure the line is dark so you can see it while you cut it.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="flex-item-2">
            To make the basic shape of the lid:
            <ol>
              <li>
                Cut several lengths of 1x3 to spec (make extra in case you mess
                up later)
              </li>
              <li>
                Rip the 1x3 thinner on the table saw (good luck - it was kind of
                thin)
              </li>
              <li>
                Set the appropriate angles on the table saw and cut the angled
                sides.
              </li>
              <li>
                Working with the lid upside down, tape the underside of each
                piece together, making sure that the bottom edges are lining up
              </li>
            </ol>
          </div>
          <div className="flex-item-2">
            <img src="https://i.imgur.com/QgMgSyI.jpg" />
          </div>
        </div>

        <div className="row">
          <div className="flex-item-3">
            <img src="https://i.imgur.com/pjBzFXZ.jpg" />
          </div>
          <div className="flex-item-3">
            <p>
              When you attach the end caps on, try to force the slats so that
              the place where each slat meets on the top lines up with the outer
              edge of the end cap. At the bottom two edges of the lid, it won't
              exactly match up. The center of each slat should be tangent with
              the end cap. I should have put glue between each slat. I only put
              one staple into each end of each slat, maybe should have put more.
            </p>
          </div>
          <div className="flex-item-3">
            <img src="https://i.imgur.com/IkcbqyJ.jpg" />
          </div>
        </div>

        <div className="row">
          <div className="flex-item-2">
            <img src="https://i.imgur.com/UOSdgFZ.jpg?1" />
          </div>
          <div className="flex-item-2">
            <p>
              Use a hand sander to smooth out the slats. Theoretically, every
              square inch of the slat should be touched by the sander at some
              point. The only spot that shouldn't need to change at all is a
              line running through the surface of the center of each slat, where
              it is perfectly tangent with the end cap. You shouldn't have to
              sand the end cap at all either. I basically just sanded it and
              felt it until it didn't feel too lumpy anymore.
            </p>
          </div>
        </div>
      </div>
      <br /> <br />
      <h2>Detailing</h2>
      <div className="flexgrid-container">
        <div className="row">
          <div className="flex-item-2">
            <p>
              Clearly I didn't take that many pictures of this, but essentially
              I just spent like 5 hours cutting and gluing thin strips of
              cardboard and wood onto the surface of the chest. For the lid, the
              strips on top needed to be curved. Cutting horizontal relief cuts
              across the strips on the back seemed to help it kink less. I used
              cardboard for all the curved pieces and for many of the straight
              ones, because you could just trim it to size. I think it would
              have been better to use as much wood as possible and make all the
              dimensions perfect.
            </p>
            <p>
              {" "}
              I also laser cut a top cap for the bottom part of the chest, that
              the middle piece would hit and rest against when the chest is
              closed. In the top cap, I left a gap for the hinges, which was
              like a mortise.
            </p>
            <p>
              {" "}
              The white stuff in the corners is Crayola Model Magic air dry
              clay. I put some tacky glue in the corners a section at a time,
              then got a little strip of clay and pushed it into the corner with
              the end of a small paintbrush. It took around an hour and a half
              to do the whole thing and made my hand hurt by the end. I should
              have gotten a darker color of clay like gray or brown because it
              was really hard to get paint in all the crevices.
            </p>
          </div>
          <div className="flex-item-2">
            <img src="https://i.imgur.com/y6eun0U.jpg" />
          </div>
        </div>
      </div>
      <br /> <br />
      <h2>Hardware</h2>
      <div className="flexgrid-container">
        <div className="row">
          <div className="flex-item-3">
            <img src="https://i.imgur.com/3Lb6nQu.jpg" />
          </div>
          <div className="flex-item-3">
            <img src="https://i.imgur.com/tw2IupO.png" />
          </div>
          <div className="flex-item-3">
            <p>
              Lowe's only had one drop bail handle that I could find, obviously
              it looks very different from what it should be.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="flex-item-3">
            <p>
              I got these hinges on a whim, without researching what they should
              be. The hinges that I got didn't close flush, but they were very
              frictiony which I thought was good because it felt "rusty". Seems
              like I'll have to mortise the hinges.
            </p>
          </div>
          <div className="flex-item-3">
            <img src="https://i.imgur.com/pkJ68Mo.jpg" />
          </div>
          <div className="flex-item-3">
            <img src="https://i.imgur.com/KRl5av6.png" />
          </div>
        </div>
      </div>
      <br /> <br />
      <h2>Paint</h2>
      <div className="flexgrid-container">
        <div className="row">
          <div className="flex-item-3">
            <img src="https://i.imgur.com/sdu7Hw4.jpg?1" />
          </div>
          <div className="flex-item-3">
            <p>
              These were the base coat colors that I settled on. The technique
              basically was get a wet sponge, squeeze it out, and use one side
              of the sponge for each of the two colors. Alternate colors and use
              the sponge to kind of smudge it all together. Try not to mix the
              colors too much or else there's no point to having 2 colors. After
              doing the base coat, it looked almost black (see picture on the
              right).
            </p>
          </div>
          <div className="flex-item-3">
            <img src="https://i.imgur.com/OEtQCCx.png?1" />
          </div>
        </div>

        <div className="row">
          <div className="flex-item-2">
            <img src="https://i.imgur.com/T3ZL7KL.png?1" />
          </div>
          <div className="flex-item-2">
            <p>
              I sponged on a lighter green/blue color (middle of image), which
              was just adding gray to the green color from the base coat. This
              helped a lot and made it a lot more textured. You couldn't really
              tell the difference between the two base colors. I also mixed a
              rusty orange yellow color to make some rust. I watered it down a
              lot and brushed it on bit by bit and smudged it and then wiped off
              the excess with a paper towel.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="flex-item-1">
            <img src="https://i.imgur.com/5zAfCwi.png" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <h2>Takeaways</h2>
      <div className="flexgrid-container">
        <div className="row">
          <div className="flex-item-1">
            Mistakes I made:
            <ul>
              <li>
                I forgot to rip the side piece strip down to spec before cutting
                all the angles, so I cut it with a jigsaw after I already
                assembled it with the bottom, so the dimensions of the top of
                the bottom part was smaller than I wanted it to be - not a whole
                number like I designed. This made everything else slightly off.
              </li>
              <li>
                The base coat colors should have been more distinct and I should
                have tried to not mix them as much.{" "}
              </li>
              <li>Building the middle piece was janky and imprecise</li>
              <li>Wrong color of model magic</li>
              <li>Wrong hinges and handles</li>
              <li>Forgot to paint the bottom of the chest</li>
              <li>There were a few small spots that I missed with the paint</li>
            </ul>
          </div>
        </div>
        <div className="row row-align-stretch">
          <div className="flex-item-2">
            Things I loved:
            <ul>
              <li>The angle of 3 degrees felt great!</li>
              <li>
                The method for creating the rounded lid worked really well
              </li>
              <li>
                I was surprised at how well the math worked out for the lid
                slats
              </li>
              <li>The proportions of the strip details seemed right</li>
              <li>The clay looked good</li>
              <li>The paint looked generally pretty good</li>
              <li>The general size of the chest felt good</li>
              <li>
                I liked how the hinges were frictiony so opening the lid had
                some resistance
              </li>
            </ul>
          </div>
          <div className="flex-item-2">
            Things to remember for next time:
            <ul>
              <li>
                If any piece is wrong, redo it if you have time and materials,
                don't let mistakes carry through
              </li>
              <li>
                Paint the components of the middle piece before putting it
                together - hard to get a paintbrush in those small spaces
              </li>
              <li>
                Also, maybe come up with a different way of creating the middle
                piece. If you decide to do it like I did it here, remember to
                staple it to the lid before completing the sandwich with the
                other side of luon.{" "}
              </li>
              <li>Be bold with the colors!</li>
              <li>
                You'll have to do some tough geometry to make the arch in the
                middle on the front face of the chest. I think you can 3D print
                some of the arched pieces and the keystone in the lid.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chest;
