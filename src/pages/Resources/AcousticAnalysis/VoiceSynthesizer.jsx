import Text from "../../../components/Text";
import { Accordion, AccordionItem } from "@nextui-org/react";

const VoiceSynthesizer = () => {
  return (
    <div>
      <div className="pt-10">
        <Text h3>UCLA Voice Synthesizer</Text>
        <Accordion variant="shadow">
          <AccordionItem title="Introduction">
              <Text p>
                The UCLA Voice Synthesizer was developed by Jody Kreiman, Bruce R. Gerratt, and
                Norma Antoñanzas-Barroso with support from grant number DC01797 
                from the National Institute on Deafness and Other Communication Disorders.
              </Text>
          </AccordionItem>
          <AccordionItem title="Description">
              <Text p>
                From the {" "}
                <a
                  href="https://www.uclahealth.org/departments/head-neck-surgery/research/research-labs/bureau-glottal-affairs"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  Bureau of Glottal Affairs
                </a>
                 {" "} website:
                "Voice quality is an important topic of study in many disciplines, 
                but knowledge of its nature is limited by a poor understanding of 
                the relevant psychoacoustics...The formant synthesizer provides experimenters with a 
                useful tool for creating and modeling voice signals. In particular, 
                it offers an integrated approach to voice analysis and synthesis 
                and allows easy, precise, time- and spectral-domain manipulations 
                of the harmonic voice source. The synthesizer operates in near 
                real-time, using a parsimonious set of acoustic parameters for 
                the voice source and vocal tract that a user can modify to 
                accurately copy the quality of most normal and pathological 
                voices. For example, the ability to copy synthesize a voice 
                also allows users to modify acoustic parameter at a time while 
                holding all others constant, in order to evaluate its perceptual 
                importance."
              </Text>
          </AccordionItem>          
          <AccordionItem title="Download">
            <div className="pb-10 px-4">
              <Text p>
                The UCLA Voice Synthesizer is currently available from 
                the UCLA Department of Surgery as a {" "}
                <a
                  href="https://www.surgery.medsch.ucla.edu/spl/download/SynthesisNewNoiseRelease.zip"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  zip file
                </a>
                .
              </Text>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default VoiceSynthesizer;
