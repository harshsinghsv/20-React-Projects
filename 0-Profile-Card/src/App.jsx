import React from 'react'
import ProfileCard from './components/ProfileCard'
import PFP from '/images/pfp.jpg'

const App = () => {
  return (
    <div className='flex h-screen gap-6 justify-center items-center mt-10'>
      <ProfileCard 
      name="Harsh"
      role="Frontend Developer who focuses on simplicity & usability"
      img={PFP}
      buttonText="Follow"
      followers="285"
      following="185"
      />
      
    </div>
  )
}

export default App