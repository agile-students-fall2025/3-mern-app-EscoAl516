import { Link } from 'react-router-dom'
import './AboutUs.css'
import myPhoto from "./IMG_2174 (1).JPG"

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  return (
    <>
      <h1>This is the About Us Page!</h1>
      <p>This is me</p>
      <img src={myPhoto} width="500" />
<p>
  I’m Alexander Escobar, a Computer Engineering student at NYU Tandon School of Engineering with a strong interest in hardware–software integration, machine learning, and sustainable technology.<br /><br />
  Over the past few years, I’ve worked on projects ranging from Verilog-based ALUs and embedded systems to AI-powered image classification and sensor-driven sustainability solutions.<br /><br />
  My experiences have strengthened my technical, analytical, and mentorship skills. I’m passionate about developing innovative technologies that promote sustainability, accessibility, and global impact.
</p>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
