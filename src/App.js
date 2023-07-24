import { useState, useEffect } from 'react';
import './App.css';
import Mainpage from './Mainpage'

function App() {

  const quotes = [
    {
      quote: 'BrandingBusiness has helped us to articulate who we are and define our key distinction in the marketplace as we move into the next phase of growth.',
      author: 'Chris Wright – Managing Director, ZS Associates'
    },

    {
      quote: 'BrandingBusiness found the right language and voice to clarify our brand position, distinguish our offering and convey our unique value to clients.',
      author: 'Stephen Brant – EVP of Market Development, Hitachi Consulting'
    },

    {
      quote: 'BrandingBusiness delivered insights, thinking and creativity that gave us a fresh way of thinking about ourselves and a voice to tell our story to the world in a powerfully authentic way.',
      author: 'Mike Haddad – Chief Executive Officer, Schreiber Foods'
    },

    {
      quote: 'The experience of working with BrandingBusiness has had a profoundly positive effect on our vast organization. Their strategic approach to brand building helped guide our board members, executives and management team through complex strategic decision making.',
      author: 'Twila Farris – Chief Financial Officer, AllCare Health'
    },

    {
      quote: 'BrandingBusiness’ research and branding recommendations gave us confidence in moving our organization forward and it has been very well received by the community and our staff.',
      author: 'Rick Afable – Chief Executive Officer, Hoag'
    },

    {
      quote: 'I attribute the great success we have had this year with the strong foundation laid by BrandingBusiness – their research methodology, brand positioning and their strong partnership with me and my team to ensure a strategic and effective approach to this work.',
      author: 'Carol Keese – VP Marketing &amp; Communications, Children’s National Health System'
    },

    {
      quote: 'By sharing best practices, providing strategic counsel, managing expectations, and giving us a sound strategic framework within which to evolve our brand, BrandingBusiness was the ideal branding partner for us at a very critical point in our business evolution.',
      author: 'Keith Dunleavy – Chief Executive Officer, Inovalon'
    }

  ]

  const [index,setIndex] = useState(0)
  const [currentQuote, setCurrentQuote] = useState(quotes[index])

  useEffect(() => {
    setCurrentQuote(quotes[index])
  },[index])
  
  return (
    <Mainpage setIndex={setIndex} currentQuote={currentQuote} index={index}/>
  )
}

export default App;
