
import { data } from 'autoprefixer'
import './App.css'
import Card from './assets/components/card'
import Footer from './assets/components/footer'
import Header from './assets/components/header'



function App() {
const array = [
  {
    "id": 1,
    "url": "src/assets/img/sunset.avif",
    "alt": "Beautiful sunset over the ocean",
    "user": {
      "name": "John Doe",
      "username": "johndoe",
      "profileUrl": "https://example.com/johndoe"
    },
    },
  {
    "id": 2,
    "url": "src/assets/img/water.avif",
    "alt": "Cityscape at night",
    "user": {
      "name": "Jane Smith",
      "username": "janesmith",
      "profileUrl": "https://example.com/janesmith"
    },
  },
  {
    "id": 3,
    "url": "src/assets/img/premium_photo-1669839774885-b1958e625b5e.avif",
    "alt": "Mountain landscape",
    "user": {
      "name": "Bob Johnson",
      "username": "bobjohnson",
      "profileUrl": "https://example.com/bobjohnson"
    }
  },
  {
    "id": 4,
    "url": "src/assets/img/fruit.avif",
    "alt": "Food photography",
    "user": {
      "name": "Alice Brown",
      "username": "alicebrown",
      "profileUrl": "https://example.com/alicebrown"
    },
  
  },
  {
    "id": 5,
    "url": "src/assets/img/space.avif",
    "alt": "Space photography",
    "user": {
      "name": "Mike Davis",
      "username": "mikedavis",
      "profileUrl": "https://example.com/mikedavis"
    },
  
  },
  {
    "id": 6,
    "url": "src/assets/img/flower.avif",
    "alt": "Flower close-up",
    "user": {
      "name": "Emily Chen",
      "username": "emilychen",
      "profileUrl": "https://example.com/emilychen"
    },
     },
  {
    "id": 7,
    "url": "src/assets/img/City street at day.jpg",
    "alt": "City street at day",
    "user": {
      "name": "Tom Harris",
      "username": "tomharris",
      "profileUrl": "https://example.com/tomharris"
    },
  },   
  {
    "id": 8,
    "url": "src/assets/img/beach.avif",
    "alt": "Beach volleyball",
    "user": {
      "name": "Sarah Lee",
      "username": "sarahlee",
      "profileUrl": "https://example.com/sarahlee"
    }
  },
  {
    "id": 9,
    "url": "src/assets/img/bike.avif",
    "alt": "Mountain bike",
    "user": {
      "name": "David Kim",
      "username":"davidkim",
    },
  }
]
function po(data){
   console.log(data)
   const pop = document.getElementById("pop")
   const popimage = document.getElementById("popimage")
   const popText = document.getElementById("popText")
    return(
      pop.style.display = "block",
      popimage.src = data.url,
      popText.innerHTML = data.alt
    ) 
}
function close(){
pop.style.display = 'none'

}

  return (
    <>
    <div>
       {<Header/>
        
       }    
         
        <div className='flex flex-wrap gap-6 m-2 w-full' >
         {array.map((data) => (
           <Card key={data.id}
           img={data.url}
           title={data.alt}
           onPress={()=> po(data)}
           >
            
           </Card>
          ))}
          </div>

          <div  id='pop' className="popupContentStyle">
         <div className='popupStyle'>
          <div className='textbtn'><p id='popText'></p>
         <button onClick={close} className='closeButtonStyle'>close</button>
         </div>
         <img id='popimage' src="" alt="" />
        
          </div>
          </div>
          {<Footer/>}

  

   </div>
    </>
  )
}
export default App;
