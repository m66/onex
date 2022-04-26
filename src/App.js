import './App.css';

function App() {

  const contentInfo = [
    {
      logoUrl: 'photo-camera.svg',
      text: 'Լուսանկարել դրսից'
    },
    {
      logoUrl: 'photos-inside.svg',
      text: 'Լուսանկարել ներսից'
    },
    {
      logoUrl: 'stop.svg',
      text: 'Կանգնեցնել'
    },
    {
      logoUrl: 'check-order.svg',
      text: 'Ստուգել պատվերը'
    },
    {
      logoUrl: 'single-package.svg',
      text: 'Չվերափաթեթավորել'
    },
    {
      logoUrl: 'repackaging.svg',
      text: 'Հավելյալ վերափաթեթավորում'
    },
    {
      logoUrl: 'change-receiver.svg',
      text: 'Փոխել ստացողին'
    },
    {
      logoUrl: 'unboxing.svg',
      text: 'Բաժանել մասերի'
    }
  ]

  return (
    <div className="App">
      <div className='header'>
        <h1><span>SMART </span>ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</h1>
        <p>Նախքան առաքանու ԱՄՆ կամ Չինաստանի պահեստ հասնելը դուք կարող եք պատվիրել հետևյալ SMART ծառայությունները</p>
      </div>
      <div className='content'>
        <div className='content-img'>
          <img src='https://onex.am/images/smart-service.svg' />
        </div>
        <div className='info'>
          <ul>
            {
              contentInfo.map(item => (
                <li key={ Math.random() }><img src={ `https://onex.am/images/smart_services/${item.logoUrl}` } />{ item.text }</li>
              ))
            }
          </ul>
          <button>Ավելին</button>
        </div>
      </div>
    </div>
  );
}

export default App;
