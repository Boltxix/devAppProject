import React from 'react'

const Cocktails = () => {

  const cocktailList = [
    {
      id: 1,
      title: 'Cocktail 1',
      ingred: "Brief Desc, Followed by ingredients",
      img: 'https://www.liquor.com/thmb/6WtVdTd2kWYfI06d_wzmntoPf1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/whiskey-sour-720x720-primary-v2-4fc831b613964da5a19cdbfda917d7df.jpg'
    },
    {
      id: 2,
      title: 'Cocktail 2',
      ingred: "Brief Desc, Followed by ingredients",
      img: 'https://www.liquor.com/thmb/6WtVdTd2kWYfI06d_wzmntoPf1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/whiskey-sour-720x720-primary-v2-4fc831b613964da5a19cdbfda917d7df.jpg'
    },
    {
      id: 3,
      title: 'Cocktail 3',
      ingred: "Brief Desc, Followed by ingredients",
      img: 'https://www.liquor.com/thmb/6WtVdTd2kWYfI06d_wzmntoPf1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/whiskey-sour-720x720-primary-v2-4fc831b613964da5a19cdbfda917d7df.jpg'
    },
    {
      id: 4,
      title: 'Cocktail 4',
      ingred: "Brief Desc, Followed by ingredients",
      img: 'https://www.liquor.com/thmb/6WtVdTd2kWYfI06d_wzmntoPf1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/whiskey-sour-720x720-primary-v2-4fc831b613964da5a19cdbfda917d7df.jpg'
    },
  ]

  return (
    <div className="cocktails">
      <div className="display">
        {cocktailList.map(cocktail => (
          <div className="cocktail" key={cocktail.id}>
            <div className="img">
              <img src={cocktail.img} alt="" />
            </div>
            <div className="content">
              <h1>{cocktail.title}</h1>
              <p>{cocktail.ingred}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cocktails