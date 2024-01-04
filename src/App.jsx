import React from 'react'
import Card from './Components/Card'
import Header from './Components/Header'



function App() 
{
  let data=[
    {
        role :"People's Champion",
        name :"Rock",
        image :"https://wallpapercave.com/wp/wp2603779.jpg",
        head:"Meet the GOATs"
    },
    {
      role :"Spear machine",
      name: "Goldberg",
      image:"https://www.f4wonline.com/.image/t_share/MTk2MjMxMDQwOTIwOTg2OTI4/045_ec_02192022rf_11851--16b3d8e74ee7a5910a81fe549483582f.jpg",
      head:"Meet the GOATs"
    },
    {
      role:"The Game",
      name:"Triple-H",
      image:"https://images.hindustantimes.com/img/2022/04/02/1600x900/Triple_H_1648908793103_1648908807876.jpg",
      head:"Meet the GOATs"
    },
    {
      role:"The animal",
      name:"Dave Batista",
      image:"https://cdn.bleacherreport.net/images_root/slides/photos/000/958/403/batista_display_image.jpg?1306571733",
      head:"Meet the GOATs"
    },
    {
      role:"U Can't see me",
      name:"John Cena",
      image:"https://pyxis.nymag.com/v1/imgs/5a5/c75/fa9646c1ddd94a8a42acf920e1123ce488-john-cena.rsquare.w330.jpg",
      head:"Meet the GOATs"
    }
  ]

  return(<>
      <Header data={{ head: "Meet the GOATs" }} />
      {data.map((e,i)=>(
      <Card data={e} key={i}/>
      ))}

  </>
  ) 
}
    
export default App