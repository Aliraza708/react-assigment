import './App.css'

function App() {

     const cards =[
      {
       img : "src/assets/img/fourchon car1.png",
       model:"Toyota Fortuner",
       key : 0.1
     },
      {
       img : "src/assets/img/vigo.jpg",
       model:"Toyota Revo Rocco",
       key : 0.2
     },
      {
       img : "src/assets/img/Yaris.jpg",
       model:"Toyota Yaris",
       key : 0.3
     },
      {
       img : "src/assets/img/Exterior4.jpg",
       model:"Toyota Corolla Cross",
       key : 0.4
     },
     {
      img : "src/assets/img/revo.jpg",
      model:"Toyota Revo",
      key : 0.5
    }, {
      img : "src/assets/img/land.jpg",
      model:"Toyota Land Cruiser",
      key : 0.6
    }, {
      img : "src/assets/img/hiace.png",
      model:"Toyota Hiace Deluxe",
      key : 0.7
    }, {
      img : "src/assets/img/carola.jpg",
      model:"Toyota Corolla Altis X",
      key : 0.8
    },
    
      ]
  return (
   
    <div className='main'>   
    <h1 className='heading'>Cards</h1>
   <div  className='card'>
    {cards.map((data ,index)=>{
      
     return <div key={data.key} className='cardSection'>
     <img src={data.img} alt="ddd" /> 
     <p>{data.model}</p>
      
        </div> 
      
    })}
    
   </div>
     
    </div>
  )

}
export default App
