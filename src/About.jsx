import React, { Fragment } from 'react';

export default function About(props) {
  return (
    <Fragment>
      <div class='about-container'>
        <div class='internal-container'>
          <div class='bio-card'>
            <div class='image-wrapper ib vt ltmg'>
              <img src='./images/josh-beach-smile.jpg' />
            </div>

            <div class='bio-wrapper-wrapper ib vt rtmg'>
              <div class='bio-wrapper'>
                <h2>Josh Knowles</h2>
                <p>Josh Knowles is a violinist, singer/songwriter, and composer based in Boston, MA. Formerly educated at Berklee College of Music, he brings an eclectic array of influences to his work. He has trained from the age of four as a classical violinist and is continually striving to fuse his traditional foundation with a myriad of contemporary styles.</p>

                <p>Knowles is also a musical artist and poet for Cirio Collective and Boston Ballet, with whom he has appeared on stage for historic runs at the Boston Opera House and the Lincoln Center in New York. He first collaborated with the Collective in 2015, and shortly after was asked to arrange the music and perform alongside violist Anna Stromer for Cirio Collective's piece, "Efil Ym Fo Flah", which premiered at the Vineyard Arts Project in summer 2016. He currently resides as a Community Luminary at the Isabella Stewart Gardner Museum, where he performs regularly.</p>

                <p>In February of 2018, Knowles released "Spin Without A Sound," his debut album of instrumental solo electric violin pieces. Largely recorded live, each of the original compositions is built on loops and improvisations spawned entirely from sounds created by the violin, manipulated by multiple effect pedals. Riding the line somewhere between contemporary new age and alternative classical, the result is both symphonic and electronic, unique in its combination of melodic foundation and technical prowess.</p>
              </div>
            </div>
          </div>

          <div class='bio-card'>
            <div class='bio-wrapper ib vm ltmg'>
              <h2>Spin Without A Sound </h2>
              <p>It’s not often that a singular room influences an entire body of musical work, but in the case of Josh Knowles’ debut solo electric violin album “Spin Without A Sound,” the inspiration is palpable. Conceived over the course of several marathon performances in the courtyard of Boston’s Isabella Stewart Gardner Museum, “Spin Without A Sound” captures the sonic soul that the architectural tour-de-force bears, transporting the listener back to Knowles’ performances within the museum walls.</p>

              <p>During his engagements in the courtyard, Josh experimented with a DL4 Loop Pedal, recording and layering improvised violin melodies. The result was an ethereal, constantly morphing soundscape that Knowles entered the studio with the explicit intention of recapturing.</p>

              <p>“Spin Without A Sound”, released in February 2018, was recorded in a series of raw, live recording sessions that often ran even longer than his museum performances. This process allowed Knowles to naturally expand upon the ideas conceptualized at the Gardner and create a record steeped in nostalgic intimacy. “Statue Breath” samples audio from decades-old home videos, while the haunting “Gavotte (circa 1998)” starts with the sounds of eight-year-old Josh performing at one of his early violin recitals. The title-track, a lilting, expansive ballad, excavates answering machine relics from Josh’s late grandmother, whose soothing voice materializes out of the lush bed of strings.</p>
            </div>

            <div class='image-wrapper ib vm rtmg'>
              <img src='./images/spin-without-a-sound-cover.jpg' />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
