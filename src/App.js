import React, {Component} from 'react'
import './App.scss'
//Pictures for NavBar
import Cube from './Pictures/cube.png'
import ProfilePic from './Pictures/profilePic.png'

//Photoshopped versions of the pics from the blog
import Part1 from './Pictures/part1.png'
import Part2 from './Pictures/part2.png'
import Part4 from './Pictures/part4.png'
import Part5 from './Pictures/part5.png'
import Part6 from './Pictures/part6.png'
import Part7 from './Pictures/part7.png'



class App extends Component{
  render(){
    return(
  <div id='parent'>
    {/*NavBar*/}
    <div id='div1' >
      <div className='bar' id='bar1'>World</div>
      <div className='bar' id='bar2'>Sports</div>
      <div className='bar' id='bar3'>Opinion</div>
      <div className='bar' id='bar4'>Lifestyle</div>
      <div className='bar' id='bar5'>Business</div>
      <div className='bar' id='bar6'>Culture</div>
      <div className='bar' id='bar7'>Fashion</div>
      <div className='bar' id='bar8'>Tech</div>
      <div className='bar' id='bar9'><img id='cube' src={Cube}/></div>
      <div className='bar' id='bar10'><img id='profilePic' src={ProfilePic}/></div>
    </div>
    {/*Title*/}
    <div id='div5' >
      <h1><b>Lifestyle.</b></h1>
      <h4>The latest and best lifestyle articles selected by our editorial staff</h4>
    </div>

    {/*Articles*/}
    <div id='div2' className='article'>
      <h5>Interior</h5>
      <h1 className='titles'>9 Air-Cleaning Plants Your Home Needs</h1>
      <br/>
      <button id='navyButton'><b>Read for $0.09</b></button>
      <img id='plant' className='artImg' src={Part5}/>
    </div>

    <div id='div3' className='article'>
      <h5>Food</h5>
      <h1 className='titles'>One Month Sugar Detox</h1>
      <br/>
      <button id='pinkButton'><b>Read for $0.99</b></button>
      <img id='otherHand' className='artImg' src={Part6}/>
    </div>

    <div id='div4' className='article'>
      <h5>Photography</h5>
      <h1 className='titles'>Shooting Minimal Instagram Photos</h1>
      <br/>
      <button id='blueButton'><b>Read for $0.29</b></button>
      <img className='artImg' id='apartment' src={Part7}/>
    </div>

    <div id='div6' className='article'>
      <h5>Architecture</h5>
      <h1 className='titles'>The Brand New NASA Office</h1>
      <br/>
      <button className='topRight' id='blackButton'><b>Read for $0.19</b></button>
      <img className='artImg' id='cornerOne' src={Part2}/>
    </div>

    <div id='div7' className='article'>
      <h5>Travel</h5>
      <h1  className='titles'>Experience the Saharan Sands</h1>
      <br/>
      <button  id='tanButton' className='topRight'><b>Read for $0.29</b></button>
      <img className='artImg' id='hand' src={Part4}/>
    </div>

    <div id='div8' className='article'>
      <h5>Food</h5>
      <h1 id='titleOne' className='titles'>Wake Up and Smell the Coffee</h1>
      <br/>
      <button id='greenButton'><b>Read for $0.99</b></button>
      <img className='artImg' id='cup' src={Part1}></img>
    </div>
  </div>
    )
  }
}

export default App
